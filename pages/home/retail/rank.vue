<template>
	<!-- 分销排行榜页面 -->
	<view class="">
		<image src="/static/image/other/retail_rank_1.png" mode="widthFix" class="top-pic"></image>
		<view class="list-box">
			<view class="list">
				<view class="li">
					<view class="left">
						排名
					</view>
					<view class="center">
						用户
					</view>
					<view class="right">
						贡献佣金(元)
					</view>
				</view>
				<view class="li">
					<view class="left">
						NO.1
					</view>
					<view class="center">
						111 **** **** 111
					</view>
					<view class="right">
						2240.00
					</view>
				</view>
				<view class="li">
					<view class="left">
						NO.1
					</view>
					<view class="center">
						111 **** **** 111
					</view>
					<view class="right">
						2240.00
					</view>
				</view>
				<view class="li">
					<view class="left">
						NO.1
					</view>
					<view class="center">
						111 **** **** 111
					</view>
					<view class="right">
						2240.00
					</view>
				</view>
				<view class="li">
					<view class="left">
						NO.1
					</view>
					<view class="center">
						111 **** **** 111
					</view>
					<view class="right">
						2240.00
					</view>
				</view>
				<view class="li">
					<view class="left">
						NO.1
					</view>
					<view class="center">
						111 **** **** 111
					</view>
					<view class="right">
						2240.00
					</view>
				</view>
				<view class="li">
					<view class="left">
						NO.1
					</view>
					<view class="center">
						111 **** **** 111
					</view>
					<view class="right">
						2240.00
					</view>
				</view>
				<view class="li">
					<view class="left">
						NO.1
					</view>
					<view class="center">
						111 **** **** 111
					</view>
					<view class="right">
						2240.00
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.top-pic{
		width: 100%;
	}
	.list-box{
		width: 100%;
		// height: 100rpx;
		// background: pink;
		padding: 20rpx  3%;
		box-sizing: border-box;
		
	}
	.list{
		width: 100%;
		height: 100%;
		box-shadow: 0rpx 0rpx 10rpx #bfbdbd;
		padding:20rpx 20rpx;
		box-sizing:border-box;
		border-radius: 15rpx;
	}
	.li{
		@extend .any-flex;
		justify-content: center;
		align-items: center;
		font-size: $uni-font-size-sm;
	}
	.left{
		width:20%;
		height: 60rpx;
		line-height: 60rpx;
		text-align: left;
		padding-left: 10rpx;
		box-sizing:border-box;
	}
	.center{
		width:45%;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		@include multi-row-apostrophe(1);
	}
	.right{
		width:35%;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
	}
	.li:first-child{
		font-size: $uni-font-size-lg;
		color: $any-col;
	}
	.li:nth-child(2){
		font-size: $uni-font-size-base;
		color: #009DFF;
	}
	.li:nth-child(3){
		font-size: 22rpx;
		color: #FFB600;
	}
	.li:nth-child(4){
		color: #FF5757;
	}
</style>
