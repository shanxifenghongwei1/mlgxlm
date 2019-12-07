<template>
	<view class="page" >
		<block v-if="addressList.length">
			<view class="address-box" v-for="(item,index) in addressList" :key="index" >
				<view class="box-top" v-if="fromPage!='index'" @click="save(item.address_provice+item.address_city+item.address_area+item.address_detail)">
					<view class="name">
						<view class="">
							收货人:{{item.name}}
						</view>
						<view class="">
							{{item.tel}}
						</view>
					</view>
					<view class="address">
						{{item.address_provice+item.address_city+item.address_area+item.address_detail}}
					</view>
				</view>
				<view class="box-top" v-else>
					<view class="name">
						<view class="">
							收货人:{{item.name}}
						</view>
						<view class="">
							{{item.tel}}
						</view>
					</view>
					<view class="address">
						{{item.address_provice+item.address_city+item.address_area+item.address_detail}}
					</view>
				</view>
				<view class="box-bottom">
					<view class="bottom-left" @click="tacit(item)">
						<image src="/static/image/other/icon-select-on.png" mode="" v-if="item.is_default==1"></image>
						<image src="/static/image/other/icon-select-out.png" mode="" v-else></image>
						默认地址
					</view>
					<view class="bottom-right">
						<view class="left" @click="edit(item)">
							<image src="/static/image/other/icon-write.png" mode=""></image>
							<view class="">
								编辑
							</view>
						</view>
						<view class="right" @click="del(item.id)">
							<image src="/static/image/other/icon-del.png" mode=""></image>
							<view class="">
								删除
							</view>
						</view>

					</view>
				</view>
			</view>
			<view class="emit">

			</view>
		</block>
		
		<block v-else>
			<view class="emit-box">
				<image src="/static/image/other/address_emit.png" mode="widthFix" class="emit-pic"></image>
			</view>
		</block>
		<navigator hover-class="none" url="./add-address" class="addNew">
			添加新地址
		</navigator>




	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressList: [],
				fromPage:"index"
			}
		},
		methods: {
			showToast_my: function(e) {
				uni.showToast({
					title: e,
					duration: 2000,
					icon: "none",
					mask: "true",
				});
			},
			//设为默认
			tacit(a) {
				let that = this;
				let store = {};
				store.id = a.id;
				store.name = a.name;
				store.tel = a.tel;
				store.address_detail = a.address_detail;
				store.address_area = a.address_provice + "," + a.address_city + "," + a.address_area;
				store.is_default = a.is_default === 1 ? 2 : 1;
				uni.showModal({
					title: '提示',
					content: '确认修改此地址为默认地址吗',
					success: (res) => {
						if (res.confirm) {
							that.global.request.post({
								url: this.global.demao.api.update_address,
								method: "GET",
								data: store,
								success: (res) => {
									that.showToast_my(res.msg);
									that.findlist()
								}
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},

			//编辑地址
			edit(e) {
				console.log(e)
				uni.showModal({
					title: '提示',
					content: '确认修改本条地址吗',
					success: function(res) {
						if (res.confirm) {
							uni.setStorageSync("address_edit", e)
							uni.navigateTo({
								url: "./add-address"
							})
						} else if (res.cancel) {
							if (uni.getStorageSync("address_edit")) {
								uni.removeStorageSync('address_edit');
							}
						}
					}
				})
			},
			//删除地址
			del(e) {
				let that = this;
				uni.showModal({
					title: '提示',
					content: '确认删除本条地址吗',
					success: (res) => {
						if (res.confirm) {
							that.global.request.post({
								url: that.global.demao.api.delete_address,
								method: "GET",
								data: {
									id: e
								},
								success: (res) => {
									that.showToast_my("删除成功")
									that.findlist()
								}
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			findlist() {
				this.global.request.post({
					url: this.global.demao.api.user_Address_list,
					method: "GET",
					data: {},
					success: (res) => {
						this.addressList=res.user_addressInfo
					}
				})
			},
			save(e){
				console.log(e)
				uni.setStorageSync("address",e)
				this.global.utils.jump(5)
			}
		},
		onLoad(options){
			if(options.fromPage){
				this.fromPage=options.fromPage;
			}
		},
		onShow() {
			this.findlist()
		},
		destroyed() {
			uni.removeStorageSync('address_edit');
		}
	}
</script>

<style lang="scss">
	.a{background: red;}
	.page {
		width: 100%;
		min-height: 100vh;
		background: #efefef;
	}
	.page.active{
		background: #ffffff;
	}

	.address-box {
		width: 100%;
		background: #ffffff;
		padding: 10rpx 3%;
		box-sizing: border-box;
		font-size: $uni-font-size-base;
		margin-bottom: 20rpx;

		.box-top {
			width: 100%;
			border-bottom: 1rpx solid #cccccc;

			.name {
				@extend .any-flex;
				justify-content: space-between;
				padding-top: 10rpx;
			}

			.address {
				width: 100%;
				color: $uni-border-color;
				padding: 20rpx 0;
				text-align: justify;
				text-justify: newspaper;
				word-break: break-all;
			}
		}

		.box-bottom {
			@extend .any-flex;
			justify-content: space-between;
			padding: 20rpx 0 10rpx;

			image {
				width: 27rpx;
				height: 27rpx;
			}

			.bottom-left {
				width: 140rpx;
				@extend .any-flex;
				justify-content: space-between;
			}

			.bottom-right {
				@extend .any-flex;

				.left {
					width: 84rpx;
					@extend .any-flex;
					justify-content: space-between;
				}

				.right {
					width: 84rpx;
					@extend .any-flex;
					justify-content: space-between;
					margin-left: 20rpx;
				}
			}
		}

	}

	.addNew {
		width: 100%;
		height: 98rpx;
		background: $any-col;
		color: #ffffff;
		text-align: center;
		line-height: 98rpx;
		position: fixed;
		left: 0;
		bottom: 0;
		font-size: $uni-font-size-base;
	}

	.emit {
		width: 100%;
		height: 100rpx;
	}

	.emit-box {
		width: 100%;
		margin-top: 180rpx;
		@extend .any-flex;
		justify-content: center;
		align-items: center;
	}

	.emit-pic {
		width: 320rpx;
	}
</style>
