<template>
	<!-- 分销商品详情页面 -->
	<view class="">
		<view class="banner">
			<mySwiper :bannerlist="detail.re_goodsShopInfo.re_goods_planting_picture"></mySwiper>
		</view>
		<view class="goods-detail any-flex">
			<view class="info-list big">
				￥{{detail.re_goodsShopInfo.re_goods_price}}
			</view>
			<view class="info-list base">
				<text class="tag" v-if="detail.re_goodsShopInfo.is_distribution">可分销购买</text>{{detail.re_goodsShopInfo.re_goods_name}}
			</view>
			<view class="info-list base any-flex">
				<text>规格类型：正常规格</text>
				<text>月销：{{detail.re_goodsShopInfo.re_goods_volume}}</text>
				<text>库存剩余：{{detail.re_goodsShopInfo.re_goods_stock}}</text>
			</view>
			<view class="info-list base mul">
				商品生产时间：{{detail.re_goodsShopInfo.re_production_time*1000|time()}}
			</view>
			<view class="info-list base mul">
				商品到期时间：{{detail.re_goodsShopInfo.re_expiration_time*1000|time()}}
			</view>
			<view class="info-list base mul">
				商品功效：{{detail.re_goodsShopInfo.re_goods_introduction}}
			</view>
			<view class="info-list base mul">
				商品地址：{{detail.re_goodsShopInfo.shop_address_provice+detail.re_goodsShopInfo.shop_address_city+detail.re_goodsShopInfo.shop_address_area}}
			</view>
		</view>
		<view class="big-detail">
			<view class="goShop">
				<view class="goShop-pic">
					<image :src="picUrl + detail.re_goodsShopInfo.shop_img" mode=""></image>
				</view>
				<view class="goShop-name">
					<view class="">
						{{detail.re_goodsShopInfo.shop_name}}
					</view>
					<view class="">
						<uniRate :value="detail.re_goodsShopInfo.shop_star" size="15"></uniRate>
					</view>
				</view>
				<view class="goShop-where" @click="toshop">
					<view class="box">
						进店逛逛
					</view>
				</view>
			</view>
		</view>
		
		
		
		<view class="shop-pic-detail">
			<view class="shop-detail-title lg wei" style="margin: 20rpx 0;">
				图文详情
			</view>
			<view class="pic-image-lg">
				<block v-for="(item,index) in detail.re_goodsShopInfo.re_goods_picture_detail" :key="index">
					<image :src="picUrl+item" mode="widthFix"></image>
				</block>
			</view>
		</view>
		

		<view class="eval" v-if="detail.re_evaluateInfo_count>0">
			<view class="title lg">
				<text class="title-con wei">全部评价（{{detail.re_evaluateInfo_count}}）</text>
			</view>
			
			<view class="li" v-for="(item,index) in detail.re_evaluateInfo" :key="index" v-if="index<3">
				<view class="top">
				
					<image class="canve" :src="item.wx_headimg" mode=""></image>
				
					<view class="name">
						{{item.wx_name}}
					</view>
				</view>
				<view class="con">
					{{item.comment}}
				</view>
			</view>
		</view>
		<view class="emit">
			
		</view>
		<view class="topay">
			<goodsNav :fill="true" :options="options_nav" :button-group="buttonGroup" @click="pay" @butt="butt"></goodsNav>
		</view>
	</view>
</template>

<script>
	import mySwiper from "@/components/mine/my-swiper";
	import uniRate from "@/components/uni-rate/uni-rate.vue";
	import  goods from "@/components/mine/goods.vue";
	import goodsNav from "@/components/uni-goods-nav/uni-goods-nav.vue"
	export default {
		components: {
			mySwiper,uniRate,goods,goodsNav
		},
		data() {
			return {
				state: true,
				goods_list:[1,2,3,4],
				options:{},
				options_nav: [{
					icon: '/static/image/home.png',
					text: '首页'
				},{
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/kefu.png',
					text: '客服'
				}, {
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png',
					text: '店铺'
				}
				],
				buttonGroup: [{
						text: '立即购买',
						backgroundColor: '#ff0000',
						color: '#fff'
					}
				],
				detail:{},
				picUrl:this.global.demao.domain.videoUrl
			}
		},
		methods: {
			toshop(){
				this.global.utils.jump(5)
			},
			trans() {
				this.state = this.state ? false : true
			},
			pay(e) {
				console.log(e)
				if (e.index === 0) {
					this.global.utils.jump(2,'/pages/home/home')
				} else if (e.index === 1) {
					uni.makePhoneCall({
						phoneNumber: this.detail.re_goodsShopInfo.shop_phone,
						success(res) {
								
						}
					})
				} else {
					this.global.utils.jump(5)
				}
			},
			butt(e) {
				this.global.login_state.login_state().then((res) => {
					if (res) {
						console.log(this.options.re_goods_id)
						this.global.utils.jump(1,"/pages/home/retail_home/make_order?re_goods_id="+this.options.re_goods_id)
					}
				})
			},
			init(){
				
				// 获取商品详细信息
				let data={};
				data.re_goods_id=this.options.re_goods_id;
				this.global.request.post({
					url:'index_reseller_goodsDetail',
					data:data,
					success:res=>{
						res.re_goodsShopInfo.re_goods_planting_picture=res.re_goodsShopInfo.re_goods_planting_picture?res.re_goodsShopInfo.re_goods_planting_picture.substr(0, res.re_goodsShopInfo.re_goods_planting_picture.length - 1).split(","):[];
						res.re_goodsShopInfo.re_goods_picture_detail=res.re_goodsShopInfo.re_goods_picture_detail?res.re_goodsShopInfo.re_goods_picture_detail.substr(0, res.re_goodsShopInfo.re_goods_picture_detail.length - 1).split(","):[];
						console.log(res)
						this.detail=res;
					}
				})
			}
		},
		onLoad(options){
			console.log(options)
			this.options=options;
			this.init();
		}
	}
