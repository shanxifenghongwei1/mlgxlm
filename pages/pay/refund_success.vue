<template>
	<!-- 关于我们 -->
	<view class="">
		<view class="header">
			<image src="/static/image/other/refund_success.png" mode=""></image>
			<view class="name">
				<text class="red">{{money}}</text><text class="">元</text><text class="left">退款申请成功</text>
			</view>
			<view class="edition">
				预计0-3个工作日审核通过
			</view>
		</view>
		<view class="save">
			<view class="save_btn" @click="save()">
				完成
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				pic_list:[],
				pic_list1:["../../static/logo.png","../../static/image/1.jpg"],
				money:''
			}
		},
		methods:{
			save(){
				uni.switchTab({
					url:"/pages/member/member"
				})
			}
		},
		onLoad(options) {
			this.money = options.money
		}
	}
</script>

<style lang="scss">
	.left{
		margin-left: 20rpx;
	}
	.red{
		color: $any-col;
	}
	.header{
		width: 100%;
		height: 320rpx;
		margin-top: 200rpx;
		@extend .any-flex;
		flex-direction: column;
		justify-content: space-between;
		image{
			width: 190rpx;
			height: 190rpx;
		}
		.name{
			margin-top: 15rpx;
			font-size: 50rpx;
			font-size: $uni-font-size-lg;
		}
		.edition{
			font-size: $uni-font-size-base;
			color: #9A9A9A;
		}
	}
	.save{
		width: 100%;
		margin-top: 40rpx;
		.save_btn{
			width: 400rpx;
			height: 75rpx;
			background: red;
			border-radius: 40rpx;
			margin: 0 auto;
			text-align: center;
			line-height: 75rpx;
			letter-spacing: 2rpx;
			font-size: $uni-font-size-lg;
			color: #ffffff;
			box-shadow: 0rpx 7rpx 15rpx #F6B3B3; 
		}
	}
</style>
