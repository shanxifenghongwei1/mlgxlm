<!-- 店铺详情 -->

<template>
	<view>
		<!-- banner图 -->
		<view class="banner">
			<swiper :autoplay="true" :interval="2000" :duration="1000">
				<swiper-item v-for="(item ,index) in bannerlist" :key='index' class="banner-item">
					<view class="swiper-item">
						<image :src="item" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<view class="shop-some-message">
			<view class="header-nav">
				
			</view>
			<view class="head-run"><image :src="picUrl+shop_detail.shopInfo.shop_logo" mode=""></image></view>
		
			<view class="shop-name">{{shop_detail.shopInfo.shop_name}}</view>
			<view class="any-flex">
				<view class="shop-start">
					<uni-rate :disabled='false' margin='2' size="15" max='5' :value="shop_detail.shopInfo.shop_star" color="#7f7f7f" @change='onChange'
					 active-color="#ffb540" />
				</view>
			</view>
			<view class="some-message">{{shop_detail.shopInfo.shop_desc}}</view>
			<view class="shop-obj">
				<view class="obj"> <text>特色项目</text> {{shop_detail.shopInfo.t_name}} </view>
				<view class="obj"><text>营业时间</text> {{shop_detail.shopInfo.shop_bus}}</view>
			</view>
			<view class="serve">特色服务</view>
			<view class="serve-message">
				<block v-for="(item,index) in shop_detail.shopInfo.shop_service" :key="index"><view class=""><text class="icon iconfont icon-xuanzhong"></text>{{item}}</view></block>
			</view>
			<view class="any-flex add-box">
				<view class="address any-flex"><text class="iconfont icon-dizhi"></text><text class="red">{{shop_detail.shopInfo.shop_address_detail}}</text></view>
				<view class="phone" @click="phone">
					<image src="/static/image/other/phone.png" mode=""></image>
				</view>
			</view>
			
		</view>

		<!-- 优惠券的导航条 -->
		<view class="coupon" @click="coupon">
			<view class="coupon-left">
				<image src="/static/image/other/icon-manjian.png" mode="" class="icon-manjian"></image>
				<view class="" v-for="(item,index) in shop_detail.shop_coupon" :key="index">
					<text v-if="item.coupon_type===0">满{{item.coupon_redouction}}减{{item.coupon_price}}</text>
					<text v-if="item.coupon_type===1">{{item.discount}}折购买</text>
				</view>
			</view>
			<view class="coupon-num">
				<view class="">
					{{coupon_list.couponInfo.length}}张
				</view>
				<image class="icon-left" src="/static/image/other/icon-left.png" mode=""></image>
			</view>
		</view>


		<!-- 精选商品 -->
		<view class="jingxuan">
			<view class="bac-img">
				<image src="/static/image/other/shoping-jingxuan.png" mode="widthFix" class="bac-imgs"></image>
			</view>
			<view class="">
				<goods :more="false" :titCon="shop_detail.goods_shop.data" :place="3"></goods>
			</view>
		</view>
		
		<!-- 成功案例 -->
		<view class="case-succ">
			<topTitle :titCon="titCon"></topTitle>
			<caseSucc :caseList="caseList_0"></caseSucc>
		</view>
		
		
		<coll @collect="collect" @share="share" :collect_state="collect_state"></coll>
		<view class="shop-bottom">
			
		</view>
	</view>
</template>

