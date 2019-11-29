<template>
	<!-- 购物车 -->
	<view>
		<view class="goodlist" v-for="(item,index) in list" :key="index">
			<view class="box">
				<view class="title">
					<text class="icon iconfont icon-weixuanzhong" v-show="!item.checked" @click="allShopCheck(item.id)"></text>
					<text class="icon iconfont icon-chongzhichenggong" v-show="item.checked" @click="allShopCheck(item.id)"></text>
					<text class="icon iconfont icon-dianpu"></text><text>{{item.child[0].shop_name}}</text>
				</view>
				<view class="con" v-for="(i,t) in item.child" :key="t">
					<text class="icon iconfont icon-weixuanzhong" v-show="!i.checked" @click="oneCheck(i.goods_id,item.id)"></text>
					<text class="icon iconfont icon-chongzhichenggong" v-show="i.checked" @click="oneCheck(i.goods_id,item.id)"></text>
					<image src="" mode=""></image>
					<view class="goods-info">
						<view class="name">
							{{i.goods_name}}
						</view>
						<view class="price">
							￥{{i.price}}元
						</view>
						<view class="dtl">
							{{item.introduction}}
						</view>
					</view>
					<view class="opection">
						<numbox :Number="1" :min="1" :max="1" :step="1"></numbox>
						<view class="opection-box">
							<view class="icon iconfont icon-shanchu-copy-copy">

							</view>
							<view class="icon iconfont icon-star">

							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="bac-img">
			<image src="../../static/image/other/shopimg.jpg" mode="widthFix" class="bac-imgs"></image>
		</view>
		<view>
			<goods :titCon="titCon" :more="false" place="1"></goods>
		</view>
		<view class="emit-view">

		</view>
		<view class="bottom">
			<view class="ccc">
				<text class="icon iconfont icon-weixuanzhong" v-show="!checked" @click="chec()"></text>
				<text class="icon iconfont icon-chongzhichenggong" v-show="checked" @click="chec()"></text>
				<text class="all">全选</text>
			</view>
			<view class="all-price">
				<text class="ccc">合计:</text><text class="ccc">￥200.00</text>
			</view>
			<view class="pay" @click="pageTo">
				去结算（1）
			</view>
		</view>
	</view>
</template>

<script>
	import numbox from "@/components/uni-number-box/uni-number-box.vue"
	import goods from "@/components/mine/goods.vue"
	export default {
		components: {
			numbox,
			goods
		},
		data() {
			return {
				list: [],
				titCon: [1, 2, 3, 3],
				checked:false
			}
		},
		methods: {
			//去支付
			pageTo: function() {
				uni.navigateTo({
					url: "/pages/pay/pay"
				})
			},
			//查询购物车
			findCar() {
				let data = {};
				this.global.request.post({
					url: this.global.demao.api.cartList,
					method: "GET",
					data: data,
					success: (res) => {
						console.log("购物车数据")
						let a = []
						res.cartInfo.forEach((v) => {
							v.checked = false;
							a.push(v.shop_id)
						})

						console.log(a)
						let b = this.unique(a);

						let d = [];
						b.forEach((v) => {
							let c = {};
							c.id = v;
							c.checked = false;
							c.child = [];
							res.cartInfo.forEach((h) => {
								if (h.shop_id == v) {
									c.child.push(h)
								}
							})
							d.push(c)
						})
						this.list = d;
					}
				})
			},
			// 数组去重
			unique(arr) {
				return Array.from(new Set(arr))
			},
			
			//监听是否所有的商品被选中或反选
			allCheck(){
				let a=this.list;
				let b=a.filter((v)=>{
					return v.checked==true;
				})
				console.log(b)
				if(b.length==a.length){
					this.checked=true;
				}else{
					this.checked=false;
				}
			},
			//监听该店铺的商品是否被全选
			dx(f){
				let a=this.list;
				a.forEach((v)=>{
					if(v.id==f){
						let b=v.child.filter((h)=>{
							return h.checked==true;
						})
						console.log(b.length,v.child.length)
						if(b.length==v.child.length){
							v.checked=true;
						}else{
							v.checked=false;
						}
					}
				})
				this.allCheck() 
			},
			// 点击单选
			oneCheck(e,f){
				console.log(e,f)
				let a=this.list;
				a.forEach((v)=>{
					if(v.id==f){
						v.child.forEach((h)=>{
							console.log(h.goods_id,e)
							if(h.goods_id==e){
								h.checked=!h.checked;
							}
						})
					}
				})
				this.dx(f)
			},
			
			// 点击全选反选该店铺的商品
			allShopCheck(e){
				let a=this.list;
				a.forEach((v)=>{
					if(v.id==e){
						let s=v.checked
						v.checked=!s;
						v.child.forEach((h)=>{
							return h.checked=!s;
						})
					}
				})
				this.allCheck()
			},
			chec(e){
				this.checked=!this.checked;
				let a=this.list;
				a.forEach((v)=>{
					this.allShopCheck(v.id)
					if(v.id==e){
						let s=v.checked
						v.checked=!s;
						v.child.forEach((h)=>{
							return h.checked=!s;
						})
					}
				})
			}
		},
		onShow() {
			console.log(this.global.demao.api.user_Address_list)
			this.findCar();
		
			// let data={};
			// data.goods_id=3172;
			// data.buy_num=1;
			// data.total_price=123;
			// this.global.request.post({
			// 	url: this.global.demao.api.add_order,
			// 	method: "GET",
			// 	data: data,
			// 	isLoading: true,
			// 	success: (res) => {
			// 		console.log(res)
			// 	}
			// })
		}
	}
