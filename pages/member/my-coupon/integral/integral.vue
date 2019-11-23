<template>
	<view class="">
		<view class="top">
			<image src="/static/image/other/integral.png" mode="widthFix"></image>
			<view class="rule base">
				使用规则
			</view>
			<view class="num blg red">
				<text class="lg white mar let-space">可用积分</text>
				2000
			</view>
			<view class="notice">
				<uni-notice-bar show-icon="true" scrollable="true" background-color="#ffffff" single="true" text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
			</view>
		</view>
		<view class="con">
			<view class="btn base let-space" @click="toStore('/pages/member/my-coupon/integral/integral_order')">
				积分订单
			</view>
			<view class="btn active base let-space" @click="toStore('/pages/member/my-coupon/integral/integral_store')">
				积分商城
			</view>
		</view>
		
		<view class="list">
			<view class="title lg wei">
				积分明细
			</view>
			<view class="li">
				<view class="list-box">
					<image src="/static/image/other/pay_wx.png" mode="" class="left"></image>
					<view class="center base">
						<view>我是冯宏伟</view>
						<view class="sm ccc">2019.02.23 22:23</view>
					</view>
					<view class="right base red">
						+2888.00元
					</view>
				</view>
			</view>
			<view class="li">
				<view class="list-box">
					<image src="/static/image/other/pay_wx.png" mode="" class="left"></image>
					<view class="center base">
						<view>我是冯宏伟</view>
						<view class="sm ccc">2019.02.23 22:23</view>
					</view>
					<view class="right base red">
						+2888.00元
					</view>
				</view>
			</view>
			<view class="li">
				<view class="list-box">
					<image src="/static/image/other/pay_wx.png" mode="" class="left"></image>
					<view class="center base">
						<view>我是冯宏伟</view>
						<view class="sm ccc">2019.02.23 22:23</view>
					</view>
					<view class="right base red">
						+2888.00元
					</view>
				</view>
			</view>
			<view class="li">
				<view class="list-box">
					<image src="/static/image/other/pay_wx.png" mode="" class="left"></image>
					<view class="center base">
						<view>我是冯宏伟</view>
						<view class="sm ccc">2019.02.23 22:23</view>
					</view>
					<view class="right base red">
						+2888.00元
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNoticeBar from "@/components/uni-notice-bar/uni-notice-bar";
	export default{
		components:{
			uniNoticeBar
		},
		data(){
			return{
				
			}
		},
		methods:{
			toStore(e){
				console.log(e)
				this.global.utils.jump(1,e)
			}
		}
	}
</script>

<style lang="scss">
	.let-space{
		letter-spacing: 3rpx;
	}
	.white{
		color: #ffffff;
	}
	.red {
		color: $any-col;
	}
	
	.big {
		font-size: 50rpx;
	}
	
	.lg {
		font-size: $uni-font-size-lg;
	}
	
	.base {
		font-size: $uni-font-size-base;
	}
	
	.sm {
		font-size: $uni-font-size-sm;
	}
	
	.ccc {
		color: #cccccc;
	}
	
	.mul {
		@include multi-row-apostrophe(1);
	}
	
	.tag {
		padding: 5rpx 20rpx;
		border-radius: 50rpx;
		background: $any-col;
		;
	}
	.mar{
		margin-right: 20rpx;
	}
	.mar-b{
		margin-bottom: -2rpx;
	}
	.wei {
		font-weight: bold;
	}
	.emit{
		width: 100%;
		height: 120rpx;
	}
	
	.top{
		width: 100%;
		height: 380rpx;
		position: relative;
		image{
			width: 100%;
		}
		.rule{
			display: inline-block;
			padding: 5rpx 15rpx;
			border-radius: 20rpx;
			position: absolute;
			right: 3%;
			top: 20rpx;
		}
		.num{
			width: 100%;
			@extend .any-flex;
			justify-content: center;
			align-items: flex-end;
			position: absolute;
			top: 110rpx;
		}
		.notice{
			width: 710rpx;
			height: 80rpx;
			background: #ffffff;
			border-radius: 20rpx;
			box-shadow: 0rpx 0rpx 10rpx #cccccc;
			position: absolute;
			top: 247rpx;
			left: 20rpx;
			padding-top: 20rpx;
		}
	}
	.con{
		width: 100%;
		padding: 0 14%;
		box-sizing: border-box;
		@extend .any-flex;
		justify-content: space-between;
		align-items: center;
		.btn{
			width: 220rpx;
			height: 60rpx;
			background: #000000;
			border-radius: 30rpx;
			color: #ffffff;
			text-align: center;
			line-height: 60rpx;
		}
		.active{
			background: $any-col;
		}
	}
	.list{
		margin-top: 20rpx;
	}
	.title{
		width: 100%;
		padding: 0 3%;
		height: 80rpx;
		line-height: 80rpx;
		box-sizing: border-box;
		border-bottom: 1rpx solid #f0f0f0;
	}
	.li{
		width: 100%;
		border-bottom: 1rpx solid #f0f0f0;
		padding: 0 3%;
		box-sizing: border-box;
		.list-box{
			width: 100%;
			height: 80rpx;
			@extend .any-flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 10rpx;
			box-sizing: border-box;
			.left{
				width: 60rpx;
				height: 60rpx;
				border-radius: 50%;
			}
			.center{
				width: 350rpx;
				@include multi-row-apostrophe(1);
				@extend .any-flex;
				flex-direction: column;
				align-items: flex-start;
			}
			.right{
				width: 180rpx;
				text-align: right;
			}
		}
	}
	
</style>
