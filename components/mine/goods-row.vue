<template>
	<view class="">

		<view class="goods" v-if="cateid==1" v-for="(item,index) in goodslist.goodsInfo" :key="index" @click="toDetail(item.goods_id,item.goods_name)">
			<view class="pic-box">
				<image :src="picUrl +item.picture" mode=""></image>
			</view>
			<view class="con">
				<view class="title">
					<text>{{item.goods_name}}</text><text>{{"("+item.shop_name+")"}}</text>
				</view>
				<view class="star">
					<uni-rate :disabled='false' margin='2' size="10" max='5' :value="item.star" color="#7f7f7f" active-color="#ffb540" />
					<view class="go">
						去拼团
					</view>
				</view>
				<view class="contex">
					<text class="icon iconfont icon-xiangmu">

					</text>
					{{item.t_name}}
				</view>
				<view class="address">
					<text class="icon iconfont icon-tuan lg">

					</text>
					<text class="red base mar">{{item.promotion_price}}</text>
					<text>{{item.goods_effect}}</text>
					<view class="has">
						已拼<text class="red">{{item.pt_num_all}}</text>位
					</view>
				</view>
			</view>
		</view>

		<!-- 优惠 -->
		<view class="goods" v-if="cateid==2" v-for="(item,index) in goodslist.discountInfo" :key="index" @click="toDetail(item.goods_id,item.goods_name)">
			<view class="pic-box">
				<image :src="picUrl +item.picture" mode=""></image>
			</view>
			<view class="con">
				<view class="title">
					<text>{{item.goods_name}}</text><text>{{"("+item.shop_name+")"}}</text>
				</view>

				<view class="star">
					<uni-rate :disabled='false' margin='2' size="10" max='5' :value="item.star" color="#7f7f7f" active-color="#ffb540" />
					<view class="go">
						去看看
					</view>
				</view>

				<view class="contex">
					<text class="">原价</text> <text class="red mar2">{{item.price}}</text> 
				</view>
				<view class="contex">
					<text class="icon iconfont icon-xiangmu">

					</text>
					{{item.t_name}}
				</view>
				<view class="address">
					<text class="icon iconfont icon-hui">

					</text>
					{{item.introduction}}
					<text class="has">
						已售<text class="red">{{item.goods_gd_num}}</text>位
					</text>
				</view>
			</view>
		</view>

		<!-- 销量 -->
		<view class="goods" v-if="cateid==3" v-for="(item,index) in goodslist.salesInfo" :key="index" @click="toDetail(item.goods_id,item.goods_name)">
			<view class="pic-box">
				<image :src="picUrl +item.picture" mode=""></image>
			</view>
			<view class="con">
				<view class="title">
					<text>{{item.goods_name}}</text><text>{{"("+item.shop_name+")"}}</text>
				</view>
				<view class="star">
					<uni-rate :disabled='false' margin='2' size="10" max='5' :value="item.star" color="#7f7f7f" active-color="#ffb540" />
				</view>
				<view class="contex">
					<text class="icon iconfont icon-xiangmu">
			
					</text>
					{{item.t_name}}
				</view>
				<view class="address">
					<text class="icon iconfont icon-tuan lg">
			
					</text>
					<text class="red base mar">{{item.price}}元</text>
					<text>{{item.goods_effect}}</text>
					<view class="has">
						已售<text class="red">{{item.goods_gd_num}}</text>位
					</view>
				</view>
			</view>
		</view>


		<view class="goods" v-if="cateid==4" v-for="(item,index) in goodslist.limitedInfo" :key="index" @click="toDetail(item.goods_id,item.goods_name)">
			<view class="pic-box">
				<image :src=" picUrl +item.picture " mode=""></image>
			</view>
			<view class="con">
				<view class="title">
					{{item.goods_name}}
				</view>

				<view class="star">
					<text class="suo">{{item.shop_name}}</text>
					<view class="go">
						马上抢
					</view>
				</view>
				<view class="con-cmd">
					<cmdRrogress :percent="limited_ready_prople/item.limited_prople" custom>
						<view class="sm">
							已抢<text>{{item.limited_ready_prople}}</text>位
						</view>
					</cmdRrogress>
				</view>
				<view class="context1">
					<text class="base red mar">￥{{item.limited_price}}</text><text class="sm ccc through">￥{{item.price}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import demo from "@/common/js/demao.js"
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	import cmdRrogress from "@/components/cmd-progress/cmd-progress.vue"
	export default {
		name: 'shoplist',
		components: {
			uniRate,
			cmdRrogress
		},
		props: {
			cateid: {
				type: Number, //商品类型
				default: 1
			},
			goodslist: {
				type: Object, //商品列表
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
			toDetail(e, f) {
				uni.navigateTo({
					url: "/pages/home/goods-detail/goods-detail?goods_id=" + e + "&&head=" + f
				})
			}
		},
		created() {
			this.picUrl = demo.domain.videoUrl;
		}
	}
</script>

<style lang="scss">
	.goods {
		width: 100%;
		height: 200rpx;
		border-radius: 20rpx;
		border: 2rpx solid $any-zol;
		border-bottom: 4rpx solid $any-col;
		margin-top: 20rpx;
		padding: 15rpx 0;
		box-sizing: border-box;
		@extend .any-flex;
		justify-content: space-between;

		.pic-box {
			padding: 0 20rpx;
		}

		image {
			width: 160rpx;
			height: 160rpx;
			background: red;
		}

		.con {
			flex-grow: 1;
			height: 100%;
			@extend .any-flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: space-between;
			padding-right: 10%;
			box-sizing: border-box;
			position: relative;

			.title {
				width: 100%;
				font-size: $uni-font-size-base;
				color: $any-col;
				font-weight: bold;
				@include multi-row-apostrophe(1);
				padding-right: 25%;
				box-sizing: border-box;
			}

			.star {
				width: 100%;
				position: relative;
				font-size: $uni-font-size-base;

			}

			.contex {
				font-size: $uni-font-size-sm;
				@include multi-row-apostrophe(1);
			}

			.address {
				width: 100%;
				font-size: $uni-font-size-sm;
				@include multi-row-apostrophe(1);
				position: relative;
				padding-right: 25%;
				box-sizing: border-box;
			}

			.iconfont {
				font-size: 26rpx;
				margin-right: 20rpx;
				color: $any-col;
			}

			.context1 {
				@extend .any-flex;
				align-items: flex-end;
			}
		}

		.ccc {
			color: #868686;
		}

		.red {
			color: $any-col;
		}

		.mar {
			margin-right: 20rpx;
		}

		.mar2 {
			margin-right: 30rpx;
		}

		.go {
			background: $any-col;
			color: #ffffff;
			padding: 3rpx 10rpx;
			border-radius: 20rpx;
			font-size: $uni-font-size-base;
			position: absolute;
			right: 0%;
			top: -10rpx;
		}

		.has {
			font-size: $uni-font-size-base;
			color: #000000;
			position: absolute;
			right: 0%;
			top: -5rpx;
		}

		.con-cmd {
			width: 60%;
		}

		.sm {
			font-size: $uni-font-size-sm;
		}

		.base {
			font-size: $uni-font-size-base;
		}

		.lg {
			font-size: $uni-font-size-lg !important;
		}

		.through {
			text-decoration: line-through;
		}

		.suo {
			width: 70%;
			@include multi-row-apostrophe(1);
		}
	}
</style>
