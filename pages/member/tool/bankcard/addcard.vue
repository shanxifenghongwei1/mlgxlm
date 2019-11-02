<template>
	<view class="page">
		<view class="tip">
			请输入银行卡信息
		</view>
		<view class="list">
			<view class="tit">
				持卡人
			</view>
			<input type="text" value="" placeholder="请输入持卡人姓名" />
			<view class="pic">
				
			</view>
		</view>
		<view class="list">
			<view class="tit">
				卡号
			</view>
			<input type="text" value="" placeholder="请输入卡号" />
			<view class="pic" @click="chooseImage()">
				<image src="/static/image/other/card-camera.png" mode=""></image>
			</view>
		</view>
		<view class="list">
			<view class="tit">
				银行
			</view>
			<input type="text" value="" placeholder="请输入开户银行" />
			<view class="pic">

			</view>
		</view>

		<view class="check">
			<label>
				<checkbox :value="true" style="transform:scale(0.7)" /><text>我已阅读并同意</text><text style="color: #03a5f1;">《银行卡使用协议》</text>
			</label>
		</view>
		<view class="save">
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

			}
		},
		methods:{
			chooseImage:()=>{
				uni.chooseImage({
					count:1,
					success:(res)=>{
						console.log(res)
						console.log(res.tempFilePaths[0])
						uni.uploadFile({
							url:"http://mt.mlgxlm.com/bankcard",
							filePath:res.tempFilePaths[0],
							name: 'file',
							success: (uploadFileRes) => {
						        console.log(uploadFileRes.data); 
						    }
						})
					}
				})
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
	.save{
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
		margin-top: 20rpx;
	}
</style>
