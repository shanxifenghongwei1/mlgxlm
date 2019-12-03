<template>
	<!-- 首页分销页面 -->
	<view>
		<view class="opection">
			<view @click="opec(1)" class="opection-li">
				分销代理
			</view>
			<view @click="opec(2)" class="opection-li">
				分销商
			</view>
			<view @click="opec(3)" class="opection-li">
				异业联盟
			</view>
		</view>
		<view class="emit">
			
		</view>
		<view class="shop_box" @click="toDetail()" v-for="(item,index) in list" :key='index'>
			<view class="shop">
				<view class="top">
					<view class="pic">
						<image class='pic' :src="imageurl + item.shop_img" mode=""></image>
					</view>
					<view class="con">
						<view class="title">
							<text></text>
							{{item.shop_name}}
						</view>
						<view class="num">
							<text>销量{{item.goods_num}}</text>
							<text>共{{item.child.length}}件商品</text>
						</view>
					</view>
					<view class="goShop">
						进店看看
					</view>
				</view>
				<view class="bottom">
					<view class="pic-box" v-for="(qq,ww) in item.child" :key='ww'>
						<image :src="imageurl + qq.goods_img" mode=""></image>
						<view class="price">
							￥{{qq.goods_price}}
						</view>
					</view>
					<view class="pic-box" v-for="(qq,ww) in item.child" :key='ww'>
						<image :src="imageurl + qq.goods_img" mode=""></image>
						<view class="price">
							￥{{qq.goods_price}}
						</view>
					</view>
				</view>
			</view>
		</view>

		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				imageurl:this.global.demao.domain.videoUrl
			}
		},
		methods: {
			toDetail(){
				this.global.utils.jump(1,"/pages/home/retail_home/shop_detail")
			},
			opec(e){
				this.global.utils.jump(1,"/pages/home/retail/threeBtn?opec="+e)
			},
			// 数组去重
			unique(arr) {
				return Array.from(new Set(arr))
			},
			init(){

				this.global.request.post({
					url:'index_rellerList',
					success:res=>{
						let a = res.shop_resellerInfo
						let b = []
						a.forEach((v) => {
							b.push(v.shop_id)
						})
						let c = this.unique(b);
						let d = []
						console.log(c)
						c.forEach((item,index) => {
							let e = { shop_id : item , child :[] };
							let num = 0;
							
							a.forEach((q)=>{
								if(item == q.shop_id){
									e.shop_name = q.shop_name
									e.shop_img =  q.shop_img
									num = num + q.re_goods_volume;
									e.child.push({
										goods_id:q.re_goods_id,
										goods_price:q.re_goods_price,
										goods_img:q.re_goods_picture
									})
									
								}
							})
							e.goods_num=num;
							d.push(e)
						})
						this.list = d 
					}
				})
			}
		},
		mounted() {
			this.init()
		}
	}
</script>

<style lang="scss">
	.emit{
		width: 100%;
		height: 110rpx;
	}
	.opection{
		width: 100%;
		height: 110rpx;
		padding: 0 3%;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		top: 0;
		@extend .any-flex;
		justify-content: space-between;
		align-items: center;
		.opection-li{
			width: 170rpx;
			height: 52rpx;
			background: $any-col;
			color: #ffffff;
			border-radius: 26rpx;
			text-align: center;
			line-height: 52rpx;
			font-size: $uni-font-size-lg;
		}
	}
	.shop_box {
		width: 100%;
		height: 300rpx;
		padding: 0 3%;
		box-sizing: border-box;
	}

	.shop {
		width: 100%;
		height: 100%;
		border-radius: 15rpx;
		box-shadow: 0px 0px 10rpx #bfbdbd;
		box-sizing: border-box;
		@extend .any-flex;
		flex-direction: column;
	}

	.top {
		width: 100%;
		height: 110rpx;
		@extend .any-flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20rpx;
		border-bottom: 2rpx solid #B4B4B4;
		box-sizing: border-box;
	}

	.pic {
		width: 66rpx;
		height: 73rpx;
		// background: $any-col;
	}

	.con {
		flex-grow: 1;
		height: 100%;
		padding: 0 5%;
		box-sizing: border-box;
		@extend .any-flex;
		flex-direction: column;
		justify-content: center;
	}

	.goShop {
		width: 120rpx;
		height: 40rpx;
		text-align: center;
		line-height: 40rpx;
		background: $any-col;
		border-radius: 15rpx;
		font-size: $uni-font-size-base;
		color: #ffffff;
	}

	.title {
		width: 100%;
		font-size: $uni-font-size-lg;
		padding: 2rpx 0;
		font-weight: bold;
	}

	.num {
		width: 100%;
		font-size: $uni-font-size-base;
		padding: 2rpx 0;
	}

	.bottom {
		flex-grow: 1;
		width: 100%;
		padding: 0 20rpx;
		@extend .any-flex;
		// justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
	}

	.pic-box {
		width: 140rpx;
		height: 150rpx;
		background: pink;
		position: relative;
		margin-left: 20rpx;
		border-radius:10rpx;
		image {
			width: 140rpx;
			height: 150rpx;
			// background: blue;
		}

		.price {
			display: inline-block;
			padding: 2rpx 5rpx;
			position: absolute;
			bottom: 0;
			right: 0;
			background: $any-col;
			color: #ffffff;
			font-size: $uni-font-size-base;
		}
	}
</style>
