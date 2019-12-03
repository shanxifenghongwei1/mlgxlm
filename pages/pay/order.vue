<template>
	<view class="">
		<view class="">
			<cateflex :cateList="cateList" :cateid="cateid" @seleId="seleId"></cateflex>
		</view>

		<block v-for="(item,index) in list" :key="index">
			<view class="list1" v-if="item.order_status==0">
				<view class="title">
					<view class="left">
						<text class="icon iconfont icon-dianpu"></text>爱美世家(未支付)
					</view>
					<view class="right">
						<text class="icon iconfont icon-lianxidaogou"></text>联系卖家
					</view>
				</view>
				<view class="con">
					<view class="left">
						<image src="" mode="widthFix"></image>
					</view>
					<view class="right">
						<view class="li">
							<text>服务名称：</text><text>芳香精油乳腺疏通</text>
						</view>
						<view class="li">
							<text>订单编号：</text><text>12596325879632</text>
						</view>
						<view class="li">
							<text>实付金额：</text><text class="red">398.00元</text>
						</view>
						<view class="li red">
							<text class="icon iconfont icon-naozhong red"></text>尚未支付
						</view>
					</view>
				</view>
				<view class="opection">
					<view class="btn-box">
						<view class="btn">
							删除订单
						</view>
					</view>
					<view class="btn-box">
						<view class="btn active">
							确认付款
						</view>
					</view>

				</view>
			</view>
			<view class="list2" v-if="item.order_status==1">
				<view class="title">
					<view class="left">
						<text class="icon iconfont icon-dianpu"></text>爱美世家（支付成功）
					</view>
					<view class="right">
						<text class="icon iconfont icon-lianxidaogou"></text>联系卖家
					</view>
				</view>
				<view class="con">
					<view class="left">
						<image src="" mode="widthFix"></image>
					</view>
					<view class="right">
						<view class="li">
							<text>服务名称：</text><text>芳香精油乳腺疏通</text>
						</view>
						<view class="li">
							<text>订单编号：</text><text>12596325879632</text>
						</view>
						<view class="li">
							<text>实付金额：</text><text class="red">398.00元</text>
						</view>
						<view class="li red">
							<text class="icon iconfont icon-chenggong red"></text>支付成功，尚未预约
						</view>
					</view>
				</view>
				<view class="opection">
					<view class="btn-box">
						<view class="btn">
							申请退款
						</view>
					</view>
					<view class="btn-box">
						<view class="btn active">
							立即预约
						</view>
					</view>
				</view>
			</view>
			<view class="list3" v-if="item.order_status==3">
				<view class="title">
					<view class="left">
						<text class="icon iconfont icon-dianpu"></text>爱美世家（预约成功）
					</view>
					<view class="right">
						<text class="icon iconfont icon-lianxidaogou"></text>联系卖家
					</view>
				</view>
				<view class="con">
					<view class="left">
						<image src="" mode="widthFix"></image>
					</view>
					<view class="right">
						<view class="li">
							<text>服务名称：</text><text>芳香精油乳腺疏通</text>
						</view>
						<view class="li">
							<text>订单编号：</text><text>12596325879632</text>
						</view>
						<view class="li">
							<text>实付金额：</text><text class="red">398.00元</text>
						</view>
						<view class="li">
							<text class="icon iconfont icon-daifahuob"></text>预约成功，尚未服务
						</view>
					</view>
				</view>
				<view class="opection">
					<view class="btn-box">
						<view class="btn active">
							申请退款
						</view>
					</view>

				</view>
			</view>

			<view class="list4" v-if="item.order_status==4">
				<view class="title">
					<view class="left">
						<text class="icon iconfont icon-dianpu"></text>爱美世家（待评价）
					</view>
					<view class="right">
						<text class="icon iconfont icon-lianxidaogou"></text>联系卖家
					</view>
				</view>
				<view class="con">
					<view class="left">
						<image src="" mode="widthFix"></image>
					</view>
					<view class="right">
						<view class="li">
							<text>服务名称：</text><text>芳香精油乳腺疏通</text>
						</view>
						<view class="li">
							<text>订单编号：</text><text>12596325879632</text>
						</view>
						<view class="li">
							<text>实付金额：</text><text class="red">398.00元</text>
						</view>
						<view class="li">
							<text class="icon iconfont icon-pingjia1"></text>服务完成，我要评价
						</view>
					</view>
				</view>
				<view class="opection">
					<view class="btn-box">
						<view class="btn">
							申请退款
						</view>
					</view>
					<view class="btn-box">
						<view class="btn active" @click="assess()">
							评价服务
						</view>
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
						id: 1
					},
					{
						name: "待付款",
						id: 2
					},
					{
						name: "待预约",
						id: 3
					},
					{
						name: "预约中",
						id: 4
					},
					{
						name: "待评价",
						id: 5
					},
				],
				cateid: 1,
				sunblind: false,
				options: {},
				list: []
			}
		},
		methods: {
			seleId(e) {
				this.cateid = e;
			},
			//去评价
			assess() {
				this.sunblind = true;
				let url = "/pages/pay/assess"
				this.global.utils.jump(1, url);
			}
		},
		onLoad(options) {
			this.options = options;
			console.log(options)
			if (options.good_cate == 0) {
				this.cateList = [{
						name: "综合",
						id: 1
					},
					{
						name: "待付款",
						id: 2
					},
					{
						name: "待预约",
						id: 3
					},
					{
						name: "预约中",
						id: 4
					},
					{
						name: "待评价",
						id: 5
					},
				]
			} else {
				this.cateList = [{
						name: "综合",
						id: 1
					},
					{
						name: "待付款",
						id: 2
					},
					{
						name: "待发货",
						id: 3
					},
					{
						name: "待收货",
						id: 4
					},
					{
						name: "待评价",
						id: 5
					},
				]
			}
		},
		onShow() {
			this.sunblind = false;
			let data = {};
			data.good_cate = this.options.good_cate;
			this.global.request.post({
				url: this.global.demao.api.open_order_list,
				method: "GET",
				data: data,
				success: (res) => {
					this.list = res.data;
					// console.log()
					// if(res.code==0){
					// 	this.global.utils.showToast_my("支付成功")
					// 	setTimeout(()=>{
					// 		this.global.utils.jump(1,"/pages/pay/pay_success")
					// 	},2000)
					// }else{

					// }
				}
			})
		}
	}
</script>

<style lang="scss">
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
			height: 200rpx;
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
