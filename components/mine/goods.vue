<template>
	<!-- 商品组件（图+详细信息） --> 
	<view class="goods">
		<!-- <view class="goods-li" @click="toDetail(2)" v-for="(item,index) in titCon" :key="index">
			<view class="goods-pic">
				<image src="/static/image/banner/1.jpg" mode=""></image>
			</view>
			<block v-if="place===1">
				<view class="goods-tit">
					芳香精油经络疏通
				</view>
				<view class="goods-con">
					<view class="goods-con-left">
						乳腺
					</view>
					<view class="goods-con-fight">
						已售 10
					</view>
				</view>
				<view class="goods-price">
					<view class="goods-price-left">
						<view class="goods-NewPrice">
							198.00
						</view>
						<view class="goods-OldPrice">
							398.00
						</view>
					</view>
					<view class="goods-price-right">
						减198元
					</view>
				</view>
			</block>
			<block v-if="place===2">
				<view class="place place-title">
					伊可佳人
				</view>
				<view class="place place-name">
					姿美堂养颜套装（全新）
				</view>
				<view class="place place-num">
					<view class="">
						置换1000
					</view>
					<view class="">
						置换1000
					</view>
				</view>
				<view class="place place-price">
					￥199.9
				</view>
				<view class="place place-address">
					<view class="icon iconfont icon-xuanzhong1">

					</view>

					山西省太原市小店区天鑫花


				</view>
				<view class="place place-time">
					2019-10-16 10:03发布
				</view>
			</block>
			<block v-if="place===3">
				<view class="ware">
					<view class="left title">
						爱美世家
					</view>
					<view class="right">
						<text>山东青岛市市区</text>
					</view>
				</view>
				<view class="ware">
					<view class="ware-ware">
						层韩国小气泡深层清洁
					</view>
				</view>
				<view class="ware">
					<view class="left">
						原价<text>198</text>
					</view>
					<view class="right">
						平台价<text>198</text>
					</view>
				</view>
			</block>
		</view> -->
		
		<view class="goods-li" v-for="(item,index) in titCon" :key="index">

			
			<!-- 正常 -->
			<block v-if="place===1">
				<view @click="toDetail()">
				<view class="goods-pic">
					<image src="/static/image/banner/1.jpg" mode=""></image>
				</view>
				<view class="goods-tit">
					￥{{item.goods_name}}
				</view>
				<view class="goods-con">
					<view class="goods-con-left">
					{{item.t_name}}
					</view>
					<view class="goods-con-fight">
						已售 {{item.goods_gd_num|isN(Number)}}
					</view>
				</view>
				
				
				<!-- 不参与任何活动 -->
				<view class="goods-price" v-if="item.promotion_type==0">
					
					<view class="goods-price-left">
						<view class="goods-NewPrice">
							{{item.price}}
						</view>
					</view>
				</view> 
				
				<!-- 参与满减 -->
				<view class="goods-price" v-if="item.promotion_type==2">
					<view class="goods-price-left">
						<view class="goods-NewPrice">
							{{item.price|isN(Number)}}
						</view>
					</view>
					<view class="goods-price-right">
						满{{item.coupon_redouction|isN(Number)}}减{{item.coupon_price|isN(Number)}}元
					</view>
				</view>
				
				<!-- 参与拼团 -->
				<view class="goods-price" v-if="item.promotion_type==1">
					<view class="goods-price-left">
						<view class="goods-NewPrice">
							￥{{item.promotion_price|isN(Number)}}
						</view>
						<view class="goods-OldPrice">
							￥{{item.price|isN(Number)}}
						</view>
					</view>
					<view class="goods-price-right">
						拼团
					</view>
				</view>
				
				<!-- 参与限时抢 -->
				<view class="goods-price" v-if="item.promotion_type==4">
					<view class="goods-price-left">
						<view class="goods-NewPrice">
							￥{{item.limited_price|isN(Number)}}
						</view>
						<view class="goods-OldPrice">
							￥{{item.price|isN(Number)}}
						</view>
					</view>
					<view class="goods-price-right">
						限时抢
					</view>
				</view>
				
			</view>	
			</block>
			
			<!-- 置换 -->
			<block v-if="place===2" >
				<view @click="toDetail()">
				<view class="goods-pic">
					<image src="/static/image/banner/1.jpg" mode=""></image>
				</view>
				<view class="place place-title">
					{{item.goods_name}}
				</view>
				<view class="place place-name">
					姿美堂养颜套装（全新）
				</view>
				<view class="place place-num">
					<view class="">
						置换1000
					</view>
					<view class="">
						置换1000
					</view>
				</view>
				<view class="place place-price">
					￥199.9
				</view>
				<view class="place place-address">
					<view class="icon iconfont icon-xuanzhong1">
		
					</view>
		
					山西省太原市小店区天鑫花
		
		
				</view>
				<view class="place place-time">
					2019-10-16 10:03发布
				</view>
				</view>
			</block>
			
			<!-- 收藏 -->
			<block v-if="place===3">
				<view @click="toDetail()">
				
				<view class="goods-pic">
					<image src="/static/image/banner/1.jpg" mode=""></image>
				</view>
				<view class="ware">
					<view class="left title">
						{{item.shop_name}}
					</view>
					<view class="right">
						<text>{{item.shop_address_provice+item.shop_address_city}}</text>
					</view>
				</view>
				<view class="ware">
					<view class="ware-ware">
						{{item.goods_name}}
					</view>
				</view>
				<!-- 不参与任何活动 -->
				<view class="goods-price" v-if="item.promotion_type==0">
					<view class="goods-price-left">
						<view class="goods-NewPrice">
							{{item.price}}
						</view>
					</view>
				</view> 
				
				<!-- 参与满减 -->
				<view class="goods-price" v-if="item.promotion_type==2">
					<view class="goods-price-left">
						<view class="goods-NewPrice">
							{{item.price|isN(Number)}}
						</view>
					</view>
					<view class="goods-price-right">
						满{{item.coupon_redouction|isN(Number)}}减{{item.coupon_price|isN(Number)}}元
					</view>
				</view>
				
				<!-- 参与拼团 -->
				<view class="goods-price" v-if="item.promotion_type==1">
					<view class="goods-price-left">
						<view class="goods-NewPrice">
							￥{{item.promotion_price|isN(Number)}}
						</view>
						<view class="goods-OldPrice">
							￥{{item.price|isN(Number)}}
						</view>
					</view>
					<view class="goods-price-right">
						拼团
					</view>
				</view>
				
				<!-- 参与限时抢 -->
				<view class="goods-price" v-if="item.promotion_type==4">
					<view class="goods-price-left">
						<view class="goods-NewPrice">
							￥{{item.limited_price|isN(Number)}}
						</view>
						<view class="goods-OldPrice">
							￥{{item.price|isN(Number)}}
						</view>
					</view>
					<view class="goods-price-right">
						限时抢
					</view>
				</view>
				</view>
			</block>
			
			
			<!-- 分销 -->
			<block v-if="place===5">
				<view @click="toDetail(item.re_goods_id)">
				<view class="goods-pic">
					<image :src="imageurl + item.re_goods_picture" mode=""></image>
				</view>
				<view class="place place-address">			
					{{item.re_goods_introduction}}
				</view>
				<view class="place place-name red">
					{{ item.re_goods_name}}
				</view>
				<view class="place place-price flex">
					<view>￥{{item.re_goods_price}}</view>
					<!-- <text class="block sm">可分销购买</text> -->
				</view>
				<view class="hasbuy">
					<view class="hasbuy-box">
						已售{{item.re_goods_volume}}件
					</view>
				</view>
				</view>
			</block>
			
			
			<!-- 积分 -->
			<block v-if="place===6" >
				<!-- <view @click="toDetail()">
				<view class="goods-pic">
					<image src="/static/image/banner/1.jpg" mode=""></image>
				</view>
				<view class="place place-address">			
					专业美颜防护
				</view>
				<view class="place place-name red">
					YIAN伊岸冻干粉修复去
				</view>
				<view class="place place-name flex red">
					<view>￥666+66积分</view><text class="block sm">可兑换购买</text>
				</view>
				<view class="hasbuy">
					<view class="hasbuy-box">
						已售1000件
					</view>
				</view>
				</view> -->
				
				
				<view @click="toDetail()">
				<view class="goods-pic">
					<image :src="imageurl + item.picture" mode=""></image>
				</view>
				<view class="place place-address">			
					{{item.goods_effect}}
				</view>
				<view class="place place-name red">
					{{item.goods_name}}
				</view>
				<view class="place place-name flex red">
					<view>{{item.price}}</view><text class="block sm">已售{{item.goods_gd_num}}件</text>
				</view>
				</view>
			</block>
		</view>

		<view class="look-more" v-if="more">
			查看更多60个商品
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageurl:this.global.demao.domain.videoUrl
			}
		},
		props: {
			titCon: {
				type: Array, //商品数据列表
			},
			more: {
				type: Boolean, //是否显示加载更多
				default: true
			},

			place: {
				type: Number, //1正常商品false    2置换商品true   3收藏商品   5分销
				default: 1
			}
		},
		methods: {
			toDetail(e) {
				if(this.place==5){
					uni.navigateTo({
						url: "/pages/home/retail_home/goods_detail?re_goods_id=" + e
					})
				}else{
					uni.navigateTo({
						url: "/pages/home/goods-detail/goods-detail?goods_id=" + e
					})
				}
				
			}
		},
		created(){
			
		}
	}
