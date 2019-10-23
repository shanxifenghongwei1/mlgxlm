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
				<image src="" mode=""></image>
				<view class="">
					
				</view>
			</view>
			<view class="shop-card-con">
				<view class="">
					
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import './shop-detial.scss'
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	export default {
		components: {
			uniRate
		},
		data() {
			return {
				shopid:null,
				// banner图
				bannerlist: [
					'../../../static/image/banner/1.jpg', '../../../static/image/banner/2.jpg', '../../../static/image/banner/3.jpg',
					'../../../static/image/banner/4.jpg'
				],
				
			};
		},
		onLoad(e){
			console.log(e);
			this.shopid=e.id;
		}
	}
</script>

<style lang="scss">
	.header-nav{
		width: 60rpx;
		height: 80rpx;
		margin-top: -60rpx;
	}
	.coupon{
		width: 100%;
		background: #ffffff;
		height: 88rpx;
		@extend .any-flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 3%;
		box-sizing: border-box;
		color: $any-col;
		box-shadow:#cccccc 0px 0px 10rpx;
		
		.coupon-left{
			@extend .any-flex;
			align-items: center;
		}
		.coupon-left view{
			background:pink;
			border: 1rpx solid $any-col;
			font-size: $uni-font-size-base;
			padding: 0 5rpx;
			margin-left: 10rpx;
		}
		.icon-manjian{
			width: 35rpx;
			height: 35rpx;
		}
		.icon-left{
			width: 13rpx;
			height: 22rpx;
			margin-left: 10rpx;
		}
		.coupon-num{
			@extend .any-flex;
			font-size: $uni-font-size-base;
			color: #858585;
			align-items: center;
		}
	}
	.shop-card{
		width: 100%;
		height: 315rpx;
		box-shadow:#cccccc 0px 0px 10rpx;
		padding: 22rpx;
		box-sizing: border-box;
		background: pink;
	}

</style>
