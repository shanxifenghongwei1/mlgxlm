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
				<view class="con">
					<view class="left">
						<image :src="picUrl+item.picture" mode=""></image>
					</view>
					<view class="right">
						<view class="li">
							<block v-if="item.good_cate==0">
								<text>服务名称：</text><text>{{item.goods_name}}</text>
							</block>
							<block v-if="item.good_cate==1">
								<text>商品名称：</text><text>{{item.goods_name}}</text>
							</block>
						</view>
						<view class="li">
							<text>订单编号：</text><text>{{item.order_no}}</text>
						</view>
						<view class="li">
							<text>需付金额：</text><text class="red">{{item.price}}元</text>
						</view>
						<view class="li red">
							<text class="icon iconfont icon-naozhong red"></text>尚未支付
						</view>
					</view>
				</view>
				<view class="opection">
					<view class="btn-box">
						<btn font="删除订单" @save="del_order(item.id,index)" btnSize="sm" :select="0"></btn>
					</view>
					<view class="btn-box">
						<btn font="确认付款" @save="yesorder(item.id)" btnSize="sm" :select="1"></btn>
					</view>

				</view>
			</view>

			<!-- 待确认 -->
			<view class="list2" v-if="item.order_status==1">
				<view class="title">
					<view class="left">
						<text class="icon iconfont icon-dianpu"></text>{{item.shop_name}}（支付成功）
					</view>
					<view class="right" @click="phone(item.shop_phone)">
						<text class="icon iconfont icon-lianxidaogou"></text>联系卖家
					</view>
				</view>
				<view class="con">
					<view class="left">
						<image :src="picUrl+item.picture" mode=""></image>
					</view>
					<view class="right">
						<view class="li">
							<block v-if="item.good_cate==0">
								<text>服务名称：</text><text>{{item.goods_name}}</text>
							</block>
							<block v-if="item.good_cate==1">
								<text>商品名称：</text><text>{{item.goods_name}}</text>
							</block>
						</view>
						<view class="li">
							<text>订单编号：</text><text>{{item.order_no}}</text>
						</view>
						<view class="li">
							<text>实付金额：</text><text class="red">{{item.pay_price}}元</text>
						</view>
						<view class="li red">
							<text class="icon iconfont icon-chenggong red"></text>支付成功，等待服务
						</view>
					</view>
				</view>
				<view class="opection">
					<view class="btn-box">
						<btn font="申请退款" @save="refund(item.id)" btnSize="sm" :select="0"></btn>
					</view>
					<view class="btn-box">
						<btn font="确认收货" @save="mygoods_add(item.id,item.order_id,index)" btnSize="sm" :select="1"></btn>
					</view>
				</view>
			</view>
			
			<!-- 待评价 -->
			<view class="list4" v-if="item.order_status==3">
				<view class="title">
					<view class="left">
						<text class="icon iconfont icon-dianpu"></text>{{item.shop_name}}（待评价）
					</view>
					<view class="right" @click="phone(item.shop_phone)">
						<text class="icon iconfont icon-lianxidaogou"></text>联系卖家
					</view>
				</view>
				<view class="con">
					<view class="left">
						<image :src="picUrl+item.picture" mode=""></image>
					</view>
					<view class="right">
						<view class="li">
							<block v-if="item.good_cate==0">
								<text>服务名称：</text><text>{{item.goods_name}}</text>
							</block>
							<block v-if="item.good_cate==1">
								<text>商品名称：</text><text>{{item.goods_name}}</text>
							</block>
						</view>
						<view class="li">
							<text>订单编号：</text><text>{{item.order_no}}</text>
						</view>
						<view class="li">
							<text>实付金额：</text><text class="red">{{item.pay_price}}元</text>
						</view>
						<view class="li">
							<text class="icon iconfont icon-pingjia1"></text>服务完成，我要评价
						</view>
					</view>
				</view>
				<view class="opection"> 
					<view class="btn-box">
						<btn font="评价服务" @save="assess(item.id)" btnSize="sm" :select="1"></btn>
					</view>

				</view>
			</view>
			
			<!-- 已完成 -->
			<view class="list4" v-if="item.order_status==4">
				<view class="title">
					<view class="left">
						<text class="icon iconfont icon-dianpu"></text>{{item.shop_name}}（已完成）
					</view>
					<view class="right" @click="phone(item.shop_phone)">
						<text class="icon iconfont icon-lianxidaogou"></text>联系卖家
					</view>
				</view>
				<view class="con">
					<view class="left">
						<image :src="picUrl+item.picture" mode=""></image>
					</view>
					<view class="right">
						<view class="li">
							<block v-if="item.good_cate==0">
								<text>服务名称：</text><text>{{item.goods_name}}</text>
							</block>
							<block v-if="item.good_cate==1">
								<text>商品名称：</text><text>{{item.goods_name}}</text>
							</block>
						</view>
						<view class="li">
							<text>订单编号：</text><text>{{item.order_no}}</text>
						</view>
						<view class="li">
							<text>实付金额：</text><text class="red">{{item.pay_price}}元</text>
						</view>
						<view class="li">
							<text class="icon iconfont icon-pingjia1"></text>服务已完成。
						</view>
					</view>
				</view>
				<view class="opection">
