<template>
	<view>
		
		<view v-for="(item,index) in shoplists" :key='index' class="shop-father">
			<view class="shop">
				<view class="shop-img">
					<image :src="item.image" mode="widthFix"></image>
				</view>
				<view class="shop-message">
					<view class="shop-name">
						<text>{{item.shopname}}</text>
						<text class="addres">{{item.address}}</text>
					</view>
					<view class="shop-start">
						<uni-rate :disabled='false' margin='2' size="10" max='5' :value="item.start" color="#7f7f7f" @change='onChange'
						 active-color="#ffb540" />
					</view>
					
					<view v-if="item.id != 4">
						<view v-if='item.id != 4' class="label">
							<text class="tex">{{ item.labels }}</text>
						</view>
						<view class="goods-price">
							原价 <text>{{item.goodssprice}}</text> 平台价 <text>{{item.newgoodssprice}}</text>
						</view>
						<view class="goodsname"> <text class="iconfont icon-xiangmu"></text> {{item.goodsname}}</view>
						<view class="propergoods"> <text class="iconfont icon-tuan"> </text> <text class="mon">{{item.othergoodsprices}}元</text> {{item.othergoods}} </view>
					</view>
					<view v-else>
						<view class="goodsname"> <text class="iconfont icon-xiangmu"></text> {{item.goodsname}}</view>
						<view class="progress"></view>
						
					</view>
					
					<text v-if="item.id == 1" class="gobuy">去拼团 </text>
					<text v-if="item.id == 2 || item.id == 3" class="gobuy">进店 </text>
					<text v-if="item.id == 4" class="gobuy">马上抢 </text>
					<text v-if="item.id == 1" class="gobuy">去拼团 </text>
					
					<view v-if="item.id == 1" class="havepeople"> 已拼 <text>{{item.prople}}</text> 位 </view>
				</view>
			</view> 
		
		</view>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue' 
	import cmdProgress from "@/components/cmd-progress/cmd-progress.vue"
	export default {
		name: 'shoplist',
		components: {
			uniRate ,
			cmdProgress
		},
		data() {
			return {
				shoplists:[{id:1,
						   prople:'2000',
						   image:'../../static/image/shop/shop-1.jpg',
						   shopname:'艾美世界家',
						   address:'山西大医院',
						   start:'3.5',
						   labels:'便签',
						   goodssprice:'998', 
						   newgoodssprice:'398',
						   goodsname:'芳香精油乳腺疏通',
						   othergoods:'酒槽鼻修护套餐',
						   othergoodsprices:"100",
						   }]
			};
		},
		methods: {
			onClick() {
				
			}
		}
	}
</script>

<style lang="scss">
	
.shop-father {
			@extend .cons;

			.shop {
				margin-top: 10px;
				width: 100%;
				height: 120px;
				border-radius: 10px;
				border: 1px solid $any-zol;
				border-bottom: 2px solid $any-col;
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

					.gobuy {
						padding: 3px 5px;
						background: $any-col;
						color: #FFFFFF;
						position: absolute;
						top: 23px;
						right: 22px;
						font-size: $uni-font-size-sm;
						border-radius: 10px;
					}

					.havepeople {
						position: absolute;
						top: 90px;
						right: 21px;
						font-size: $uni-font-size-base;

						text {

							color: $any-col;
						}
					}

					.shop-name {
						color: $any-col;
						font-size: $uni-font-size-lg;

						.addres {
							font-size: $uni-font-size-sm;
							margin-left: 8px;
							color: #666;
						}
					}

					.label {
						.tex {
							padding: 2px;
							font-size: 10px;
							color: #7f7f7f;
							border: 1px solid #7f7f7f;
						}
					}

					.goods-price {
						font-size: $uni-font-size-sm;

						text {
							margin: 0 5px;
							color: $any-col;
							font-size: $uni-font-size-lg;
						}
					}

					.goodsname {
						font-size: $uni-font-size-base;

						text {
							color: $any-col;
							margin-right: 8px;
						}
					}

					.propergoods {
						font-size: $uni-font-size-base;

						text {
							color: $any-col;
							margin-right: 8px;
						}

						.mon {}
					}
				}
			}
		}		
</style>
