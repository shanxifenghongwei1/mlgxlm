<template>
	<!-- 优惠券 -->
	<view class="page">
		<block v-for="(item,index) in list" :key="index">
			<block v-if="index>3 && index%4==0">
				<view class="advert"></view>
				<view class="shop-card">
					<view class="card-con">
						<view class="card-pic">
							<view style="text-align: center;" class="base">优惠券名称</view>
						<!-- 	<image :src="picUrl+i" mode="" v-for="(i,index) in item.picture" :key="index"></image> -->
						</view>
						<view class="card-name" style="text-align: center;">
							<view class="" >
								{{item.shop_name}}<text class="font-padd">|</text><text class="card">{{item.coupon_type?"折扣劵":"满减劵"}}</text>
							</view>
						</view>



						<view class="card-time" style="text-align: center;">
							使用时间{{item.create_time|time}}--{{item.expiration|time}}
						</view>
					</view>
					<image class="dit" src="/static/image/other/icon-dit.png" mode=""></image>
					<view class="card-size">
						<view class="price" v-if="!item.coupon_type">
							￥{{item.coupon_price}}
						</view>
						<view class="price" v-else>
							{{item.discount?item.discount:0}}
							<image src="/static/image/other/coupon_1.png" mode=""></image>
						</view>
						<view class="manJian" v-if="!item.coupon_type">
							满{{item.coupon_redouction}}元使用
						</view>
						
						<view class="draw" v-if="item.coupon_draw==4" @click="getCard(item.coupon_id)">
							点击领取
						</view>
						<view class="use" v-else @click="toDetail(item.goods_id,item.goods_name)">
							去使用
						</view>
						
					</view>
				</view>
			</block>
			<block v-else>

				<view class="shop-card">
					<view class="card-con">

						<view class="card-pic">
							<!-- <image :src="picUrl+i" mode="" v-for="(i,index) in item.picture" :key="index"></image> -->
							<view style="text-align: center;" class="base">优惠券名称</view>
						</view>
						
						<view class="card-name" style="text-align: center;">
							<view class="" >
								{{item.shop_name}}<text class="font-padd">|</text><text class="card">{{item.coupon_type?"折扣劵":"满减劵"}}</text>
							</view>
						</view>



						<view class="card-time" style="text-align: center;">
							使用时间{{item.create_time|time}}--{{item.expiration|time}}
						</view>
					</view>
					<image class="dit" src="/static/image/other/icon-dit.png" mode=""></image>
					<view class="card-size">
						<view class="price" v-if="!item.coupon_type">
							￥{{item.coupon_price}}
						</view>
						<view class="price" v-else>
							{{item.discount?item.discount:0}}
							<image src="/static/image/other/coupon_1.png" mode=""></image>
						</view>
						<view class="manJian" v-if="!item.coupon_type">
							满{{item.coupon_redouction}}元使用
						</view>
						<view class="draw" v-if="item.coupon_draw" @click="getCard(item.coupon_id)">
							点击领取
						</view>
						<view class="use" v-else @click="toDetail(item.goods_id,item.goods_name)">
							去使用
						</view>
					</view>
				</view>
			</block>
		</block>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: {},
				list: [],
				picUrl: ""
			}
		},
		methods: {
			getCard(e){
				console.log(e)
				let data={};
				data.coupon_id=e
				this.global.request.post({
					url: this.global.demao.api.couponadd,
					method: "GET",
					data: data,
					success: (res) => {
						console.log(res)
						if(res.msg=="领取优惠卷成功，快去使用吧!"){
							this.global.utils.showToast_my("领取优惠卷成功，快去使用吧!")
							this.list.forEach((v)=>{
								if(v.coupon_id==e){
									v.coupon_draw = false
								}
							})
						}
					}
				})
			},
			toDetail(e,f){
				this.global.utils.jump(1,"/pages/home/goods-detail/goods-detail?goods_id="+e+"&&head="+f)
			}
		},
		onLoad(options) {
			console.log(options);
			this.options=options;
			this.global.utils.sethead("优惠券")
			this.picUrl = this.global.demao.domain.picUrl
		},
		onShow() {
			// if(this.options.shop_id){
			// 	let data={};
			// 	data.shop_id=this.options.shop_id;
			// 	this.global.request.post({
			// 		url: this.global.demao.api.couponlist,
			// 		method: "GET",
			// 		data: data,
			// 		success: (res) => {
			// 			res.couponInfo.forEach((v) => {
			// 				v.picture = v.picture.split(",")
			// 			})
			// 			this.list = res.couponInfo;
			// 		}
			// 	})
			// }else{
				this.global.request.post({
					url: this.global.demao.api.index_coupon,
					method: "GET",
					data: {},
					success: (res) => {			
						this.list = res.couponInfo;
					}
				})
			// }
		}
	}
</script>

<style lang="scss">
	
	.font-padd {
		padding: 0 10rpx;
		color: $any-col;
		;
	}

	.page {
		width: 100%;
		padding: 20rpx 3%;
		box-sizing: border-box;

		.shop-card {
			width: 100%;
			background: #ffffff;
			border-radius: 20rpx;
			box-shadow: #cccccc 0px 0px 10rpx;
			@extend .any-flex;
			padding: 15rpx;
			box-sizing: border-box;
			justify-content: space-between;
			margin-top: 20rpx;

			.card-con {
				width: 500rpx;
				// height: 100%;
				height: 170rpx;
				@extend .any-flex;
				justify-content: space-between;
				
				flex-direction: column;
				align-items: flex-start;
			}

			.card-name {
				width: 100%;
				word-wrap: break-word;
			}

			.card-name view {
				font-size: $uni-font-size-base;
				display: inline;
				word-break: break-all;
			}

			.card {
				color: $any-col;
			}

			.card-pic {
				width: 100%;
				// height: 110rpx;
				background: #ffffff;
				.base{
					font-size: $uni-font-size-lg;
					@include multi-row-apostrophe(1);
						font-weight: bold;
					width: 80%;
				}
			}

			.card-pic image {
				display: inline-block;
				width: 110rpx;
				height: 110rpx;
				margin-right: 15rpx;
				@extend .any-flex;
			}

			.card-time {
				width: 100%;
				color: $any-col;
				font-size: $uni-font-size-sm;
			}

			.dit {
				width: 5rpx;
				height: 170rpx;
			}

			.card-size {
				flex-grow: 1;
				height: 100%;
				background: #ffffff;
				color: $any-col;
				@extend .any-flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}

			.price {
				padding: 10rpx 0;
				font-size: 35rpx;
				font-weight: bold;

				image {
					width: 22rpx;
					height: 28rpx;
					margin-left: 5rpx;
				}
			}

			.manJian {
				width: 80%;
				padding: 10rpx 0;
				font-size: $uni-font-size-base;
				word-break: break-all;
				text-align: center;
			}

			.use {
				margin-top: 10rpx;
				padding: 4rpx 10rpx;
				border: 1rpx solid $any-col;
				font-size: $uni-font-size-sm;
			}

			.draw {
				margin-top: 10rpx;
				padding: 4rpx 10rpx;
				font-size: $uni-font-size-sm;
				background: $any-col;
				color: #ffffff;
				border-radius: 50rpx;
			}
		}

		.shop-card:first-child {
			margin-top: 0;
		}

		.advert {
			width: 100%;
			height: 240rpx;
			background: #pink;
			border-radius: 20rpx;
			box-shadow: #cccccc 0px 0px 10rpx;
			margin-top: 20rpx;
		}
	}
</style>
