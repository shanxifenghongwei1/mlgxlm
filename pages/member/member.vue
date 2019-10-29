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
				<view class="menber-edit">
					<view class="icon iconfont icon-icon_function_xiugai memder-icon-edit"></view>
				</view>
				<navigator url="./signIn/signIn" class="menber-Signin">
					<image src="/static/image/other/icon-calendar.png" mode=""></image>
					<view class="menber-Signin-text">签到</view>
					<image src="/static/image/other/icon-right-red.png" mode=""></image>
				</navigator>
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
				<view class="member-assets-number">
					<view class="member-assets-h6">{{userInfo[0].balance}}</view>
					<view class="member-assets-content">分享币</view>
				</view>
				<view class="member-assets-number">
					<view class="member-assets-h6">{{userInfo[0].integral}}</view>
					<view class="member-assets-content">积分</view>
				</view>
				<view class="member-assets-number">
					<view class="member-assets-h6">{{coupon_num}}</view>
					<view class="member-assets-content">优惠卷</view>
				</view>
			</view>
			<view class="member-assets-money-fe">
				<view class="iocn iconfont icon-daifukuan member-assets-fe-icon"></view>
				<view class="member-assets-fe-content">我的资产</view>
			</view>
		</view>
		<!-- 轮播 -->
		<view class="banner">
			<swiper :indicator-active-color='colors' :indicator-dots="true" :autoplay="true" :interval="2000" :duration="1000">
				<swiper-item v-for="(item ,index) in bannerlist" :key='index' class="banner-item">
					<view class="swiper-item">
						<image :src="item" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 订单 -->
		<view class="member-order member-assets">
			<view class="member-order-top">
				<view class="member-order-my">我的订单</view>
				<view class="icon iconfont member-order-left icon-jiantou-copy"></view>
			</view>
			<view class="member-order-content">
				<view class="member-order-content-w20">
					<view class="icon iconfont member-order-content1 icon-ziyuan1"></view>
					<view class="member-order-text">代付款</view>
				</view>
				<view class="member-order-content-w20">
					<view class="icon iconfont member-order-content1 icon-daifahuo"></view>
					<view class="member-order-text">待发货</view>
				</view>
				<view class="member-order-content-w20">
					<view class="icon iconfont member-order-content1 icon-wlcx"></view>
					<view class="member-order-text">待收货</view>
				</view>
				<view class="member-order-content-w20">
					<view class="icon iconfont member-order-content1 icon-daipingjia"></view>
					<view class="member-order-text">待评价</view>
				</view>
				<view class="member-order-content-w20">
					<view class="icon iconfont member-order-content1 icon-shouhou"></view>
					<view class="member-order-text">售后</view>
				</view>
			</view>
		</view>
		<!-- 工具 -->
		<view class="member-order member-assets">
			<view class="member-order-top">
				<view class="member-order-my">我的工具</view>
			</view>
			<view class="member-tool-content1">
				<view class="member-tool-content-w25">
					<view class="icon iconfont member-tool-content1 icon-xingzhuanggongnengtubiao-" style="color: #25aa7d;"></view>
					<view class="member-tool-text">商品收藏</view>
				</view>
				<view class="member-tool-content-w25">
					<view class="icon iconfont member-tool-content1 icon-fenxiao" style="color: #feb640;"></view>
					<view class="member-tool-text">分销中心</view>
				</view>
				<view class="member-tool-content-w25">
					<view class="icon iconfont member-tool-content1 icon-kefu" style="color: #20b5af;"></view>
					<view class="member-tool-text">官方客服</view>
				</view>
				<view class="member-tool-content-w25">
					<view class="icon iconfont member-tool-content1 icon-pintuan" style="color: #0090ff;"></view>
					<view class="member-tool-text">拼团订单</view>
				</view>
			</view>
			<view class="member-tool-content1">
				<view class="member-tool-content-w25">
					<view class="icon iconfont member-tool-content1 icon-dizhi" style="color: #33bafe;"></view>
					<view class="member-tool-text">地址管理</view>
				</view>
				<view class="member-tool-content-w25">
					<view class="icon iconfont member-tool-content1 icon-jiaoyinzujifangke" style="color: #e42cff;"></view>
					<view class="member-tool-text">我的足迹</view>
				</view>
				<view class="member-tool-content-w25">
					<view class="icon iconfont member-tool-content1 icon-ai204" style="color: #de0000;"></view>
					<view class="member-tool-text">店铺收藏</view>
				</view>
				<view class="member-tool-content-w25">
					<view class="icon iconfont member-tool-content1 icon-pingjia" style="color: #00e0df;"></view>
					<view class="member-tool-text">我的评分</view>
				</view>
			</view>
			<view class="member-tool-content1">
				<view class="member-tool-content-w25">
					<view class="icon iconfont member-tool-content1 icon-yinhangqia" style="color: #009707;"></view>
					<view class="member-tool-text">银行卡</view>
				</view>
				<view class="member-tool-content-w25">
					<view class="icon iconfont member-tool-content1 icon-tousujianyi" style="color: #d1c7c8;"></view>
					<view class="member-tool-text">投诉建议</view>
				</view>
				<view class="member-tool-content-w25">
					<view class="icon iconfont member-tool-content1 icon-shangcheng" style="color: #ff7898;"></view>
					<view class="member-tool-text">我的预约</view>
				</view>
				<navigator url="./include/include" class="member-tool-content-w25">
					<view class="icon iconfont member-tool-content1 icon-shangcheng" style="color: #ff7898;"></view>
					<view class="member-tool-text">商家入驻</view>
				</navigator>
			</view>
		</view>
		<!-- 底部  -->
		<view class="member-bottom-in member-assets">
			<view class="member-bottom-within">
				<view class="member-bottom-within-w1">
					<view class="icon iconfont icon-guanyu member-bottom-icon"></view>
					<view class="member-bottom-text">关于我们</view>
					<view class="icon iconfont icon-jiantou-copy member-bottom-left"></view>
				</view>
				<view class="member-bottom-within-w1">
					<view class="icon iconfont icon-fankui member-bottom-icon"></view>
					<view class="member-bottom-text">意见反馈</view>
					<view class="icon iconfont icon-jiantou-copy member-bottom-left"></view>
				</view>
				<view class="member-bottom-within-w1">
					<view class="icon iconfont icon-wenti member-bottom-icon"></view>
					<view class="member-bottom-text">常见问题</view>
					<view class="icon iconfont icon-jiantou-copy member-bottom-left"></view>
				</view>
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
		data() {
			components: {
				uniList,
				uniListItem
			}
			return {
				login: !0,
				bannerlist: [
					'../../static/image/banner/1.jpg', '../../static/image/banner/2.jpg', '../../static/image/banner/3.jpg',
					'../../static/image/banner/4.jpg'
				],
				userInfo:{},
				coupon_num:0
			}
		},
		methods: {
			findList() {
				this.global.request.post({
					url: "user_center",
					method: "GET",
					data: {},
					success: (res) => {
						this.userInfo=res.userInfo;
						this.coupon_num=res.coupon_num
					}
				})
			}
		},
		onLoad() {
			this.global.utils.sethead("个人中心");
			console.log(this.global);
		},
		onShow() {
			this.login = this.global.status.state.login;
			this.findList();
		}
	}
</script>

<style lang="scss">
</style>
