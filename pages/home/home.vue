<template>
	<!-- 首页 -->
	<view class="">
		<view class="conss">
			<!-- 搜索框 -->
			<searchAny></searchAny>
			<!-- 下面四个图标 -->
			<view class="seduce">
				<view class="list-one" @click="one_cate_page(item.url)" v-for="(item,index) in one_cate" :key="index">
					<view class="icon iconfont" :class="item.icon"></view>
					<view class="text font-weig">{{item.name}}</view>
				</view>
				
			</view>
		</view>
		<!-- 主要功能 -->
		<view class="significance-father">

			<view class="significance">
				<view @click="runHairdressing(item.t_id,item.t_name)" data-bs='asdxs' class="sign-one" v-for="(item,index) in indexData.type"
				 :key='index'>
					<image class="icon" :src="picUrl+item.t_img" mode=""></image>
					<view class="text font-weig">{{item.t_name}}</view>
				</view>

				<view @click="goNear()" class="sign-one">
					<view class="icon-4"></view>
					<view class="text font-weig">附近店铺</view>
				</view>
			</view>


			<!-- 中间的20个功能图标 -->
			<view class="son-father">
				<view class="son">
					<view class="butf">
						<view @click="menuDetail(item.t_id,item.t_name)" v-for="(item , index) in indexData.s_type1" :key='index' class="list-one">
							<image mode="aspectFit" :src="picUrl+item.t_img" class="icon"></image>
							<view class="text">{{item.t_name}}</view>
						</view>
					</view>
					<view class="head">
						<view @click="menuDetail(item.t_id,item.t_name)" v-for="(item , index) in indexData.s_type2" :key='index' class="list-one">
							<image mode="aspectFit" :src="picUrl+item.t_img" class="icon"></image>
							<view class="text">{{item.t_name}}</view>
						</view>
					</view>
					<view class="head">
						<view @click="menuDetail(item.t_id,item.t_name)" v-for="(item , index) in indexData.s_type3" :key='index' class="list-one">
							<image mode="aspectFit" :src="picUrl+item.t_img" class="icon"></image>
							<view class="text">{{item.t_name}}</view>
						</view>
					</view>
					<view class="head">
						<view @click="menuDetail(item.t_id,item.t_name)" v-for="(item , index) in indexData.s_type4" :key='index' class="list-one">
							<image mode="aspectFit" :src="picUrl+item.t_img" class="icon"></image>
							<view class="text">{{item.t_name}}</view>
						</view>
						<view class="list-one" @click="toCatePage()">
							<image mode="aspectFit" src="../../static/image/homepage/quanbu.jpg" class="icon"></image>
							<view class="text">更多</view>
						</view>
					</view>
				</view>
			</view>


			<!-- banner图 -->
			<view class="banner">
				<swiper :indicator-active-color='colors' :indicator-dots="true" :autoplay="true" :interval="2000" :duration="1000">
					<swiper-item v-for="(item ,index) in bannerlist" :key='index' class="banner-item">
						<view class="swiper-item">
							<image :src="item" mode="widthFix"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>


			<!-- 商品精选 -->
			<view class="choiceness">
				<view class="bac-img">
					<image src="../../static/image/other/shopimg.jpg" mode="widthFix" class="bac-imgs"></image>
				</view>
				<view class='shoplist'>
					<view v-for="(item,index) in headlist" :key='index' class="list" :class="item.id== ids? 'active' : '' " @click="exchanges(item.id)">{{ item.name }}</view>
				</view>
				
				<goodlist :cateid="ids" :goodslist="indexData"></goodlist>

			</view>

			<!-- 本周新店 -->

			<view class="newshop">
				<view class="newshop-head">
					<view class="icons">
						<view class="iconsss"></view>
						<view>本周新店</view>
					</view>
					<view @click="new_store()"  class="more">更多</view>
				</view>

				<view class="shop-col" v-for="(item,index) in indexData.week_newshop" :key="index" @click="jump(item.shop_id,item.shop_name)">
					<view class="shop-col-img">
						<image src="../../static/image/other/shopimg2.jpg" mode="widthFix"></image>
					</view>
					<view class="shop-col-message">
						<view class="shopname">{{item.shop_name}} <text>{{item.shop_address_provice+item.shop_address_city+item.shop_address_area}}</text>
						</view>
						<view class="shopnameng" v-if="item.shop_Ename">{{item.shop_Ename}}</view>
						<view class="gooods" v-for="(item,index) in item.shop_label" :key='index'> <text class="iconfont icon-icon-up"></text>
							{{item}} </view>
						<view class="buy">Buy</view>
					</view>
				</view>
			</view>

			<!-- 今日推荐 -->
			<view class="today">
				<view class="bac-img">
					<image src="../../static/image/other/shopings.png" mode="widthFix" class="bac-imgs"></image>
				</view>

				<view class="father">
					<view class="goodslist">
						<view class="goods-one" v-for="(item,index) in indexData.recommend" :key='index' @click="toGoods(item.goods_id,item.goods_name)">
							<view class="goodsname">{{item.goods_name}}</view>
							<view class="goodsprice"> <text>{{item.price}}</text> RMB </view>
							<image class="goodsimg" src="../../static/image/other/goods.jpg" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<sunblind v-if="sunblind"></sunblind>
		<btn font="提交按钮" @save="save()"></btn>
	</view>
