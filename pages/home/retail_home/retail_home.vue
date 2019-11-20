<template>
	<!-- 首页分销页面 -->
	<view>
		<view class="shop_box" @click="toDetail()">
			<view class="shop">
				<view class="top">
					<view class="pic">

					</view>
					<view class="con">
						<view class="title">
							<text></text>
							伊岸官方旗舰店
						</view>
						<view class="num">
							<text>销量666</text>
							<text>共6666件商品</text>
						</view>
					</view>
					<view class="goShop">
						进店看看
					</view>
				</view>
				<view class="bottom">
					<view class="pic-box">
						<image src="" mode=""></image>
						<view class="price">
							￥3999
						</view>
					</view>
					<view class="pic-box">
						<image src="" mode=""></image>
						<view class="price">
							￥3999
						</view>
					</view>
					<view class="pic-box">
						<image src="" mode=""></image>
						<view class="price">
							￥3999
						</view>
					</view>
					<view class="pic-box">
						<image src="" mode=""></image>
						<view class="price">
							￥3999
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="shop_box">
			<view class="shop">
				<view class="top">
					<view class="pic">

					</view>
					<view class="con">
						<view class="title">
							<text></text>
							伊岸官方旗舰店
						</view>
						<view class="num">
							<text>销量666</text>
							<text>共6666件商品</text>
						</view>
					</view>
					<view class="goShop">
						进店看看
					</view>
				</view>
				<view class="bottom">
					<view class="pic-box">
						<image src="" mode=""></image>
						<view class="price">
							￥3999
						</view>
					</view>
					<view class="pic-box">
						<image src="" mode=""></image>
						<view class="price">
							￥3999
						</view>
					</view>
					<view class="pic-box">
						<image src="" mode=""></image>
						<view class="price">
							￥3999
						</view>
					</view>
					<view class="pic-box">
						<image src="" mode=""></image>
						<view class="price">
							￥3999
						</view>
					</view>
				</view>
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
			toDetail(){
				this.global.utils.jump(1,"/pages/home/retail_home/shop_detail")
			}
		}
	}
</script>

<style lang="scss">
	.shop_box {
		width: 100%;
		height: 300rpx;
		padding: 0 3%;
		box-sizing: border-box;
		margin-top: 20rpx;
	}

	.shop {
		width: 100%;
		height: 100%;
		border-radius: 15rpx;
		box-shadow: 0px 0px 10rpx #bfbdbd;
		box-sizing: border-box;
		@extend .any-flex;
		flex-direction: column;
	}

	.top {
		width: 100%;
		height: 110rpx;
		@extend .any-flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20rpx;
		border-bottom: 2rpx solid #B4B4B4;
		box-sizing: border-box;
	}

	.pic {
		width: 66rpx;
		height: 73rpx;
		background: $any-col;
	}

	.con {
		flex-grow: 1;
		height: 100%;
		padding: 0 5%;
		box-sizing: border-box;
		@extend .any-flex;
		flex-direction: column;
		justify-content: center;
	}

	.goShop {
		width: 120rpx;
		height: 40rpx;
		text-align: center;
		line-height: 40rpx;
		background: $any-col;
		border-radius: 15rpx;
		font-size: $uni-font-size-base;
		color: #ffffff;
	}

	.title {
		width: 100%;
		font-size: $uni-font-size-lg;
		padding: 2rpx 0;
		font-weight: bold;
	}

	.num {
		width: 100%;
		font-size: $uni-font-size-base;
		padding: 2rpx 0;
	}

	.bottom {
		flex-grow: 1;
		width: 100%;
		padding: 0 20rpx;
		@extend .any-flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
	}

	.pic-box {
		width: 140rpx;
		height: 150rpx;
		background: pink;
		position: relative;

		image {
			width: 140rpx;
			height: 150rpx;
			background: blue;
		}

		.price {
			display: inline-block;
			padding: 2rpx 5rpx;
			position: absolute;
			bottom: 0;
			right: 0;
			background: $any-col;
			color: #ffffff;
			font-size: $uni-font-size-base;
		}
	}
</style>
