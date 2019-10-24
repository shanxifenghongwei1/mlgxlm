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
						<image src="/static/image/home.png" mode=""></image>
						<view class="">
							张三
						</view>
					</view>
					<view class="u-info">
						<view class="">
							还差一人拼团
						</view>
						<view class="">
							剩余 23:24:00
						</view>
					</view>
					<view class="u-but">
						去拼团
					</view>
				</view>
			</view>
		</view>
	</view>



</template>

<script>
	import './goods-detail.scss';
	import mySwiper from "@/components/mine/my-swiper.vue";
	export default {
		components: {
			mySwiper
		},
		data() {
			return {
				bannerlist: [
					'/static/image/banner/1.jpg', '/static/image/banner/2.jpg', '/static/image/banner/3.jpg',
					'/static/image/banner/4.jpg'
				],
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
