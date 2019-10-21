<template>
	<view>
		<!-- banner图 -->
		<view class="banner">
			<swiper :indicator-active-color='colors' :indicator-dots="true" :autoplay="true" :interval="2000" :duration="1000">
				<swiper-item v-for="(item ,index) in bannerlist" :key='index' class="banner-item">
					<view class="swiper-item">
						<image :src="item" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="shop-some-message">
			<view>这是头像预留</view>
			
			
			<view class="shop-name">山东爱美食家美容中心</view>
			<view>xingxing</view>
			<view class="some-message"></view>
			<view class="shop-obj">
				<view class="obj"></view>
				<view class="time"></view>
			</view>
			
			<view class="serve"></view>
			
			<view class="serve-message">
				<view class="icon"><text></text> 有车位</view>
			</view>
			
			<view class="address"> <text ></text> 山东济南市天成步行街138号 </view>
			
		</view>
	   
	   <!-- 优惠券的导航条 -->
	   <view class="coupon">
		   <view class="icon"><text class="coupon-name"></text></view>
		   
		   <view class="tail"> </view>
	   </view>
		
		
		
	</view>
</template>

<script>
	import './shop-detial.scss'
	export default {
		data() {
			return {
				// banner图
				bannerlist: [
					'../../../static/image/banner/1.jpg', '../../../static/image/banner/2.jpg', '../../../static/image/banner/3.jpg',
					'../../../static/image/banner/4.jpg'
				],
			};
		}
	}
</script>

<style lang="scss">

</style>
