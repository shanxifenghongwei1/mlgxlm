<template>
	<!-- 商品详情页面 -->
	<view>
		<!-- 轮播图 -->
		<mySwiper :bannerlist="good_detail.goodsInfo.goods_planting_picture"></mySwiper>

		<!-- 商品标题 -->
		<view class="goods-title">
			<view class="goods-info">
				<view class="goods-name">
					{{good_detail.goodsInfo.goods_name}}
				</view>
				<view class="goods-add">
					{{good_detail.goodsInfo.shop_name}}
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
		<view v-if="good_detail.goodsInfo.promotion_type==2">
			
			<view v-if='good_detail.goodsInfo.coupon_type == 0'  class="goods-price">
			 
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
			
			
			<view v-if='good_detail.goodsInfo.coupon_type == 1'  class="goods-price">
			
				<!-- 当么商品正在参加满减-->
				<view class="NewPrice">
					￥{{good_detail.goodsInfo.price|isN(Number)}}
				</view>
				<view class="manJian">
					{{good_detail.goodsInfo.is_member_discount}} 折
				</view>
				<view class="yuyue">
					| 需预约
				</view>	
			
			
			
			
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
<!-- 		<view class="goods-team" v-if="good_detail.goodsInfo.promotion_type==1 && num" @click="toPt_list()">
			<view class="title">
				<text>
					{{pt_num_all}}人在拼团，可直接参与
				</text>
				<text class="more">查看更多</text>
			</view>
			<view class="team-list">
				<view class="list-li" v-for="(item,index) in good_detail.seller" :key="index" v-if="index<2">
					<view class="u-team">
						<image :src="item.wx_headimg" mode=""></image>
						<view class="">
							{{item.wx_name}}
						</view>
					</view>
					<view class="u-info">
						<view class="">
							还差
							<view style="display: inline-block;background: $any-col;">
								{{good_detail.goodsInfo.promotion_prople - item.pt_sum}}人
							</view>
							拼团
						</view>
					</view>
					<view class="u-btn">
						去拼团
					</view>
				</view>
			</view>
		</view> -->

		<!-- 评价 -->
		<view class="eval" v-if="good_detail.assesslist.length">
			<view class="eval-tit">
				<topTit :titCon="titCon"></topTit>
			</view>
			<evaluate :evallist="good_detail.assesslist"></evaluate>
		</view>

		<view class="goShop">
			<view class="goShop-pic">
				<image :src="picUrl+good_detail.goodsInfo.shop_logo+''" mode=""></image>
			</view>
			<view class="goShop-name">
				<view class="">
					{{good_detail.goodsInfo.shop_name}}
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
							{{good_detail.shop_set[0].shop_name}}
						</view>
					</view>
					<view class="tl">
						<view class="tr">
							联系热线：
						</view>
						<view class="td">
							{{good_detail.shop_set[0].admin_tel}}
						</view>
					</view>
					<view class="tl">
						<view class="tr">
							门店地址：
						</view>
						<view class="td">
							{{good_detail.shop_set[0].shop_address_detail}}
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
							{{good_detail.shop_set[0].goods_name}}
						</view>
					</view>
					<view class="tl">
						<view class="tr">
							服务功效：
						</view>
						<view class="td">
							{{good_detail.shop_set[0].goods_effect}}
						</view>
					</view>
					<view class="tl">
						<view class="tr">
							服务时长：
						</view>
						<view class="td">
							{{good_detail.shop_set[0].goods_duration}}
						</view>
					</view>
					<view class="tl">
						<view class="tr">
							服务流程：
						</view>
						<view class="td">
							{{good_detail.shop_set[0].goods_process}}
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
							{{good_detail.shop_set[0].goods_overdue_time}}
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
							{{good_detail.shop_set[0].goods_appointment}}
						</view>
					</view>
					<view class="tl">
						<view class="tr">
							使用规则：
						</view>
						<view class="td">
							{{good_detail.shop_set[0].goods_use_rule}}
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

