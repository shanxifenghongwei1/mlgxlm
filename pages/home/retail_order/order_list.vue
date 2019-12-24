<template>
	<view class="">
		<view class="feitian">
			<cateflex :cateList="cateList" :cateid="cateid" @seleId="seleId"></cateflex>
		</view>
		<view style="height: 70rpx;"></view>
		<block v-for="(item,index) in list" :key="index">
			
			<!-- 待付款 -->
			<view class="list1" v-if="item.order_status==0">
				<view class="title">
					<view class="left">
						<text class="icon iconfont icon-dianpu"></text>{{item.shop_name}}（未支付）
					</view>
					<view class="right" @click="phone(item.shop_phone)">
						<text class="icon iconfont icon-lianxidaogou"></text>联系卖家
					</view>
				</view>
				<view class="con" @click="toDetail(item.re_order_id)">
					<view class="left">
						<image :src="picUrl+item.re_goods_picture" mode=""></image>
					</view>
					<view class="right">
						<view class="li">
							<text>商品名称：</text><text>{{item.re_goods_name}}</text>
						</view>
						<view class="li">
							<text>订单编号：</text><text>{{item.re_order_no}}</text>
						</view>
						<view class="li">
							<text>需付金额：</text><text class="red">{{item.re_goods_price}}元</text>
						</view>
						<view class="li red">
							<text class="icon iconfont icon-naozhong red"></text>尚未支付
						</view>
					</view>
				</view>
				<view class="opection">
					<view class="btn-box">
						<btn font="取消订单" @save="cancel(item.re_order_id)" btnSize="sm" :select="0"></btn>
					</view>
					<view class="btn-box">
						<btn font="确认付款" @save="yesorder(item.re_order_id)" btnSize="sm" :select="1"></btn>
					</view>

				</view>
			</view>

			<!-- 待确认 -->
			<view class="list2" v-if="item.order_status==1">
				<view class="title">
					<view class="left">
						<text class="icon iconfont icon-dianpu"></text>{{item.shop_name}}（待发货）
					</view>
					<view class="right" @click="phone(item.shop_phone)">
						<text class="icon iconfont icon-lianxidaogou"></text>联系卖家
					</view>
				</view>
				<view class="con" @click="toDetail(item.re_order_id)">
					<view class="left">
						<image :src="picUrl+item.re_goods_picture" mode=""></image>
					</view>
					<view class="right">
						<view class="li">
							<text>商品名称：</text><text>{{item.re_goods_name}}</text>
						</view>
						<view class="li">
							<text>订单编号：</text><text>{{item.re_order_no}}</text>
						</view>
						<view class="li">
							<text>实付金额：</text><text class="red">{{item.pay_price}}元</text>
						</view>
						<view class="li red">
							<text class="icon iconfont icon-chenggong red"></text>支付成功，等待发货
						</view>
					</view>
				</view>
				<view class="opection">
					<view class="btn-box">
						<btn font="申请退款" @save="refund(item.re_order_id)" btnSize="sm" :select="0"></btn>
					</view>
					<view class="btn-box">
						<btn font="提醒收货" @save="mygoods_add(item.re_order_id,item.order_id,index)" btnSize="sm" :select="1"></btn>
					</view>
				</view>
			</view>
			
			<!-- 待评价 -->
			<view class="list4" v-if="item.order_status==2">
				<view class="title">
					<view class="left">
						<text class="icon iconfont icon-dianpu"></text>{{item.shop_name}}（待收货）
					</view>
					<view class="right" @click="phone(item.shop_phone)">
						<text class="icon iconfont icon-lianxidaogou"></text>联系卖家
					</view>
				</view>
				<view class="con" @click="toDetail(item.re_order_id)">
					<view class="left">
						<image :src="picUrl+item.re_goods_picture" mode=""></image>
					</view>
					<view class="right">
						<view class="li">
							
							<text>商品名称：</text><text>{{item.re_goods_name}}</text>
						</view>
						<view class="li">
							<text>订单编号：</text><text>{{item.re_order_no}}</text>
						</view>
						<view class="li">
							<text>实付金额：</text><text class="red">{{item.pay_price}}元</text>
						</view>
						<view class="li red">
							<text class="icon iconfont icon-chenggong red"></text>商品已发货，等待签收
						</view>
					</view>
				</view>
				<view class="opection"> 
					<view class="btn-box">
						<btn font="查看物流" @save="express(item.re_order_id)" btnSize="sm" :select="0"></btn>
					</view>
					<view class="btn-box">
						<btn font="申请退款" @save="refund(item.re_order_id)" btnSize="sm" :select="1"></btn>
					</view>
					<view class="btn-box">
						<btn font="确认收货" @save="make_sure(item.re_order_id)" btnSize="sm" :select="1"></btn>
					</view>

				</view>
			</view>
			
			<!-- 已完成 -->
			<view class="list4" v-if="item.order_status==3">
				<view class="title">
					<view class="left">
						<text class="icon iconfont icon-dianpu"></text>{{item.shop_name}}（已完成）
					</view>
					<view class="right" @click="phone(item.shop_phone)">
						<text class="icon iconfont icon-lianxidaogou"></text>联系卖家
					</view>
				</view>
				<view class="con" @click="toDetail(item.re_order_id)">
					<view class="left">
						<image :src="picUrl+item.re_goods_picture" mode=""></image>
					</view>
					<view class="right">
						<view class="li">
							
							<text>商品名称：</text><text>{{item.re_goods_name}}</text>
						</view>
						<view class="li">
							<text>订单编号：</text><text>{{item.re_order_no}}</text>
						</view>
						<view class="li">
							<text>实付金额：</text><text class="red">{{item.re_goods_price}}元</text>
						</view>
						<view class="li">
							<text class="icon iconfont icon-pingjia1"></text>签收完成，请对该商品进行评价。
						</view>
					</view>
				</view>
				<view class="opection">
					<view class="btn-box">
						<btn font="申请售后" @save="save()" btnSize="sm" :select="1"></btn>
					</view>
					<view class="btn-box">
						<btn font="评价服务" @save="assess(item.re_order_id)" btnSize="sm" :select="1"></btn>
					</view>
				</view>
			</view>
			
			<view class="list1" v-if="item.order_status==5">
				<view class="title">
					<view class="left">
						<text class="icon iconfont icon-dianpu"></text>{{item.shop_name}}（退款审核中）
					</view>
					<view class="right" @click="phone(item.shop_phone)">
						<text class="icon iconfont icon-lianxidaogou"></text>联系卖家
					</view>
				</view>
				<view class="con" @click="toDetail(item.re_order_id)">
					<view class="left">
						<image :src="picUrl+item.re_goods_picture" mode=""></image>
					</view>
					<view class="right">
						<view class="li">
							<text>商品名称：</text><text>{{item.re_goods_name}}</text>
						</view>
						<view class="li">
							<text>订单编号：</text><text>{{item.re_order_no}}</text>
						</view>
						<view class="li">
							<text>实付金额：</text><text class="red">{{item.re_goods_price}}元</text>
						</view>
						<view class="li red">
							<text class="icon iconfont icon-naozhong red"></text>退款审核中
						</view>
					</view>
				</view>
				<view class="opection">
					<view class="btn-box">
						<btn font="退款审核中" btnSize="sm" :select="1"></btn>
					</view>
			
				</view>
			</view>
			
			
		</block>

		<sunblind v-if="sunblind"></sunblind>
	</view>
