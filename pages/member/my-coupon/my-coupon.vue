<!-- 我的优惠券页面 -->
<template>
	<view class="page">
		<!-- 分类切换 -->
		<view class="cate">
			<cateFlex :cateList="list" :cateid="cateid" @seleId="seleId"></cateFlex>
		</view>
		<!-- 未使用 -->
		<view class="no-use" v-show="cateid==1">
			<view class="use-box" v-if="cateDate.coupon.length" v-for="(item,index) in cateDate.coupon" :key="index">
				<view class="left">
					<view class="title">
						<text>{{item.shop_name}}</text>
					</view>
					<view class="con">
						{{item.goods_name}}
					</view>
					<view class="time">
						使用期限: {{item.create_time|time}}--{{item.expiration|time}}
					</view>
				</view>
				<view class="right" v-if="item.coupon_type==0">
					<view class="price" >
						<view class="price-base">
							￥
						</view>
						<view class="price-num">
							{{item.coupon_price}}
						</view>
					</view>
					<view class="full">
						满{{item.coupon_redouction}}减{{item.coupon_price}}
					</view>
					<view class="go">
						去使用
					</view>
				</view>
				<view class="right" v-if="item.coupon_type==1">
					<view class="price" >
						<view class="price-num">
							{{item.discount}}
						</view>
						<view class="price-base">
							折
						</view>
					</view>
					<view class="go" @click="toUse(item.goods_id,item.goods_name)">
						去使用
					</view>
				</view>
			</view>
			<view class="empty-box" v-else>
				<view class="empty">
					
				</view>
			</view>
		</view>
		
		
		<!-- 已使用 -->
		<view class="use" v-show="cateid==2">
			<view class="use-box" v-if="cateDate.coupon1.length" v-for="(item,index) in cateDate.coupon1" :key="index">
				<view class="left">
					<view class="title">
						<text>{{item.shop_name}}</text>优惠券
					</view>
					<view class="con">
						{{item.goods_name}}
					</view>
					<view class="time">
						使用期限: <datejs :date="item.create_time"></datejs>—<datejs :date="item.expiration"></datejs>
					</view>
				</view>
				<view class="right" v-if="item.coupon_type==0">
					<view class="price" >
						<view class="price-base">
							￥
						</view>
						<view class="price-num">
							{{item.coupon_price}}
						</view>
					</view>
					<view class="full">
						满{{item.coupon_redouction}}减{{item.coupon_price}}
					</view>
					<view class="go">
						已使用
					</view>
				</view>
				<view class="right" v-if="item.coupon_type==1">
					<view class="price" >
						<view class="price-num">
							{{item.discount}}
						</view>
						<view class="price-base">
							折
						</view>
					</view>
					<view class="go">
						已使用
					</view>
				</view>
				<view class="hasuse">
					
				</view>
			</view>
			<view class="empty-box" v-else>
				<view class="empty">
					
				</view>
			</view>
		</view>
		
		<!-- 已过期 -->
		<view class="pre-use" v-show="cateid==3">
			<view class="use-box" v-if="cateDate.coupon2.length" v-for="(item,index) in cateDate.coupon2" :key="index">
				<view class="left">
					<view class="title">
						<text>{{item.shop_name}}</text>优惠券
					</view>
					<view class="con">
						{{item.goods_name}}
					</view>
					<view class="time">
						使用期限: <datejs :date="item.create_time"></datejs>—<datejs :date="item.expiration"></datejs>
					</view>
				</view>
				<view class="right" v-if="item.coupon_type==0">
					<view class="price" >
						<view class="price-base">
							￥
						</view>
						<view class="price-num">
							{{item.coupon_price}}
						</view>
					</view>
					<view class="full">
						满{{item.coupon_redouction}}减{{item.coupon_price}}
					</view>
					<view class="go">
						已过期
					</view>
				</view>
				<view class="right" v-if="item.coupon_type==1">
					<view class="price" >
						<view class="price-num">
							{{item.discount}}
						</view>
						<view class="price-base">
							折
						</view>
					</view>
					<view class="go">
						已过期
					</view>
				</view>
			</view>
			<view class="empty-box" v-else>
				<view class="empty">
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import cateFlex from "@/components/mine/cate-flex.vue";
	import datejs from "@/components/mine/datejs.vue";
	export default {
		components:{
			cateFlex,datejs
		},
		data() {
			return {
				list: [{
					id: 1,
					name: "未使用"
				}, {
					id: 2,
					name: "已使用"
				},{
					id: 3,
					name: "已过期"
				}],
				cateid: 1,
				
				cateDate:{}
			}
		},
		methods: {
			seleId(e) {
				this.cateid = e;
			},
			toUse(e,f){
				this.global.utils.jump(1,"/pages/home/goods-detail/goods-detail?goods_id="+e+"&&head="+f)
			}
		},
		onShow(){
			
			this.global.request.post({
				url:"user_coupon",
				method:"GET",
				data:{},
				success:(res)=>{
					console.log("这是返回数据"+res)
					console.log(res)
					this.cateDate=res;
				}
			})
		}
	}
