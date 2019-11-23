<template>
	<view class="">
		<image class="pic" src="/static/image/other/integral_shop.png" mode="widthFix"></image>
		<view class="cate any-flex">
			<view class="cate-box lg" @click="back()">
				<text class="icon iconfont icon-wodejifen mar"></text><text>我的积分</text><text class="red">2000</text>
			</view>
			<view class="cate-box lg" @click="toStore('/pages/member/my-coupon/integral/integral_exchange_list')">
				<text class="icon iconfont icon-duihuan mar"></text><text>兑换记录</text>
			</view>
		</view>
		<goods :titCon="goods_list" :more="false" :place="6"></goods> 
	</view>
</template>

<script>
	import  goods from "@/components/mine/goods.vue";
	export default {
		components: {
			goods
		},
		data() {
			return {
				options:{},
				goods_list:[1,2,3,4],
			}
		},
		methods: {
			back(){
				this.global.utils.jump(5)
			},
			toStore(e){
				console.log(e)
				this.global.utils.jump(1,e)
			}
		},
		onLoad(options) {
			
		}
	}
</script>

<style lang="scss">
	.let-space{
		letter-spacing: 3rpx;
	}
	.white{
		color: #ffffff;
	}
	.red {
		color: $any-col;
	}
	
	.big {
		font-size: 50rpx;
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
		margin-right: 20rpx;
	}
	.mar-b{
		margin-bottom: -2rpx;
	}
	.wei {
		font-weight: bold;
	}
	.emit{
		width: 100%;
		height: 120rpx;
	}
	.pic{
		width: 100%;
	}
	.cate{
		width: 100%;
		height: 110rpx;
		@extend .any-flex;
		box-shadow: 0rpx 2rpx 10rpx #cccccc;
		margin-top: -5rpx;
		position: relative;
		.cate-box{
			width: 100%;
			height: 100%;
			@extend .any-flex;
			justify-content: center;
			align-items: center;
		}
	}
	.cate:after{
		content: "";
		display: block;
		position: absolute;
		width: 2rpx;
		height: 100%;
		left: 50%;
		top: 0;
		background: #F6F6F6;
	}
</style>
