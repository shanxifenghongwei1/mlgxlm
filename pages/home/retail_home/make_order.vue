<template>
	<!-- 分销下订单页面 -->
	<view class="">
		<navigator url="/pages/member/tool/address/address?fromPage=order" class="address base any-flex">
			<view class="">
				<text class="icon iconfont icon--location lg mar"></text>{{address}}
			</view>
			<text class="icon iconfont icon-jiantou-copy lg wei"></text>
		</navigator>
		
		<view class="good">
			<view class="store lg">
				<image :src="picUrl + detail.re_goodsShopInfo.re_goods_picture" mode=""></image>
				{{detail.re_goodsShopInfo.shop_name}}
			</view>
			<view class="con">
				<image src="/static/image/shop/shop-1.jpg" mode=""></image>
				<view class="goods-info">
					<view class="name">
						{{detail.re_goodsShopInfo.re_goods_name}}
					</view>
					<view class="price">
						￥{{detail.re_goodsShopInfo.re_goods_price}}元
					</view>
					<view class="dtl">
						{{detail.re_goodsShopInfo.re_goods_introduction}}
					</view>
				</view>
				<view class="opection">
					<numbox :Number="1" :min="1" :max="detail.re_goodsShopInfo.re_goods_stock" :step="1"></numbox>
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
				address:"点击选择收货地址",
				options:{},
				detail:{},
				picUrl:this.global.demao.domain.videoUrl
			}
		},
		methods:{
			save(){
				this.global.utils.jump(1,"/pages/pay/pay")
			}
		},
		onShow(){
			if(uni.getStorageSync("address")){
				this.address=uni.getStorageSync("address");
			}
		},
		onLoad(options){
			console.log("这是这个页面的数据")
			console.log(options)
			this.options=this.options;

			this.global.request.post({
				url: "reseller_user_address",
				method: "POST",
				data: {},
				success: (res) => {
					this.address=res.user_addressInfo.address_provice+res.user_addressInfo.address_city+res.user_addressInfo.address_area+res.user_addressInfo.address_detail;
				}
			});
			let data={};
			data.re_goods_id=options.re_goods_id;
			this.global.request.post({
				url:'index_reseller_goodsDetail',
				data:data,
				success:res=>{
					this.detail=res;
				}
			})
		},
		onUnload() {
			uni.setStorageSync("address","")
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
