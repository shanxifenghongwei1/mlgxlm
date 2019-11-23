<template>
	<!-- 商品详情页面 -->
	<view>
		<!-- 轮播图 -->
		<mySwiper :bannerlist="good_detail.goodsInfo.goods_planting_picture"></mySwiper>

		<!-- 商品标题 -->
		<view class="goods-title">
			<view class="goods-info">
				<view class="goods-name">
					{{good_detail.goodsInfo.goods_name|isN()}}
				</view>
				<view class="goods-add">
					{{good_detail.goodsInfo.shop_name|isN()}}
				</view>
			</view>
			<view class="goods-num">
				<text>已售{{good_detail.goodsInfo.goods_gd_num|isN(Number)}}</text>
			</view>
		</view>

		<!-- 价格 -->
		<view class="goods-price" v-if="good_detail.goodsInfo.promotion_type==0">
			<!-- 当么没有参加任何活动时 -->
			<view class="NewPrice">
				￥{{good_detail.goodsInfo.price|isN(Number)}}
			</view>
			<view class="yuyue">
				| 需预约
			</view>
		</view>
		<view class="goods-price" v-if="good_detail.goodsInfo.promotion_type==1">
			<!-- 当么商品正在参加拼团-->
			<view class="NewPrice">
				￥{{good_detail.goodsInfo.price|isN(Number)}}
			</view>
			<view class="manJian">
				拼团价￥{{good_detail.goodsInfo.promotion_price|isN(Number)}}
			</view>
			<view class="yuyue">
				| 需预约
			</view>
		</view>
		<view class="goods-price" v-if="good_detail.goodsInfo.promotion_type==2">
			<!-- 当么商品正在参加满减-->
			<view class="NewPrice">
				￥{{good_detail.goodsInfo.price|isN(Number)}}
			</view>
			<view class="manJian">
				满{{good_detail.goodsInfo.coupon_redouction|isN(Number)}}减{{good_detail.goodsInfo.coupon_price|isN(Number)}}
			</view>
			<view class="yuyue">
				| 需预约
			</view>
		</view>
		<view class="goods-price" v-if="good_detail.goodsInfo.promotion_type==4">
			<!-- 当么商品正在参加限时抢-->
			<view class="NewPrice">
				￥{{good_detail.goodsInfo.price|isN(Number)}}
			</view>
			<view class="manJian">
				抢购价￥{{good_detail.goodsInfo.limited_price|isN(Number)}}
			</view>

			<view class="time">
				<uni-countdown color="#FFFFFF" background-color="#00B26A" border-color="#00B26A" :day="time.day" :hour="time.hours"
				 :minute="time.minutes" :second="seconds"></uni-countdown>
			</view>
		</view>

		<!-- 拼团 -->
		<view class="goods-team" v-if="good_detail.goodsInfo.promotion_type==1">
			<view class="title">
				{{good_detail.seller[0].promotion_prople+11}}人在拼团，可直接参与
			</view>
			<view class="team-list">
				<view class="list-li" v-for="(item,index) in good_detail.seller" :key="index">
					<view class="u-team">
						<image :src="item.wx_headimg" mode=""></image>
						<view class="">
							{{item.wx_name|isN()}}
						</view>
					</view>
					<view class="u-info">
						<view class="">
							还差
							<view style="display: inline-block;background: $any-col;">
								{{item.promotion_prople - item.prople}}人
							</view>
							拼团
						</view>
					</view>
					<view class="u-btn">
						去拼团
					</view>
				</view>
			</view>
		</view>

		<!-- 评价 -->
		<view class="eval" v-if="good_detail.assesslist.length">
			<view class="eval-tit">
				<topTit :titCon="titCon"></topTit>
			</view>
			<evaluate :evallist="good_detail.assesslist"></evaluate>
		</view>

		<view class="goShop">
			<view class="goShop-pic">
				<image :src="picUrl+good_detail.shop_set[0].shop_logo" mode=""></image>
			</view>
			<view class="goShop-name">
				<view class="">
					{{good_detail.goodsInfo.shop_name|isN()}}
				</view>
				<view class="">
					<uniRate value="3.5" size="15"></uniRate>
				</view>
			</view>
			<view class="goShop-where" @click="toshop">
				<view class="box">
					进店逛逛
				</view>
			</view>
		</view>


		<!-- 店铺详情 -->
		<view class="content">
			<view class="shop-detail">
				<view class="shop-detail-title">
					门店详情
				</view>
				<view class="table">
					<view class="tl">
						<view class="tr">
							门店名称：
						</view>
						<view class="td">
							{{good_detail.shop_set[0].shop_name|isN()}}
						</view>
					</view>
					<view class="tl">
						<view class="tr">
							联系热线：
						</view>
						<view class="td">
							{{good_detail.shop_set[0].admin_tel|isN()}}
						</view>
					</view>
					<view class="tl">
						<view class="tr">
							门店地址：
						</view>
						<view class="td">
							{{good_detail.shop_set[0].shop_address_detail|isN()}}
						</view>
					</view>
				</view>
			</view>
			<view class="shop-detail">
				<view class="shop-detail-title">
					产品详情
				</view>
				<view class="table">
					<view class="tl">
						<view class="tr">
							产品名称：
						</view>
						<view class="td">
							{{good_detail.shop_set[0].goods_name|isN()}}
						</view>
					</view>
					<view class="tl">
						<view class="tr">
							服务功效：
						</view>
						<view class="td">
							{{good_detail.shop_set[0].goods_effect|isN()}}
						</view>
					</view>
					<view class="tl">
						<view class="tr">
							服务时长：
						</view>
						<view class="td">
							{{good_detail.shop_set[0].goods_duration|isN()}}
						</view>
					</view>
					<view class="tl">
						<view class="tr">
							服务流程：
						</view>
						<view class="td">
							{{good_detail.shop_set[0].goods_process|isN()}}
						</view>
					</view>
				</view>
			</view>
			<view class="shop-detail">
				<view class="shop-detail-title">
					消费提醒
				</view>
				<view class="table">
					<view class="tl">
						<view class="tr">
							有效期限：
						</view>
						<view class="td">
							{{good_detail.shop_set[0].goods_overdue_time|isN()}}
						</view>
					</view>
					<view class="tl">
						<view class="tr">
							营业时间：
						</view>
						<view class="td">
							09:00:00至18:00:00
						</view>
					</view>
					<view class="tl">
						<view class="tr">
							预约提醒：
						</view>
						<view class="td">
							{{good_detail.shop_set[0].goods_appointment|isN()}}
						</view>
					</view>
					<view class="tl">
						<view class="tr">
							使用规则：
						</view>
						<view class="td">
							{{good_detail.shop_set[0].goods_use_rule|isN()}}
						</view>
					</view>
				</view>
			</view>

			<view class="shop-pic-detail" v-if="good_detail.goodsInfo.goods_picture_detail.length">
				<view class="shop-detail-title">
					图文详情
				</view>
				<view :class="state?'pic-image':'pic-image-lg'  ">
					<block v-for="(item,index) in good_detail.goodsInfo.goods_picture_detail" :key="index">
						<image :src="picUrl+item" mode="widthFix"></image>
					</block>
				</view>
				<view class="lg-state" @click="trans">
					<view class="">
						查看更多图文详情
					</view>
					<image src="/static/image/other/icon-xiala.png" mode="widthFix" :class="state?'tea_arrowDown':'tea_arrowUp'"></image>
				</view>
			</view>
		</view>

		<view class="">
			<view class="bac-img">
				<image src="/static/image/other/shoping-remen.png" mode="widthFix" class="bac-imgs"></image>
			</view>
			<goodsList :more="false" :titCon="good_detail.recommend_shop" :place="3"></goodsList>
		</view>
		<coll @collect="collect" @share="share" :collect_state="collect_state"></coll>
		<!-- 空白 -->
		<view class="emit">

		</view>

		<!-- 支付 -->
		<view class="topay">
			<goodsNav :fill="true" :options="options_nav" :button-group="buttonGroup" @click="pay" @butt="butt"></goodsNav>
		</view>
	</view>


