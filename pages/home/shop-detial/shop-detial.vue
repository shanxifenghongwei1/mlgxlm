<template>
	<view>
		<!-- banner图 -->
		<view class="banner">
			<swiper :autoplay="true" :interval="2000" :duration="1000">
				<swiper-item v-for="(item ,index) in bannerlist" :key='index' class="banner-item">
					<view class="swiper-item">
						<image :src="item" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<view class="shop-some-message">
			<view class="header-nav">

			</view>
			<view class="head-run"></view>
			<view class="shop-name">山东爱美食家美容中心</view>
			<view class="shop-start">
				<uni-rate :disabled='false' margin='2' size="10" max='5' :value="item.start" color="#7f7f7f" @change='onChange'
				 active-color="#ffb540" />
			</view>
			<view class="some-message">sdasdada</view>
			<view class="shop-obj">
				<view class="obj"> <text>特色项目</text> 乳腺疏通、激光美肤 </view>
				<view class="obj"><text>夤夜时间</text> 周一至周日08:30-19:00</view>
			</view>
			<view class="serve">特色服务</view>
			<view class="serve-message">
				<view class=""><text class="icon iconfont icon-xuanzhong"></text> 有车位</view>
				<view class=""><text class="icon iconfont icon-xuanzhong"></text> 有车位</view>
				<view class=""><text class="icon iconfont icon-xuanzhong"></text> 有车位</view>
				<view class=""><text class="icon iconfont icon-xuanzhong"></text> 有车位</view>
				<view class=""><text class="icon iconfont icon-xuanzhong"></text> 有车位</view>
				<view class=""><text class="icon iconfont icon-xuanzhong"></text> 有车位</view>

			</view>
			<view class="address"> <text class="iconfont icon-dizhi"></text> 山东济南市天成步行街138号 </view>
		</view>

		<!-- 优惠券的导航条 -->
		<view class="coupon">
			<view class="coupon-left">
				<image src="/static/image/other/icon-manjian.png" mode="" class="icon-manjian"></image>
				<view class="">
					满20减10
				</view>
				<view class="">
					满40减18
				</view>
			</view>
			<view class="coupon-num">
				<view class="">
					6张
				</view>
				<image class="icon-left" src="/static/image/other/icon-left.png" mode=""></image>
			</view>
		</view>

		<!-- 商家会员卡 -->
		<view class="shop-card">
			<view class="shop-card-tit">
				<image src="/static/image/other/icon-shop-card.png" mode=""></image>
				<view class="">
					商家会员卡
				</view>
			</view>
			<view class="shop-card-con">
				<image src="/static/image/shop/shop-1.jpg" mode=""></image>
				<image src="/static/image/shop/shop-1.jpg" mode=""></image>
				<image src="/static/image/shop/shop-1.jpg" mode=""></image>
				<image src="/static/image/shop/shop-1.jpg" mode=""></image>
			</view>
		</view>

		<!-- 精选商品 -->
		<view class="jingxuan">
			<view class="bac-img">
				<image src="/static/image/other/shopings.png" mode="widthFix" class="bac-imgs"></image>
			</view>
			<view class="" style="margin-top: 40rpx;">
				<cateMore :menulist="menuList" @cateid="getCateId" ></cateMore>
			</view>
			<view class="">
				<goods></goods>
			</view>
		</view>
		
		<!-- 成功案例 -->
		<view class="case-succ">
			<topTitle :titCon="titCon"></topTitle>
			<caseSucc :caseList="caseList"></caseSucc>
		</view>
		
		<!-- 商品评价 -->
		<view class="evaluate">
			<view class="evaluate-top">
				<topTitle :titCon="titCon1"></topTitle>
			</view>
			<view style="margin-top: 20rpx;">
				<evaluate></evaluate>
			</view>
			
		</view>
		
		<view class="shop-bottom">
			
		</view>
	</view>
</template>

