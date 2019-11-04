<!-- 提现成功页面 -->
<template>
	<view class="page">
		<view class="con">
			<image src="/static/image/other/cash_success.png" mode=""></image>
			<view class="title">
				提现申请以提交，等待人工审核
			</view>
			<view class="time">
				2019.09.20 00:00
			</view>
			<view class="time1">
				预计到账时间2019.09.21
			</view>
		</view>
		
		<view class="bottom" @click="over">
			<button type="primary">完成</button>
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
			over:()=>{
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss">
	.page {
		width: 100%;
		min-height: 100vh;
		background: #F2F2F2;
		overflow: hidden;
	}
	.con{
		width: 100%;
		height: 430rpx;
		background: #ffffff;
		margin-top: 20rpx;
		@extend .any-flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	image{
		width: 300rpx;
		height: 203rpx;
	}
	.title{
		margin-top: 30rpx;
		font-size: $uni-font-size-lg;
		font-weight: bold;
	}
	.time{
		padding: 15rpx 0;
		font-size: $uni-font-size-base;
		color: #7C899C;
	}
	.time1{
		font-size: $uni-font-size-base;
		color: #7C899C;
	}
	.bottom{
		width: 100%;
		padding: 0 5%;
		box-sizing: border-box;
		margin-top: 50rpx;
	}
	button[type=primary] {
		background-color: $any-col;
	}
	
	.button-hover[type=primary] {
		background-color: $any-col;
	}
</style>
