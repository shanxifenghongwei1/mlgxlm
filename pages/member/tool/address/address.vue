<template>
	<view class="page">
		<view class="address-box" v-for="(item,index) in addressList" :key="index">
			<view class="box-top">
				<view class="name">
					<view class="">
						收货人:张峰
					</view>
					<view class="">
						18856555898
					</view>
				</view>
				<view class="address">
					dsfajklsdfkla;sdnf;aksdjfna;klsdfjn;asdkfjna;skjdlfnasd;kjlfmna;skldjfna;ksdfna;skdjfn;kasdnfm;kaj
				</view>
			</view>
			<view class="box-bottom">
				<view class="bottom-left" @click="tacit(10)">
					<image src="/static/image/other/icon-select-on.png" mode=""></image>
					默认地址
				</view>
				<view class="bottom-right">
					<view class="left" @click="edit(10)">
						<image src="/static/image/other/icon-write.png" mode=""></image>
						<view class="">
							编辑
						</view>
					</view>
					<view class="right" @click="edit(10)">
						<image src="/static/image/other/icon-del.png" mode=""></image>
						<view class="">
							删除
						</view>
					</view>   
					
				</view>
			</view>
		</view>
		
		<navigator hover-class="none" url="./add-address" class="addNew">
			添加新地址
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressList:[
					{url:'/page/index',id:"12"},
					{url:'/page/index',id:"12"}
				]
			}
		},
		methods: {
			edit:(e)=>{
				uni.navigateTo({
					url:"./add-address?address_id="+e
				})
			}
		},
		onShow(){
			this.global.request.post({
				url: this.global.demao.api.user_Address_list,
				method: "GET",
				data: {},
				success: (res) => {
					console.log("hahaha"+res)
				}
			})
		}
	}
</script>

<style lang="scss">	.page{
		width: 100%;
		min-height: 100vh;
		background:#efefef;
	}
	.address-box{
		width: 100%;
		background: #ffffff;
		padding: 10rpx 3%;
		box-sizing: border-box;
		font-size: $uni-font-size-base;
		margin-bottom: 20rpx;
		.box-top{
			width: 100%;
			border-bottom: 1rpx solid #cccccc;
			.name{
				@extend .any-flex;
				justify-content: space-between;
				padding-top: 10rpx;
			}
			.address{
				width: 100%;
				word-break: break-all;
				word-wrap: break-word;
				color: $uni-border-color;
				padding: 20rpx 0;
			}
		}
		.box-bottom{
			@extend .any-flex;
			justify-content: space-between;
			padding: 20rpx 0 10rpx;
			image{
				width:27rpx;
				height: 27rpx;
			}
			.bottom-left{
				width: 140rpx;
				@extend .any-flex;
				justify-content: space-between;
			}
			.bottom-right{
				@extend .any-flex;
				.left{
					width: 84rpx;
					@extend .any-flex;
					justify-content: space-between;
				}
				.right{
					width: 84rpx;
					@extend .any-flex;
					justify-content: space-between;
					margin-left: 20rpx;
				}
			}
		}
		
	}
	.addNew{
		width: 100%;
		height: 98rpx;
		background: $any-col;
		color: #ffffff;
		text-align: center;
		line-height: 98rpx;
		position: fixed;
		left: 0;
		bottom: 0;
		font-size: $uni-font-size-base;
	}
</style>
