<template>
	<!-- 分销提现明细 -->
	<view class="">
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
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			
		},
		onLoad(){
			
		}
	}
</script>

<style lang="scss">
	.red{
		color:$any-col;
	}
	.big {
		font-size: 40rpx;
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
	.ccc{
		color: #cccccc;
	}
	.li{
		width: 100%;
		height: 100rpx;
		border-bottom: 1rpx solid #f0f0f0;
		padding: 0 3%;
		box-sizing: border-box;
		.list-box{
			width: 100%;
			height: 100rpx;
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
