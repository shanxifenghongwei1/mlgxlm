<template>
	<!-- 主要功能内容页面 -->
	<view>
		<view class="head-con">
			<searchAny></searchAny>
			<!-- 大标题 -->
			<view class="device">


				<view v-for="(item,index) in detail" :key='index' class="device-son">
					<image :src="imageurl + item.t_img" mode="" @click="menuDetail()"></image>
				</view>
			</view>
			<!-- <view class="newshop-head" v-if="options.runid!=3">
				<view class="icons">
					<view class="iconsss"></view>
					<view>热门项目</view>
				</view>
				<view class="more">更多</view>
			</view> -->
			<!-- 热门项目 -->
			<!-- 			<view class="device" v-if="options.runid!=3">
				<view v-for="(item,index) in gnlistmore" :key='index' class="device-son">
					<image :src="item.picture" mode="widthFix"></image>
				</view>
			</view> -->
			<!-- 轮播 -->
			<!-- 			<view class="banner">
				<swiper :indicator-active-color='colors' :indicator-dots="true" :autoplay="true" :interval="2000" :duration="1000">
					<swiper-item v-for="(item ,index) in bannerlist" :key='index' class="banner-item">
						<view class="swiper-item">
							<image :src="item" mode="widthFix"></image>
						</view>
					</swiper-item>
				</swiper>
			</view> -->
			<!-- 栏目 -->
			<!-- 			<view class="newbox any-flex" style="align-items: flex-start;" v-if="options.runid!=3">
				<scroll-view :scroll-into-view='ids' :class="menu" scroll-x>
					<view class='scroll-list'>
						<view v-for="(item,index) in headlist" :key='index' class="menu-list" :class=" 'a'+ item.id == ids ? 'active' : ''"
						 @click="exchanges(item.id)">{{ item.name }}</view>
					</view>
				</scroll-view>
			</view> -->

			<view class="newbox any-flex" style="align-items: flex-start;">
				<scroll-view :scroll-into-view='ids' :class="menue == true ? 'menu' : 'menu1' " scroll-x>
					<view class="scroll-list">
						<view @click="exchanges(item.id)" :id=" 'a'+ item.id " v-for="(item,index) in headlist" :key='index' :class=" 'a'+ item.id == ids ? 'active' : '' "
						 class="menu-list">{{item.name}}</view>
					</view>
				</scroll-view>
				<view class="down iconfont icon-icon-up" @click="menushow"></view>
			</view>

		</view>

		<!-- <goodlist :cateid="ids" :goodslist="indexData"></goodlist> -->

		<view class="goods" v-for="(item,index) in distance" :key="index" @click="toDetail(item.goods_id,item.goods_name)">
			<!-- 商品图片 -->
			<view class="pic-box">
				<image :src="imageurl +item.picture" mode=""></image>
			</view>

			<view class="con">
				<!-- 店铺名字 -->
				<view class="title">
					<text>{{item.goods_name}}</text><text>{{"("+item.shop_name+")"}}</text>
				</view>
				<!-- 星级 -->
				<view class="star">
					<uni-rate :disabled='false' margin='2' size="10" max='5' :value="item.star" color="#7f7f7f" active-color="#ffb540" />
				</view>
				<!-- 商品名字 -->
				<view class="contex">
					<text class="icon iconfont icon-xiangmu"></text>
					{{item.goods_name}}
				</view>
				<view class="contex">
					<!-- <text class="icon iconfont icon-xiangmu"></text> -->
					距您:{{item.juli | fixed }}km
				</view>
				<!-- 拼团 -->
				<view class="address" v-if='item.promotion_type == 1'>
					<text class="icon iconfont icon-tuan lg"></text>
					<text class="red base mar">团购价 {{item.promotion_price}}</text>
				</view>
				<!-- 优惠 -->
				<view class="address" v-if='item.promotion_type == 2'>
					<text class="icon iconfont icon-hui"></text>
					{{item.coupon_names}}
				</view>
				<!-- 销量  正常 -->
				<view class="address" v-if='item.promotion_type == 3 || item.promotion_type == 0'>
					<!-- <text class="icon iconfont icon-tuan lg"></text> -->
					<text class="red base mar">价格 {{item.price}}元</text>
				</view>
				<!-- 限时抢 -->
				<view class="con-cmd" v-if='item.promotion_type == 4'>
					<cmdRrogress :percent="item.limited_ready_prople/item.limited_prople" custom>
						<view class="sm">
							已抢<text>{{item.limited_ready_prople}}</text>位
						</view>
					</cmdRrogress>
				</view>


			</view>
		</view>



	</view>