</script>

<style lang="scss">
	.icon-weixuanzhong {
		font-size: 30rpx;
		padding-right: 20rpx;
		color: #808080 !important;
	}

	.icon-chongzhichenggong {
		font-size: 35rpx;
		padding-right: 20rpx;
		color: red;
	}

	.icon-dianpu {
		font-size: 35rpx;
		margin-right: 10rpx;
	}

	.goodlist {
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
		margin-top: 20rpx;

		.box {
			width: 100%;
			height: 100%;
			background: #ffffff;
			border-radius: 15rpx;
			box-shadow: 0rpx 0rpx 20rpx #bfbdbd;

			.title {
				width: 100%;
				height: 80rpx;
				border-bottom: 1rpx solid #E5E5E5;
				box-sizing: border-box;
				font-size: $uni-font-size-lg;
				padding: 0 10rpx;
				@extend .any-flex;
				align-items: center;
			}

			.con {
				width: 100%;
				position: relative;
				padding: 15rpx 10rpx;
				box-sizing: border-box;
				@extend .any-flex;
				align-items: center;
				border-bottom: 1rpx solid #E5E5E5;
				color: #808080;
			}

			.con:last-child {
				border-bottom: none;
			}

			image {
				width: 98rpx;
				height: 105rpx;
				margin-right: 20rpx;
				background: red;
			}

			.goods-info {
				width: 320rpx;
				height: 100%;
				@extend .any-flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;

				.name {
					width: 100%;
					box-sizing: border-box;
					@include multi-row-apostrophe(1);
					font-size: $uni-font-size-base;
					color: #575757;
				}

				.cate {
					width: 100%;
					@extend .any-flex;
					flex-wrap: wrap;
					padding-top: 10rpx;
					box-sizing: border-box;
					font-size: $uni-font-size-sm;

					view {
						display: inline-block;
						padding: 2rpx 5rpx;
						color: #868686;
						border: 1rpx solid #868686;
						margin-right: 10rpx;
						margin-bottom: 10rpx;
					}
				}

				.price {
					width: 100%;
					box-sizing: border-box;
					@include multi-row-apostrophe(1);
					font-size: $uni-font-size-lg;
					color: $any-col;
				}

				.dtl {
					width: 100%;
					box-sizing: border-box;
					@include multi-row-apostrophe(1);
					font-size: $uni-font-size-sm;
				}
			}

			.opection {
				position: absolute;
				right: 20rpx;
			}

			.opection-box {
				width: 100%;
				margin-top: 10rpx;
				display: flex;

				.icon-shanchu-copy-copy {
					font-size: 32rpx;
					padding: 10rpx;
					margin-left: 20rpx;
					color: #808080;
				}

				.icon-star {
					font-size: 32rpx;
					padding: 10rpx;
				}
			}
		}
	}

	.bac-img {
		margin-top: 20rpx;
	}

	.bac-imgs {
		width: 100%;
	}

	.bottom {
		width: 100%;
		height: 90rpx;
		background: #ffffff;
		padding-left: 3%;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		bottom: 0;
		font-size: $uni-font-size-base;
		@extend .any-flex;
		align-items: center;
	}

	.pay {
		width: 200rpx;
		height: 100%;
		background: red;
		font-size: $uni-font-size-lg;
		color: #ffffff;
		text-align: center;
		line-height: 90rpx;
	}

	.all-price {
		flex-grow: 1;
		font-size: $uni-font-size-base;
		padding-left: 30rpx;
		box-sizing: border-box;
	}

	.all {
		font-size: $uni-font-size-base;
	}

	.black {
		color: #000000;
	}

	.red {
		color: $any-col;
	}

	.ccc {
		color: #808080;
	}

	.emit-view {
		width: 100%;
		height: 100rpx;
	}
</style>
