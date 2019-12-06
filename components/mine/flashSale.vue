<template>
	<view class="">
		<view  class="shop-father" v-for="(item,index) in flashList" :key="index">
			<view class="shop">
				<view class="shop-img">
					<image :src="picUrl+ item.picture" mode=""></image> 
				</view>
				<view class="shop-message">
					<view class="shop-message-left">
						<view class="title">
							{{item.goods_name}}
						</view>
						<view class="name">
							{{item.shop_name}}
						</view>
						<block v-if="time!=1">
							<view class="scrol-box" v-if="frompage=='flash'">
								<view class="scrol">
									<cmd-progress stroke-width='8' stroke-color='#FE0000' :percent="0"></cmd-progress>
								</view>
							</view>
						</block>
						<block v-if="time==1">
							<view class="scrol-box" v-if="frompage=='flash'">
								<view class="scrol">
									<cmd-progress stroke-width='8' stroke-color='#FE0000' :percent="Math.floor((item.prople)/(item.limited_prople?item.limited_prople:1))"></cmd-progress>
								</view>
								<view class="scrol-num">
									已抢
									<view class="">
										{{item.prople}}
									</view>
									位
								</view>
							</view>
						</block>
						

						<view class="price" :class="frompage=='flash'?'':'mar'">
							<block v-if="frompage=='flash'">
								<view class="new">
									￥{{item.limited_price?item.limited_price:0}}
								</view>
								<view class="old"  v-if="cateid==2">
									￥{{item.price?item.price:0}}
								</view>
							</block>
							<block v-if="frompage!='flash'">
								<text class="icon iconfont icon-tuan"></text>
								<view class="new">
									￥{{item.promotion_price?item.promotion_price:0}}
								</view>
							</block>
							<block v-if="time==1">
								<view class="price-pin" v-if="frompage=='flash'">
									已抢
									<view class="">
										{{item.prople}}+
									</view>
									位
								</view>
								<view class="price-pin" v-else>
									已拼
									<view class="">
										{{item.prople}}+
									</view>
									位
								</view>
							</block>
							
						</view>
						
					</view>
					<view class="shop-message-right">
						<block v-if="time==1">
							<view class="salc" v-if="frompage=='flash'" @click="toDetail(item.goods_id,item.goods_name)">
								马上抢
							</view>
							<view class="salc" v-else  @click="toDetail(item.goods_id,item.goods_name)">
								马上拼
							</view>
						</block>
						<view class="km" v-if="cateid==1">
							距离约{{item.juli}}Km
						</view>
					</view>
				</view>
			</view>
		
		</view>
	</view>
</template>

<script>
	import cmdProgress from "@/components/cmd-progress/cmd-progress.vue";
	export default{
		components:{
			cmdProgress
		},
		data(){
			return{
				picUrl:this.global.demao.domain.videoUrl
			}
		},
		props:{
			flashList:{
				type:Array, //商品数据列表
			},
				
			cateid:{
				type:Number,
				default:1
			},
			frompage:{
				type:String,
				default:"flash"
			},
			time:{
				type:Number,
				default:1
			}
		},
		methods:{
			selCate(e){
				this.$emit('seleId',e)
			},
			toDetail(e,f){
				this.global.utils.jump(1,"/pages/home/goods-detail/goods-detail?goods_id="+e+"&&head="+f)
			}
		},
		created(){
			
		}
	}
</script>

<style lang="scss">
	.mar{
		margin-top:30rpx;
	}
	.icon-tuan{
		font-size: 40rpx;
		color: $any-col;
		margin-right:15rpx;
	}
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
			position: relative;
			.shop-img {
				width: 20%;
				height: 80%;
				image {
					width: 100%;
					height: 150rpx;
				}
			}
			.shop-message {
				width: 72%;
				height: 88%;
				padding: 2% 3% 2% 5%;
				position: relative;
				@extend .any-flex;
			}
			.shop-message-left{
				width: 100%;
				height: 100%;
				background: #ffffff;
				.title{
					width: 70%;
					height: 40rpx;
					font-size: $uni-font-size-lg;
					color: $any-col;
					@include multi-row-apostrophe(1);
				}
				.name{
					width: 70%;
					font-size: $uni-font-size-sm;
					color: #575757;
					@include multi-row-apostrophe(1);
				}
				.scrol-box{
					@extend .any-flex;
					align-items: flex-start;
					.scrol{
						width: 47%;
						height: 50rpx;
					}
					.scrol-num{
						width: 30%;
						height: 40rpx;
						margin-left: 3%;
						font-size:$uni-font-size-sm;
						@extend .any-flex;
							
					}
					.scrol-num view{
						display: inline-block;
						color: $any-col;
					}
				}
				.price{
					@extend .any-flex;
					align-items: flex-end;
					.new{
						font-size:$uni-font-size-lg;
						color: $any-col;
						font-weight: bold;
					}
					.old{
						font-size: $uni-font-size-base;
						color: #7e7e7e;
						text-decoration: line-through;
						margin-left: 5rpx;
					}
					.price-pin{
						font-size: $uni-font-size-base;
						color: #7e7e7e;
						margin-left: 10rpx;
					}
					.price-pin view{
						display: inline-block;
						color: #ff8e8e;
						padding: 4rpx;
					}
				}
			}

			.shop-message-right{
				width: 30%;
				height: 80%;
				background: #ffffff;
				@extend .any-flex;
				flex-direction: column;
				align-items: center;
				padding: 15rpx 0;
				box-sizing: border-box;
				position: absolute;
				right: 0;
				top: 20%;
				.salc{
					height: 40rpx;
					font-size:$uni-font-size-base;
					background: $any-col;
					color: #ffffff;
					border-radius: 15rpx;
					text-align: center;
					line-height: 40rpx;
					padding: 4rpx 12rpx;
				}
				.km{
					font-size: $uni-font-size-sm;
					margin-top: 10rpx;
				}
			}
		}
	}
</style>