</template>


<script>
	import demo from "@/common/js/demao.js"
	import goodlist from '@/components/mine/goods-row.vue'
	import searchAny from '@/components/my-search/my-search.vue'
	export default {
		components: {
			goodlist,
			searchAny
		},
		data() {
			return {
				city: "",
				sunblind:false,
				one_cate:[
					{name:"优惠券",url:"/pages/home/coupon/coupon",icon:"icon-icon_coupon"},
					{name:"拼团",url:"/pages/home/assemble/assemble",icon:"icon-pintuan"},
					{name:"限时抢",url:"/pages/home/flashSale/flashSale",icon:"icon-shijian"},
					// {name:"置换",url:"/pages/home/displace/displace",icon:"icon-hezuo"},
					{name:"分享有礼",url:"/pages/home/hongbao/share",icon:"icon-hezuo"},
					{name:"新人专享",url:"/pages/home/hongbao/newPeople",icon:"icon-hezuo"},
					{name:"分销",url:"/pages/home/retail_home/retail_home",icon:"icon-fenxiao"}
				],
				indexData: {
					type: [{
						t_id: 1,
						t_name: "美容美发",
						t_img: "/images/0e1c1739e14db26c54921be94fd4d60.png",
						p_id: 0,
						is_hot: null,

					}, {
						t_id: 2,
						t_name: "身体护理",
						t_img: "/images/443baa8259c6045f30129f3373a3d78.png",
						p_id: 0,
						is_hot: null
					}, {
						t_id: 3,
						t_name: "问题皮肤",
						t_img: "/images/c7a9301bf841c8300bfe090a38003bd.png",
						p_id: 0,
						is_hot: null
					}, {
						t_id: 4,
						t_name: "瑜伽健身",
						t_img: "/images/c8e1b21b77f186848b6e6b7c402fa73.png",
						p_id: 0,
						is_hot: null
					}],
					s_type1: [{
							t_id: 6,
							t_name: "面部护理",
							t_img: "/images/mianbuhuli.jpg",
							p_id: 1,
							is_hot: 1
						},
						{
							t_id: 7,
							t_name: "抗衰除皱",
							t_img: "/images/kangsuichuzhou.jpg",
							p_id: 1,
							is_hot: 1
						},
						{
							t_id: 8,
							t_name: "塑形换肤",
							t_img: "/images/shuxinghuanfu.jpg",
							p_id: 1,
							is_hot: 1
						},
						{
							t_id: 9,
							t_name: "养发美甲",
							t_img: "/images/meifameijia.jpg",
							p_id: 1,
							is_hot: 1
						},
						{
							t_id: 10,
							t_name: "深度清洁",
							t_img: "/images/shenduqingjie.jpg",
							p_id: 1,
							is_hot: 1
						}
					],
					s_type2: [{
							t_id: 11,
							t_name: "私密保养",
							t_img: "/images/simibaoyang.jpg",
							p_id: 2,
							is_hot: null
						},
						{
							t_id: 12,
							t_name: "冰点脱毛",
							t_img: "/images/tuomao.jpg",
							p_id: 2,
							is_hot: null
						},
						{
							t_id: 13,
							t_name: "刮痧拔罐",
							t_img: "/images/baguan.jpg",
							p_id: 2,
							is_hot: null
						},
						{
							t_id: 14,
							t_name: "肩颈护理",
							t_img: "/images/anmo.jpg",
							p_id: 2,
							is_hot: null
						},
						{
							t_id: 24,
							t_name: "减肥健胸",
							t_img: "/images/jianfei.jpg",
							p_id: 2,
							is_hot: null
						}
					],
					s_type3: [{
							t_id: 15,
							t_name: "祛斑祛痘",
							t_img: "/images/qudou.jpg",
							p_id: 3,
							is_hot: null
						},
						{
							t_id: 16,
							t_name: "毛孔粗大",
							t_img: "/images/maokong.jpg",
							p_id: 3,
							is_hot: null
						},
						{
							t_id: 17,
							t_name: "敏感肌肤",
							t_img: "/images/mingganjifu.jpg",
							p_id: 3,
							is_hot: null
						},
						{
							t_id: 18,
							t_name: "肌肤暗沉",
							t_img: "/images/jifuanchen.jpg",
							p_id: 3,
							is_hot: null
						},
						{
							t_id: 19,
							t_name: "黑头",
							t_img: "/images/heitou.jpg",
							p_id: 3,
							is_hot: null
						}
					],
					s_type4: [{
							t_id: 20,
							t_name: "美容瑜伽",
							t_img: "/images/meirongyujia.jpg",
							p_id: 4,
							is_hot: null
						},
						{
							t_id: 21,
							t_name: "纤体瑜伽",
							t_img: "/images/qiantiyujia.jpg",
							p_id: 4,
							is_hot: null
						},
						{
							t_id: 22,
							t_name: "康复瑜伽",
							t_img: "/images/kangfuyujia.jpg",
							p_id: 4,
							is_hot: null
						},
						{
							t_id: 23,
							t_name: "健身瑜伽",
							t_img: "/images/jianshengyujia.jpg",
							p_id: 4,
							is_hot: null
						}
					],
				},
				list:[1,2,3,4],

				dataUrl: "",
				picUrl: demo.domain.picUrl,

				// 搜索栏样式
				iconType: ['search'],


				// banner图
				bannerlist: [
					'../../static/image/banner/1.jpg', '../../static/image/banner/2.jpg', '../../static/image/banner/3.jpg',
					'../../static/image/banner/4.jpg'
				],
				// 指示点颜色
				colors: '#e01818',

				// 循环列表
				headlist: [{
					id: 1,
					name: '拼团'
				}, {
					id: 2,
					name: '优惠'
				}, {
					id: 3,
					name: '销量'
				}, {
					id: 4,
					name: '限时抢'
				}],


				// 高亮id
				ids: 1,
				//是否为新人
				isNew:false
			}

		},
		methods: {
			one_cate_page(e){
				this.global.utils.jump(1,e);
			},
			// 美容美发/身体护理/问题皮肤/瑜伽健身 四个功能的跳转
			runHairdressing(e, f) {
				this.sunblind=true;
				let url= "/pages/home/hairdressing/hairdressing?runid=" + e + "&&head=" + f
				this.global.utils.jump(1,url);
			},
			//跳转附近店铺
			goNear() {
				this.sunblind=true;
				let url="/pages/home/nearby/nearby?head=" + "附近店铺"
				this.global.utils.jump(1,url);
			}, 
			//跳转本周新店
			new_store(){
				this.sunblind=true;
				let url="/pages/home/nearby/newStore"
				this.global.utils.jump(1,url);
			},
			//跳转二级分类详情页面
			menuDetail(e, f) {
				this.sunblind=true;
				let url="/pages/home/menu-details/menu-details?head=" + f + "&&goods_id=" + e
				this.global.utils.jump(1,url);
			},
			//跳转商品详情页面
			toGoods(e, f) {
				this.sunblind=true;
				let url="/pages/home/goods-detail/goods-detail?goods_id=" + e + "&&head=" + f
				this.global.utils.jump(1,url);
			},

			//跳转店铺详情页面
			jump(e, f){
				this.sunblind=true;
				let url="/pages/home/shop-detial/shop-detial?shop_id=" + e + "&&head=" + f;
				this.global.utils.jump(1,url);
			},
			// 跳转至更多分类
			toCatePage(){
				this.global.utils.jump(1,"/pages/cate/cate");
			},
			// 高亮id
			exchanges(id) {
				this.ids = id;
			},

			//查找数据
			findData: function(e) {
				let data = {};
				e ? data.promotion_type = e : data = {};
				//首页页面
				uni.request({
					url: demo.domain.request + "index",
					data: data,
					method: "GET",
					dataType: "json",
					header: {
						"Content-Type": 'application/x-www-form-urlencoded', // 默认值
						'X-TOKEN-PETMALL': '',
					},
					success: (result) => {
						let list = result.data.data.week_newshop;
						list.forEach((v) => {
							v.shop_label = v.shop_label?v.shop_label.split(","):[]
						})
						result.data.data.week_newshop = list;


						let list1 = result.data.data.goodsInfo;
						list1.forEach((v) => {
							v.shop_label = v.shop_label?v.shop_label.split(","):[]
						})
						result.data.data.goodsInfo = list1;


						this.indexData = result.data.data
					},
					complete: (res) => {

					}
				})
			}
		},
		onLoad(Option) {
			
			this.global.utils.sethead('美丽共享联盟');				//设置标题
			
			this.findData(); 										//获取首页数据
			
			this.city=this.global.city;								//获取当前所在城市
			this.global.watch((v)=>{
				this.city=v;
			})
			
			
			this.global.request.post({								//判断是否登录以及是否为新人
				url: this.global.demao.api.usertime,
				method: "GET",
				data: {},
				isLoading: true,
				success: (res) => {
					let a=new Date();
					a=a.getTime();
					if(a-res.data[0].wx_user_login * 1000 > 60*60*24*1000*3){
						console.log("不是新人了")
						this.one_cate=[
							{name:"优惠券",url:"/pages/home/coupon/coupon",icon:"icon-icon_coupon"},
							{name:"拼团",url:"/pages/home/assemble/assemble",icon:"icon-pintuan"},
							{name:"限时抢",url:"/pages/home/flashSale/flashSale",icon:"icon-shijian"},
							// {name:"置换",url:"/pages/home/displace/displace",icon:"icon-hezuo"},
							{name:"分享有礼",url:"/pages/home/hongbao/share",icon:"icon-hezuo"},
							{name:"分销",url:"/pages/home/retail_home/retail_home",icon:"icon-fenxiao"}
						]
					}else{
						console.log("是新人")
						this.one_cate=[
							{name:"优惠券",url:"/pages/home/coupon/coupon",icon:"icon-icon_coupon"},
							{name:"拼团",url:"/pages/home/assemble/assemble",icon:"icon-pintuan"},
							{name:"限时抢",url:"/pages/home/flashSale/flashSale",icon:"icon-shijian"},
							// {name:"置换",url:"/pages/home/displace/displace",icon:"icon-hezuo"},
							{name:"新人专享",url:"/pages/home/hongbao/newPeople",icon:"icon-hezuo"},
							{name:"分销",url:"/pages/home/retail_home/retail_home",icon:"icon-fenxiao"}
						]
					}
				}
			})
			
			
		},
		onShow(){
			this.sunblind=false;
		}
	}
