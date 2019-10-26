<template>
	<view class="">
		<view  class="shop-father" >
			<view class="shop">
				<view class="shop-img">
					<image src="/static/image/shop/shop-1.jpg" mode="widthFix"></image>
				</view>
				<view class="shop-message">
					<view class="shop-message-box">
						
					</view>
				</view>
			</view>
		
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.shop-father {
		@extend .cons;
		.shop {
			margin-top: 20rpx;
			width: 100%;
			height: 240rpx;
			border-radius: 20rpx;
			border: 2rpx solid $any-zol;
			border-bottom: 4rpx solid $any-col;
			@extend .any-flex;
			align-items: flex-start;
			.shop-img {
				width: 20%;
				height: 80%;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.shop-message {
				width: 72%;
				height: 88%;
				padding: 2% 3% 2% 5%;
				position: relative;
				background: pink;
			}
			.shop-message-box{
				width: 100%;
				height: 100%;
				background: #09BB07;
			}
		}
	}
</style>
