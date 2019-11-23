<template>
	<!-- 分销商品详情页面 -->
	<view class="">
		<view class="banner">
			<mySwiper></mySwiper>
		</view>
		<view class="goods-detail any-flex">
			<view class="info-list big">
				￥3999.99
			</view>
			<view class="info-list base">
				<text class="tag">可分销购买</text>YIAN伊岸 紧致焕颜冻干粉 {专业美颜防护}
			</view>
			<view class="info-list base any-flex">
				<text>规格类型：正常规格</text>
				<text>月销：666</text>
				<text>库存剩余：1000</text>
			</view>
			<view class="info-list base mul">
				商品生产时间：2019年11月30日
			</view>
			<view class="info-list base mul">
				商品到期时间：2019年11月30日
			</view>
			<view class="info-list base mul">
				商品功效：有效欢颜肌肤，改善肌肤光泽度，增强肌肤饱和...
			</view>
			<view class="info-list base mul">
				商品地址：山西省太原市小店区天鑫花园
			</view>
		</view>
		<view class="big-detail">
			<view class="goShop">
				<view class="goShop-pic">
					<image src="/static/image/other/wx.png" mode=""></image>
				</view>
				<view class="goShop-name">
					<view class="">
						这是一个黑店
					</view>
					<view class="">
						<uniRate value="3.5" size="15"></uniRate>
					</view>
				</view>
				<view class="goShop-where" @click="toshop">
					<view class="box">
						进店逛逛
					</view>
				</view>
			</view>
			<view class="shop-pic-detail">
				<view class="shop-detail-title lg wei">
					图文详情
				</view>
				<view :class="state?'pic-image':'pic-image-lg'  ">
					<image src="/static/logo.png" mode="widthFix"></image>
					<image src="/static/logo.png" mode="widthFix"></image>
					<image src="/static/logo.png" mode="widthFix"></image>
					<image src="/static/logo.png" mode="widthFix"></image>
					<image src="/static/logo.png" mode="widthFix"></image>
					<image src="/static/logo.png" mode="widthFix"></image>
					<!-- <block v-for="(item,index) in good_detail.goodsInfo.goods_picture_detail" :key="index">
						<image :src="picUrl+item" mode="widthFix"></image>
						
					</block> -->
				</view>
				<view class="lg-state" @click="trans">
					<view class="">
						查看更多图文详情
					</view>
					<image src="/static/image/other/icon-xiala.png" mode="widthFix" :class="state?'tea_arrowDown':'tea_arrowUp'"></image>
				</view>
			</view>
		</view>
		

		<view class="eval">
			<view class="title lg">
				<text class="title-con wei">全部商品（99）</text>
			</view>
			
			<view class="li">
				<view class="top">
				
					<image class="canve" src="/static/image/other/person_nav.png" mode=""></image>
				
					<view class="name">
						刁民
					</view>
				</view>
				<view class="con">
					总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕
				</view>
			</view>
			<view class="li">
				<view class="top">
				
					<image class="canve" src="/static/image/other/person_nav.png" mode=""></image>
				
					<view class="name">
						刁民
					</view>
				</view>
				<view class="con">
					总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕
				</view>
			</view>
			<view class="lg-state">
				<view class="">
					查看更多评论
				</view>
				<image src="/static/image/other/icon-xiala.png" mode="widthFix" :class="state?'tea_arrowDown':'tea_arrowUp'"></image>
			</view>
		</view>
		
		<view class="good_shop">
			<image src="/static/image/shop/shop_image_show.png" mode="widthFix"></image>
		</view>
		
		<view class="recommend">
			<goods :titCon="goods_list" :more="false" :place="5"></goods> 
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
				]
			}
		},
		methods: {
			trans() {
				this.state = this.state ? false : true
			},
			pay(e) {
				console.log(e)
			// 	if (e.index === 0) {
			// 		uni.makePhoneCall({
			// 			phoneNumber: "18435105990",
			// 			success(res) {
			
			// 			}
			// 		})
			// 	} else if (e.index === 1) {
			// 		this.toshop()
			// 	} else {
			
			// 		this.global.utils.jump(2, "/pages/shopping/shopping")
			// 	}
			
			},
			butt(e) {
				this.global.utils.jump(1,"/pages/home/retail_home/make_order")
			// 	if (e.index === 0) {
			// 		console.log("加入购物车")
			// 		let data = {};
			// 		data.goods_id = this.options.goods_id;
			// 		data.buy_num = 1;
			// 		this.global.request.post({
			// 			url: this.global.demao.api.add_cart,
			// 			method: "GET",
			// 			data: data,
			// 			success: (res) => {
			// 				this.global.utils.showToast_my(res.msg)
			// 				this.findCar()
			// 			}
			// 		})
			
			// 	} else {
			// 		console.log("立即购买")
			// 		this.global.utils.jump(1,"/pages/pay/pay")
			// 	}
			},
		}
	}
</script>

<style lang="scss">
	@keyframes tea_arrow {
		0% {
			transform: rotate(180deg);
		}

		25% {
			transform: rotate(135deg);
		}

		50% {
			transform: rotate(90deg);
		}

		75% {
			transform: rotate(45deg);
		}

		100% {
			transform: rotate(0deg);
		}
	}

	@keyframes tea_arrow1 {
		0% {
			transform: rotateZ(0deg);
		}

		25% {
			transform: rotateZ(45deg);
		}

		50% {
			transform: rotateZ(90deg);
		}

		75% {
			transform: rotateZ(135deg);
		}

		100% {
			transform: rotateZ(180deg);
		}
	}

	.c {
		width: 100rpx;
		height: 100rpx;
		background: red;
	}

	.tea_arrowDown {
		animation: tea_arrow 0.3s linear;
		transform-origin: center center;
		transform: rotate(0deg);
	}

	.tea_arrowUp {
		animation: tea_arrow1 0.3s linear;
		transform-origin: center center;
		transform: rotate(180deg);
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
		padding-top: 20rpx;
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

			image {
				width: 90rpx;
				height: 90rpx;
				border-radius: 50%;
			}
		}

		.goShop-name {
			width: 450rpx;
			height: 90rpx;
			padding: 0 20rpx;
			@extend .any-flex;
			flex-direction: column;
			justify-content: center;
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
		height: 500rpx;
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