<!-- 					<view class="btn-box">
						<btn font="申请退款" @save="save()" btnSize="sm" :select="1"></btn>
					</view> -->
<!-- 					<view class="btn-box">
						<btn font="评价服务" @save="assess(item.id)" btnSize="sm" :select="1"></btn>
					</view>
			 -->
				</view>
			</view>
			
			
		</block>

		<sunblind v-if="sunblind"></sunblind>
	</view>
</template>

<script>
	import cateflex from "@/components/mine/cate-flex.vue"
	export default {
		// 订单状态 0->未支付，1->已付款 待发货，2->已发货，3->确认收货,4->已完成,5->已关闭6->链上处理中
		//0	 待付款  
		//1  待预约   待发货
		//2	 待收货   待服务
		//3	 待评价
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
						name: "待预约",
						id: 1
					},
					{
						name: "预约中",
						id: 2
					},
					{
						name: "待评价",
						id: 3
					},
				],
				cateid: 99,
				sunblind: false,
				options: {},
				list: [],
				page: 1,
				picUrl:""
			}
		},
		methods: {
			//申请退款
			refund(e){
				this.global.request.post({
					url:'re_refund_add',
					method:'GET',
					data:{
						id:e
					},
					success:res=>{
						console.log({mes:'点击申请退款',res:res})
						if(res.data.status_refund == 0){
							this.global.utils.jump(1,"/pages/pay/refund?order_id=" + e)
							console.log({mes:'点击申请退款',res:e})
						}else if(res.data.status_refund == 1){
							this.global.utils.showToast_my('您已经申请过啦！')
						}else if(res.data.status_refund == 2){
							this.global.utils.showToast_my('您的申请已经在审核中！')
						}else if(res.data.status_refund == 3){
							this.global.utils.showToast_my('您的退款已成功！')
						}else if(res.data.status_refund == 4){
							this.global.utils.showToast_my('退款未通过审核')
						}
					}
				})
				
				
				
			},
			
			//确认收货
			mygoods_add(e,q,a){
				console.log({mes:'点击确认收货',index:a,q:q})
				this.global.request.post({
					url:'up_status_add',
					data:{
						id:e,
						order_id:q
					},
					success:res=>{
						console.log({mes:'确认收货成功或者失败',res:res})
						
						if(res.data.data == 1){
							this.list.splice(a,1)
							this.global.utils.showToast_my('已成功确认')
						}else if(res.data.data == 2){
							this.global.utils.showToast_my('退款中不能确认收货')
						}else if(res.data.data == 3){
							this.global.utils.showToast_my('确认收货有误')
						}
						
					}
				})
			},
			// 删除订单
			del_order(e,a){
				console.log({mes:'点击删除订单',res:e,index:a})
				var that = this
				uni.showModal({
					title: '提示',
					content: '是否确认删除该订单？',
					success: (ras)=> {
						if (ras.confirm) {
								that.global.request.post({
									url:'update_static_del', 
									method:'GET',
									data:{
										id:e
									},
									success:res=>{
										this.list.splice(a,1)
									}
								})
						} else if (ras.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				
			},
			//确认付款
			yesorder(e){
				console.log({mes:'点击确认订单',res:e})
				this.global.utils.jump(1,"/pages/pay/pay?order_id=" + e)
				
			},
			// 点击切换头部文字选择,并传id
			seleId(e) {
				this.cateid = e;
				this.page = 1;
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
			//点击去评价
			assess(e) {
				this.sunblind = true;
				let url = "/pages/pay/assess?id=" + e
				this.global.utils.jump(1, url);
			},
			// 发请求获得订单数据
			init() {
				// 防止重复点击
				this.sunblind = false;
				
				let data = {};
				// 服务还是商品
				data.good_cate = this.options.good_cate;
				// 订单的类型
				data.order_status = this.cateid;
				data.page = this.page;
				this.global.request.post({
					//open_order_list 订单列表
					url: this.global.demao.api.open_order_list,
					method: "GET",
					data: data,
					success: (res) => {
						console.log(res)
						if (res.data.data.length) {
							this.list = this.list.concat(res.data.data);
							this.page = this.page + 1;
						}
					}
				})
			}
		},
		onLoad(options) {
			this.options = options;
			this.cateid=options.cateid;
			this.picUrl=this.global.demao.domain.videoUrl;
			if (options.good_cate == 0) {
				// 服务订单
				this.cateList = [{
						name: "综合",
						id: 99
					},
					{
						name: "待付款",
						id: 0
					},
					{
						name: "待确认",
						id: 1
					},
					{
						name: "待评价",
						id: 3 
					},
					{
						name: "已完成",
						id: 4
					},
					
					
				]
			} else {
				// 商品订单
				this.cateList = [{
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
				]
			}
		},
		onShow() {
			this.init();
		},
		onReachBottom() {
			console.log('上拉加载')
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
		width: 100%;
		margin-top: 20rpx;
		padding: 0 3%;
		box-sizing: border-box;
		@extend .any-flex;
		flex-direction: column;
		align-items: flex-end;
		box-shadow: 0rpx 0rpx 10rpx #bfbdbd;

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
			width: 480rpx;
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
