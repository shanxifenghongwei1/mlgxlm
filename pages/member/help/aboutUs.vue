<template>
	<!-- 关于我们 -->
	<view class="page">
		<view class="header">
			<image src="/static/image/other/about_us.png" mode=""></image>
			<view class="name">
				美丽共享联盟
			</view>
			<view class="edition">
				版本号 1.0.0
			</view>
		</view>
		<view class="con">
			<view class="li">
				<view class="left">
					电话号码
				</view>
				<view class="right">
					1555555555
				</view>
			</view>
			<view class="li">
				<view class="left">
					工作日
				</view>
				<view class="right">
					8:30-18:30
				</view>
			</view>
			<view class="li">
				<view class="left">
					客服邮箱
				</view>
				<view class="right">
					3433046472@qq.com
				</view>
			</view>
			<navigator url="/pages/member/tool/evaluate/evaluate" class="li">
				<view class="left">
					去评分
				</view>
				<view class="icon iconfont icon-jiantou-copy">
					
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
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
			font-size: 50rpx;
		}
		.edition{
			font-size: $uni-font-size-lg;
			color: #9A9A9A;
		}
	}
	.con{
		width: 100%;
		margin-top: 30rpx;
		.li{
			width: 100%;
			height: 80rpx;
			padding: 0 3%;
			border-bottom: 1rpx solid #F2F2F2;
			box-sizing: border-box;
			@extend .any-flex;
			justify-content: space-between;
			align-items: center;
			font-size: $uni-font-size-lg;
			color: #4C4C4C;
			.left{
				color: #4C4C4C;
			}
			.icon-jiantou-copy{
				font-size: 40rpx;
			}
		}
		.li:nth-child(1){
			.right{
				color: #3E7DF3;
			}
		}
	}
</style>