<!-- 		<view class="">
			<view class="bac-img">
				<image src="/static/image/other/shoping-remen.png" mode="widthFix" class="bac-imgs"></image>
			</view>
			<goodsList :more="false" :titCon="good_detail.recommend_shop" :place="3"></goodsList>
		</view> -->
		<coll @collect="collect" @share="share" :collect_state="collect_state"></coll>
		<!-- 空白 -->
		<view class="emit">

		</view>

		<!-- 支付 -->
		<view class="topay">
			<goodsNav :fill="true" :options="options_nav" :button-group="buttonGroup" @click="pay"  @butt="butt"></goodsNav>
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
				//前面页面数据 goods_id / goods_name
				options: {},
				// goods详情
				good_detail: {},
				// 图片地址
				picUrl: this.global.demao.domain.videoUrl,
				//限时抢的倒计时
				time: {},
				//是否收藏
				collect_state: false,
				// 评价 组件数据
				titCon: {
					name: "商品评价（99）",
					more: "更多评价",
					link: "/pages/member/tool/evaluate/evaluate",
					method: "navigateTo"
				},

				// 展开收起图文详情
				state: true,
				// 最下面组件 左侧的显示 nav参数  
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
				
				// 最下面右侧组件参数
				buttonGroup: [],
				// 购物车数据
				carlist: [],
				// 拼团总人数
				pt_num_all:0,
				
				// 优惠券状态 0 未领取 1 优惠券可以使用 2 不可使用
				cumpadd:0,
				
				// 优惠券列表
				coupon:[],
				
				// 这是发请求头部
				com:''
				
			}
		},
		methods: {
			//0为普通购买，1.拼团购买，2.优惠券购买，3限时抢购买，4积分购买，5分销购买     


			// 点击进店看看 跳转至店铺详情页面
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
			//点击关注按钮  关注与取消
			select_or_delect() {
				let that = this;
				let data = {};
				data.goods_id = this.options.goods_id;
				this.global.request.post({
					url: this.collect_state ? this.global.demao.api.collectiondele : this.global.demao.api.add_collection,
					method: "GET",
					data: data,
					success(res) {
						console.log("执行这儿了")
						that.global.utils.showToast_my(res.msg)
						that.collect_state = !that.collect_state;
					}
				})
			},
			// 购物车所有商品的数量    
			
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
						this.carlist = res.cartInfo;
					}
				})
			},
			
			
			
			//查询商品详情
			finddetail() {
				var that=this;
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
						
						let f = this.formatDuring(d * 1000 - c);
						
						this.time = f;
						
						let num=0;
						
						let g = res.seller;

						if(g){
							g.forEach((v)=>{
								num += v.pt_sum
							})
						}
						
						
						this.good_detail = res;
						
							//总拼团人数
						this.pt_num_all = num;
						
						this.com = {
							goods_id: res.goodsInfo.goods_id,
							shop_id: res.goodsInfo.shop_id,
							num:1,
							is_cart: 0,
							good_cate:0
						}
						
						// 参加了优惠券活动
						if(this.good_detail.goodsInfo.promotion_type == 2){
							
							let data={};
							data.goods_id=that.good_detail.goodsInfo.goods_id;
							
							that.global.request.post({
								url: that.global.demao.api.coupon_list_all,
								method: "GET",
								data: data,
								success: (res) => {
									// 是否有领取
									if(res.data.length){
										this.cumpadd = res.data[0].is_use==0?1:2 //是否可以使用
										this.coupon=res.data
									}else{
										this.cumpadd = 0
									}
								}
							})
							
						}
						
						
						if (this.good_detail.goodsInfo.promotion_type == 0 ) {
							
							this.buttonGroup = [{
									id: 99,
									text: '加入购物车',
									backgroundColor: '#ff0000',
									color: '#fff'
								},
								{
									id: 0,
									text: '立即购买',
									backgroundColor: '#ffa200',
									color: '#fff'
								}
							]
						} else if (this.good_detail.goodsInfo.promotion_type == 1) {
							this.buttonGroup = [{
									id: 1,
									text: '拼团购买',
									backgroundColor: '#ff0000',
									color: '#fff'
								},
								{
									id: 0,
									text: '立即购买',
									backgroundColor: '#ffa200',
									color: '#fff'
								}
							]
						} else if (this.good_detail.goodsInfo.promotion_type == 2) {								
							this.buttonGroup = [{
									id: 2,
									text: '优惠券购买',
									backgroundColor: '#ff0000',
									color: '#fff'
								},
								{
									id: 0,
									text: '立即购买',
									backgroundColor: '#ffa200',
									color: '#fff'
								}
							]
						} else if (this.good_detail.goodsInfo.promotion_type == 4) {
							this.buttonGroup = [{
									id: 3,
									text: '限时抢购买',
									backgroundColor: '#ff0000',
									color: '#fff'
								},
								{
									id: 0,
									text: '立即购买',
									backgroundColor: '#ffa200',
									color: '#fff'
								}
							]
						}
					}
				})
			},
			
			// 图文详情
			trans() {
				this.state = this.state ? false : true
			},
			// 打电话/店铺详情/商品详情
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
			
			// 点击右侧 两个购买按钮
			butt(e) {
				console.log(e)
				let that=this;
				let m_data={}
				
				if (e == 99) {
					console.log("点击了 加入购物车")
					let a = this.carlist.filter((v) => {
						return v.goods_id == parseInt(this.options.goods_id)
					})
					console.log(a.length)
					if (a.length) {
						this.global.utils.showToast_my("该服务已经在您的购物车中，快去看看吧") 
					} else {
						this.global.request.post({
							url: this.global.demao.api.add_cart,
							method: "GET",
							data: {
								goods_id:this.com.goods_id,
								shop_id:this.com.shop_id,
								buy_num:1
							},
							success: (res) => {
								console.log(res.msg)
								this.global.utils.showToast_my(res.msg)
								this.findCar()
							}
						})
					}
				} else if (e == 0) {
					console.log("点击立即购买")
					//接收 普通订单为1  拼团订单为2  优惠卷订单为3   限时抢订单为4
					
					m_data.total_price = that.good_detail.goodsInfo.price;
					
					this.com.method_type = 1
					
					this.global.order.make_order(m_data,this.com)
						
				}else if(e == 1){
					console.log("点击拼团购买")
											
						//接收 普通订单为1  拼团订单为2  优惠卷订单为3   限时抢订单为4
						m_data.total_price = that.good_detail.goodsInfo.price;
						that.com.method_type = 2
						that.com.pt_id = ''
						that.global.order.make_order(m_data,that.com)

				}else if(e == 2){
					
					console.log("点击了优惠券购买.")
					
					if(this.cumpadd==0){
						console.log("没得优惠券，跳转去领取页面了.")
						uni.showModal({
						    title: '提示',
						    content: '您当前还没有该商品的优惠券哦，快去领取吧',
						    success(res) {
						        if (res.confirm) {

									that.global.utils.jump(1,"/pages/home/coupon/coupon")
						        } else if (res.cancel) {
									
								}
							}
						})
					}else if(this.cumpadd==1){
						console.log("有优惠券.直接下订单了~")

						//接收 普通订单为1  拼团订单为2  优惠卷订单为3   限时抢订单为4
						
						m_data.total_price = that.good_detail.goodsInfo.price;
						
						this.com.method_type = 3
						
						this.global.order.make_order(m_data,this.com)
						
						
							// m_data.coupon_type=that.coupon[0].coupon_type;
							// m_data.total_price = price;
							
						
					}else if(this.cumpadd==2){
						
						console.log("有优惠券  但是 过期了 /  另一个订单用了 或者过期了")
						
						uni.showModal({
						    title: '提示',
						    content: '您的优惠券可能已使用或过期，是否切换为原价购买',
						    success(res) {
						        if (res.confirm) {
													//接收 普通订单为1  拼团订单为2  优惠卷订单为3   限时抢订单为4						 
									 m_data.total_price = that.good_detail.goodsInfo.price;
									 
									 this.com.method_type = 1
									 
									 this.global.order.make_order(m_data,this.com)
									 
						        } else if (res.cancel) {

								}
							}
						})
						
					}
				}else if(e == 3){
					console.log('限时抢支付')
					
					//接收 普通订单为1  拼团订单为2  优惠卷订单为3   限时抢订单为4
					
					m_data.total_price = that.good_detail.goodsInfo.price;
					
					this.com.method_type = 4
					
					this.global.order.make_order(m_data,this.com)
					
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
			collect() {
				let that = this;
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
			toPt_list(){
				this.global.utils.jump(1,"/pages/home/assemble/assem_list")
			}
		},
		onLoad(options) {
			this.options = options;
			this.global.utils.sethead(options.head)
		},
		onShow(){
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

<style lang="scss">
	.uni-popup {
		font-size: $uni-font-size-lg;

		.son1 {
			width: 500rpx;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			border-bottom: 1rpx solid #cccccc;
		}

		.son2 {
			width: 500rpx;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
		}
	}
</style>
