<!-- 我的资产页面 -->
<template>
	<view class="">
		<view class="header">
			<view class="have">
				9728.00元
			</view>
			<view class="all">
				累计收益（元）3000.00
			</view>
		</view>
		
		
		<view class="edu">
			<view class="">
				<view class="green">
					可用余额（元）
				</view>
				<view class="">
					1900
				</view>
			</view>
			<view class="">
				<view class="red">
					可用余额（元）
				</view>
				<view class="">
					1900
				</view>
			</view>
		</view>
		
		<view class="assset-list">
			<view class="list">
				<view class="left">
					<image src="/static/image/other/assets_jf.png" mode=""></image>
					<view class="">
						我的积分
					</view>
				</view>
				<view class="right">
					1000
				</view>
			</view>
			<view class="list">
				<view class="left">
					<image src="/static/image/other/assets_j.png" mode=""></image>
					<view class="">
						我的优惠券
					</view>
				</view>
				<view class="right">
					10张
				</view>
			</view>
			<view class="list">
				<view class="left">
					<image class="card" src="/static/image/other/assets_card.png" mode=""></image>
					<view class="">
						银行卡
					</view>
				</view>
				<view class="right">
					2张
				</view>
			</view>
		</view>
		
		<view class="btn">
			<button type="warn">退出</button>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.header{
		width: 100%;
		height: 260rpx;
		background:  $any-col;
		color: #ffffff;
		overflow: hidden;
		.have{
			width: 100%;
			font-size: 60rpx;
			text-align: center;
			margin-top: 80rpx;
		}
		.all{
			width: 100%;
			margin-top: 10rpx;
			font-size:  $uni-font-size-sm;
			text-align: center;
		}
	}
	
	.edu{
		width: 100%;
		height: 110rpx;
		@extend .any-flex;
		font-size: $uni-font-size-sm;
		position: relative;
		margin-top: 20rpx;
		view{
			flex-grow: 1;
			@extend .any-flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			view{
				padding: 10rpx 0;
			}
			.green{
				font-weight: bold;
				color:  $uni-border-color;
			}
			.red{
				font-weight: bold;
				color: $uni-border-color;
			}
		}
	}
	.edu:after{
		content: "";
		width: 2rpx;
		height: 80%;
		position: absolute;
		background: $uni-border-color;
		display: block;
		bottom: 10%;
		left: 50%;
	}
	
	.assset-list{
		margin-top: 20rpx;
		.list{
			width: 100%;
			height: 90rpx;
			border-bottom: 1rpx solid #cccccc;
			padding: 0 3%;
			box-sizing: border-box;
			@extend .any-flex;
			justify-content: space-between;
			font-size:  $uni-font-size-base;
			.left{
				flex-grow: 1;
				height: 100%;
				@extend .any-flex;
				image{
					width: 34rpx;
					height: 39rpx;
					margin-right: 30rpx;
				}
				.card{
					width: 36rpx;
					height: 26rpx;
					margin-right: 28rpx;
				}
			}
			.right{
				height: 100%;
				line-height: 90rpx;
			}
		}
	}
	
	.btn{
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
		margin-top: 100rpx;
		button{
			background: $any-col;
		}
	}
</style>
