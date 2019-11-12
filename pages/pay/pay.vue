<template>
	<view class="page">
		<view class="tip">
			<uniNoticeBar show-icon="true" scrollable="true" single="true" text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uniNoticeBar>
		</view>
		
		<view class="detail">
			<view class="detail-box">
				<view class="title">
					产品详情
				</view>
				<view class="con">
					<view class="con-box">
						<text>产品名称：</text><text>头皮深层清洁阿萨德法师速度氨基酸地方hi阿USD爱的色放</text>
					</view>
					<view class="con-box">
						<text>订单编号：</text><text>头皮深层清洁支付(1)123打蜡粉红色的积分结案率SDK不符合静安寺考虑到</text>
					</view>
					<view class="con-box">
						<text>总计金额：</text><text>头皮深层清洁打飞机号时代峰峻爱说电话发炮弹</text>
					</view>
				</view>
			</view>
		</view>
		<view class="method">
			<view class="method-box" @click="selectMethod(1)">
				<image src="/static/image/other/pay_wx.png" class="left-pic" mode=""></image>
				<view class="con">
					微信支付
				</view>
				<image src="/static/image/other/icon-select-cir-out.png"  class="right-pic"  mode="" v-show="meth==0"></image>
				<image src="/static/image/other/icon-select-cir-on.png"  class="right-pic"  mode="" v-show="meth==1"></image>
			</view>
			<view class="method-box" @click="selectMethod(0)">
				<image src="/static/image/other/pay_money.png" class="left-pic" mode=""></image>
				<view class="con">
					分享币支付{{meth}}
				</view>
				<image src="/static/image/other/icon-select-cir-on.png"  class="right-pic"  mode="" v-show="meth==0"></image>
				<image src="/static/image/other/icon-select-cir-out.png"  class="right-pic"  mode="" v-show="meth==1"></image>
			</view>
		</view>
		<view class="pay" @click="pay">
			<button type="warn">确认支付220元</button>
		</view>
	</view>
</template>

<script>
	import uniNoticeBar from "@/components/uni-notice-bar/uni-notice-bar"
	export default {
		components:{
			uniNoticeBar
		},
		data() {
			return {
				meth:0
			}
		},
		onLoad() {

		},
		methods: {
			selectMethod(e){
				this.meth=e; 
			},
			pay(){
				uni.navigateTo({
					url:"/pages/pay/pay_success"
				})
			}
		}
	}
</script>

<style lang="scss">
	.page{
		width: 100%;
		min-height: 100vh;
		background: #F0F0F0;
		overflow: hidden;
	}
	.detail{
		width: 100%;
		height: 292rpx;
		padding: 0 3%;
		box-sizing: border-box;
		margin-top: 30rpx;
		.detail-box{
			width: 100%;
			height: 100%;
			background: url('~@/static/image/other/pay_1.png') no-repeat center;
			background-size: cover;
			padding: 0 30rpx;
			box-sizing: border-box;
			.title{
				width: 100%;
				height: 106rpx;
				font-size: $uni-font-size-lg;
				text-align: center;
				line-height: 106rpx;
				color: #666666;
			}
			.con{
				width: 100%;
				height: 186rpx;
				@extend .any-flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				font-size: $uni-font-size-base;
				.con-box{
					width:100%;
					height: 24rpx;
					padding: 8rpx 0;
					@include multi-row-apostrophe(1);
					text:nth-child(1){
						color: #B2B2B2;
					}
					text:nth-child(2){
						color: #666666;
						margin-left: 3rpx;
					}
				}
			}
		}
	}
	
	.method{
		width: 100%;
		height: 202rpx;
		margin-top: 30rpx;
		background: #ffffff;
		position: relative;
		.method-box{
			width: 100%;
			height: 100rpx;
			@extend .any-flex;
			padding: 0 5%;
			box-sizing: border-box;
			justify-content: space-between;
			align-items: center;
		}
		.left-pic{
			width: 60rpx;
			height: 60rpx;
			padding: 20rpx;
		}
		.con{
			flex-grow: 1;
			height: 100%;
			padding-left: 10rpx;
			box-sizing: border-box;
			font-size: $uni-font-size-base;
			text-align: left;
			line-height: 100rpx;
			
		}
		.right-pic{
			width: 40rpx;
			height: 40rpx;
			padding: 20rpx;
		}
	}
	.method:after{
		content: "";
		display: block;
		position: absolute;
		width: 100%;
		height: 2rpx;
		left: 0;
		bottom: 50%;
		background:#C7C7C7;
	}
	.pay{
		width: 100%;
		padding: 0 5%;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		bottom: 50rpx;
	}
</style>
