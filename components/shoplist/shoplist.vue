<template>
	<view>
		<view v-for="(item,index) in shoplists" :key='index' class="shop-father" @click="toDetail(item.goods_id,item.shop_name)">
			<view class="shop">
				<view class="shop-img">
					<image :src="picUrl+item.picture" mode="widthFix"></image>
				</view>
				<view class="shop-message">
					<view class="shop-name">
						<text class="shop-name-left">{{item.shop_name}}</text>
						<text class="addres">{{item.shop_address_provice+item.shop_address_city+item.shop_address_area}}</text>
					</view>
					<view class="shop-start">
						<uni-rate :disabled='false' margin='2' size="10" max='5' :value="item.shop_score" color="#7f7f7f" @change='onChange'
						 active-color="#ffb540" />
					</view>
					<view v-if="myid != 4">
						<view v-if='myid != 4' class="label">
							<view class="tex" v-for="(item,index) in item.shop_label" :key="index">{{item}}</view>
						</view>
						<view class="goods-price">
							原价 <text>{{item.price}}</text> 平台价 <text>{{item.market_price}}</text>
						</view>
						<view class="goodsname" > <text class="iconfont icon-xiangmu"></text> {{item.goods_name}}</view>
						<view class="propergoods"> <text class="iconfont icon-tuan"> </text> <text class="mon">{{item.promotion_price}}元</text>
							{{item.introduction}} </view>
					</view>
					<view v-else>
						<view class="goodsname"> <text class="iconfont icon-xiangmu"></text> {{item.goods_name}}</view>
						<view class="any-flex">
							<view class="progres">
								<cmd-progress stroke-width='8' stroke-color='#FE0000' :percent="30"></cmd-progress>
							</view>
							<view class="havepeoples"> 已拼 <text>{{item.prople}}</text> 位 </view>
						</view>
						<view class="price-new">
							￥ {{item.promotion_price}}
							<text class="noscripe">￥ {{item.price}} </text>
						</view>
					</view>
					
					<text v-if="myid == 1" class="gobuy">去拼团 </text>
					<text v-if="myid == 2 || myid == 3 || myid == 5" class="gobuy">进店 </text>
					<text v-if="myid == 4" class="gobuy" @click="go">马上抢 </text>
					<text v-if="myid == 1" class="gobuy">去拼团 </text>
					<text v-if="myid == 6" class="gobuy">更多团购 </text>
					<view v-if="myid == 6" class="havepeople"> 已售 <text>{{item.prople}}</text> 位 </view>
					<view v-if="myid == 1" class="havepeople"> 已拼 <text>{{item.prople}}</text> 位 </view>
					
					
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import demo from "@/common/js/demao.js"
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	import cmdProgress from "@/components/cmd-progress/cmd-progress.vue"
	export default {
		name: 'shoplist',
		components: {
			uniRate,
			cmdProgress
		},
		props:{
			myid: {
			  type: Number, //控制页面样式 1 拼团 2优惠 3销量 4限时抢 5免费送 6 正常商铺列表
			  default: 1
			},
			shoplists:{
				type:Array, //商品数据列表
				default:[]
			}
		},
		data() {
			return {
				dataUrl:"",
				picUrl:"",
			};
		},
		onLoad(options){
			
		},
		methods: {
			go(){
				console.log('we are go')
			},
			onClick() {

			},
			toDetail(e,f){
				uni.navigateTo({
					url:"/pages/home/shop-detial/shop-detial?shop_id="+e+"&&head="+f
				})
			}
		},
		created(){
			this.picUrl=demo.domain.picUrl;
		}
	}
</script>

<style lang="scss">
	.shop-father {
		@extend .cons;
		.shop {
			margin-top: 20rpx;
			width: 100%;
			border-radius: 20rpx;
			border: 2rpx solid $any-zol;
			border-bottom: 4rpx solid $any-col;
			@extend .any-flex;
			align-items: flex-start;
			.shop-img {
				width: 20%;
				height: 80%;
				image {
					width: 100%;
					height: 100%;
				}
			}

			.shop-message {
				width: 72%;
				height: 96%;
				padding: 2% 3% 2% 5%;
				position: relative;
				.price-new{
					font-size: $uni-font-size-lg;
					font-weight: 600;
					color: $any-col;
					.noscripe{
						margin-left: 20rpx;
						text-decoration:line-through;
						font-size: $uni-font-size-sm;
						color:#666;
					}
				}
				.progres{
					width: 60%;
					height: 60rpx;
				}
				.havepeoples{
					position: absolute;
					top: 114rpx;
					right: 48rpx;
					font-size: $uni-font-size-base;
					text {
						color: $any-col;
					}
				}
				.gobuy {
					padding: 6rpx 10rpx;
					background: $any-col;
					color: #FFFFFF;
					position: absolute;
					top: 46rpx;
					right: 44rpx;
					font-size: $uni-font-size-sm;
					border-radius: 20rpx;
				}

				.havepeople {
					position: absolute;
					top: 180rpx;
					right: 42rpx;
					font-size: $uni-font-size-base;

					text {

						color: $any-col;
					}
				}

				.shop-name {
					color: $any-col;
					font-size: $uni-font-size-lg;
					@extend .any-flex;
					align-items: flex-end;
					.shop-name-left{
						max-width: 40%;
						height: 40rpx;
						@include multi-row-apostrophe(1);
					}
					.addres {
						font-size: $uni-font-size-sm;
						margin-left: 2rpx;
						color: #666;
					}
				}

				.label {
					width: 70%;
					.tex {
						display: inline-block;
						padding: 4rpx;
						font-size: 20rpx;
						color: #7f7f7f;
						border: 2rpx solid #7f7f7f;
						margin-right: 10rpx;
					
					}
				}

				.goods-price {
					font-size: $uni-font-size-sm;

					text {
						margin: 0 10rpx;
						color: $any-col;
						font-size: $uni-font-size-lg;
					}
				}

				.goodsname {
					width: 70%;
					height: 38rpx;
					@include multi-row-apostrophe(1);
					overflow: hidden;
					font-size: $uni-font-size-base;

					text {
						color: $any-col;
						margin-right: 16rpx;
					}
				}

				.propergoods {
					font-size: $uni-font-size-base;

					text {
						color: $any-col;
						margin-right: 16rpx;
					}

					.mon {}
				}
			}
		}
	}
</style>
