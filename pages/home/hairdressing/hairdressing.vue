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
			
			<view class="newbox any-flex" style="align-items: flex-start;" v-if="options.runid!=3">
				<scroll-view :scroll-into-view='ids' :class="menue == true ? 'menu' : 'menu1' " scroll-x>
					<view class="scroll-list">
						<view @click="exchanges(item.id)" :id=" 'a'+ item.id " v-for="(item,index) in headlist" :key='index' :class=" 'a'+ item.id == ids ? 'active' : '' "
						 class="menu-list">{{item.name}}</view>
					</view>
				</scroll-view>
				<view class="down iconfont icon-icon-up" @click="menushow"></view>
			</view>
			
		</view>

		<shoplist myid="7" :shoplists="shoplists"></shoplist>
<!-- goods_id: 8
goods_name: "æ¼å¢æ¯ä»æµè¯"
juli: 11.013498746941801
market_price: "0.00"
picture: "/images/1575703348840952892.gif"
promotion_price: "10.00"
prople: 0
shop_id: 1
shop_name: "å¯å®ä¼çæµè¯åºéºç¾" -->

	</view>
</template>

<script>
	import './hairdressing.scss'
	import shoplist from '@/components/shoplist/shoplist.vue'
	import searchAny from '@/components/my-search/my-search.vue'
	export default {
		components: {
			searchAny,
			shoplist
		},
		data() {
			return {
				menue: true,
				// 一级功能列表
				gnlist: [{
						id: 1,
						text: '面部护理',
						picture: '../../../static/image/other/mianbu.png'
					},
					{
						id: 2,
						text: '抗衰除皱',
						picture: '../../../static/image/other/kangsui.png'
					},
					{
						id: 3,
						text: '塑性焕肤',
						picture: '../../../static/image/other/shuxing.png'
					},
					{
						id: 4,
						text: '美发美甲',
						picture: '../../../static/image/other/meifa.png'
					},
					{
						id: 5,
						text: '深度清洁',
						picture: '../../../static/image/other/shendu.png'
					},
				],
				// 一级功能列表更多
				gnlistmore: [{
						id: 1,
						text: '美白凝眸',
						picture: '../../../static/image/other/meibai.png'
					},
					{
						id: 2,
						text: '激光除皱',
						picture: '../../../static/image/other/jiguang.png'
					},
					{
						id: 3,
						text: '冰川补水',
						picture: '../../../static/image/other/bingchuan.png'
					},
					{
						id: 4,
						text: '韩式美甲',
						picture: '../../../static/image/other/meijia.png'
					},
					{
						id: 5,
						text: '磨砂气泡',
						picture: '../../../static/image/other/mosha.png'
					},
				],
				// 热门项目
				bannerlist: [
					'../../../static/image/banner/1.jpg', '../../../static/image/banner/2.jpg', '../../../static/image/banner/3.jpg',
					'../../../static/image/banner/4.jpg'
				],
				// 高亮id
				ids: 'a999',
				// 指示点颜色
				colors: '#e01818',
				headlist: [{
					id: 6,
					name: '精选'
				}, {
					id: 7,
					name: '除皱'
				}, {
					id: 8,
					name: '补水'
				}, {
					id: 9,
					name: '塑形'
				}, {
					id: 10,
					name: '美白'
				}],
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
		methods: {
			// 高亮id
			exchanges(e) {
				this.ids = 'a' + e
				if (this.menue == false) {
					this.menue = true
				}
			},
			
			menushow() {
				this.menue == true ? this.menue = false : this.menue = true;
			},
			menuDetail() {
				uni.navigateTo({
					url: "/pages/home/menu-details/menu-details"
				})
			},
			init(lat, lng, runid) {

				this.global.request.post({
					url: 'mt_sort',
					method: 'GET',
					data: {
						t_id: runid,
						lat1: lat,
						lng1: lng
					},
					success: res => {
						console.log({
							a: "大分类详情",
							res: res
						})
						this.detail = res.data1
						let a = [{
							id: 999,
							name: '精选'
						}]
						res.data1.forEach((item, index) => {
							a.push({
								name: item.t_name,
								id: item.t_id
							})
						})
						this.headlist = a
						this.distance = res.distance
					}
				})
			}

		},
		onLoad(options) {
			// console.log(options.lat,options.lng)
			this.init(options.lat, options.lng, options.runid)
			this.options = options;
			this.global.utils.sethead(options.head)
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
</style>
