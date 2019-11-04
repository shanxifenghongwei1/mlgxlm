<!-- 充值页面 -->
<template>
	<view class="page">
		<view class="head"></view>
		<view class="num">
			<view class="num-box">
				<view class="price">
					<view class="bg-num">
						1938.5
					</view>
					<view class="tit">
						￥分享币
					</view>
				</view>
				<view class="opection">
					<view class="">
						<image src="/static/image/other/money-1.png" mode=""></image>
						支付明细
					</view>
					<view class="">
						<!-- <image src="/static/image/other/money-2.png" mode=""></image>
						钱包充值 -->
					</view>
				</view>
			</view>
		</view>
		
		<view class="red-width">
			<view class="box"></view>
			<view class="list">
				<view class="title">
					钱包充值
				</view>
				<view class="con">
					<view class="">
						金额（元）
					</view>
					<input type="number" value="" placeholder="请输入充值金额"/>
				</view>
			</view>
		</view>
		
		<view class="tip">
			<view class="left">
				温馨提示:
			</view>
			<view class="right">
				<view class="">
					充值成功后，到账可能会有一定延迟
				</view>
				<view class="">
					请耐心等待~
				</view>
			</view>
		</view>
		
		<view class="bottom">
			<button type="primary" @click="save()">立即充值</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			save:()=>{
				uni.redirectTo({
					url:"/pages/member/my-coupon/money/invest_success"
				})
				
			}
		}
	}
</script>

<style lang="scss">
	.page{
		width: 100%;
		min-height: 100vh;
		background: #efefef;
	}
	.head{
		width: 100%;
		height: 200rpx;
		background:$any-col;
	}
	.num{
		width: 100%;
		height: 380rpx;
		padding: 0 3%;
		box-sizing: border-box;
		margin-top: -100rpx; 
	}
	.num-box{
		width: 100%;
		height: 100%;
		box-shadow: 0rpx 0rpx 20rpx #bfbdbd;
		border-radius: 15rpx;
		background: #ffffff;
		@extend .any-flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.price{
		margin-top: 100rpx;
		@extend .any-flex;
		flex-direction: column;
		align-items: center;
		color: $any-col;
	}
	.bg-num{
		font-size: 60rpx;
	}
	.tit{
		margin-top: 20rpx;
		font-size: $uni-font-size-base;
	}
	.opection{
		width: 100%;
		@extend .any-flex;
		font-size: $uni-font-size-base;
		margin-bottom: 50rpx;
		position: relative;
		view{
			width: 50%;
			@extend .any-flex;
			justify-content: center;
			image{
				width:30rpx;
				height: 30rpx;
				margin-right: 20rpx;
			}
		}
		
	}
	.opection:after{
		position: absolute;
		display: block;
		content: "";
		width: 2rpx;
		height: 90%;
		left: 50%;
		top: 10%;
		background: #ffffff;
	}
	.red-width{
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
		margin-top: 20rpx;
		.box{
			width: 100%;
			height: 20rpx;
			background: $any-col;
			border-radius: 20rpx;
		}
	}
	.list{
		width: 100%;
		margin-top: -8rpx;
		background: #ffffff;
		padding: 20rpx;
		box-sizing: border-box;
		border-bottom-left-radius: 15rpx;
		border-bottom-right-radius: 15rpx;
		.title{
			width: 100%;
			font-size: $uni-font-size-sm;
			color: #7e7e7e;
		}
		.con{
			width: 100%;
			font-size: $uni-font-size-base;
			@extend .any-flex;
			align-items: center;
			view{
				padding-right:30rpx;
			}
			input{
				flex-grow: 1;
				border-bottom: 1rpx solid #e7e7e7;
			}
		}
	}
	
	.tip{
		width: 100%;
		margin-top: 50rpx;
		padding: 0 3%;
		box-sizing: border-box;
		@extend .any-flex;
		align-items: flex-start;
		font-size: $uni-font-size-base;
		color: #c4c4c4;
		.left{
			width: 20%;
			text-align: right;
		}
		.right{
			width: 80%;
			padding:0 20rpx;
			box-sizing: border-box;
			view{
				width: 100%;
			}
		}
	}
	
	.bottom{
		width: 100%;
		padding: 20rpx 3%;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	button[type=primary] {
		background-color: $any-col;
	}

	.button-hover[type=primary] {
		background-color: $any-col;
	}

</style>
