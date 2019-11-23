<template>
	<!-- 拼团页面 -->
	<view>

		<!-- 大的分类畅销榜 -->
		<view class="cate-top-shop">
			<view class="title">
				本周畅销榜
			</view>

			<view class="con">
				<view class="box" v-for="(item,index) in assemble_detail.seller" :key="index" @click="toDetail(item.goods_id,item.goods_name)">
					<image class="box-pic" src="/static/image/shop/shop-1.jpg" mode="widthFix"></image>
					<view class="box-tit">
						{{item.goods_name}}
					</view>
					<view class="box-tit2">
						{{item.shop_name}}
					</view>
					<view class="box-price">
						<text class="icon iconfont icon-tuan"></text>
						<view class="box-new">
							￥{{item.promotion_price}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 分类切换 -->
		<view class="">
			<cateFlex :cateList="list" :cateid="cateid" @seleId="seleId"></cateFlex>
		</view>

		<view class="" style="position: relative;" v-if="cateid==1">
			<flashCard :flashList="assemble_detail.distance" :cateid="cateid" :frompage="asd"></flashCard>
		</view>
		<view class="" style="position: relative;" v-if="cateid==2">
			<flashCard :flashList="assemble_detail.assembleInfo" :cateid="cateid" :frompage="asd"></flashCard>
		</view>
		
		
		<!-- 展示多个 -->
		<!-- <view class="flash-shop">
			<view class="back"></view>

			<view class="flash">
				<view class="num">
					已售出520
				</view>
				<view class="title">
					这是标题
				</view>
				<view class="flash-box">
					<view class="fs">
						<image class="fs-pic" src="/static/image/shop/shop-1.jpg" mode=""></image>
						<view class="fs-tit">
							这个是店铺的标题
						</view>
						<view class="price">
							<view class="new">
								￥199
							</view>
							<view class="old">
								￥399
							</view>
						</view>
					</view>
					<view class="fs">
						<image class="fs-pic" src="/static/image/shop/shop-1.jpg" mode=""></image>
						<view class="fs-tit">
							这个是店铺的标题
						</view>
						<view class="price">
							<view class="new">
								￥199
							</view>
							<view class="old">
								￥399
							</view>
						</view>
					</view>
					<view class="fs">
						<image class="fs-pic" src="/static/image/shop/shop-1.jpg" mode=""></image>
						<view class="fs-tit">
							这个是店铺的标题
						</view>
						<view class="price">
							<view class="new">
								￥199
							</view>
							<view class="old">
								￥399
							</view>
						</view>
					</view>
				</view>
			</view>
		</view> -->



	</view>
</template>

<script>
	import flashCard from "@/components/mine/flashSale.vue";
	import bwSwiper from "@/components/bw-swiper/bw-swiper.vue";
	import cateFlex from "@/components/mine/cate-flex.vue"
	export default {
		components: {
			flashCard,
			bwSwiper,
			cateFlex
		},
		data() {
			return {
				options: {},
				list: [{
					id: 1,
					name: "距离最近"
				}, {
					id: 2,
					name: "价格最优"
				}],
				cateid: 1,
				assemble_detail: {}
			}
		},
		methods: {
			seleId(e) {
				this.cateid = e;
			},
			findDetail() {
				let data = {};
				data.lat1 = this.global.lat;
				data.lng1 = this.global.lng;
				this.global.request.post({
					url: "assemble",
					method: "GET",
					data: data,
					success: (res) => {
						console.log(res)
						let a=res.distance;
						a.forEach((v)=>{
							v.juli=v.juli?v.juli.toFixed(2):0
						})
						res.distance=a
						this.assemble_detail = res;
					}
				})
			},
			toDetail(e,f){
				this.global.utils.jump(1,"/pages/home/goods-detail/goods-detail?goods_id="+e+"&&head="+f)
			}
		},
		onLoad(options) {
			this.global.utils.sethead("拼团")
			this.findDetail()
		}
	}
</script>

<style lang="scss">
	.cate-top-shop {
		width: 100%;
		background: $any-col;
		margin-top: 5rpx;
		padding: 20rpx 3%;
		box-sizing: border-box;

		.title {
			font-size: $uni-font-size-lg;
			color: #ffffff;
		}

		.con {
			width: 100%;
			@extend .any-flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 20rpx;

			.box {
				width: 225rpx;
				background: #ffffff;
				border-radius: 20rpx;
				overflow: hidden;
				padding: 10rpx;
				box-sizing: border-box;
			}

			.box-pic {
				width: 100%;

			}

			.box-tit {
				width: 100%;
				font-size: $uni-font-size-base;
				color: ffffff;
				@include multi-row-apostrophe(1);
			}

			.box-tit2 {
				width: 100%;
				font-size: $uni-font-size-sm;
				color: #7e7e7e;
				@include multi-row-apostrophe(1);
			}

			.box-price {
				@extend .any-flex;
				align-items: flex-end;

				.box-new {
					font-size: $uni-font-size-lg;
					color: $any-col;
					font-weight: bold;
				}

				.box-old {
					font-size: $uni-font-size-base;
					color: #7e7e7e;
					text-decoration: line-through;
					margin-left: 5rpx;
				}
				.icon-tuan{
					font-size: 40rpx;
					color: $any-col;
					margin-right:15rpx;
				}
			}
		}
	}

	.flash-shop {
		width: 100%;
		height: 420rpx;
		background: #ffffff;
		box-sizing: border-box;
		position: relative;
		margin-top: 20rpx;

		.back {
			width: 100%;
			height: 340rpx;
			background: #00A1EA;
			position: relative;
			overflow: hidden;
		}

		.flash {
			width: 100%;
			height: 100%;
			padding: 20rpx 3%;
			box-sizing: border-box;
			position: absolute;
			left: 0;
			top: 0;
		}

		.num {
			display: inline-block;
			font-size: $uni-font-size-base;
			padding: 3rpx 15rpx 8rpx;
			border-bottom-left-radius: 22rpx;
			border-bottom-right-radius: 22rpx;
			position: absolute;
			right: 100rpx;
			top: 0;
			background: rgba(255, 255, 255, 0.2);
			color: #002539;
		}

		.title {
			font-size: $uni-font-size-lg;
			color: #ffffff;
		}

		.flash-box {
			width: 100%;
			height: 330rpx;
			background: #ffffff;
			border-radius: 15rpx;
			padding: 20rpx;
			box-sizing: border-box;
			box-shadow: #cccccc 0px 0px 10rpx;
			@extend .any-flex;
			justify-content: space-between;
			margin-top: 20rpx;
		}

		.fs {
			width: 200rpx;
			height: 280rpx;
		}

		.fs-pic {
			width: 100%;
			height: 200rpx;
		}

		.fs-tit {
			width: 100%;
			font-size: $uni-font-size-base;
			color: #575757;
			@include multi-row-apostrophe(1);
		}

		.price {
			@extend .any-flex;
			align-items: flex-end;

			.new {
				font-size: $uni-font-size-lg;
				color: $any-col;
				font-weight: bold;
			}

			.old {
				font-size: $uni-font-size-base;
				color: #7e7e7e;
				text-decoration: line-through;
				margin-left: 5rpx;
			}
		}
	}
</style>