<script>
	import './shop-detial.scss'
	import uniRate from '@/components/uni-rate/uni-rate.vue';
	import cateMore from "@/components/mine/cate-more.vue";
	import goods from "@/components/mine/goods.vue";
	import caseSucc from "@/components/mine/case-success.vue";
	import topTitle from "@/components/mine/top-title.vue";
	import evaluate from "@/components/mine/evaluate.vue"
	export default {
		components: {
			uniRate,
			cateMore,
			goods,
			caseSucc,
			topTitle,
			evaluate
			
			
		},
		data() {
			return {
				shopid: null,
				// banner图
				bannerlist: [
					'../../../static/image/banner/1.jpg', '../../../static/image/banner/2.jpg', '../../../static/image/banner/3.jpg',
					'../../../static/image/banner/4.jpg'
				],

				cateid:1,
				menuList:[
					{
							id: '1',
							text: '精选'
						}, {
							id: '2',
							text: '热玛吉'
						}, {
							id: '3',
							text: '激光除皱'
						},
						{
							id: '4',
							text: '玻尿酸'
						}, {
							id: '5',
							text: '热拉提'
						}, {
							id: '6',
							text: '假数据'
						}, {
							id: '7',
							text: '用来试验的'
						}, {
							id: '8',
							text: '用来凑数'
						}
				],
				caseList:[{
					pic:"/static/image/shop/shop-1.jpg",
					prepic:"/static/image/shop/shop-1.jpg",
					age:"23",
					state:"面部松弛"
				},{
					pic:"/static/image/shop/shop-1.jpg",
					prepic:"/static/image/shop/shop-1.jpg",
					age:"23",
					state:"面部松弛"
				}],
				titCon:{
					name:"成功案例 (99)",
					more:"更多案例",
					link:"/pages/home/hairdressing/hairdressing"
				},
				titCon1:{
					name:"商品评价 (99)",
					more:"更多评价",
					link:"/pages/home/hairdressing/hairdressing"
				}
			};
		},
		methods:{
			getCateId(data){
				console.log("这是父组件得到的值"+data)
				this.cateid=data;
			}
		},
		onLoad(e) {
			console.log(e);
			this.shopid = e.id;
		}
	}
</script>

<style lang="scss">
	.header-nav {
		width: 60rpx;
		height: 80rpx;
		margin-top: -60rpx;
	}

	.coupon {
		width: 100%;
		background: #ffffff;
		height: 88rpx;
		@extend .any-flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 3%;
		box-sizing: border-box;
		color: $any-col;
		box-shadow: $any-zol 0px 0px 10rpx;

		.coupon-left {
			@extend .any-flex;
			align-items: center;
		}

		.coupon-left view {
			background: pink;
			border: 1rpx solid $any-col;
			font-size: $uni-font-size-base;
			padding: 0 5rpx;
			margin-left: 10rpx;
		}

		.icon-manjian {
			width: 35rpx;
			height: 35rpx;
		}

		.icon-left {
			width: 13rpx;
			height: 22rpx;
			margin-left: 10rpx;
		}

		.coupon-num {
			@extend .any-flex;
			font-size: $uni-font-size-base;
			color: #858585;
			align-items: center;
		}
	}

	.shop-card {
		width: 100%;
		box-shadow: $any-zol 0px 0px 10rpx;
		padding: 22rpx;
		box-sizing: border-box;
		background: #ffffff;
		margin-top: 20rpx;

		.shop-card-tit {
			@extend .any-flex;
		}

		.shop-card-tit image {
			width: 34rpx;
			height: 29rpx;
		}

		.shop-card-tit view {
			font-size: $uni-font-size-lg;
			font-weight: bold;
			margin-left: 10rpx;
		}

		.shop-card-con image {
			display: inline-block;
			margin-top: 20rpx;
			width: 340rpx;
			height: 210rpx;
		}

		.shop-card-con image:nth-child(2n) {
			margin-left: 25rpx;
		}
	}

	.jingxuan {
		.bac-img {
			margin: 20rpx 0;
			height: 74rpx;
			width: 100%;

			image {
				width: 100%;
			}
		}
	}


	.case-succ{
		width: 100%;
		padding: 20rpx 3% 20rpx;
		box-sizing: border-box;
		box-shadow: $any-zol 0px 0px 10rpx;
		margin-top: 30rpx;
	}


	.evaluate{
		width: 100%;
		padding: 20rpx 0 25rpx;
		box-sizing: border-box;
		box-shadow: $any-zol 0px 0px 10rpx;
		margin-top: 40rpx;
	}
	.evaluate-top{
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
	}
	
	
	.evaluate-li{
		width: 100%;
		height: 160rpx;
		background: pink;
		border-top: 2rpx solid #cdcdcd;
	}
	.shop-bottom {
		width: 100%;
		height: 100rpx;
	}
</style>
