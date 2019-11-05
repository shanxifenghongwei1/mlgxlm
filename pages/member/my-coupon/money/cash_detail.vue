<template>
	<view class="page">
		<view class="list">
			<image src="" mode=""></image>
			<view class="content">
				<view class="left">
					<view class="title">
						芳香精油乳腺疏通
					</view>
					<view class="con">
						1【祛痘】酒槽鼻修护套餐 
					</view>
					<view class="con red">
						收益发放
					</view>
					<view class="con red">
						2019-10-21 17:24
					</view>
				</view>
				<view class="right">
					+98.00
				</view>
			</view>
		</view>
		
		<view class="list">
			<image src="" mode=""></image>
			<view class="content">
				<view class="left">
					<view class="title">
						芳香精油乳腺疏通
					</view>
					<view class="con">
						1【祛痘】酒槽鼻修护套餐 
					</view>
					<view class="con red">
						收益发放
					</view>
					<view class="con red">
						2019-10-21 17:24
					</view>
				</view>
				<view class="right">
					+98.00
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.page{
		width: 100%;
		min-height: 100vh;
		overflow: hidden;
	}
	.list{
		width: 100%;
		height: 166rpx;
		padding: 20rpx 4% 0;
		box-sizing: border-box;
		@extend .any-flex;
		align-items: flex-start;
		image{
			width: 100rpx;
			height: 100rpx;
			background: red;
			border-radius: 50%;
		}
		.content{
			flex-grow: 1;
			height: 100%;
			border-bottom: 1rpx solid #B4B4B4;
			padding-left: 40rpx ;
			box-sizing: border-box;
			@extend .any-flex;
			.left{
				width: 65%;
				height: 100%;
				@extend .any-flex;
				flex-direction: column;
				align-items: flex-start;
				.title{
					font-size: $uni-font-size-base;
					padding-top: 5rpx;
					@include multi-row-apostrophe(1);
				}
				.con{
					padding-top: 5rpx;
					font-size: $uni-font-size-sm;
					@include multi-row-apostrophe(1);
					color: #989898;
				}
				.red{
					color:  $any-col;
				}
			}
			.right{
				width: 35%;
				height: 100%;
				background: #ffffff;
				font-size: 40rpx;
				text-align: right;
				line-height: 85rpx;
				color:  $any-col;
			}
		}
	}
</style>