<script>
	import './shop-detial.scss'
	import uniRate from '@/components/uni-rate/uni-rate.vue';
	import cateMore from "@/components/mine/cate-more.vue";
	import goods from "@/components/mine/goods.vue";
	import caseSucc from "@/components/mine/case-success.vue";
	import topTitle from "@/components/mine/top-title.vue";
	import evaluate from "@/components/mine/evaluate.vue"
	import coll from "@/components/mine/collect.vue"
	export default {
		components: {
			uniRate,
			cateMore,
			goods,
			caseSucc,
			topTitle,
			evaluate,
			coll
		},
		data() {
			return {
				options:{},
				shop_detail:{},
				collect_state: false,
				coupon_list:{},
				caseList_0:[],
				picUrl:"",
				// banner图
				bannerlist: [
					'../../../static/image/banner/1.jpg', '../../../static/image/banner/2.jpg', '../../../static/image/banner/3.jpg',
					'../../../static/image/banner/4.jpg'
				],

				cateid:1,
				menuList:[
					{
							id: '1',
							text: '精选'
						}, {
							id: '2',
							text: '热玛吉'
						}, {
							id: '3',
							text: '激光除皱'
						},
						{
							id: '4',
							text: '玻尿酸'
						}, {
							id: '5',
							text: '热拉提'
						}, {
							id: '6',
							text: '假数据'
						}, {
							id: '7',
							text: '用来试验的'
						}, {
							id: '8',
							text: '用来凑数'
						}
				],
				titCon:{
					name:"成功案例 (99)",
					more:"更多案例",
					link:"/pages/home/shop-detial/case"
				},
				goodlist:[1,2,3,4]
			};
		},
		methods:{
			caselist(){
				let that=this;
				let data = {};
				data.shop_id = this.options.shop_id;
				this.global.request.post({
					url: this.global.demao.api.caselist,
					method: "GET",
					data: data,
					success(res){
						that.caseList_0=res.caseInfo;
						let a=that.titCon;
						a.link="/pages/home/shop-detial/case?shop_id="+that.options.shop_id;
						a.name="成功案例 ("+ res.caseInfo.length +")" 
						that.titCon=a
					}
				})
			},
			//跳转至优惠券列表页面
			coupon(){
				this.global.utils.jump(1,"/pages/home/coupon/coupon?shop_id="+this.options.shop_id)
			},
			
			
			//请求优惠券列表
			couponlist(){
				let that=this;
				let data = {};
				data.shop_id = this.options.shop_id;
				this.global.request.post({
					url: this.global.demao.api.couponlist,
					method: "GET",
					data: data,
					success(res){
						console.log(res)
						that.coupon_list=res;
					}
				})
			},
			//打电话
			phone(){
				uni.makePhoneCall({
					phoneNumber: "18435105990",
					success(res) {
				
					}
				})
			},
			getCateId(data){
				console.log("这是父组件得到的值"+data)
				this.cateid=data;
			},
			//获取店铺详情
			finddetail(){
				let data={};
				console.log(this.options)
				data.shop_id=this.options.shop_id 
				console.log(data)
				this.global.request.post({
					url: this.global.demao.api.shop_goods,
					method: "GET",
					data: data,
					success: (res) => {
						console.log(res);
						if(res.shopInfo.shop_service){
							res.shopInfo.shop_service=res.shopInfo.shop_service.split(",")
						}
						this.shop_detail=res;
					}
				})
			},
			//点击收藏按钮
			collect(){
				let that=this;
				if (this.collect_state) {
					wx.showModal({
						title: '提示',
						content: '确定要取消该商品的收藏吗',
						success(res) {
							if (res.confirm) {
								that.select_or_delect();
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					})
				} else {
					that.select_or_delect()
				}
				
			},
			share() {
				console.log("点击分享了")
			},
			//收藏与取消
			select_or_delect(){
				let that=this;
				let data = {};
				data.shop_id = this.options.shop_id;
				this.global.request.post({
					url: this.collect_state ? this.global.demao.api.shop_collection_dele : this.global.demao.api.shop_collection,
					method: "GET",
					data: data,
					success(res){
						that.global.utils.showToast_my(res.msg)
						that.collect_state=!that.collect_state;
					}
				})
			},
			//查询是否被收藏
			findSellect() {
				let data = {};
				data.shop_id = this.options.shop_id
				this.global.request.post({
					url: this.global.demao.api.collectionaddd,
					method: "GET",
					data: data,
					success: (res) => {
						console.log(res);
						if (res.msg == "店铺已收藏") {
							this.collect_state = true;
						} else {
							this.collect_state = false;
						}
					}
				})
			}
		},
		onLoad(options) {
			console.log(options)
			this.options=options;
			this.global.utils.sethead(options.head)
				this.picUrl = this.global.demao.domain.videoUrl;
			this.finddetail()				//店铺详情
			this.findSellect()				//店铺是否被收藏
			this.couponlist()				//优惠券
			this.caselist()					//店铺案列
		},
		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				console.log(res.target)
			}
			return {
				title: '自定义分享标题',
				path: '/pages/home/share/share?open_id=' + open_id
			}
		}
	}
</script>

<style lang="scss">
	.header-nav {
		width: 60rpx;
		height: 80rpx;
		margin-top: -60rpx;
		
	}
	.head-run{
		image{
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
	}
	.coupon {
		width: 100%;
		background: #ffffff;
		height: 88rpx;
		@extend .any-flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 3%;
		box-sizing: border-box;
		color: $any-col;
		box-shadow: $any-zol 0px 0px 10rpx;

		.coupon-left {
			@extend .any-flex;
			align-items: center;
		}

		.coupon-left view {
			background: pink;
			border: 1rpx solid $any-col;
			font-size: $uni-font-size-base;
			padding: 0 5rpx;
			margin-left: 10rpx;
		}

		.icon-manjian {
			width: 35rpx;
			height: 35rpx;
		}

		.icon-left {
			width: 13rpx;
			height: 22rpx;
			margin-left: 10rpx;
		}

		.coupon-num {
			@extend .any-flex;
			font-size: $uni-font-size-base;
			color: #858585;
			align-items: center;
		}
	}

	.shop-card {
		width: 100%;
		box-shadow: $any-zol 0px 0px 10rpx;
		padding: 22rpx;
		box-sizing: border-box;
		background: #ffffff;
		margin-top: 20rpx;

		.shop-card-tit {
			@extend .any-flex;
		}

		.shop-card-tit image {
			width: 34rpx;
			height: 29rpx;
		}

		.shop-card-tit view {
			font-size: $uni-font-size-lg;
			font-weight: bold;
			margin-left: 10rpx;
		}

		.shop-card-con image {
			display: inline-block;
			margin-top: 20rpx;
			width: 340rpx;
			height: 210rpx;
		}

		.shop-card-con image:nth-child(2n) {
			margin-left: 25rpx;
		}
	}

	.jingxuan {
		.bac-img {
			margin: 20rpx 0;
			height: 74rpx;
			width: 100%;

			image {
				width: 100%;
			}
		}
	}


	.case-succ{
		width: 100%;
		padding: 20rpx 3% 20rpx;
		box-sizing: border-box;
		box-shadow: $any-zol 0px 0px 10rpx;
		margin-top: 30rpx;
	}


	.evaluate{
		width: 100%;
		padding: 20rpx 0 25rpx;
		box-sizing: border-box;
		box-shadow: $any-zol 0px 0px 10rpx;
		margin-top: 40rpx;
	}
	.evaluate-top{
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
	}
	
	
	.evaluate-li{
		width: 100%;
		height: 160rpx;
		background: pink;
		border-top: 2rpx solid #cdcdcd;
	}
	.shop-bottom {
		width: 100%;
		height: 100rpx;
	}
</style>