</template>

<script>
	import './goods-detail.scss';
	import mySwiper from "@/components/mine/my-swiper.vue";
	import evaluate from "@/components/mine/evaluate.vue";
	import topTit from "@/components/mine/top-title.vue";
	import uniRate from "@/components/uni-rate/uni-rate.vue";
	import goodsList from "@/components/mine/goods.vue";
	import goodsNav from "@/components/uni-goods-nav/uni-goods-nav.vue"
	import uniCountdown from "@/components/uni-countdown/uni-countdown.vue"
	import coll from "@/components/mine/collect.vue"
	export default {
		components: {
			mySwiper,
			evaluate,
			topTit,
			uniRate,
			goodsList,
			goodsNav,
			uniCountdown,
			coll
		},
		data() {
			return {
				options: {},
				good_detail: {},
				picUrl: "",
				time: {},
				collect_state: false, 
				bannerlist: [
					'/static/image/banner/1.jpg', '/static/image/banner/2.jpg', '/static/image/banner/3.jpg',
					'/static/image/banner/4.jpg'
				],
				titCon: {
					name: "商品评价（99）",
					more: "更多评价",
					link: "/pages/member/tool/evaluate/evaluate",
					method: "navigateTo"
				},

				state: true,

				//nav参数
				options_nav: [{
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/kefu.png',
					text: '客服'
				}, {
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png',
					text: '店铺'
				}, {
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png',
					text: '购物车',
					info: 0
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				],
				carlist:[]
			}
		},
		methods: {
			// 跳转至店铺详情页面
			toshop() {
				this.global.utils.jump(1, "/pages/home/shop-detial/shop-detial?shop_id=" + this.good_detail.goodsInfo.shop_id +
					"&&head=" + this.good_detail.goodsInfo.shop_name)
			},
			//查询商品是否被收藏
			findSellect() {
				let data = {};
				data.goods_id = this.options.goods_id
				this.global.request.post({
					url: this.global.demao.api.collectionshop,
					method: "GET",
					data: data,
					success: (res) => {
						console.log(res);
						if (res.msg == "商品已收藏") {
							this.collect_state = true;
						} else {
							this.collect_state = false;
						}
					}
				})
			},
			//关注与取消
			select_or_delect(){
				let that=this;
				let data = {};
				data.goods_id = this.options.goods_id;
				this.global.request.post({
					url: this.collect_state ? this.global.demao.api.collectiondele : this.global.demao.api.add_collection,
					method: "GET",
					data: data,
					success(res){
						console.log("执行这儿了")
						that.global.utils.showToast_my(res.msg)
						that.collect_state=!that.collect_state;
					}
				})
			},
			//查询购物车的数量
			findCar() {
				let data = {};
				this.global.request.post({
					url: this.global.demao.api.cartList,
					method: "GET",
					data: data,
					success: (res) => {
						console.log("购物车数量")
						console.log(res.cartInfo)
						this.options_nav[2].info = res.cartInfo.length;
						this.carlist=res.cartInfo;
					}
				})
			},
			//查询商品详情
			finddetail() {
				let data = {};
				data.goods_id = this.options.goods_id
				console.log(data)
				this.global.request.post({
					url: this.global.demao.api.goodsInfo,
					method: "GET",
					data: data,
					success: (res) => {
						let a = []
						res.goodsInfo.goods_planting_picture ? a = res.goodsInfo.goods_planting_picture.split(",") : a = [];
						if (a.length > 1) {
							a.pop()
						}
						res.goodsInfo.goods_planting_picture = a;


						let b = []
						res.goodsInfo.goods_picture_detail ? b = res.goodsInfo.goods_picture_detail.split(",") : b = [];
						if (b.length > 1) {
							b.pop()
						}
						res.goodsInfo.goods_picture_detail = b;

						let c = new Date().getTime();
						let d = res.goodsInfo.limited_stop_time ? res.goodsInfo.limited_stop_time : c + 100000000;
						let e = d - c;
						let f = this.formatDuring(d - c);


						if (res.goodsInfo.promotion_type == 4) {
							this.buttonGroup[1].text = "立即抢购"
						}
						this.time = f;

						this.good_detail = res;
					}
				})
			},
			trans() {
				this.state = this.state ? false : true
			},

			pay(e) {
				console.log(e)
				if (e.index === 0) {
					uni.makePhoneCall({
						phoneNumber: "18435105990",
						success(res) {

						}
					})
				} else if (e.index === 1) {
					this.toshop()
				} else {

					this.global.utils.jump(2, "/pages/shopping/shopping")
				}

			},
			butt(e) {
				if (e.index === 0) {
					console.log("加入购物车")
					let a=this.carlist.filter((v)=>{
						v.goods_id==this.options.goods_id
					})
					console.log(a.length)
					let data = {};
					data.goods_id = this.options.goods_id;
					data.buy_num = 1;
					this.global.request.post({
						url: this.global.demao.api.add_cart,
						method: "GET",
						data: data,
						success: (res) => {
							this.global.utils.showToast_my(res.msg)
							this.findCar()
						}
					})

				} else {
					console.log("立即购买")
					this.global.utils.jump(1,"/pages/pay/pay")
				}
			},
			formatDuring(mss) {
				let days = parseInt(mss / (1000 * 60 * 60 * 24));
				let hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				let minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
				let seconds = parseInt(mss % (1000 * 60) / 1000);
				return {
					day: days,
					hours: hours,
					minutes: minutes,
					seconds: seconds
				}
			},
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
			}
		},
		onLoad(options) {
			this.options = options;
			this.global.utils.sethead(options.head)
			this.picUrl = this.global.demao.domain.picUrl;
			this.finddetail();
			this.findCar();
			this.findSellect();
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

<style>

</style>
