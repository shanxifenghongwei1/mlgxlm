<!-- 分销中心 -->
<template>
	<view>
		<!-- 个人信息 -->
		<view class="header">
			<view class="header-box">
				<image src="https://wx.qlogo.cn/mmopen/vi_32/cFtcpjRVvcnovLu2icBOoHwvLxQzicOxcGqO7uFuptibX39e2bcm45kqY14RYDs0oX01NhHExKibnqLGbVHIrHSllg/132" mode="widthFix"></image>
				<view class="con">
					<view class="">
						冯红伟的家12345678
					</view>
					<view class="">
						邀请码
					</view>
				</view>
			</view>
		</view>
		
		
		<!-- 提现 -->
		<view class="tixian">
			<view class="left">
				<view class="">
					可提现佣金
				</view>
				<view class="">
					1024.05元
				</view>
			</view>
			<view class="right">
				提现
			</view>
		</view>
		
		<!-- 额度 -->
		<view class="edu">
			<view class="">
				<view class="green">
					已提现佣金
				</view>
				<view class="">
					1900元
				</view>
			</view>
			<view class="">
				<view class="red">
					未结算佣金
				</view>
				<view class="">
					1900元
				</view>
			</view>
		</view>
		
		
		<view class="gather">
			<view class="gather-box">
				<view class="list">
					<image src="/static/image/other/retail_money.png" mode=""></image>
					<view class="name">
						分销佣金
					</view>
					<view class="num">
						102540元
					</view>
				</view>
				<view class="list">
					<image src="/static/image/other/retail_order.png" mode=""></image>
					<view class="name">
						分销订单
					</view>
					<view class="num">
						385元
					</view>
				</view>
				<view class="list">
					<image src="/static/image/other/retail_detail.png" mode=""></image>
					<view class="name">
						提现明细
					</view>
					<view class="num">
						98元
					</view>
				</view>
				<view class="list">
					<image src="/static/image/other/retail_team.png" mode=""></image>
					<view class="name">
						我的团队
					</view>
					<view class="num">
						38人
					</view>
				</view>
				<view class="list">
					<image src="/static/image/other/retail_code.png" mode=""></image>
					<view class="name">
						分销佣金
					</view>
					<view class="num">
						
					</view>
				</view>
			</view>
		</view>
		
		<view class="banner">
			<mySwiper :bannerlist="bannerlist"></mySwiper>
		</view>

		<view class="jingxuan">
			<view class="bac-img">
				<image src="/static/image/other/shoping-jingxuan.png" mode="widthFix" class="bac-imgs"></image>
			</view>
			<view class="">
				<goods :titCon="titCon" :more="false"></goods>
			</view>
		</view>
	</view>
</template>

<script>
	import mySwiper from "@/components/mine/my-swiper.vue";
	import goods from "@/components/mine/goods.vue";
	export default {
		components:{
			mySwiper,goods
		},
		data() {
			return {
				options:{},
				bannerlist: [
					'../../static/image/banner/1.jpg', '../../static/image/banner/2.jpg', '../../static/image/banner/3.jpg',
					'../../static/image/banner/4.jpg'
				],
				titCon:[]   //商品列表
			}
		},
		methods: {
			
		},
		onLoad(options) {
			this.global.utils.sethead("分销")
		}
	}
</script>

<style lang="scss">
	.header{
		width: 100%;
		height: 254rpx;
		background: $any-col;
	}
	.header-box{
		width: 100%;
		height: 190rpx;
		padding: 30rpx 6%;
		box-sizing: border-box;
		@extend .any-flex;
		image{
			width: 130rpx;
			height: 130rpx;
			border-radius: 50%;
		}
		.con{
			flex-grow: 1;
			height: 100%;
			padding: 10rpx 0 10rpx 30rpx ;
			box-sizing: border-box;
			font-size: $uni-font-size-base;
			@extend .any-flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			color: #ffffff;
			view{
				padding-bottom: 10rpx ;
				font-weight: bold;
			}
		}
	}
	
	.tixian{
		width: 94%;
		height: 150rpx;
		background: #ffffff;
		margin: -60rpx auto 0;
		border-radius: 20rpx;
		box-shadow: #cccccc 0px 0px 10rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
		@extend .any-flex;
		font-size: $uni-font-size-base;
		.left{
			flex-grow: 1;
			height: 100%;
			@extend .any-flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			view{
				padding: 10rpx 0;
			}
		}
		.right{
			display: inline-block;
			padding: 3rpx 5rpx;
			background: $any-col;
			color: #ffffff;
			border-radius: 10rpx;
		}
	}
	
	.edu{
		width: 100%;
		height: 100rpx;
		@extend .any-flex;
		font-size: $uni-font-size-sm;
		position: relative;
		margin-top: 20rpx;
		view{
			flex-grow: 1;
			@extend .any-flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			.green{
				font-size: $uni-font-size-base;
				color: #09BB07;
				padding: 10rpx 0;
				font-weight: bold;
			}
			.red{
				font-size: $uni-font-size-base;
				color: $any-col;
				padding: 10rpx 0;
				font-weight: bold;
			}
		}
	}
	.edu:after{
		content: "";
		width: 2rpx;
		height: 80%;
		position: absolute;
		background: $uni-border-color;
		display: block;
		bottom: 10%;
		left: 50%;


	}
	
	.gather{
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
		margin-top: 15rpx;
		font-size: $uni-font-size-sm;
		margin-top: 20rpx;
		.gather-box{
			width: 100%;
			height: 100%;
			@extend .any-flex;
			flex-wrap: wrap;
			border-radius: 20rpx;
			box-shadow: #cccccc 0px 0px 10rpx;
			.list{
				width: 30%;
				height: 180rpx;
				@extend .any-flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-right: 3%;
				image{
					width: 75rpx;
					height: 66rpx;
				}
				.name{
					width: 100%;
					text-align: center;
					margin-top: 15rpx;
				}
				.num{
					width: 100%;
					text-align: center;
					height: 26rpx;
				}
			}
			.list:nth-child(3n){
				margin-right: 0;
			}
		}
	}
	
	.banner{
		margin-top: 20rpx;
	}
	
	.jingxuan {
		.bac-img {
			margin: 20rpx 0;
			height: 74rpx;
			width: 100%;
	
			image {
				width: 100%;
			}
		}
	}
</style>
