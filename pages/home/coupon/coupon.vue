<template>
	<!-- 优惠券 -->
	<view class="page">
		<block v-for="(item,index) in list" :key="index">
			<block v-if="index>3 && index%4==0">
				<!-- <view class="advert"></view> -->
				<view class="shop-card">
					<view class="card-con">
						<view class="card-pic">
							<view style="text-align: center;" class="base">{{item.goods_name}}</view>
						</view>
						<view class="card-name" style="text-align: center;">
							
							<view v-if="item.coupon_type == 1">
								{{item.shop_name}}<text class="font-padd">|</text><text class="card">折扣券</text>
							</view>
							<view class=""  v-if="item.coupon_type == 0">
								{{item.shop_name}}<text class="font-padd">|</text><text class="card">满减劵</text>
							</view>	
						</view>
						<view class="card-time" style="text-align: center;">
							使用时间{{ item.coupon_start_time*1000 | time }}--{{ item.expiration*1000 | time }}
						</view>
					</view>
					<image class="dit" src="/static/image/other/icon-dit.png" mode=""></image>
					<view class="card-size">
							<view class="price" v-if="item.coupon_type == 0">
								￥{{item.coupon_price}}
							</view>
							
							<view class="price" v-if="item.coupon_type == 1">
								{{item.is_member_discount}}
								<image src="/static/image/other/coupon_1.png" mode=""></image>
							</view>
							
							<view class="manJian" v-if="item.coupon_type == 0">
								满{{item.coupon_redouction}}元使用
							</view>
							
						
						
						
						<view class="draw" v-if="!item.has" @click="getCard(item.goods_id)">
							点击领取
						</view>
						<view class="use" v-else @click="toDetail(item.goods_id,item.goods_name)">
							去使用
						</view>
						
						
					</view>
				</view>
			</block>
			<block v-else>
				<view class="shop-card">
					<view class="card-con">
						<view class="card-pic">
							<!-- <image :src="picUrl+i" mode="" v-for="(i,index) in item.picture" :key="index"></image> -->
							<view style="text-align: center;" class="base">{{item.goods_name}}</view>
						</view>
						<view class="card-name" style="text-align: center;">
							<view v-if="item.coupon_type == 1">
								{{item.shop_name}}<text class="font-padd">|</text><text class="card">折扣券</text>
							</view>
							<view class=""  v-if="item.coupon_type == 0">
								{{item.shop_name}}<text class="font-padd">|</text><text class="card">满减劵</text>
							</view>
						</view>
						<view class="card-time" style="text-align: center;">
							使用时间{{item.coupon_start_time*1000|time}}--{{item.expiration*1000|time}}
						</view>
					</view>
					<image class="dit" src="/static/image/other/icon-dit.png" mode=""></image>
					<view class="card-size">
							<view class="price" v-if="item.coupon_type == 0">
								￥{{item.coupon_price}}
							</view>
							<view class="price" v-if="item.coupon_type == 1">
								{{item.is_member_discount}}
								<image src="/static/image/other/coupon_1.png" mode=""></image>
							</view>
							<view class="manJian" v-if="item.coupon_type == 0">
								满{{item.coupon_redouction}}元使用
							</view>
						<view class="draw" v-if="!item.has" @click="getCard(item.goods_id)">
							点击领取
						</view>
						<view class="use" v-else @click="toDetail(item.goods_id,item.goods_name)">
							去使用
						</view>
					</view>	
				</view>
			</block>
		</block>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: {},
				list: [],
				picUrl: ""
			}
		},
		methods: {
			getCard(e){
				console.log(e)
				let data={};
				data.goods_id=e
				this.global.request.post({
					url:"coupon_receive",
					// url: this.global.demao.api.couponadd,
					method: "GET",
					data: data,
					success: (res) => {
						console.log(res)
						if(res.code==0){
							this.global.utils.showToast_my("领取优惠卷成功，快去使用吧!")
							this.findList();
						}
						
					}
				})
			},
			toDetail(e,f){
				this.global.utils.jump(1,"/pages/home/goods-detail/goods-detail?goods_id="+e+"&&head="+f)
			},
			findList(){
				let that=this;
				if(this.options.shop_id){
					let data={};
					data.shop_id=this.options.shop_id;
					this.global.request.post({
						url: this.global.demao.api.couponlist,
						// method: "GET",
						data: data,
						success: (res) => {
							res.couponInfo.forEach((v) => {
								v.picture = v.picture.split(",")
							})
							this.list = res.couponInfo;
						}
					})
				}else{
					that.global.request.post({
						url: that.global.demao.api.index_coupon,
						method: "GET",
						data: {},
						success: (res) => {			
							// that.list = res.couponInfo;
							let a=res.couponInfo;
							console.log(a)
							that.global.request.post({
								url:that.global.demao.api.user_coupon,
								method:"GET",
								data:{},
								success:(res)=>{
									
									let b=res;
									
									a.forEach((v)=>{
										let num=b.coupon.filter((x)=>{
											return v.goods_id==x.goods_id
										})
										if(num.length){
											v.has=true;
										}else{
											v.has=false;
										}
									})
									
									b.coupon1.forEach((x)=>{
										a=a.filter((v)=>{
											return v.goods_id!=x.goods_id
										})
									})

									b.coupon2.forEach((x)=>{
										a=a.filter((v)=>{
											return v.goods_id!=x.goods_id
										})
									})
				
									this.list=a;
								}
							})
							
						}
					})
				}
			}
		},
		onLoad(options) {
			console.log(options);
			this.options=options;
			this.global.utils.sethead("优惠券")
			this.picUrl = this.global.demao.domain.picUrl
		},
		onShow() {
			this.findList();
		}
	}
