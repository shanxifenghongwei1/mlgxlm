<template>
	<view>
		<!-- 头部 -->
		<view class="member-portrait" v-if="login">
			<view class="member-portrait-image">
				<image :src="userInfo[0].wx_headimg" mode=""></image>

			</view>
			<view class="member-information">
				<view class="hs">{{userInfo[0].wx_name}}</view>
				<view class="member-VIP">LV1</view>
			</view>
			<view class="member-icon">
				<!-- <view class="menber-edit">
					<view class="icon iconfont icon-icon_function_xiugai memder-icon-edit"></view>
				</view>
				<navigator url="./signIn/signIn" class="menber-Signin">
					<image src="/static/image/other/icon-calendar.png" mode=""></image>
					<view class="menber-Signin-text">签到</view>
					<image src="/static/image/other/icon-right-red.png" mode=""></image>
				</navigator> -->
			</view>
		</view>
		<view class="member-portrait" v-else>
			<navigator class="hs" url="/pages/login/login">
				去登录
			</navigator>
		</view>

		<!-- 资产 -->
		<view class="member-assets">
			<view class="member-assets-money">
				<navigator hover-class="none" url="/pages/member/my-coupon/money/money" class="member-assets-number">
					<view class="member-assets-h6">{{userInfo[0].money?userInfo[0].money:0}}</view>
					<view class="member-assets-content">分享币</view>
				</navigator>
				<navigator url="/pages/member/my-coupon/integral/integral" hover-class="none" class="member-assets-number">
					<view class="member-assets-h6">{{userInfo[0].integral?userInfo[0].integral:0}}</view>
					<view class="member-assets-content">代金币</view>
				</navigator>
				<navigator hover-class="none" url="/pages/member/my-coupon/my-coupon" class="member-assets-number">
					<view class="member-assets-h6">{{coupon_num?coupon_num:0}}</view>
					<view class="member-assets-content">优惠卷</view>
				</navigator>
			</view>
			<navigator hover-class="none" url="/pages/member/my-coupon/my-assets" class="member-assets-money-fe">
				<view class="iocn iconfont icon-daifukuan member-assets-fe-icon"></view>
				<view class="member-assets-fe-content">我的资产</view>
			</navigator>
		</view>
		<!-- 轮播 -->
		<!-- <view class="banner">
			<swiper :indicator-active-color='colors' :indicator-dots="true" :autoplay="true" :interval="2000" :duration="1000">
				<swiper-item v-for="(item ,index) in bannerlist" :key='index' class="banner-item">
					<view class="swiper-item">
						<image :src="item" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
		</view> -->
		<!-- 订单 -->
		<view class="member-order member-assets">
			<view @click="toDetail(1,'/pages/pay/order?good_cate=0&cateid=99')" class="member-order-top">
				<view class="member-order-my">服务订单</view>
				<view class="icon iconfont member-order-left icon-jiantou-copy"></view>
			</view>
			<view class="member-order-content">
				<view @click="toDetail(1,'/pages/pay/order?good_cate=0&cateid=0')" class="member-order-content-w20">
					<view class="icon iconfont member-order-content1 icon-ziyuan1"></view>
					<view class="member-order-text">待付款</view>
				</view>
				<view @click="toDetail(1,'/pages/pay/order?good_cate=0&cateid=1')" class="member-order-content-w20">
					<view class="icon iconfont member-order-content1 icon-daifahuo"></view>
					<view class="member-order-text">待确认</view>
				</view>
				<view @click="toDetail(1,'/pages/pay/order?good_cate=0&cateid=2')" class="member-order-content-w20">
					<view class="icon iconfont member-order-content1 icon-daipingjia1"></view>
					<view class="member-order-text">待评价</view>
				</view>
				<view @click="toDetail(1,'/pages/pay/order?good_cate=0&cateid=3')" class="member-order-content-w20">
					<view class="icon iconfont member-order-content1 icon-daipingjia"></view>
					<view class="member-order-text">已完成</view>
				</view>
				<view @click="toDetail(1,'/pages/pay/order?good_cate=0&cateid=3')" class="member-order-content-w20">
					<view class="icon iconfont member-order-content1 icon-tuikuan"></view>
					<view class="member-order-text">退款/售后</view>
				</view>
			</view>
		</view>
		
		<view class="member-order member-assets">
			<view @click="toDetail(1,'/pages/home/retail_order/order_list?cateid=99')" class="member-order-top">
				<view class="member-order-my">分销订单</view>
				<view class="icon iconfont member-order-left icon-jiantou-copy"></view>
			</view>
			<view class="member-order-content">
				<view class="member-order-content-w20" @click="toDetail(1,'/pages/home/retail_order/order_list?cateid=0')">
					<view class="icon iconfont member-order-content1 icon-ziyuan1"></view>
					<view class="member-order-text">待付款</view>
				</view>
				<view class="member-order-content-w20" @click="toDetail(1,'/pages/home/retail_order/order_list?cateid=1')">
					<view class="icon iconfont member-order-content1 icon-daifahuo"></view>
					<view class="member-order-text">待发货</view>
				</view>
				<view class="member-order-content-w20" @click="toDetail(1,'/pages/home/retail_order/order_list?cateid=2')">
					<view class="icon iconfont member-order-content1 icon-wlcx"></view>
					<view class="member-order-text">待收货</view>
				</view>
				<view class="member-order-content-w20" @click="toDetail(1,'/pages/home/retail_order/order_list?cateid=3')">
					<view class="icon iconfont member-order-content1 icon-daipingjia1"></view>
					<view class="member-order-text">待评价</view>
				</view>
				<view @click="toDetail(1,'/pages/home/retail_order/order_list?cateid=5')" class="member-order-content-w20">
					<view class="icon iconfont member-order-content1 icon-tuikuan"></view>
					<view class="member-order-text">退款/售后</view>
				</view>
			</view>
		</view>
		<!-- 工具 -->
		<view class="member-order member-assets">
			<view class="member-order-top">
				<view class="member-order-my">我的工具</view>
			</view>
			<view class="member-tool-content1">
				<navigator url="/pages/member/tool/wareCollect/wareCollect" class="member-tool-content-w25">
					<view class="icon iconfont member-tool-content1 icon-xingzhuanggongnengtubiao-" style="color: #25aa7d;"></view>
					<view class="member-tool-text">商品收藏</view>
				</navigator>
				<navigator url="/pages/home/retail/retail" class="member-tool-content-w25" v-if="identity==2">
					<view class="icon iconfont member-tool-content1 icon-fenxiao" style="color: #feb640;"></view>
					<view class="member-tool-text">分销中心</view>
				</navigator>
				<view class="member-tool-content-w25" v-if="identity==1">
					<view class="icon iconfont member-tool-content1 icon-fenxiao" style="color: #feb640;"></view>
					<view class="member-tool-text">推广二维码</view>
				</view>
			</view>
			<view class="member-tool-content1">
				<navigator hover-class="none" url="/pages/member/tool/address/address" class="member-tool-content-w25">
					<view class="icon iconfont member-tool-content1 icon-dizhi" style="color: #33bafe;"></view>
					<view class="member-tool-text">地址管理</view>
				</navigator>
				<navigator url="/pages/member/tool/tracks/tracks" class="member-tool-content-w25">
					<view class="icon iconfont member-tool-content1 icon-jiaoyinzujifangke" style="color: #e42cff;"></view>
					<view class="member-tool-text">我的足迹</view>
				</navigator>
				<navigator url="/pages/member/tool/storeCollect/storeCollect" class="member-tool-content-w25">
					<view class="icon iconfont member-tool-content1 icon-ai204" style="color: #de0000;"></view>
					<view class="member-tool-text">店铺收藏</view>
				</navigator>
				<navigator hover-class="none" url="/pages/member/tool/evaluate/evaluate" class="member-tool-content-w25">
					<view class="icon iconfont member-tool-content1 icon-pingjia" style="color: #00e0df;"></view>
					<view class="member-tool-text">我的评价</view>
				</navigator>
			</view>
			<view class="member-tool-content1">
				<navigator hover-class="none" url="/pages/member/tool/bankcard/bankcard" class="member-tool-content-w25">
					<view class="icon iconfont member-tool-content1 icon-yinhangqia" style="color: #009707;"></view>
					<view class="member-tool-text">银行卡</view>
				</navigator>
				<view class="member-tool-content-w25">
					<view class="icon iconfont member-tool-content1 icon-tousujianyi" style="color: #d1c7c8;"></view>
					<view class="member-tool-text">分享好礼</view>
				</view>
				<view class="member-tool-content-w25">
					<view class="icon iconfont member-tool-content1 icon-shangcheng" style="color: #ff7898;"></view>
					<view class="member-tool-text">我的预约</view>
				</view>
				<navigator url="/pages/member/tool/include/include" class="member-tool-content-w25">
					<view class="icon iconfont member-tool-content1 icon-shangcheng" style="color: #ff7898;"></view>
					<view class="member-tool-text">商家入驻</view> 
				</navigator>
				<view class="member-tool-content-w25">
					<view class="icon iconfont member-tool-content1 icon-pintuan" style="color: #0090ff;"></view>
					<view class="member-tool-text">分销申请</view>
				</view>
			</view>
		</view>
		<!-- 底部  -->
		<view class="member-bottom-in member-assets">
			<view class="member-bottom-within">
				<navigator url="/pages/member/help/aboutUs" class="member-bottom-within-w1">
					<view class="icon iconfont icon-guanyu member-bottom-icon"></view>
					<view class="member-bottom-text">关于我们</view>
					<view class="icon iconfont icon-jiantou-copy member-bottom-left"></view>
				</navigator>
				<view @click="toDetail(1,'/pages/member/help/feedback')" class="member-bottom-within-w1">
					<view class="icon iconfont icon-fankui member-bottom-icon"></view>
					<view class="member-bottom-text">意见反馈</view>
					<view class="icon iconfont icon-jiantou-copy member-bottom-left"></view>
				</view>
				<navigator hover-class="none" url="/pages/member/help/question" class="member-bottom-within-w1">
					<view class="icon iconfont icon-wenti member-bottom-icon"></view>
					<view class="member-bottom-text">常见问题</view>
					<view class="icon iconfont icon-jiantou-copy member-bottom-left"></view>
				</navigator>
				<view class="member-bottom-within-w1">
					<view class="icon iconfont icon-shuoming3 member-bottom-icon"></view>
					<view class="member-bottom-text">服务说明</view>
					<view class="icon iconfont icon-jiantou-copy member-bottom-left"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import "./member.scss"
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				login: !0,
				city:"",
				bannerlist: [
					'../../static/image/banner/1.jpg', '../../static/image/banner/2.jpg', '../../static/image/banner/3.jpg',
					'../../static/image/banner/4.jpg'
				],
				userInfo:{},
				coupon_num:0,
				identity:0,			//用户身份
			}
		},
		methods: {
			findList() {
				let that=this;
				this.global.request.post({
					url: "user_center",
					method: "GET",
					data: {
						openid:uni.getStorageSync("session").data.openid
					},
					success: (res) => {
						this.userInfo=res.userInfo;
						this.coupon_num=res.coupon_num
						if(res.userInfo[0].mt_reseller==1){     ///0普通用户   1.参与分销
							if(res.userInfo[0].p_id==0){		////0分销商    else  分销员
								that.identity=1;
							}else{
								that.identity=2;
							}
						}else{
							
							that.identity=0;
						}
					}
				})
			},
			toDetail(e,f){
				this.global.utils.jump(e,f)
			}
		},
		onLoad() {
			this.global.utils.sethead("个人中心");		
			this.city=this.global.city;
			this.global.watch((v)=>{
				this.city=v;
			})
		},
		onShow() {
			console.log(this.global.status.state.login)
			this.login = this.global.status.state.login;
			this.findList();
		}
	}
</script>

<style lang="scss">
</style>
