<template>
	<!-- 关于我们 -->
	<view class="page">
		<view class="header">
			<image src="/static/image/other/pay_success.png" mode=""></image>
			<view class="name">
				订单支付成功 ￥{{monerys}}元
			</view>
			<view class="edition">
				请您提前两小时与商家联系并预约此次服务。
			</view>
		</view>
		<view class="con">
			<view class="" @click="toDetail()">
				查看订单
			</view>
			<!-- <view class="" @click="appointment()">
				立即预约
			</view> -->
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				monerys:''
			}
		},
		methods:{
			toDetail(){
				uni.navigateTo({
					url:"/pages/pay/order?good_cate=0"
				})
			},
			// appointment(){
			// 	uni.navigateTo({
			// 		url:"/pages/pay/appointment"
			// 	})
			// }
		},
		onLoad(options) {
			this.monerys = options.money
		}
	}
</script>

<style lang="scss">
	.header{
		width: 100%;
		height: 320rpx;
		margin-top: 150rpx;
		@extend .any-flex;
		flex-direction: column;
		justify-content: space-between;
		image{
			width: 190rpx;
			height: 190rpx;
		}
		.name{
			margin-top: 15rpx;
			font-size: $uni-font-size-lg;
			letter-spacing: 3rpx;
		}
		.edition{
			font-size: $uni-font-size-base;
			color: #9A9A9A;
			text{
				color: $any-col;
			}
		}
	}
	.con{
		width: 100%;
		margin-top: 50rpx;
		padding: 0 5%;
		box-sizing: border-box;
		@extend .any-flex;
		justify-content: center;
		view{
			width: 300rpx;
			height: 78rpx;
			font-size: $uni-font-size-base;
			line-height: 78rpx;
			text-align: center;
			border-radius: 15rpx;
		}
		view:nth-child(2){
			background: #FE5050;
			color: #ffffff;
		}
		view:nth-child(1){
			background: #ffffff;
			color: #B7B7B7;
			border: 1rpx solid #B7B7B7;
			
		}
	}
</style>