</script>

<style lang="scss">
	
	.font-padd {
		padding: 0 10rpx;
		color: $any-col;
		;
	}

	.page {
		width: 100%;
		padding: 20rpx 3%;
		box-sizing: border-box;

		.shop-card {
			width: 100%;
			background: #ffffff;
			border-radius: 20rpx;
			box-shadow: #cccccc 0px 0px 10rpx;
			@extend .any-flex;
			padding: 15rpx;
			box-sizing: border-box;
			justify-content: space-between;
			margin-top: 20rpx;

			.card-con {
				width: 500rpx;
				// height: 100%;
				height: 170rpx;
				@extend .any-flex;
				justify-content: space-between;
				
				flex-direction: column;
				align-items: flex-start;
			}

			.card-name {
				width: 100%;
				word-wrap: break-word;
			}

			.card-name view {
				font-size: $uni-font-size-base;
				display: inline;
				word-break: break-all;
			}

			.card {
				color: $any-col;
			}

			.card-pic {
				width: 100%;
				// height: 110rpx;
				background: #ffffff;
				.base{
					font-size: $uni-font-size-lg;
					@include multi-row-apostrophe(1);
						font-weight: bold;
					width: 80%;
					margin: 0 auto;
				}
			}

			.card-pic image {
				display: inline-block;
				width: 110rpx;
				height: 110rpx;
				margin-right: 15rpx;
				@extend .any-flex;
			}

			.card-time {
				width: 100%;
				color: $any-col;
				font-size: $uni-font-size-sm;
			}

			.dit {
				width: 5rpx;
				height: 170rpx;
			}

			.card-size {
				flex-grow: 1;
				height: 100%;
				background: #ffffff;
				color: $any-col;
				@extend .any-flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}

			.price {
				padding: 10rpx 0;
				font-size: 35rpx;
				font-weight: bold;

				image {
					width: 22rpx;
					height: 28rpx;
					margin-left: 5rpx;
				}
			}

			.manJian {
				width: 80%;
				padding: 10rpx 0;
				font-size: $uni-font-size-base;
				word-break: break-all;
				text-align: center;
			}

			.use {
				margin-top: 10rpx;
				padding: 4rpx 10rpx;
				border: 1rpx solid $any-col;
				font-size: $uni-font-size-sm;
				border-radius: 20rpx;
			}

			.draw {
				margin-top: 10rpx;
				padding: 4rpx 10rpx;
				font-size: $uni-font-size-sm;
				background: $any-col;
				color: #ffffff;
				border-radius: 50rpx;
			}
		}

		.shop-card:first-child {
			margin-top: 0;
		}

		.advert {
			width: 100%;
			height: 240rpx;
			background: #pink;
			border-radius: 20rpx;
			box-shadow: #cccccc 0px 0px 10rpx;
			margin-top: 20rpx;
		}
	}
</style>