</script>

<style lang="scss">

	.c {
		width: 100rpx;
		height: 100rpx;
		background: red;
	}

	.red {
		color: $any-col;
	}

	.big {
		font-size: 45rpx;
	}

	.lg {
		font-size: $uni-font-size-lg;
	}

	.base {
		font-size: $uni-font-size-base;
	}

	.sm {
		font-size: $uni-font-size-sm;
	}

	.ccc {
		color: #cccccc;
	}

	.mul {
		@include multi-row-apostrophe(1);
	}

	.tag {
		padding: 5rpx 20rpx;
		border-radius: 50rpx;
		background: $any-col;
		;
	}

	.wei {
		font-weight: bold;
	}
	.emit{
		width: 100%;
		height: 120rpx;
	}

	.goods-detail {
		width: 100%;
		height: 400rpx;
		background: #FF5D5D;
		padding: 20rpx 3%;
		box-sizing: border-box;
		justify-content: space-between;
		flex-direction: column;
		align-items: flex-start;
		color: #ffffff;

		.info-list {
			width: 100%;
			justify-content: space-between;
		}
	}
	.big-detail{
		padding: 20rpx 0;
		box-shadow: 0rpx 0rpx 10rpx #cccccc;
		margin-top: 20rpx;
	}
	.shop-detail-title{
		border-left: 5rpx solid $any-col;
		padding-left:30rpx;
		box-sizing: border-box;
		margin: 10rpx 0;
	}
	.goShop {
		width: 100%;
		padding: 0 3%;
		background: #ffffff;
		@extend .any-flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;

		.goShop-pic {
			width: 90rpx;
			height: 90rpx;
			background: yellow;
border-radius: 50%;
			image {
				width: 90rpx;
				height: 90rpx;
				border-radius: 50%;
			}
		}

		.goShop-name {
			width: 450rpx;
			height: 90rpx;
			padding: 10rpx 0rpx 10rpx 30rpx;
			@extend .any-flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
			font-size: $uni-font-size-base;
			box-sizing: border-box;
		}

		.goShop-where {
			flex-grow: 1;
			height: 90rpx;
			background: #ffffff;

			.box {
				display: inline-block;
				padding: 3rpx 10rpx;
				border-radius: 20rpx;
				background: $any-col;
				font-size: $uni-font-size-base;
				float: right;
				margin-top: 20rpx;
				color: #ffffff;
			}
		}
	}

	.shop-pic-detail {
		width: 100%;
		padding: 10rpx 3% 20rpx;
		box-sizing: border-box;

		.pic-image {
			width: 100%;
			height: 500rpx;
			overflow: hidden;
			margin-top: 10rpx;
			image{
				width: 100%;
			}
		}
		
		.pic-image-lg {
			width: 100%;
			margin-top: 10rpx;
			image{
				width: 100%;
			}
		}

		.lg-state {
			width: 100%;
			@extend .any-flex;
			justify-content: center;
			align-items: center;
			padding: 20rpx;
		}

		.lg-state view {
			font-size: $uni-font-size-base;
		}

		.lg-state image {
			width: 14rpx;
			margin-left: 15rpx;
		}
	}
	.eval{
		width: 100%;
		background: #ffffff;
		margin-top: 20rpx;
		box-shadow: 0rpx 0rpx 10rpx #cccccc;
		.title{
			width: 100%;
			height: 100rpx;
			padding: 20rpx 3%;
			box-sizing: border-box;
			@extend  .any-flex;
			align-items: center;
			border-bottom: 1rpx solid #CDCDCD;
		}
		.title-con{
			border-left: 5rpx solid $any-col;
			padding-left: 20rpx;
			box-sizing: border-box;
		}
		.li{
			width: 100%;
			border-bottom: 1rpx solid #CDCDCD;
			padding: 10rpx 3%;
			box-sizing: border-box;
			.top {
				width: 100%;
				height: 70rpx;
				@extend .any-flex;
			}
			
			.canve {
				width: 70rpx;
				height: 70rpx;
				border-radius: 50%;
			}
			
			.name {
				max-width: 400rpx;
				height: 100%;
				font-size: $uni-font-size-base;
				line-height: 70rpx;
				margin-left: 20rpx;
			}
			
			.con {
				width: 100%;
				word-break: break-all;
				@include multi-row-apostrophe(2);
				font-size: $uni-font-size-base;
				margin: 8rpx 0;
			}
			
			.bottom {
				width: 100%;
				font-size: $uni-font-size-sm;
				@extend .any-flex;
				justify-content: space-between;
				align-items: center;
				color: #8C8C8C;
			
				.left {
					width: 50%;
					height: 100%;
				}
			
				.right {
					height: 100%;
					@extend .any-flex;
			
					view {
						@extend .any-flex;
					}
			
					view:nth-child(2) {
						margin-left: 20rpx;
					}
			
					view:nth-child(2).active {
						color: $any-col;
					}
			
					.iconfont {
						margin-right: 10rpx;
						font-size: 22rpx;
					}
				}
			}
		}
		.lg-state {
			width: 100%;
			@extend .any-flex;
			justify-content: center;
			align-items: center;
			padding: 20rpx;
		}
		
		.lg-state view {
			font-size: $uni-font-size-base;
		}
		
		.lg-state image {
			width: 14rpx;
			margin-left: 15rpx;
			transform: rotateZ(180deg);
		}
	}
	.good_shop{
		width: 100%;
		margin-top: 10rpx;
		image{
			width: 100%;
		}
	}
	
	.recommend{
		width: 100%;
	}
	
	.topay{
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
	}
</style>
