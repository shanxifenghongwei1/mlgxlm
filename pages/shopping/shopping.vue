<template>
	<!-- 购物车 -->
	<view>
		<view class="goodlist" v-for="i in list" :key="i">
			<view class="box">
				<view class="title">
					<text class="icon iconfont icon-weixuanzhong"></text><text class="icon iconfont icon-chongzhichenggong"></text><text
					 class="icon iconfont icon-dianpu"></text><text>爱美世家</text>
				</view>
				<view class="con" v-for="i in list" :key="i">
					<text class="icon iconfont icon-weixuanzhong"></text>
					<image src="" mode=""></image>
					<view class="goods-info">
						<view class="name">
							芳香精油乳腺疏通
							芳香精油乳腺疏通
							芳香精油乳腺疏通
							芳香精油乳腺疏通
						</view>
						<view class="cate">
							<view class="">
								免费皮肤检测
							</view>
							<view class="">
								免费皮肤检测
							</view>
							<view class="">
								免费皮肤检测
							</view>
						</view>
						<view class="price">
							￥9987元
						</view>
						<view class="dtl">
							【祛痘】酒槽鼻修护套餐
						</view>
					</view>
					<view class="opection">
						<numbox :Number="1" :min="1" :max="10" :step="1"></numbox>
						<view class="opection-box">
							<view class="icon iconfont icon-shanchu-copy-copy">

							</view>
							<view class="icon iconfont icon-star">

							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="bac-img">
			<image src="../../static/image/other/shopimg.jpg" mode="widthFix" class="bac-imgs"></image>
		</view>
		<view>
			<goods :titCon="titCon" :more="false" place="1"></goods>
		</view>
		<view class="emit-view">
			
		</view>
		<view class="bottom">
			<view class="ccc">
				<text class="icon iconfont icon-chongzhichenggong"></text><text class="all">全选</text>
			</view>
			<view class="all-price">
				<text class="ccc">合计:</text><text class="ccc">￥200.00</text>
			</view>
			<view class="pay" @click="pageTo">
				去结算（1）
			</view>
		</view>
	</view>
</template>

<script>
	import numbox from "@/components/uni-number-box/uni-number-box.vue"
	import goods from "@/components/mine/goods.vue"
	export default {
		components: {
			numbox,
			goods
		},
		data() {
			return {
				list: 2,
				titCon: [1, 2, 3, 3]
			}
		},
		methods: {
			pageTo:function(){
				uni.navigateTo({
					url:"/pages/pay/pay"
				})
			}
		},
		onLoad() {
			console.log(this.global.demao.api.user_Address_list)
		}
	}
</script>

<style lang="scss">
	.icon-weixuanzhong {
		font-size: 30rpx;
		padding-right: 20rpx;
		color: #808080 !important;
	}

	.icon-chongzhichenggong {
		font-size: 35rpx;
		padding-right: 20rpx;
		color: red;
	}

	.icon-dianpu {
		font-size: 35rpx;
		margin-right: 10rpx;
	}

	.goodlist {
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
		margin-top: 20rpx;

		.box {
			width: 100%;
			height: 100%;
			background: #ffffff;
			border-radius: 15rpx;
			box-shadow: 0rpx 0rpx 20rpx #bfbdbd;

			.title {
				width: 100%;
				height: 80rpx;
				border-bottom: 1rpx solid #E5E5E5;
				box-sizing: border-box;
				font-size: $uni-font-size-lg;
				padding: 0 10rpx;
				@extend .any-flex;
				align-items: center;
			}

			.con {
				width: 100%;
				position: relative;
				padding: 15rpx 10rpx;
				box-sizing: border-box;
				@extend .any-flex;
				align-items: center;
				border-bottom: 1rpx solid #E5E5E5;
				color: #808080;
			}

			.con:last-child {
				border-bottom: none;
			}

			image {
				width: 140rpx;
				height: 150rpx;
				margin-right: 20rpx;
				background: red;
			}

			.goods-info {
				width: 320rpx;
				height: 100%;
				@extend .any-flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;

				.name {
					width: 100%;
					box-sizing: border-box;
					@include multi-row-apostrophe(1);
					font-size: $uni-font-size-base;
					color: #575757;
				}

				.cate {
					width: 100%;
					@extend .any-flex;
					flex-wrap: wrap;
					padding-top: 10rpx;
					box-sizing: border-box;
					font-size: $uni-font-size-sm;

					view {
						display: inline-block;
						padding: 2rpx 5rpx;
						color: #868686;
						border: 1rpx solid #868686;
						margin-right: 10rpx;
						margin-bottom: 10rpx;
					}
				}

				.price {
					width: 100%;
					box-sizing: border-box;
					@include multi-row-apostrophe(1);
					font-size: $uni-font-size-lg;
					color: $any-col;
				}

				.dtl {
					width: 100%;
					box-sizing: border-box;
					@include multi-row-apostrophe(1);
					font-size: $uni-font-size-sm;
				}
			}

			.opection {
				position: absolute;
				right: 20rpx;
				bottom: 30rpx;
			}

			.opection-box {
				width: 100%;
				margin-top: 10rpx;
				display: flex;

				.icon-shanchu-copy-copy {
					font-size: 32rpx;
					padding: 10rpx;
					margin-left: 20rpx;
					color: #808080;
				}

				.icon-star {
					font-size: 32rpx;
					padding: 10rpx;
				}
			}
		}
	}
	.bac-img {
		margin-top: 20rpx;
	}
	.bac-imgs {
		width: 100%;
	}

	.bottom {
		width: 100%;
		height: 90rpx;
		background: pink;
		padding-left: 3%;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		bottom: 0;
		font-size: $uni-font-size-base;
		@extend .any-flex;
		align-items: center;
	}

	.pay {
		width: 200rpx;
		height: 100%;
		background: red;
		font-size: $uni-font-size-lg;
		color: #ffffff;
		text-align: center;
		line-height: 90rpx;
	}

	.all-price {
		flex-grow: 1;
		font-size: $uni-font-size-base;
		padding-left: 30rpx;
		box-sizing: border-box;
	}

	.all {
		font-size: $uni-font-size-base;
	}

	.black {
		color: #000000;
	}

	.red {
		color: $any-col;
	}

	.ccc {
		color: #808080;
	}
	.emit-view{
		width: 100%;
		height: 100rpx;
	}
</style>
