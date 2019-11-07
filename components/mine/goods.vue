<template>
	<!-- 商品组件（图+详细信息） -->
	<view class="goods">
		<view class="goods-li" @click="toDetail(2)" v-for="(item,index) in titCon" :key="index">
			<view class="goods-pic">
				<image src="/static/image/banner/1.jpg" mode=""></image>
			</view>
			<block v-if="place===1">
				<view class="goods-tit">
					芳香精油经络疏通
				</view>
				<view class="goods-con">
					<view class="goods-con-left">
						乳腺
					</view>
					<view class="goods-con-fight">
						已售 10
					</view>
				</view>
				<view class="goods-price">
					<view class="goods-price-left">
						<view class="goods-NewPrice">
							198.00
						</view>
						<view class="goods-OldPrice">
							398.00
						</view>
					</view>
					<view class="goods-price-right">
						减198元
					</view>
				</view>
			</block>
			<block v-if="place===2">
				<view class="place place-title">
					伊可佳人
				</view>
				<view class="place place-name">
					姿美堂养颜套装（全新）
				</view>
				<view class="place place-num">
					<view class="">
						置换1000
					</view>
					<view class="">
						置换1000
					</view>
				</view>
				<view class="place place-price">
					￥199.9
				</view>
				<view class="place place-address">
					<view class="icon iconfont icon-xuanzhong1">

					</view>

					山西省太原市小店区天鑫花


				</view>
				<view class="place place-time">
					2019-10-16 10:03发布
				</view>
			</block>
			<block v-if="place===3">
				<view class="ware">
					<view class="left title">
						爱美世家
					</view>
					<view class="right">
						<text>山东青岛市市区</text>
					</view>
				</view>
				<view class="ware">
					<view class="ware-ware">
						层韩国小气泡深层清洁
					</view>
				</view>
				<view class="ware">
					<view class="left">
						原价<text>198</text>
					</view>
					<view class="right">
						平台价<text>198</text>
					</view>
				</view>
			</block>
		</view>

		<view class="look-more" v-if="more">
			查看更多60个商品
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			titCon: {
				type: Array, //商品数据列表
				default: []
			},
			more: {
				type: Boolean, //是否显示加载更多
				default: true
			},
			place: {
				type: Number, //1正常商品false    2置换商品true   3收藏商品
				default: 1
			}
		},
		methods: {
			toDetail(e) {
				uni.navigateTo({
					url: "/pages/home/goods-detail/goods-detail?id=" + e
				})
			}
		}
	}
</script>

<style lang="scss">
	.goods {
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
	}

	.goods-li {
		width: 340rpx;
		background: #ffffff;
		display: inline-block;
		margin-top: 20rpx;
		overflow: hidden;
		box-shadow: 0rpx 0rpx 10rpx #cfcdcd;
	}

	.goods-li:nth-child(2n) {
		margin-left: 25rpx;
	}

	.goods-pic {
		width: 100%;
		height: auto;
	}

	.goods-pic image {
		width: 100%;
		height: 194rpx;
		background: red;
	}

	.goods-tit {
		width: 80%;
		text-align: center;
		margin: 0 auto;
		font-size: $uni-font-size-lg;
		padding: 5rpx 0;
		margin-top: 10rpx;
	}

	.goods-con {
		width: 100%;
		@extend .any-flex;
		justify-content: space-between;
		align-items: center;
		font-size: $uni-font-size-base;
		padding: 0 15rpx;
		box-sizing: border-box;
		color: #7e7e7e;
		margin-top: 10rpx;
	}

	.goods-price {
		width: 100%;
		@extend .any-flex;
		padding: 0 15rpx;
		box-sizing: border-box;
		justify-content: space-between;
		margin: 10rpx 0;
	}

	.goods-price-left {
		@extend .any-flex;
		align-items: flex-end;
	}

	.goods-NewPrice {
		font-size: $uni-font-size-lg;
		color: $any-col;
	}

	.goods-OldPrice {
		font-size: $uni-font-size-base;
		color: #7e7e7e;
		text-decoration: line-through;
		margin-left: 5rpx;
	}

	.goods-price-right {
		font-size: $uni-font-size-sm;
		color: $any-col;
		padding: 2rpx 5rpx;
		border: 2rpx solid $any-col;
	}

	.look-more {
		width: 350rpx;
		height: 55rpx;
		border-radius: 15rpx;
		background: #bcbdbd;
		text-align: center;
		line-height: 55rpx;
		font-size: $uni-font-size-base;
		margin: 30rpx auto 0;
	}

	.place {
		width: 100%;
		padding: 0 10rpx;
		box-sizing: border-box;
	}

	.place-title {
		font-size: $uni-font-size-lg;
		color: $any-col;
		@include multi-row-apostrophe(1);
		margin-bottom: 10rpx;
	}

	.place-name {
		font-size: $uni-font-size-base;
		@include multi-row-apostrophe(1);
		margin-bottom: 10rpx;
	}

	.place-num {
		font-size: $uni-font-size-base;
		@extend .any-flex;
		justify-content: space-between;
		color: #7E7E7E;
		margin-bottom: 10rpx;

		view {
			width: 50%;
		}
	}

	.place-price {
		font-size: 40rpx;
		color: $any-col;
		@include multi-row-apostrophe(1);
		margin-bottom: 10rpx;
	}

	.place-address {
		width: 100%;
		font-size: $uni-font-size-sm;
		margin-bottom: 10rpx;

		view:nth-child(1) {
			display: inline;
			font-size: $uni-font-size-sm;
		}

	}

	.place-time {
		font-size: $uni-font-size-sm;
		@include multi-row-apostrophe(1);
		margin-bottom: 10rpx;
	}
	
	.ware{
		width: 100%;
		font-size: $uni-font-size-base;
		padding: 0 10rpx;
		box-sizing: border-box;
		@extend .any-flex;
		margin-bottom: 10rpx;
		.title{
			font-size: $uni-font-size-lg;
			color: $any-col;
			@include multi-row-apostrophe(1);
		}
		.left{
			width: 50%;
			height: 100%;
			@include multi-row-apostrophe(1);
		}
		.right{
			width: 50%;
			height: 100%;
			text-align: right;
			font-size: $uni-font-size-sm;
			@include multi-row-apostrophe(1);
		}
		.ware-ware{
			width: 100%;
			height: 100%;
			@include multi-row-apostrophe(1);
		}
	}
	.ware:last-child{
		font-size: $uni-font-size-sm;
		.right{
			text-align: left;
			text-decoration: line-through;
		}
	}
	.ware:last-child{
		color: #8C8C8C;
		text{
			color: $any-col;
			text-align: left;
			font-size: $uni-font-size-base;
			margin-right: 10rpx;
		}
	}
</style>
