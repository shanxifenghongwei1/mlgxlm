<template>
	<!-- 我得店铺  用于我得收藏，我的足迹 -->
	<view class="store">
		<!-- <view class="con-box">
			<image src="" mode="widthFix"></image>
			<view class="con">
				<view class="title">
					爱美世家
				</view>
				<view class="star">
					<uni-rate :disabled='false' margin='2' size="10" max='5' :value="3" color="#7f7f7f"
					 active-color="#ffb540" />
				</view>
				<view class="contex">
					<text class="icon iconfont icon-xiangmu">
						
					</text>
					面部管理
				</view>
				<view class="address">	
					<text class="icon iconfont icon-dizhi-01">
						
					</text>
					太原市小店区
				</view>
			</view>
		</view> -->
		
		<view class="con-box" v-for="(item) in store" :key="index">
			<image :src="picUrl+item.picture" mode="widthFix"></image>
			<view class="con">
				<view class="title">
					{{item.shop_name}}
				</view>
				<view class="star">
					<uni-rate :disabled='false' margin='2' size="10" max='5' :value="item.shop_score" color="#7f7f7f"
					 active-color="#ffb540" />
				</view>
				<view class="contex">
					<text class="icon iconfont icon-xiangmu">
						
					</text>
					{{}}
				</view>
				<view class="address">	
					<text class="icon iconfont icon-dizhi-01">
						
					</text>
					{{item.shop_address_provice+item.shop_address_city+item.shop_address_area}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import demo from "@/common/js/demao.js"
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	export default {
		name: 'shoplist',
		components: {
			uniRate
		},
		props: {
			store: {
				type: Array, //商品数据列表
				default: []
			}
		},
		data() {
			return {
				dataUrl: "",
				picUrl: "",
			};
		},
		methods: {
			toDetail(e) {
				console.log(e);
				uni.navigateTo({
					url: "/pages/home/shop-detial/shop-detial?id=" + e
				})
			}
		},
		created() {
			this.picUrl = demo.domain.videoUrl;
		}
	}
</script>

<style lang="scss">
	.store{
		width: 100%;
		.con-box{
			width: 710rpx;
			height: 200rpx;
			border-radius: 10rpx;
			box-shadow: 0rpx 0rpx 10rpx #cfcdcd;
			padding: 28rpx;
			box-sizing: border-box;
			@extend .any-flex;
			justify-content: space-between;
			margin: 0 auto;
			margin-top: 20rpx;
			image{
				width: 150rpx;
				height: 140rpx;
				background: pink;
			}
			.con{
				width: 450rpx;
				height: 100%;
				@extend .any-flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: space-between;
				.title{
					font-size: $uni-font-size-base;
					color: $any-col;
					font-weight: bold;
				}
				.contex{
					font-size: $uni-font-size-sm;
				}
				.address{
					font-size: $uni-font-size-sm;
					color: $any-col;
				}
				.iconfont{
					font-size: $uni-font-size-sm;
					margin-right: 20rpx;
					color: $any-col;
				}
			}
		}
	}
</style>
