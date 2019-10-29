<!-- 优惠券 -->

<template>
	<view class="page">
		<block v-for="(item,index) in list" :key="index">
			<block v-if="index>3 && index%4==0">
				<view class="advert"></view>
				<view class="shop-card">
					<view class="card-con">
						<view class="card-name">
							<view class="">
								爱美世家
							</view>
							<view class="card">
								优惠券
							</view>
						</view>
						
						<view class="card-pic">
							<image src="/static/image/shop/shop-1.jpg" mode=""></image>
							<image src="/static/image/shop/shop-1.jpg" mode=""></image>
							<image src="/static/image/shop/shop-1.jpg" mode=""></image>
							<image src="/static/image/shop/shop-1.jpg" mode=""></image>
						</view>
						<view class="card-time">
							使用时间2019.10.10 00:00--2019.11.11 00:00
						</view>
					</view>
					<image class="dit" src="/static/image/other/icon-dit.png" mode=""></image>
					<view class="card-size">
						<view class="price">
							￥20
						</view>
						<view class="manJian">
							满299元使用
						</view>
						<view class="use">
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
								爱美世家
							</view>
							<view class="card">
								优惠券
							</view>
						</view>
						
						<view class="card-pic">
							<image src="/static/image/shop/shop-1.jpg" mode=""></image>
							<image src="/static/image/shop/shop-1.jpg" mode=""></image>
							<image src="/static/image/shop/shop-1.jpg" mode=""></image>
							<image src="/static/image/shop/shop-1.jpg" mode=""></image>
						</view>
						<view class="card-time">
							使用时间2019.10.10 00:00--2019.11.11 00:00
						</view>
					</view>
					<image class="dit" src="/static/image/other/icon-dit.png" mode=""></image>
					<view class="card-size">
						<view class="price">
							￥20
						</view>
						<view class="manJian">
							满299元使用
						</view>
						<view class="use">
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
				list:[0,1,2,3,4,5,6,7,8]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.page{
		width: 100%;
		padding: 20rpx 3%;
		box-sizing: border-box;
		.shop-card{
			width: 100%;
			height: 240rpx;
			background: #ffffff;
			border-radius: 20rpx;
			box-shadow: #cccccc 0px 0px 10rpx;
			@extend .any-flex;
			padding: 15rpx;
			box-sizing: border-box;
			justify-content: space-between;
			margin-top: 20rpx;
			.card-con{
				width: 500rpx;
				height: 100%;
				@extend .any-flex;
				justify-content: space-between;
				flex-direction: column;
				align-items: flex-start;
			}
			.card-name view{
				font-size: $uni-font-size-lg;
				display: inline;
				font-weight: bold;
			}
			.card{
				color: $any-col;
			}
			.card-pic{
				width: 100%;
				height: 110rpx;
				background: #ffffff;
			}
			.card-pic image{
				display: inline-block;
				width: 110rpx;
				height: 110rpx;
				background:green;
				margin-right:15rpx;
				@extend .any-flex;
			}
			.card-time{
				width: 100%;
				color: $any-col;
				font-size: $uni-font-size-sm;
			}
			.dit{
				width: 5rpx;
				height: 168rpx;
			}
			.card-size{
				flex-grow: 1;
				height: 100%;
				background: #ffffff;
				color: $any-col;
				@extend .any-flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
			.price{
				padding: 10rpx 0;
				font-size: 34rpx;
				font-weight: bold;
			}
			.manJian{
				margin-top: 10rpx;
				padding: 10rpx 0;
				font-size: $uni-font-size-base;
			}
			.use{
				margin-top: 10rpx;
				padding: 3rpx 5rpx;
				border: 1rpx solid $any-col;
				font-size: $uni-font-size-sm;
				
			}
		}
		.shop-card:first-child{
			margin-top: 0;
		}
		.advert{
			width: 100%;
			height: 240rpx;
			background: #pink;
			border-radius: 20rpx;
			box-shadow: #cccccc 0px 0px 10rpx;
			margin-top: 20rpx;
		}
	}
</style>
