<!-- 充值成功页面 -->

<template>
	<view class="page">
		<view class="head">
			<image src="/static/image/other/invest_success.png" mode=""></image>
			<view class="">
				充值成功!
			</view>
		</view>
		<view class="con">
			<view class="con-box">
				<view class="li">
					<view class="">
						充值金额
					</view>
					<view class="">
						299元
					</view>
				</view>
				<view class="li">
					<view class="">
						充值渠道
					</view>
					<view class="">
						微信
					</view>
				</view>
				<view class="li">
					<view class="">
						账户余额
					</view>
					<view class="">
						300元
					</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="box">
				<view class="" @click="back()">
					返 回
				</view>
			</view>
			<view class="box">
				<view class="">
					查看记录
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			back:()=>{
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss">
	.page{
		width: 100%;
		min-height: 100vh;
		background: #F7F7F8;
	}
	.head{
		width: 100%;
		height: 240rpx;
		background: $any-col;
		color: #ffffff;
		@extend .any-flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		image{
			width: 96rpx;
			height: 92rpx;
		}
		view{
			margin-top: 20rpx;
			font-size: $uni-font-size-lg;
		}
	}
	
	.con{
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
		margin-top: 20rpx;
		font-size: $uni-font-size-base;
		.con-box{
			width: 100%;
			height: 100%;
			border-radius: 15rpx;
			background: #ffffff;
			padding: 10rpx 20rpx;
			box-sizing: border-box;
		}
		.li{
			width: 100%;
			height: 80rpx;
			@extend .any-flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1rpx solid #cccccc;
		}
		.li:last-child{
			border-bottom:none;
		}
	}
	
	
	.bottom{
		width: 100%;
		height: 200rpx;
		padding: 0 3%;
		box-sizing: border-box;
		margin-top: 50rpx;
		@extend .any-flex;
		font-size: $uni-font-size-lg;
		.box:nth-child(1){
			width: 50%;
			height: 100%;
			@extend .any-flex;
			justify-content: center;
			align-items: center;
			view{
				width: 325rpx;
				height: 90rpx;
				background: #ffffff;
				border:1rpx solid $any-col;
				color: $any-col;
				@extend .any-flex;
				justify-content: center;
				align-items: center;
				box-sizing: border-box;
				border-radius: 45rpx;
			}
		}
		.box:nth-child(2){
			width: 50%;
			height: 100%;
			@extend .any-flex;
			justify-content: center;
			align-items: center;
			view{
				width: 325rpx;
				height: 90rpx;
				background: $any-col;
				color: #ffffff;
				@extend .any-flex;
				justify-content: center;
				align-items: center;
				border-radius: 45rpx;
			}
		}
	}
</style>