</script>

<style lang="scss">
	.today {
		width: 100%;
		@extend .any-over;

		.bac-imgs {
			margin: 6rpx 0;
			height: 74rpx;
			width: 100%;
			background: #007AFF;

			image {
				width: 100%;
			}
		}

		.father {
			@extend .cons;

			.goodslist {
				padding: 3% 0;
				@extend .any-flex;
				flex-wrap: wrap;

				.goods-one {
					width: 29%;
					height: 46%;
					padding-top: 10rpx;
					margin: 1.5%;
					border-radius: 20rpx;
					border: 2rpx solid $any-zol;
					display: flex;
					flex-direction: column;

					.goodsname {
						font-size: $uni-font-size-lg;
						text-align: center;
						width: 100%;
						@extend .font-weig;
						@include multi-row-apostrophe(1);
					}

					.goodsprice {
						font-size: $uni-font-size-base;
						text-align: center;
						width: 100%;

						text {
							color: $any-col;
							font-size: $uni-font-size-lg;
						}
					}

					.goodsimg {
						width: 100%;
						height: 210rpx;
						overflow: hidden;
						border-bottom-right-radius: 20rpx;
						border-bottom-left-radius: 20rpx;
					}
				}
			}

		}
	}

	.newshop {
		@extend .cons;

		.newshop-head {
			width: 100%;
			height: 60rpx;

			@extend .any-flex;
			justify-content: space-between;
			margin: 16rpx 0rpx;

			.icons {
				@extend .any-flex;
				font-size: $uni-font-size-base;

				.iconsss {
					height: 40rpx;
					width: 8rpx;
					margin-right: 10rpx;
					background: $any-col;
					font-size: $uni-font-size-lg;
				}
			}

			.more {
				font-size: $uni-font-size-base;
				width: 60rpx;
				height: 40rpx;
				line-height: 40rpx;
				background: $any-col;
				color: #fff;
				text-align: center;
				border-radius: 10rpx;
			}
		}

		.shop-col {
			@extend .any-flex;
			width: 100%;
			height: 300rpx;
			border: 2rpx solid $any-col;
			margin-bottom: 10rpx;

			.shop-col-img {
				width: 35%;
				height: 100%;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.shop-col-message {
				position: relative;
				width: 54%;
				height: 94%;
				padding: 3%;

				.shopname {
					font-size: $uni-font-size-lg;
					color: $any-col;

					text {
						margin-left: 16rpx;
						color: #666;
						font-size: $uni-font-size-sm;
					}
				}

				.shopnameng {
					font-size: $uni-font-size-base;
					color: #999999;
					position: relative;
					border-bottom: 4rpx solid #999;
					width: 85%;
					line-height: 40rpx;
				}

				.shopnameng:after {
					content: '';
					background: #999;
					height: 4rpx;
					width: 50%;
					position: absolute;
					bottom: 0rpx;
					left: 2rpx;
				}

				.gooods {
					margin: 4rpx 0;
					font-size: $uni-font-size-lg;

					text {
						color: $any-col;
					}
				}

				.buy {
					position: absolute;
					right: -8rpx;
					bottom: 28rpx;
					font-size: $uni-font-size-base;
					padding: 4rpx 6rpx;
					background: $any-col;
					width: 60rpx;
					color: #FFFFFF;
					text-align: center;
				}
			}
		}

	}

	.choiceness {
		width: 100%;
		@extend .any-over;

		.bac-img {
			margin: 20rpx 0;
			height: 74rpx;
			width: 100%;

			image {
				width: 100%;
			}
		}

		.shoplist {
			width: 100%;
			height: 80rpx;
			border-top: 2rpx solid $any-zol;
			border-bottom: 2rpx solid $any-zol;
			font-size: $uni-font-size-lg;
			@extend .any-flex;
			justify-content: space-between;

			.list {
				width: 20%;
				text-align: center;
				line-height: 80rpx;
			}

			.active {
				color: $any-col;
				position: relative;
			}

			.active:after {
				content: '';
				display: block;
				position: absolute;
				top: 74rpx;
				left: 10%;
				width: 80%;
				height: 8rpx;
				background: $any-col;
			}
		}


	}

	.banner {
		width: 100%;
		height: 340rpx;

		swiper {
			width: 100%;
			height: 100%;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.son-father {
		@extend .any-over;
		@extend .cons;
		padding-bottom: 20rpx;

		.son {
			width: 100%;
			height: 560rpx;
			border: 2rpx solid #d6d6d6;
			box-shadow: 0rpx 0rpx 15rpx #bfbdbd;
			border-radius: 18rpx;

			.butf,
			.head,
			.quester,
			.flode,
			.near {
				width: 100%;
				height: 23%;
				margin-top: 10rpx;
				@extend .any-flex;
				justify-content: space-around;

				.list-one {
					width: 20%;
					height: 100%;
					text-align: center;

					.icon {
						background-size: cover;
						width: 50%;
						height: 50%;
					}

					.text {
						height: 20%;
						font-size: $uni-font-size-base;
					}
				}
			}

			.butf {
				margin-top: 20rpx;
			}
		}
	}

	.conss {
		@extend .cons;
		background-image: linear-gradient($any-col, #f7b2b2);
		@extend .any-over;
		height: 330rpx;
		position: relative;
	}

	.significance-father {
		@extend .cons;
		position: absolute;
		left: 0;
		top: 200rpx;

		.significance {
			width: 100%;
			background: #FFFFFF;
			height: 180rpx;
			border-top-left-radius: 20rpx;
			border-top-right-radius: 20rpx;
			margin-top: 30rpx;
			@extend .any-over;
			@extend .any-flex;
			justify-content: space-around;

			.sign-one {
				margin-top: 30rpx;
				width: 20%;
				height: 100%;
				@extend .any-flex;
				flex-direction: column;
				align-items: center;

				.icon {
					margin: 5rpx auto;
					width: 100rpx;
					height: 100rpx;
					background-size: cover;
				}

				.icon-1 {
					@extend .icon;

					background-size: cover;
				}

				.icon-2 {
					@extend .icon;
					background-size: cover;
				}

				.icon-3 {
					@extend .icon;
					background-size: cover;
				}

				.icon-4 {
					@extend .icon;
					background: url(../../static/image/homepage/near.png) no-repeat center;
					background-size: cover;
				}

				.text {
					width: 90%;
					text-align: center;
					margin: 0 auto;
					font-size: $uni-font-size-base;
				}
			}
		}

	}

	.seduce {
		width: 100%;
		height: 120rpx;
		@extend .any-flex;
		justify-content: space-around;
		margin-top: 10rpx;

		.list-one {
			height: 100%;
			width: 20%;
			color: #FFFFFF;
			@extend .any-over;

			.icon {
				text-align: center;
				font-size: 60rpx;
				margin: 6rpx auto 2rpx;
			}

			.text {
				font-size: $uni-font-size-lg;
				text-align: center;
			}
		}
	}

	.sear {
		width: 100%;
		height: 60rpx;
		border-radius: 50rpx;
		background: $any-zol;
		margin-top: 20rpx;
		@extend .any-flex;
		justify-content: space-between;


		.sear-text {
			font-size: $uni-font-size-base;
			line-height: 60rpx;
			margin-left: 30rpx;
			color: #d0d0d0;
		}

		.sear-logo {
			.icon-fathre {
				width: 20rpx;
				height: 20rpx;
				border-radius: 10rpx;
				background: $any-col;
			}

			margin-right: 30rpx;

			.sear-icon {
				color: #000000;
			}
		}

	}
</style>
