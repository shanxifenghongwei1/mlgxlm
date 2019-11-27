<template>
	<!-- 分销下订单页面 -->
	<view class="">
		<view class="address base any-flex">
			<view class="">
				<text class="icon iconfont icon--location lg mar"></text>山西省太原市小店区平阳路高新街口45号
			</view>
			<text class="icon iconfont icon-jiantou-copy lg wei"></text>
		</view>
		
		<view class="good">
			<view class="store lg">
				<image src="/static/image/other/person_nav.png" mode=""></image>
				爱美世家
			</view>
			<view class="con">
				<image src="/static/image/shop/shop-1.jpg" mode=""></image>
				<view class="goods-info">
					<view class="name">
						商品名称
					</view>
					<view class="price">
						￥100元
					</view>
					<view class="dtl">
						这是描述
					</view>
				</view>
				<view class="opection">
					<numbox :Number="1" :min="1" :max="1" :step="1"></numbox>
					<view class="opection-box">
						<view class="icon iconfont icon-shanchu-copy-copy">
				
						</view>
						<view class="icon iconfont icon-star">
				
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="save" @click="save()">
			<button type="warn">确认购买</button>
		</view>
	</view>
</template>

<script>
	import numbox from "@/components/uni-number-box/uni-number-box.vue"
	export default{
		components:{
			numbox
		},
		data(){
			return{
				
			}
		},
		methods:{
			save(){
				this.global.utils.jump(1,"/pages/pay/pay")
			}
		}
	}
</script>

<style lang="scss">
	
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
	.mar{
		margin-right: 10rpx;
	}
	.wei {
		font-weight: bold;
	}
	.emit{
		width: 100%;
		height: 120rpx;
	}
	.address{
		width: 100%;
		height: 90rpx;
		box-shadow: 0rpx 0rpx 10rpx #cccccc;
		padding: 0 3%;
		box-sizing: border-box;
		margin-top: 20rpx;
		justify-content: space-between;
		align-items: center;
	}
	.good{
		width: 100%;
		margin-top: 20rpx;
		box-shadow: 0rpx 0rpx 10rpx #cccccc;
		padding:0 3%;
		box-sizing:border-box;
		.store{
			width:100%;
			height:100rpx;
			display: flex;
			align-items: center;
			border-bottom: 1rpx solid #CDCDCD;
			image{
				width: 51rpx;
				height: 51rpx;
				margin-right: 20rpx;
			}
		}
		.con {
			width: 100%;
			position: relative;
			padding: 15rpx 10rpx;
			box-sizing: border-box;
			@extend .any-flex;
			align-items: center;
			border-bottom: 1rpx solid #E5E5E5;
			color: #808080;
		}
		
		.con:last-child {
			border-bottom: none;
		}
		
		image {
			width: 140rpx;
			height: 150rpx;
			margin-right: 20rpx;
			background: red;
		}
		
		.goods-info {
			width: 320rpx;
			height: 120rpx;
			@extend .any-flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
		
			.name {
				width: 100%;
				box-sizing: border-box;
				@include multi-row-apostrophe(1);
				font-size: $uni-font-size-base;
				color: #575757;
			}
		
			.cate {
				width: 100%;
				@extend .any-flex;
				flex-wrap: wrap;
				padding-top: 10rpx;
				box-sizing: border-box;
				font-size: $uni-font-size-sm;
		
				view {
					display: inline-block;
					padding: 2rpx 5rpx;
					color: #868686;
					border: 1rpx solid #868686;
					margin-right: 10rpx;
					margin-bottom: 10rpx;
				}
			}
		
			.price {
				width: 100%;
				box-sizing: border-box;
				@include multi-row-apostrophe(1);
				font-size: $uni-font-size-lg;
				color: $any-col;
			}
		
			.dtl {
				width: 100%;
				box-sizing: border-box;
				@include multi-row-apostrophe(1);
				font-size: $uni-font-size-sm;
			}
		}
		
		.opection {
			position: absolute;
			right: 20rpx;
		}
		
		.opection-box {
			width: 100%;
			margin-top: 10rpx;
			display: flex;
		
			.icon-shanchu-copy-copy {
				font-size: 32rpx;
				padding: 10rpx;
				margin-left: 20rpx;
				color: #808080;
			}
		
			.icon-star {
				font-size: 32rpx;
				padding: 10rpx;
			}
		}
	}
	.save{
		width: 100%;
		padding:0 5%;
		box-sizing: border-box;
		margin-top:40rpx;
	}
</style>
