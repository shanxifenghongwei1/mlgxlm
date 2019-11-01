<!-- 商品详情页面 -->

<template>

	<view>
		<!-- 轮播图 -->
		<mySwiper :bannerlist="bannerlist"></mySwiper>

		<!-- 商品标题 -->
		<view class="goods-title">
			<view class="goods-info">
				<view class="goods-name">
					芳香精油乳腺疏通
				</view>
				<view class="goods-add">
					爱美世家
				</view>
			</view>
			<view class="goods-num">
				已售100
			</view>
		</view>

		<!-- 价格 -->
		<view class="goods-price">
			<view class="NewPrice">
				￥199
			</view>
			<view class="OldPrice">
				￥398
			</view>
			<view class="manJian">
				减198元
			</view>
		</view>

		<!-- 拼团 -->
		<view class="goods-team">
			<view class="title">
				2人在拼团，客直接参与
			</view>
			<view class="team-list">
				<view class="list-li">
					<view class="u-team">
						<image src="/static/image/shop/shop-1.jpg" mode=""></image>
						<view class="">
							张三
						</view>
					</view>
					<view class="u-info">
						<view class="">
							还差
							<view style="display: inline-block;background: $any-col;">
								1人
							</view>
							拼团
						</view>
						<view class="">
							剩余 23:24:00
						</view>
					</view>
					<view class="u-btn">
						去拼团
					</view>
				</view>
				<view class="list-li">
					<view class="u-team">
						<image src="/static/image/shop/shop-1.jpg" mode=""></image>
						<view class="">
							张三
						</view>
					</view>
					<view class="u-info">
						<view class="">
							还差
							<view style="display: inline-block;background: $any-col;">
								1人
							</view>
							拼团
						</view>
						<view class="">
							剩余 23:24:00
						</view>
					</view>
					<view class="u-btn">
						去拼团
					</view>
				</view>
			</view>
		</view>

		<!-- 评价 -->
		<view class="eval">
			<view class="eval-tit">
				<topTit :titCon="titCon"></topTit>
			</view>
			<evaluate></evaluate>
		</view>

		<view class="goShop">
			<view class="goShop-pic">

			</view>
			<view class="goShop-name">
				<view class="">
					爱美世家
				</view>
				<view class="">
					<uniRate value="3.5" size="20"></uniRate>
				</view>
			</view>
			<view class="goShop-where">
				<view class="box">
					进店逛逛
				</view>
			</view>
		</view>


		<!-- 店铺详情 -->
		<view class="content">
			<view class="eval-tit">
				<topTit :titCon="titCon"></topTit>
			</view>
			<view class="shop-detail">
				<view class="shop-detail-title">
					门店详情
				</view>
				<image src="/static/image/banner/1.jpg" mode="widthFix"></image>
				<image src="/static/image/banner/2.jpg" mode="widthFix"></image>
			</view>
			<view class="shop-detail">
				<view class="shop-detail-title">
					产品详情
				</view>
				<image src="/static/image/banner/1.jpg" mode="widthFix"></image>
				<image src="/static/image/banner/2.jpg" mode="widthFix"></image>
			</view>
			<view class="shop-detail">
				<view class="shop-detail-title">
					消费提醒
				</view>
				<image src="/static/image/banner/1.jpg" mode="widthFix"></image>
				<image src="/static/image/banner/2.jpg" mode="widthFix"></image>
			</view>

			<view class="shop-pic-detail">
				<view class="shop-detail-title">
					图文详情
				</view>
				<view :class="state?'pic-image':'pic-image-lg'  ">
					<image src="/static/image/banner/1.jpg" mode="widthFix"></image>
					<image src="/static/image/banner/2.jpg" mode="widthFix"></image>
				</view>
				<view class="lg-state" @click="trans">
					<view class="">
						查看更多图文详情
					</view>
					<image src="/static/image/other/icon-xiala.png" mode="widthFix" :class="state?'tea_arrowDown':'tea_arrowUp'"></image>
				</view>
			</view>
		</view>

		<view class="">
			<view class="bac-img">
				<image src="/static/image/other/shoping-remen.png" mode="widthFix" class="bac-imgs"></image>
			</view>
			<goodsList :more="false"></goodsList>
		</view>
		
		<!-- 空白 -->
		<view class="emit">
			
		</view>
		
		<!-- 支付 -->
		<view class="topay">
			<goodsNav :fill="true" :options="options_nav" :button-group="buttonGroup" @click="pay" @butt="butt"></goodsNav>
		</view>
	</view>



</template>

<script>
	import './goods-detail.scss';
	import mySwiper from "@/components/mine/my-swiper.vue";
	import evaluate from "@/components/mine/evaluate.vue";
	import topTit from "@/components/mine/top-title.vue";
	import uniRate from "@/components/uni-rate/uni-rate.vue";
	import goodsList from "@/components/mine/goods.vue";
	import goodsNav from "@/components/uni-goods-nav/uni-goods-nav.vue"

	export default {
		components: {
			mySwiper,
			evaluate,
			topTit,
			uniRate,
			goodsList,
			goodsNav
		},
		data() {
			return {
				options:{},
				bannerlist: [
					'/static/image/banner/1.jpg', '/static/image/banner/2.jpg', '/static/image/banner/3.jpg',
					'/static/image/banner/4.jpg'
				],
				titCon: {
					name: "商品评价（99）",
					more: "更多评价",
					link: "/pages/home/hairdressing/hairdressing",
					method: "navigateTo"
				},

				state: true,

				//nav参数
				options_nav: [{
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/kefu.png',
					text: '客服'
				}, {
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png',
					text: '店铺'
				}, {
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		methods: {
			trans() {
				this.state = this.state ? false : true
				console.log(this.state)
			},

			pay(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			butt(e) {
				this.options[2].info++
			}
		},
		onLoad(options) {
			console.log(options)
			this.options=options;
			this.global.utils.sethead(options.head)
		},
	}
</script>

<style>

</style>