</template>

<script>
	import cateflex from "@/components/mine/cate-flex.vue"
	export default {
		// 订单状态 0->未支付，1->已付款 待发货，2->已发货 待收货，3->已收货 待评价，4->订单完成  不再显示	99->查询所有订单
		components: {
			cateflex
		},
		data() {
			return {
				cateList: [{
						name: "综合",
						id: 99
					},
					{
						name: "待付款",
						id: 0
					},
					{
						name: "待发货",
						id: 1
					},
					{
						name: "待收货",
						id: 2
					},
					{
						name: "待评价",
						id: 3
					},
					{
						name: "退款/售后",
						id: 5
					},
				],
				cateid: 99,
				sunblind: false,
				options: {},
				list: [],
				picUrl:this.global.demao.domain.videoUrl
			}
		},
		methods: {
			//订单详情
			toDetail(e){
				this.global.utils.jump(1,'/pages/home/retail_order/order_detail?re_order_id='+e)
			},
			//删除、取消订单
			cancel(e){
				var that = this
	
				this.global.login_state.login_state().then((res) => {
					if (res) {
						
						uni.showModal({
							title: '提示',
							content: '是否确认删除该订单？',
							success: (ras)=> {
								if (ras.confirm) {
									//删除订单信息
									that.global.request.post({
										url: "reseller_order_delete",
										data: {
											re_order_id:e,
										},
										success: (res) => {
											that.global.utils.showToast_my("订单删除成功")
											that.init()
										}
									})
								}
							}
						});
						
					}
				})
				
			},
			//查看物流
			express(e){
				console.log("跳转到物流页面")
				console.log("携带参数re_order_id="+e)
				this.global.utils.jump(1,'/pages/home/retail_order/express?re_order_id='+e)
			},
			//确认收货
			make_sure(e){
				this.global.login_state.login_state().then((res) => {
					if (res) {
						//删除订单信息
						this.global.request.post({
							url: "reseller_order_Confirm_receipt",
							data: {
								re_order_id:e,
							},
							success: (res) => {
								console.log(res)
								// this.global.utils.showToast_my("订单删除成功")
								// this.init()
							}
						})
					}
				})
			},
			//点击去评价
			assess(e) {
				this.sunblind = true;
				let url = "/pages/home/retail_order/re_eval?re_order_id=" + e
				this.global.utils.jump(1, url);
			},
			
			refund(e){
				this.global.utils.jump(1,"/pages/home/retail_order/retail_refund?order_id=" + e)
			},
			
			
			
			
			//确认付款
			yesorder(e){
				this.global.utils.jump(1,"/pages/home/retail_home/retail_pay?re_order_id=" + e)
			},
			// 点击切换头部文字选择,并传id
			seleId(e) {
				this.cateid = e;
				this.list = [];
				this.init()
			},
			// 联系卖家
			phone(e){
				console.log(e)
				uni.makePhoneCall({
					phoneNumber: e,
					success(res) {
						
					}
				})
			},
			// 发请求获得订单数据
			init() {
				// 防止重复点击
				this.sunblind = false;
				
				let data = {};
				// 服务还是商品
				data.order_status = this.cateid;
				this.global.request.post({
					url: "index_reseller_orderList",
					data: data,
					success: (res) => {
						this.list = res.data;
					}
				})
			}
		},
		onLoad(options) {
			this.options = options;
			this.cateid=options.cateid;
		},
		onShow() {
			this.init();
		},
	}
