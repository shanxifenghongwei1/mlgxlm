<template>
	<view>
		<view v-for="(item,index) in shoplists" :key='index' class="shop-father" @click="toDetail(item.goods_id)">

			<block v-if="num&&(index+1)!=shoplists.length&&(index+1)%num==0">
				<view class="goods">
					<view class="shop" v-if="">
						<view class="shop-img">
							<image :src="picUrl+item.picture" mode="widthFix"></image>
						</view>
						<view class="shop-message">
							<view class="shop-name">
								<text class="shop-name-left">{{item.shop_name}}</text>
								<text class="addres">{{item.shop_address_provice+item.shop_address_city+item.shop_address_area}}</text>
							</view>
							<view class="shop-start">
								<uni-rate :disabled='false' margin='2' size="10" max='5' :value="item.shop_score" color="#7f7f7f" @change='onChange'
								 active-color="#ffb540" />
							</view>
							<view>
								<view class="label">
									<text class="tex">{{ item.shop_label}}</text>
								</view>
								<view class="goods-price">
									原价 <text>{{item.price}}</text> 平台价 <text>{{item.market_price}}</text>
								</view>
								<view class="goodsname"> <text class="iconfont icon-xiangmu"></text> {{item.goods_name}}</view>
								<view class="propergoods"> <text class="iconfont icon-tuan"> </text> <text class="mon">{{item.promotion_price}}元</text>
									{{item.introduction}} </view>
							</view>
						</view>
						<!-- <view class="show-box">
							<view class="box">
								<view class="pintuan">
									拼团减40元
								</view>
								<view class="newPeople">
									新用户立减60元
								</view>
							</view>
						</view> -->
					</view>
				</view>
				<view class="advert">

				</view>
			</block>
			<block v-else>
				<view class="goods">
					<view class="shop" v-if="">
						<view class="shop-img">
							<image :src="picUrl+item.picture" mode="widthFix"></image>
						</view>
						<view class="shop-message">
							<view class="shop-name">
								<text class="shop-name-left">{{item.shop_name}}</text>
								<text class="addres">{{item.shop_address_provice+item.shop_address_city+item.shop_address_area}}</text>
							</view>
							<view class="shop-start">
								<uni-rate :disabled='false' margin='2' size="10" max='5' :value="item.shop_score" color="#7f7f7f"
								 active-color="#ffb540" />
							</view>
							<view>
								<view class="label">
									<text class="tex">{{ item.shop_label}}</text>
								</view>
								<view class="goods-price">
									原价 <text>{{item.price}}</text> 平台价 <text>{{item.market_price}}</text>
								</view>
								<view class="goodsname"> <text class="iconfont icon-xiangmu"></text> {{item.goods_name}}</view>
								<view class="propergoods"> <text class="iconfont icon-tuan"> </text> <text class="mon">{{item.promotion_price}}元</text>
									{{item.introduction}} </view>
							</view>
						</view>
						<!-- <view class="show-box">
							<view class="box">
								<view class="pintuan">
									拼团减40元
								</view>
								<view class="newPeople">
									新用户立减60元
								</view>
							</view>
						</view> -->
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import demo from "@/common/js/demao.js"
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	import cmdProgress from "@/components/cmd-progress/cmd-progress.vue"
	export default {
		name: 'shoplist',
		components: {
			uniRate,
			cmdProgress
		},
		props: {
			myid: {
				type: Number, //控制页面样式 1 拼团 2优惠 3销量 4限时抢 5免费送 6 正常商铺列表
				default: 1
			},
			shoplists: {
				type: Array, //商品数据列表
				default: []
			},
			num: {
				type: Number, //每几条添加一条广告
				default: 0
			}
		},
		data() {
			return {
				dataUrl: "",
				picUrl: "",
			};
		},
		onLoad(options) {

		},
		methods: {
			go() {
				console.log('we are go')
			},
			onClick() {

			},
			toDetail(e) {
				console.log(e);
				uni.navigateTo({
					url: "/pages/home/shop-detial/shop-detial?id=" + e
				})
			}
		},
		created() {
			this.picUrl = demo.domain.picUrl;
		}
	}
</script>

<style lang="scss">
	.shop-father {
		.goods {
			width: 100%;
			padding: 0 3%;
			box-sizing: border-box;
		}

		.shop {
			margin-top: 20rpx;
			width: 100%;
			border-radius: 20rpx;
			border: 2rpx solid $any-zol;
			border-bottom: 4rpx solid $any-col;
			@extend .any-flex;
			align-items: flex-start;

			.shop-img {
				width: 20%;
				height: 80%;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.shop-message {
				width: 48%;
				height: 96%;
				padding: 2% 0 2% 5%;
				position: relative;

				.price-new {
					font-size: $uni-font-size-lg;
					font-weight: 600;
					color: $any-col;

					.noscripe {
						margin-left: 20rpx;
						text-decoration: line-through;
						font-size: $uni-font-size-sm;
						color: #666;
					}
				}



				.shop-name {
					color: $any-col;
					font-size: $uni-font-size-lg;
					@extend .any-flex;
					align-items: flex-end;

					.shop-name-left {
						max-width: 40%;
						height: 40rpx;
						@include multi-row-apostrophe(1);
					}

					.addres {
						font-size: $uni-font-size-sm;
						margin-left: 2rpx;
						color: #666;
					}
				}

				.label {
					.tex {
						padding: 4rpx;
						font-size: 20rpx;
						color: #7f7f7f;
						border: 2rpx solid #7f7f7f;
					}
				}

				.goods-price {
					font-size: $uni-font-size-sm;

					text {
						margin: 0 10rpx;
						color: $any-col;
						font-size: $uni-font-size-lg;
					}
				}

				.goodsname {
					width: 70%;
					@include multi-row-apostrophe(1);
					overflow: hidden;
					font-size: $uni-font-size-base;

					text {
						color: $any-col;
						margin-right: 16rpx;
					}
				}

				.propergoods {
					font-size: $uni-font-size-base;

					text {
						color: $any-col;
						margin-right: 16rpx;
					}

					.mon {}
				}
			}

			.show-box {
				flex-grow: 1;
				height: 100%;
				padding: 20rpx 20rpx 20rpx 0;
				box-sizing: border-box;

				.box {
					width: 100%;
					height: 100%;
					@extend .any-flex;
					flex-direction: column;
					align-items: flex-end;

					.pintuan,
					.newPeople {
						display: inline-block;
						padding: 3rpx 10rpx;
						border: 1rpx solid $any-col;
						font-size: $uni-font-size-sm;
						border-radius: 15rpx;
						margin-bottom: 10rpx;
						color: $any-col;
					}
				}

			}
		}

		.advert {
			width: 100%;
			height: 200rpx;
			background: pink;
			margin: 20rpx 0;
		}
	}
</style>
