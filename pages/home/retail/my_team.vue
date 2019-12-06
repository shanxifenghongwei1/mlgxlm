<template>
	<!-- 我得团队页面 -->
	<view>
		<view class="top">
			<view class="box">
				<view class="user-info any-flex">
					<image :src="userInfo.wx_headimg" mode=""></image>
					<view class="info-con any-flex">
						<view class="name lg">
							{{userInfo.wx_name}}
						</view>
<!-- 						<view class="code base">
							123456
						</view> -->
					</view>
				</view>
				<view class="num-box any-flex">
					<view class="nun any-flex">
						<text class="big">{{total_num}}人</text>
						<view class="num-con base any-flex">
							<view class="icon iconfont icon-xinzengrenshu"></view>
							<view class="">
								我的团队
							</view>
						</view>
					</view>
					<view class="nun any-flex">
						<text class="big">{{today_new_num}}人</text>
						<view class="num-con base any-flex">
							<view class="icon iconfont icon-zongrenshu"></view>
							<view class="">
								今日新增
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="list">
			
			<view class="list-box any-flex" v-for="(item,index) in son_list" :key="index">
				<image :src="item.wx_headimg" mode="" class="left"></image>
				<view class="center base">
					{{item.wx_name}}
				</view>
				<view class="right base red">
					+{{item.my_p_profit}}元
				</view>
			</view>
			
		</view>	
	</view>
</template>

<script>
	export default{
		data(){
			return{
				parent:{},
				total_num:0,
				son_list:[],
				today_new_num:0,
				userInfo:{}
			}
		},
		methods:{
			init(){
				this.global.request.post({
					url:'my_team',
					success:res=>{
						console.log({
							a:'获取到的数据',
							res:res
						})
						this.parent = res.parent[0];
						this.son_list = res.son;
						this.total_num = res.total_num;
						this.today_new_num=res.today_new_num;
						this.userInfo=res.uInfo;
					}
				})
			}
		},
		onLoad() {
			this.init()
		}
	}
</script>

<style lang="scss">
	.red{
		color: $any-col;
	}
	.big {
		font-size: 40rpx;
	}

	.lg {
		font-size: $uni-font-size-lg;
	}

	.base {
		font-size: $uni-font-size-base;
	}

	.top {
		width: 100%;
		height: 360rpx;
		padding: 20rpx 3%;
		box-sizing: border-box;
	}

	.box {
		width: 100%;
		height: 100%;
		background: $any-col;
		border-radius: 20rpx;
		padding: 20rpx 40rpx;
		box-sizing: border-box;
	}

	.user-info {
		width: 100%;
		height: 140rpx;
		align-items: center;

		image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			background: #ffffff;
			margin-right: 20rpx;
		}

		.info-con {
			flex-grow: 1;
			height: 100%;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			padding: 0 20rpx;
			box-sizing: border-box;
			color: #ffffff;

			.name {
				width: 100%;
				text-align: left;
				padding: 10rpx 0;
				@include multi-row-apostrophe(1);

			}

			.code {
				display: inline-block;
				text-align: center;
				padding: 3rpx 18rpx;
				@include multi-row-apostrophe(1);
				border: 1rpx solid #ffffff;
				border-radius: 30rpx;
			}
		}
	}

	.num-box {
		width: 100%;
		height: 130rpx;
		padding-top: 15rpx;
				position: relative;
	}

	.nun {
		width: 50%;
		height: 100%;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		color: #ffffff;

	}
	.num-box:before{
		content:"";
		display: block;
		width: 1rpx;
		height: 60%;
		position: absolute;
		left: 50%;
		top: 26%;
		background: #ffffff;
	}

	.num-con {
		justify-content: center;
		align-items: center;
		padding: 5rpx 0;
		.iconfont{
			margin-right: 10rpx;
		}
	}
	.list{
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
		.list-box{
			width: 100%;
			height: 100rpx;
			justify-content: space-between;
			align-items: center;
			border-top: 1rpx solid #f0f0f0;
			padding: 0 10rpx;
			box-sizing: border-box;
			.left{
				width: 60rpx;
				height: 60rpx;
				border-radius: 50%;
			}
			.center{
				width: 350rpx;
				@include multi-row-apostrophe(1);
			}
			.right{
				width: 180rpx;
				text-align: right;
			}
		}
		.list-box:last-child{
			border-bottom: 1rpx solid #f0f0f0;
		}
		.list-box:nth-child(2n){
			background:#ffffff;
		}
		.list-box:nth-child(2n-1){
			background:#f0f0f0;
		}
	}
</style>
