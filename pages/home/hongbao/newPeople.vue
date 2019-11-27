<template>
	<view>
		<view class="con">
			<image src="/static/image/other/share_2.png" mode="" class="back"></image>
			
			<view class="num">
				30
			</view>
			<view class="draw">
				立即领取
			</view>
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
	
		},
		onLoad(e){
			
		}
	}
</script>

<style lang="scss">
	.con {
		width: 100vw;
		height: 100vh;
		position: relative;
	}

	.back {
		width: 100vw;
		height: 100vh;
		margin: 0;
		display: block;
	}

	.num{
		font-size: 110rpx;
		color: #ffffff;
		position: absolute;
		left: 36%;
		bottom: 25%;
	}
	.draw{
		width: 491rpx;
		height: 85rpx;
		border-radius: 42rpx;
		background: #FB9F00;
		position: absolute;
		left: 130rpx;
		bottom: 10%;
		text-align: center;
		line-height: 85rpx;
		font-size: $uni-font-size-lg;
		letter-spacing: 3rpx;
		color: #ffffff;
	}
</style>
