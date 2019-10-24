<!-- 商品组件（图+详细信息） -->
<template>
	<view class="goods">
		<view class="goods-li" @click="toDetail(2)">
			<view class="goods-pic">
				<image src="/static/image/banner/1.jpg" mode=""></image>
			</view>
			<view class="goods-tit">
				芳香精油经络疏通
			</view>
			<view class="goods-con">
				<view class="goods-con-left">
					乳腺
				</view>
				<view class="goods-con-fight">
					已售 10
				</view>
			</view>
			<view class="goods-price">
				<view class="goods-price-left">
					<view class="goods-NewPrice">
						198.00
					</view>
					<view class="goods-OldPrice">
						398.00
					</view>
				</view>
				<view class="goods-price-right">
					减198元
				</view>
			</view>
		</view>
		<view class="goods-li" @click="toDetail(2)">
			<view class="goods-pic">
				<image src="/static/image/banner/1.jpg" mode=""></image>
			</view>
			<view class="goods-tit">
				芳香精油经络疏通
			</view>
			<view class="goods-con">
				<view class="goods-con-left">
					乳腺
				</view>
				<view class="goods-con-fight">
					已售 10
				</view>
			</view>
			<view class="goods-price">
				<view class="goods-price-left">
					<view class="goods-NewPrice">
						198.00
					</view>
					<view class="goods-OldPrice">
						398.00
					</view>
				</view>
				<view class="goods-price-right">
					减198元
				</view>
			</view>
		</view>
		<view class="goods-li" @click="toDetail(2)">
			<view class="goods-pic">
				<image src="/static/image/banner/1.jpg" mode=""></image>
			</view>
			<view class="goods-tit">
				芳香精油经络疏通
			</view>
			<view class="goods-con">
				<view class="goods-con-left">
					乳腺
				</view>
				<view class="goods-con-fight">
					已售 10
				</view>
			</view>
			<view class="goods-price">
				<view class="goods-price-left">
					<view class="goods-NewPrice">
						198.00
					</view>
					<view class="goods-OldPrice">
						398.00
					</view>
				</view>
				<view class="goods-price-right">
					减198元
				</view>
			</view>
		</view>
		<view class="goods-li" @click="toDetail(2)">
			<view class="goods-pic">
				<image src="/static/image/banner/1.jpg" mode=""></image>
			</view>
			<view class="goods-tit">
				芳香精油经络疏通
			</view>
			<view class="goods-con">
				<view class="goods-con-left">
					乳腺
				</view>
				<view class="goods-con-fight">
					已售 10
				</view>
			</view>
			<view class="goods-price">
				<view class="goods-price-left">
					<view class="goods-NewPrice">
						198.00
					</view>
					<view class="goods-OldPrice">
						398.00
					</view>
				</view>
				<view class="goods-price-right">
					减198元
				</view>
			</view>
		</view>
		
		<view class="look-more">
			查看更多60个商品
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			titCon:{
				type:Object, //商品数据列表
				default:{}
			}
		},
		methods:{
			toDetail(e){
				uni.navigateTo({
					url:"/pages/home/goods-detail/goods-detail?id="+e
				})
			}
		}
	}
</script>

<style lang="scss">
	.goods{
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
	}
	.goods-li{
		width: 340rpx;
		background: #ffffff;
		display: inline-block;
		margin-top: 20rpx;
		overflow: hidden;
		box-shadow: 0rpx 0rpx 10rpx #cfcdcd;
	}
	.goods-li:nth-child(2n){
		margin-left: 25rpx;
	}
	.goods-pic{
		width: 100%;
		height: auto;
	}
	.goods-pic image{
		width: 100%;
		height: 194rpx;
		background:red;
	}
	.goods-tit{
		width: 80%;
		text-align: center;
		margin:0 auto;
		font-size: $uni-font-size-lg;
		padding: 5rpx 0;
		margin-top: 10rpx;
	}
	.goods-con{
		width: 100%;
		@extend .any-flex;
		justify-content: space-between;
		align-items: center;
		font-size: $uni-font-size-base;
		padding: 0 15rpx;
		box-sizing: border-box;
		color:#7e7e7e;
		margin-top: 10rpx;
	}
	.goods-price{
		width: 100%;
		@extend .any-flex;
		padding: 0 15rpx;
		box-sizing: border-box;
		justify-content: space-between;
		margin: 10rpx 0;
	}
	.goods-price-left{
		@extend .any-flex;
		align-items: flex-end;
	}
	.goods-NewPrice{
		font-size: $uni-font-size-lg;
		color: $any-col;
	}
	.goods-OldPrice{
		font-size: $uni-font-size-base;
		color: #7e7e7e;
		text-decoration: line-through;
		margin-left: 5rpx;
	}
	.goods-price-right{
		font-size: $uni-font-size-sm;
		color: $any-col;
		padding: 2rpx 5rpx;
		border:2rpx solid $any-col;
	}
	.look-more{
		width: 350rpx;
		height: 55rpx;
		border-radius: 15rpx;
		background: #bcbdbd;
		text-align: center;
		line-height: 55rpx;
		font-size: $uni-font-size-base;
		margin: 30rpx auto 0;
	}
</style>
