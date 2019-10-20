<template>
	<view>
		
		<navigator hover-class='none' url="/pages/home/search/search" class="sear">
			<view class="sear-text">搜索您想要的</view>
			<view class="sear-logo">
				<view class="icon-fathre">
					<view class="sear-icon iconfont icon-sousuo"></view>
				</view>
			</view>
		</navigator>
		
	</view>
</template> 

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

.sear {
		width: 100%;
		height: 60rpx;
		border-radius: 50rpx;
		background: $any-zol;
		margin-top: 20rpx;
		@extend .any-flex;
		justify-content: space-between;
		.sear-text {
			font-size: $uni-font-size-base;
			line-height: 60rpx;
			margin-left: 30rpx;
			color: #d0d0d0;
		}
		.sear-logo {
			.icon-fathre {
				width: 20rpx;
				height: 20rpx;
				border-radius: 10rpx;
				background: $any-col;
			}
			margin-right: 30rpx;
			.sear-icon {
				color: #000000;
			}
		}
}
</style>
