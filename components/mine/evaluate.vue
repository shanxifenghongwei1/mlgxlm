<!-- 评价组件 -->
<template>
	<view class="evaluate-box">
		<view class="evaluate-box-li" :class="mine?'active':''">
			<view class="top">

				<image class="canve" src="/static/image/shop/shop-1.jpg" mode=""></image>

				<view class="name">
					这是一个小菜鸡
				</view>
			</view>
			<view class="con">
				uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉）等多个平台。
			</view>
			<view class="bottom" v-if="mine?'active':''">
				<view class="left">
					购买日期:1019-12-20
				</view>
				<view class="right">
					<view class="">
						<view class="icon iconfont icon-xiaoxi1">

						</view>
						评论
					</view>
					<view class="active">
						<view class="icon iconfont icon-zhuanye">

						</view>
						点赞
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import uniBadge from "@/components/uni-badge/uni-badge.vue"
	export default {
		components: {
			uniBadge
		},
		data() {
			return {

			}
		},
		props: {
			mine: {
				type: Boolean, //商品数据列表
				default: true
			}
		}
	}
</script>

<style lang="scss">
	.evaluate-box {
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;

		.evaluate-box-li {
			width: 100%;
			border: 2rpx solid #dddddd;
			padding: 18rpx 15rpx;
			box-sizing: border-box;
			border-bottom: none;
			border-radius: 20rpx;

			.top {
				width: 100%;
				height: 70rpx;
				@extend .any-flex;
			}

			.canve {
				width: 70rpx;
				height: 70rpx;
				border-radius: 50%;
			}

			.name {
				max-width: 400rpx;
				height: 100%;
				font-size: $uni-font-size-base;
				line-height: 70rpx;
				margin-left: 20rpx;
			}

			.con {
				width: 100%;
				word-break: break-all;
				height: 60rpx;
				@include multi-row-apostrophe(2);
				font-size: $uni-font-size-base;
				margin: 8rpx 0;
			}

			.bottom {
				width: 100%;
				font-size: $uni-font-size-sm;
				@extend .any-flex;
				justify-content: space-between;
				align-items: center;
				color: #8C8C8C;

				.left {
					width: 50%;
					height: 100%;
				}

				.right {
					height: 100%;
					@extend .any-flex;

					view {
						@extend .any-flex;
					}

					view:nth-child(2) {
						margin-left: 20rpx;
					}

					view:nth-child(2).active {
						color: $any-col;
					}

					.iconfont {
						margin-right: 10rpx;
						font-size: 22rpx;
					}
				}
			}
		}

		.evaluate-box-li:last-child {
			border-bottom: 2rpx solid #dddddd;
		}

		.evaluate-box-li.active {
			border-bottom: 2rpx solid #dddddd;
			border-radius: 10rpx;
			box-shadow: 0px 0px 10px #bfbdbd;
			margin-top: 20rpx;
		}
	}
</style>
