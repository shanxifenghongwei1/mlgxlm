<template>
	<view class="page">
		<view class="tip">
			请输入银行卡信息
		</view>
		<view class="list">
			<view class="tit">
				持卡人
			</view>
			<input type="text" value="" placeholder="请输入持卡人姓名" v-model="bankcard_name" />
			<view class="pic">

			</view>
		</view>
		<view class="list">
			<view class="tit">
				卡号
			</view>
			<input type="text" value="" placeholder="请输入卡号" v-model="bankcard_num" @input="input" @blur="blur" />
			<view class="pic" @click="chooseImage()">
				<image src="/static/image/other/card-camera.png" mode=""></image>
			</view>
		</view>
		<view class="list">
			<view class="tit">
				银行
			</view>
			<input type="text" value="" placeholder="开户银行" v-model="bank" disabled="false" />
			<view class="pic">

			</view>
		</view>

		<view class="check">
			<label>
				<checkbox :value="true" :checked="checked" style="transform:scale(0.7)" @click="change()" /><text @click="change()">我已阅读并同意</text><text
				 style="color: #03a5f1;">《银行卡使用协议》</text>
			</label>
		</view>
		<view class="save" @click="save()">
			<button type="warn">添加银行卡</button>
		</view>

	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				bankcard_name: "",
				bankcard_num: "",
				bank: "",
				bankcard_type: "",

				checked: false
			}
		},
		methods: {
			chooseImage() {
				uni.chooseImage({
					count: 1,
					success: (res) => {
						uni.uploadFile({
							url: "http://mt.mlgxlm.com/bankcard",
							filePath: res.tempFilePaths[0],
							name: 'file',
							success: (uploadFileRes) => {
								let a = JSON.parse(uploadFileRes.data).number
								this.bankcard_num = a;
								let b = this.global.card_info.bankCardAttribution(a)
								console.log(b)
								this.bank = b.bankName;
								this.bankcard_type = b.cardTypeName;
							}
						})
					}
				})
			},
			input() {
				this.bank = ""
			},
			blur(e) {
				let a = this.global.card_info.bankCardAttribution(e.detail.value)
				if (this.global.card_info.bankCardAttribution(e.detail.value) != "error") {
					this.bankcard_num = e.detail.value;
					this.bank = a.bankName;
					this.bankcard_type = a.cardTypeName;
				} else {
					this.bank = "";
					this.bankcard_type = "";
					uni.showToast({
						title: "请输入正确的卡号或点击右侧上传银行卡图片",
						icon: "none"
					})
				}
			},
			change() {
				this.checked = !this.checked
			},
			showToast_my: function(e) {
				uni.showToast({
					title: e,
					duration: 2000,
					icon: "none"
				});
				return false;
			},
			check(e) {
				switch (true) {
					case !e.bankcard_name:
						this.showToast_my("请输入持卡人姓名");
						break;
					case (this.global.card_info.bankCardAttribution(e.bankcard_num) == "error"):
						this.showToast_my("请输入正确的银行卡号")
						break;
					case !e.bank:
						this.showToast_my("请选择银行")
						break;
					default:
						return true;
				}
			},
			save() {

				let data = {};
				data.bankcard_name = this.bankcard_name;
				data.bankcard_num = this.bankcard_num;
				data.bank = this.bank;
				data.bankcard_type = this.bankcard_type;
				if (this.check(data)) {
					if (this.checked) {
						this.global.request.post({
							url: this.global.demao.api.add_bankcard,
							method: "GET",
							data: this._data,
							success: (res) => {
								this.showToast_my(res.msg)
								setTimeout(()=>{
									uni.navigateBack({
										 delta: 1
									})
								},2000)
							}
						})
					} else {
						this.showToast_my("请仔细阅读银行卡使用协议")
					}
				} else {

				}
			}
		}
	}
</script>

<style lang="scss">
	.page {
		width: 100%;
		min-height: 100vh;
		background: #efefef;
	}

	.tip {
		width: 100%;
		height: 80rpx;
		padding: 0 3%;
		box-sizing: border-box;
		font-size: $uni-font-size-base;
		@extend .any-flex;
		align-items: center;
	}

	.list {
		width: 100%;
		height: 80rpx;
		@extend .any-flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 3%;
		box-sizing: border-box;
		font-size: $uni-font-size-base;
		background: #ffffff;
		border-bottom: 1rpx solid #cccccc;
	}

	.list:last-child {
		border-bottom: none;
	}

	.tit {
		width: 100rpx;
	}

	input {
		width: 450rpx;
		height: 50rpx;
	}

	.pic {
		width: 46rpx;
		height: 32rpx;
		padding: 10rpx 0 10rpx 20rpx;

		image {
			width: 46rpx;
			height: 32rpx;
		}
	}

	.check {
		margin-top: 50rpx;
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
		font-size: $uni-font-size-base;
	}

	.save {
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
		margin-top: 20rpx;
	}
</style>