</script>

<style lang="scss">
	.goods {
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
	}

	.goods-li {
		width: 340rpx;
		background: #ffffff;
		display: inline-block;
		margin-top: 20rpx;
		overflow: hidden;
		box-shadow: 0rpx 0rpx 10rpx #cfcdcd;
		justify-content: space-between;
	}

	.goods-li:nth-child(2n) {
		margin-left: 25rpx;
	}

	.goods-pic {
		width: 100%;
		height: auto;
	}

	.goods-pic image {
		width: 100%;
		height: 194rpx;
		background: red;
	}

	.goods-tit {
		width: 80%;
		text-align: center;
		margin: 0 auto;
		font-size: $uni-font-size-lg;
		padding: 5rpx 0;
		margin-top: 10rpx;
	}

	.goods-con {
		width: 100%;
		@extend .any-flex;
		justify-content: space-between;
		align-items: center;
		font-size: $uni-font-size-base;
		padding: 0 15rpx;
		box-sizing: border-box;
		color: #7e7e7e;
		margin-top: 10rpx;
	}

	.goods-price {
		width: 100%;
		@extend .any-flex;
		padding: 0 15rpx;
		box-sizing: border-box;
		justify-content: space-between;
		margin: 10rpx 0;
	}

	.goods-price-left {
		@extend .any-flex;
		align-items: flex-end;
	}

	.goods-NewPrice {
		font-size: $uni-font-size-lg;
		color: $any-col;
	}

	.goods-OldPrice {
		font-size: $uni-font-size-base;
		color: #7e7e7e;
		text-decoration: line-through;
		margin-left: 5rpx;
	}

	.goods-price-right {
		font-size: $uni-font-size-sm;
		color: $any-col;
		padding: 2rpx 8rpx;
		border: 2rpx solid $any-col;
		border-radius: 5rpx;
	}

	.look-more {
		width: 350rpx;
		height: 55rpx;
		border-radius: 15rpx;
		background: #bcbdbd;
		text-align: center;
		line-height: 55rpx;
		font-size: $uni-font-size-base;
		margin: 30rpx auto 0;
	}

	.place {
		width: 100%;
		padding: 0 10rpx;
		box-sizing: border-box;
	}

	.place-title {
		font-size: $uni-font-size-lg;
		color: $any-col;
		@include multi-row-apostrophe(1);
		margin-bottom: 10rpx;
	}

	.place-name {
		font-size: $uni-font-size-base;
		@include multi-row-apostrophe(1);
		margin-bottom: 10rpx;
	}

	.place-num {
		font-size: $uni-font-size-base;
		@extend .any-flex;
		justify-content: space-between;
		color: #7E7E7E;
		margin-bottom: 10rpx;

		view {
			width: 50%;
		}
	}

	.place-price {
		font-size: 40rpx;
		color: $any-col;
		@include multi-row-apostrophe(1);
		margin-bottom: 10rpx;
	}

	.place-address {
		width: 100%;
		font-size: $uni-font-size-sm;
		margin-bottom: 10rpx;

		view:nth-child(1) {
			display: inline;
			font-size: $uni-font-size-sm;
		}

	}

	.place-time {
		font-size: $uni-font-size-sm;
		@include multi-row-apostrophe(1);
		margin-bottom: 10rpx;
	}
	.red{
		color: $any-col;
	}
	.sm{
		font-size: $uni-font-size-sm;
	}
	.block{
		color: #1A1A1A;
	}
	.flex{
		display:flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	.hasbuy{
		width: 100%;
		.hasbuy-box{
			width: 170rpx;
			height: 40rpx;
			border: 1rpx solid  $any-col;
			border-radius: 20rpx;
			color: $any-col;
			font-size: $uni-font-size-base;
			float: right;
			margin-bottom: 15rpx;
			margin-right: 5rpx;
			text-align:center;
			line-height:40rpx;
		}
	}
	.ware{
		width: 100%;
		font-size: $uni-font-size-base;
		padding: 0 10rpx;
		box-sizing: border-box;
		@extend .any-flex;
		margin-bottom: 10rpx;
		.title{
			font-size: $uni-font-size-lg;
			color: $any-col;
			@include multi-row-apostrophe(1);
		}
		.left{
			width: 50%;
			height: 100%;
			@include multi-row-apostrophe(1);
		}
		.right{
			width: 50%;
			height: 100%;
			text-align: right;
			font-size: $uni-font-size-sm;
			@include multi-row-apostrophe(1);
		}
		.ware-ware{
			width: 100%;
			height: 100%;
			@include multi-row-apostrophe(1);
		}
	}
	.ware:last-child{
		font-size: $uni-font-size-sm;
		.right{
			text-align: left;
			text-decoration: line-through;
		}
	}
	.ware:last-child{
		color: #8C8C8C;
		text{
			color: $any-col;
			text-align: left;
			font-size: $uni-font-size-base;
			margin-right: 10rpx;
		}
	}
</style>
