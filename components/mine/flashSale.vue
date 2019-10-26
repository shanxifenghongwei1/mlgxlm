<template>
	<view class="">
		<view  class="shop-father" v-for="(item,index) in flashList" :key="index">
			<view class="shop">
				<view class="shop-img">
					<image src="/static/image/shop/shop-1.jpg" mode="widthFix"></image>
				</view>
				<view class="shop-message">
					<view class="shop-message-left">
						<view class="title">
							芳香精油乳腺疏通
						</view>
						<view class="name">
							爱美世家
						</view>
						<view class="scrol-box">
							<view class="scrol">
								<cmd-progress stroke-width='8' stroke-color='#FE0000' :percent="30"></cmd-progress>
							</view>
							<view class="scrol-num">
								已拼
								<view class="">
									0
								</view>
								位
							</view>
						</view>
						<view class="price">
							<view class="new">
								￥199
							</view>
							<view class="old"  v-if="cateid==2">
								￥399
							</view>
						</view>
					</view>
					<view class="shop-message-right">
						<view class="salc">
							马上抢
						</view>
						<view class="km" v-if="cateid==1">
							距离1.3Km
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
				
			}
		},
		props:{
			flashList:{
				type:Array, //商品数据列表
				default:[]
			},
				
			cateid:{
				type:Number,
				default:1
			}
		},
		methods:{
			selCate(e){
				this.$emit('seleId',e)
			}
		}
	}
</script>

<style lang="scss">
	.shop-father {
		@extend .cons;
		.shop {
			margin-top: 20rpx;
			width: 100%;
			height: 240rpx;
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
				height: 88%;
				padding: 2% 3% 2% 5%;
				position: relative;
				@extend .any-flex;
			}
			.shop-message-left{
				width: 70%;
				height: 100%;
				background: #ffffff;
				.title{
					width: 100%;
					height: 50rpx;
					font-size: $uni-font-size-lg;
					color: $any-col;
				}
				.name{
					width: 100%;
					height: 50rpx;
					font-size: $uni-font-size-sm;
					color: #575757;
				}
				.scrol-box{
					@extend .any-flex;
					align-items: flex-start;
					.scrol{
						width: 60%;
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
				}
				
			}
			.shop-message-right{
				width: 30%;
				height: 100%;
				background: #ffffff;
				@extend .any-flex;
				flex-direction: column;
				align-items: center;
				padding: 15rpx 0;
				box-sizing: border-box;
				.salc{
					width: 98rpx;
					height: 40rpx;
					font-size:$uni-font-size-base;
					background: $any-col;
					color: #ffffff;
					border-radius: 15rpx;
					text-align: center;
					line-height: 40rpx;
				}
				.km{
					font-size: $uni-font-size-sm;
					margin-top: 10rpx;
				}
			}
		}
	}
</style>
