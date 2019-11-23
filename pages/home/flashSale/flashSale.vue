<template>
	<!-- 限时抢页面 -->
	<view>
		<!-- 分类切换 -->
		<view style="margin-top: -20rpx;">
			<cateFlex :cateList="list1" :cateid="cateid1" @seleId="seleId"></cateFlex>
		</view>
		<!-- 轮播图 -->
		<view class="banner">
			<bwSwiper :swiperList="swiperList" style="width:100%" :fullScreen="false" :videoAutoplay="true" :swiperType="true" autoplay="true"></bwSwiper>
		</view>
		<!-- 分类切换 -->
		<view class="">
			<cateFlex :cateList="list" :cateid="cateid" @seleId="seleId1"></cateFlex>
		</view>
		

		<!-- 第一个列表 -->
		<view class="" style="position: relative;">
			<flashCard :flashList="flashList" :cateid="cateid" :time="cateid1"></flashCard>
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
		components:{
			flashCard,
			bwSwiper,
			cateFlex
		},
		data() {
			return {
				options:{},
				list1:[{
					id:1,
					name:"正在抢购"
				},{
					id:2,
					name:"即将开枪"
				},{
					id:3,
					name:"明日预告"
				}],
				cateid1:1,
				
				list:[{
					id:1,
					name:"距离最近"
				},{
					id:2,
					name:"价格最优"
				}],
				cateid:1,
				
				swiperList:[
					{img: '/static/image/banner/1.jpg',text:'加油'},
					{img: '/static/image/banner/2.jpg',text:'加油'},
					{img: '/static/image/banner/3.jpg',text:'加油'}
				],
				
				flash1:{
					flashList:[],
					page:1
				},
				flashList:[
					{img: '/static/image/banner/1.jpg',text:'加油'},
					{img: '/static/image/banner/1.jpg',text:'加油'},
					{img: '/static/image/banner/1.jpg',text:'加油'}
				]
			}
		},
		methods: {
			seleId(e){
				this.cateid1=e;
				this.findDetail()
			},
			seleId1(e){
				this.cateid=e;
				this.findDetail()
			},
			findDetail(){
				let data={};
				data.limited_type=this.cateid1;
				data.two_bar=this.cateid;
				data.lat1=this.global.lat;
				data.lng1=this.global.lng;
				this.global.request.post({
					url: this.global.demao.api.limited_time,
					method: "GET",
					data: data,
					success: (res) => {
						console.log("得到数据了")
						console.log(res.limitedInfo)
						this.flashList=res.limitedInfo;
						
						let a=res.limitedInfo;
						a.forEach((v)=>{
							v.juli=v.juli?v.juli.toFixed(2):0
						})
						this.flashList = a;
					}
				})
			}
		},
		onLoad(options) {
			this.global.utils.sethead("限时抢")
		},
		onShow(){
			this.findDetail()
		}
	}
</script>

<style lang="scss">
	.banner{
		margin-top: 20rpx;
	}
	
	.flash-shop{
		width: 100%;
		height: 420rpx;
		background: #ffffff;
		box-sizing: border-box;
		position: relative;
		margin-top: 20rpx;
		.back{
			width: 100%;
			height: 340rpx;
			background: blue;
			position: relative;
			overflow: hidden;
		}
		.flash{
			width: 100%;
			height: 100%;
			padding: 20rpx 3%;
			box-sizing: border-box;
			position: absolute;
			left: 0;
			top: 0;
		}
		.num{
			display: inline-block;
			font-size: $uni-font-size-base;
			padding: 3rpx 15rpx 8rpx;
			border-bottom-left-radius: 22rpx;
			border-bottom-right-radius: 22rpx;
			position: absolute;
			right: 100rpx;
			top: 0;
			background: rgba(255,255,255,0.2);
		}
		.title{
			font-size: $uni-font-size-lg;
			color: #ffffff;
		}
		.flash-box{
			width: 100%;
			height: 330rpx;
			background: #ffffff;
			border-radius: 15rpx;
			padding: 20rpx;
			box-sizing: border-box;
			box-shadow:#cccccc 0px 0px 10rpx;
			@extend .any-flex;
			justify-content: space-between;
			margin-top: 20rpx;
		}
		.fs{
			width: 200rpx;
			height: 280rpx;
			background: pink;
		}
		.fs-pic{
			width: 100%;
			height: 200rpx;
		}
		.fs-tit{
			width: 100%;
			font-size: $uni-font-size-base;
			color: #575757;
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
</style>