</script>

<style lang="scss">
	.feitian{
		width: 100%;
		z-index: 100;
		position:fixed;
		top: -17rpx;
		left: 0rpx;
	}
	
	.red {
		color: $any-col;
	}

	.list1,
	.list2,
	.list3,
	.list4 {
		width: calc(100% - 48rpx);
		margin-top: 20rpx;
		padding: 0 3%;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-align: end;
		-webkit-align-items: flex-end;
		-ms-flex-align: end;
		align-items: flex-end;
		-webkit-box-shadow: 0rpx 0rpx 10rpx #bfbdbd;
		box-shadow: 0rpx 0rpx 10rpx #bfbdbd;
		margin: 0 auto;
		margin-top: 20rpx;
		border-radius: 15rpx;


	}

	.title {
		width: 100%;
		height: 80rpx;
		border-bottom: 1rpx solid #cdcdcd;
		@extend .any-flex;
		justify-content: space-between;
		align-items: center;
		font-size: $uni-font-size-base;

		.left {
			font-weight: bold;
		}
	}

	.icon-dianpu {
		font-size: $uni-font-size-base;
		margin-right: 10rpx;
	}

	.icon-lianxidaogou {
		font-size: $uni-font-size-lg;
		margin-right: 10rpx;
	}

	.con {
		width: 100%;
		height: 240rpx;
		padding: 15rpx 0;
		border-bottom: 1rpx solid #cdcdcd;
		box-sizing: border-box;
		@extend .any-flex;
		justify-content: space-between;

		.left {
			width: 190rpx;
			height: 100%;
			background: yellow;
		}

		image {
			width: 100%;
			height: 100%;
		}

		.right {
			width: 450rpx;
			height: 100%;
			@extend .any-flex;
			flex-direction: column;
			justify-content: space-between;
		}

		.li {
			width: 100%;
			@include multi-row-apostrophe(1);
			font-size: $uni-font-size-base;
		}

		.icon-chenggong,
		.icon-pingjia1,
		.icon-daifahuob,
		.icon-naozhong {
			font-size: 24rpx;
			margin-right: 5rpx;
		}
	}

	.opection {
		@extend .any-flex;
		justify-content: flex-end;

		.btn-box {
			padding: 20rpx 0 20rpx 10rpx;
		}

		.btn {
			width: 120rpx;
			height: 40rpx;
			font-size: $uni-font-size-base;
			text-align: center;
			line-height: 36rpx;
			border-radius: 20rpx;
			border: 2rpx solid #666868;
			color: #666868;
		}

		.btn.active {
			border: 2rpx solid $any-col;
			color: $any-col;
		}
	}
</style>