</template>

<script>
	// import goodlist from '@/components/mine/goods-row.vue'
	import './hairdressing.scss'
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	import cmdRrogress from "@/components/cmd-progress/cmd-progress.vue"
	import searchAny from '@/components/my-search/my-search.vue'
	export default {
		components: {
			searchAny,
			uniRate,
			cmdRrogress
		},
		data() {
			return {
				menue: true,
				// 一级功能列表
				gnlist: [],
				// 一级功能列表更多
				gnlistmore: [],
				// 热门项目
				bannerlist: [

				],
				// 高亮id
				ids: 'a99999999',

				options: Object,
				// 指示点颜色
				colors: '#e01818',
				headlist: [],
				shoplists: [{
					prople: '2000',
					image: '../../static/image/shop/shop-1.jpg',
					shopname: '艾美世界家',
					address: '山西大医院',
					start: '3.5',
					labels: '便签',
					goodssprice: '998',
					newgoodssprice: '398',
					goodsname: '芳香精油乳腺疏通',
					othergoods: '酒槽鼻修护套餐',
					othergoodsprices: "100",
				}],
				detail: [],
				distance: [],
				imageurl: this.global.demao.domain.videoUrl
			};
		},
		filters: {
			fixed: function(e) {
				return Number(e).toFixed(2)
			}
		},
		methods: {
			// 跳转商品详情
			toDetail(e, f) {
				uni.navigateTo({
					url: "/pages/home/goods-detail/goods-detail?goods_id=" + e + "&&head=" + f
				})
			},


			// 高亮id
			exchanges(e) {
				this.ids = 'a' + e
				if (this.menue == false) {
					this.menue = true
				}
				this.init(e)
			},

			menushow() {
				this.menue == true ? this.menue = false : this.menue = true;
			},
			menuDetail() {
				uni.navigateTo({
					url: "/pages/home/menu-details/menu-details"
				})
			},
			init(e) {
				this.global.request.post({
					url: 'mt_sort',
					method: 'GET',
					data: {
						t_id: e==99999999 ? "" : e,
						lat1: this.options.lat,
						lng1: this.options.lng
					},
					success: res => {
						console.log({
							a: "大分类详情",
							res: res
						})
 

						this.detail = res.data2
						let a = [{
							id: 99999999,
							name: '精选'
						}]
						res.data2.forEach((item, index) => {
							a.push({
								name: item.t_name,
								id: item.t_id
							})
						})
						this.headlist = a
						// this.ids = 'a' + this.options.runid  

						this.distance = res.data1
					}
				})
			}

		},
		onLoad(options) {
			this.options = options;
			this.global.utils.sethead(options.head)
			this.init(options.runid)
			if(options.min){
				this.ids="a"+options.runid;
			}
		}
	}
</script>

<style lang="scss">
	.newbox {
		margin-top: 20rpx;
		overflow: hidden;

		.down {
			height: 64rpx;
			background: #FFFFFF;
			width: 60rpx;
			text-align: center;
			line-height: 64rpx;
		}

		.menu {
			overflow: hidden;
			white-space: nowrap;
			border-bottom: 1rpx solid $any-zol;
			width: 95%;
			margin: 0 0 0 20rpx;

			.scroll-list {
				width: 100%;

				.menu-list {
					display: inline-block;
					padding: 10rpx 20rpx;
					border-radius: 50rpx;
					font-size: $uni-font-size-lg;
				}
			}
		}

		.menu1 {
			overflow: hidden;
			border-bottom: 1rpx solid $any-zol;
			width: 95%;
			margin: 0 0 0 20rpx;

			.scroll-list {
				width: 100%;

				.menu-list {
					display: inline-block;
					padding: 10rpx 20rpx;
					border-radius: 50rpx;
					font-size: $uni-font-size-lg;
				}
			}
		}

		.active {
			color: $any-col;
			position: relative;
		}

		.active:after {
			content: '';
			display: block;
			position: absolute;
			top: 55rpx;
			left: 10%;
			width: 80%;
			height: 8rpx;
			background: $any-col;
		}
	}


	// 商品列表
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
