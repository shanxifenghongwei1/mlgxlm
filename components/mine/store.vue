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
		
		<view class="con-box" v-for="(item,index) in store" :key="index" @click="toDetail(item.shop_id,item.shop_name)">
			<image :src="picUrl+item.shop_img" mode="widthFix"></image>
			<view class="con">
				<view class="title">
					<view class="left">
						{{item.shop_name}}
					</view>
					<view class="right">
						进店看看
					</view>
				
				</view>
				<view class="star">
					<uni-rate :disabled='false' margin='2' size="10" max='5' :value="item.shop_score" color="#7f7f7f"
					 active-color="#ffb540" />
				</view>
				<view class="contex">
					<text class="icon iconfont icon-xiangmu">
						
					</text>
					{{item.t_name}}
					<view style="float: right;" v-if="store_cate==2">已售{{item.shop_volume}}次</view>
					<view style="float: right;" v-if="store_cate==1&&item.juli">距您约{{item.juli}}Km</view>
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
			},
			store_cate: {
				type: Number, //商品数据列表
				default:1
			}
		},
		data() {
			return {
				dataUrl: "",
				picUrl: "",
			};
		},
		methods: {
			toDetail(e,f) {
				uni.navigateTo({
					url: "/pages/home/shop-detial/shop-detial?shop_id=" + e + "&&head=" + f 
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
					width: 100%;
					font-size: $uni-font-size-base;
					color: $any-col;
					font-weight: bold;
					@extend .any-flex;
					justify-content: space-between;
					.left{
						width: 60%;
					}
					.right{
						display: inline-block;
						padding: 3rpx 18rpx;
						background:$any-col;
						color: #ffffff;
						border-radius: 20rpx;
					}
				}
				.contex{
					width: 100%;
					font-size: $uni-font-size-sm;
				}
				.address{
					width: 100%;
					font-size: $uni-font-size-sm;
					color: $any-col;
				}
				.iconfont{
					width: 100%;
					font-size: $uni-font-size-sm;
					margin-right: 20rpx;
					color: $any-col;
				}
			}
		}
	}
</style>
