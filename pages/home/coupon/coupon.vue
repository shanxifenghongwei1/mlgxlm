<template>
	<!-- 优惠券 -->
	<view class="page">
		<block v-for="(item,index) in list" :key="index">
			<block v-if="index>3 && index%4==0">
				<view class="advert"></view>
				<view class="shop-card">
					<view class="card-con">
						<view class="card-name">
							<view class="">
								{{item.shop_name}}<text class="font-padd">|</text><text class="card">{{item.coupon_type?"折扣劵":"满减劵"}}</text>
							</view>
						</view>

						<view class="card-pic">
							<image :src="picUrl+i" mode="" v-for="(i,index) in item.picture" :key="index"></image>
						</view>

						<view class="card-time">
							使用时间{{item.coupon_start_time|time}}--{{item.expiration|time}}
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
						<view class="draw" v-if="item.coupon_draw==3">
							点击领取
						</view>
						<view class="use" v-else>
							去使用
						</view>
					</view>
				</view>
			</block>
			<block v-else>

				<view class="shop-card">
					<view class="card-con">
						<view class="card-name">
							<view class="">
								{{item.shop_name}}<text class="font-padd">|</text><text class="card">{{item.coupon_type?"折扣劵":"满减劵"}}</text>
							</view>
						</view>

						<view class="card-pic">
							<image :src="picUrl+i" mode="" v-for="(i,index) in item.picture" :key="index"></image>
						</view>

						<view class="card-time">
							使用时间{{item.coupon_start_time|time}}--{{item.expiration|time}}
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
						<view class="draw" v-if="item.coupon_draw==3">
							点击领取
						</view>
						<view class="use" v-else>
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

		},
		onLoad(options) {
			this.global.utils.sethead("优惠券")
			this.picUrl = this.global.demao.domain.picUrl
		},
		onShow() {
			this.global.request.post({
				url: this.global.demao.api.index_coupon,
				method: "GET",
				data: {},
				success: (res) => {
					res.couponInfo.forEach((v) => {
						let a = Math.random();
						if (a > 0.5) {
							v.state = true;
						} else {
							v.state = false;
						}
						v.picture = v.picture.split(",")
					})
					this.list = res.couponInfo;
				}
			})
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
				height: 100%;
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
				font-size: $uni-font-size-lg;
				display: inline;
				font-weight: bold;
				word-break: break-all;
			}

			.card {
				color: $any-col;
			}

			.card-pic {
				width: 100%;
				height: 110rpx;
				background: #ffffff;
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
