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
		<view class="pos"></view>
		<view class="shop-some-message">
			<view class="head-run">这是头</view>
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
			</view>
			<view class="address"> <text class="iconfont icon-dizhi"></text> 山东济南市天成步行街138号 </view>
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
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	export default {
		components: {
			uniRate
		},
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
