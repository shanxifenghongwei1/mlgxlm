<template>
	<!-- 关于我们 -->
	<view class="page">
		<view class="header">
			<image src="/static/image/other/pay_success.png" mode=""></image>
			<view class="name">
				订单支付成功 ￥{{monerys}}元
			</view>
			<view class="edition">
				我们会尽快安排发货哦。
			</view>
		</view>
		<view class="con">
			<view class="" @click="toDetail()">
				查看订单
			</view>
			<view class="" @click="home()">
				返回首页
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				monerys:'',
				options:{}
			}
		},
		methods:{
			toDetail(){
				uni.navigateTo({
					url:""
				})
				this.global.utils.jump(4,'/pages/home/retail_order/order_detail')
			},
			home(){
				this.global.utils.jump(2,'/pages/home/home')
			}
		},
		onLoad(options) {
			console.log(options)
			this.options=options;
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
			margin-left: 50rpx;
		}
		view:nth-child(1){
			background: #ffffff;
			color: #B7B7B7;
			border: 1rpx solid #B7B7B7;
			
		}
	}
</style>
