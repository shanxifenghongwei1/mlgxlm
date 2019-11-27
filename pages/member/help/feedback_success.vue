<template>
	<view class="">
		<view class="box">
			<image src="/static/image/other/icon-select-cir-on.png" mode=""></image>
			<view class="big mar-t wei">
				反馈成功
			</view>
			<view class="lg mar-t ccc">
				感谢你对服务生的关注与支持，我们会认真处
			</view>
			<view class="lg ccc">
				理你的反馈，尽快修复和完善相关功能
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.big{
		font-size: 45rpx;
	}
	.lg{
		font-size: $uni-font-size-lg;
	}
	.wei{
		font-weight: bold;
	}
	.mar-t{
		margin-top: 20rpx;
	}
	.base{
		font-size: $uni-font-size-base;
	}
	.ccc{
		color:#7C7C7C
	}
	.box{
		width: 100vw;
		height: 70vh;
		padding: 0 5%;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
	image{
		width: 176rpx;
		height: 176rpx;
	}
</style>