</script>

<style lang="scss">
	.page{
		width: 100%;
		min-height: 100vh;
		background: #efefef;
	}
	.no-use,.use,.pre-use{
		width: 100%;
		padding: 20rpx 3%;
		box-sizing: border-box;
	}
	.cate{
		margin-top: -20rpx;
	}
	.use-box{
		width: 673rpx;
		height: 160rpx;
		margin: 0 auto;
		margin-bottom: 20rpx;
		background: url('~@/static/image/other/icon_coupon_nex.png') no-repeat center;
		background-size: cover;
		position: relative;
		@extend .any-flex;
		.left{
			width: 414rpx;
			height: 100%;
			@extend .any-flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			padding: 20rpx 0;
			box-sizing: border-box;
		}
		.right{
			flex-grow: 1;
			height: 100%;
			@extend .any-flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 20rpx 0;
			box-sizing: border-box;
			color: #ffffff;
		}
		.title{
			font-size: $uni-font-size-base;
			max-width: 90%;
			@include multi-row-apostrophe(1);
		}
		.con{
			font-size: $uni-font-size-sm;
			max-width: 60%;
			@include multi-row-apostrophe(1);
		}
		.time{
			width: 100%;
			padding: 0 10rpx;
			box-sizing: border-box;
			font-size: $uni-font-size-sm;
			word-wrap: break-word;word-break: break-all;overflow: hidden;
		}
		.price{
			@extend .any-flex;
			justify-content: center;
			align-items: flex-end;
			margin-top: 10rpx;
			.price-base{
				font-size: $uni-font-size-base;
			}
			.price-num{
				font-size: $uni-font-size-lg;
			}
		}
		.full{
			margin-top: 10rpx;
			font-size: $uni-font-size-sm;
		}
		.go{
			margin-top: 10rpx;
			display: inline-block;
			padding: 5rpx 15rpx;
			border: 1rpx solid #ffffff;
			font-size: $uni-font-size-sm;
			border-radius: 30rpx;
		}
	}
	
	.use .use-box,.pre-use .use-box{
		background: url('~@/static/image/other/icon_coupon_pre.png') no-repeat center;
		background-size: cover;
		border-radius: 13rpx;
	}
	.hasuse{
		width: 135rpx;
		height: 107rpx;
		position: absolute;
		background: url('~@/static/image/other/icon_hasuse.png') no-repeat center;
		background-size: cover;
		top: 26rpx;
		right: 190rpx;
	}
	.hastime{
		width: 135rpx;
		height: 107rpx;
		position: absolute;
		background: url('~@/static/image/other/icon_hastime.png') no-repeat center;
		background-size: cover;
		top: 26rpx;
		right: 190rpx;
	}
	
	.empty-box{
		width: 100%;
		height: 800rpx;
		@extend .any-flex;
		justify-content: center;
		align-items: center;
		.empty{
			width: 585rpx;
			height: 475rpx;
			background: url('~@/static/image/other/icon_coupon_empty.png') no-repeat center;
			background-size: cover;
		}
	}
</style>
