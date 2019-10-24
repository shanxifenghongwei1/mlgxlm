<!-- 评价组件 -->
<template>
	<view class="evaluate-box">
		<view class="evaluate-box-li">
			<view class="top">
			
				<image class="canve" src="/static/image/shop/shop-1.jpg" mode=""></image>

				<view class="name">
					这是一个小菜鸡
				</view>
			</view>
			<view class="con">
				dfasdfhasidofaosdfjdkghaiouddskfjasdkl;jaoi;sdgjasdlkfjasifasdfjasdkjf;aslxdkaj;oigjasdfj;alsdkfjaoisdjfa;lskdfjaodfasldfjkkkkkkkkasd;fsa;fsadfasjdfasdfh;lskdfjaodfasldfjkkkkkkkkasd
			</view>
		</view>
		
		<view class="evaluate-box-li">
			<view class="top">
			
				<image class="canve" src="/static/image/shop/shop-1.jpg" mode=""></image>
		
				<view class="name">
					这是一个小菜鸡
				</view>
			</view>
			<view class="con">
				dfasdfhasidofaosdfjdkghaiouddskfjasdkl;jaoi;sdgjasdlkfjasifasdfjasdkjf;aslxdkaj;oigjasdfj;alsdkfjaoisdjfa;lskdfjaodfasldfjkkkkkkkkasd;fsa;fsadfasjdfasdfh;lskdfjaodfasldfjkkkkkkkkasd
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.evaluate-box{
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
		.evaluate-box-li{
			width: 100%;
			border: 2rpx solid #dddddd;
			padding: 18rpx 15rpx;
			box-sizing: border-box;
			border-bottom: none;
			border-radius: 20rpx;
			.top{
				width: 100%;
				height: 70rpx;	
				@extend .any-flex;
			}
			.canve{
				width: 70rpx;
				height: 70rpx;
				border-radius: 50%;
			}

			.name{
				max-width: 400rpx;
				height: 100%;
				font-size: $uni-font-size-base;
				line-height: 70rpx;
				margin-left: 20rpx;
			}
			
			.con{
				width: 100%;
				word-break:break-all;
				padding: 8rpx 0;
				@include multi-row-apostrophe(2);
				font-size: $uni-font-size-base;
			}
		}
		.evaluate-box-li:last-child{
			border-bottom: 2rpx solid #dddddd;
		}
	}
</style>
