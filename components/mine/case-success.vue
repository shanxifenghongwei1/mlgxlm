<!-- 成功案例列表 -->
<template>
	<view class="case-con">
		<view class="case-con-box" v-for="(item,index) in caseList" :key="index">
			<!-- 图片展示 -->
			<view class="picture">
				<view class="picture-box">
					<image :src="picUrl+item.case_front" mode=""></image>
					<view class="picture-time">
						体验前
					</view>
				</view>
				<view class="picture-box">
					<image :src="picUrl+item.case_after" mode=""></image>
					<view class="picture-time">
						体验后35天
					</view>
				</view>
			</view>
			<!-- 年纪信息 -->
			<view class="case-info">
				<image src="/static/image/other/bookmark.png" mode=""></image>
				<view class="info-age">
					{{item.shop_name}}
				</view>
				<view class="info-state">
					{{item.case_trouble}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				picUrl:""
			}
		},
		props:{
			caseList:{
				type:Array, //商品数据列表
			}
		},
		created(){
			this.picUrl=this.global.demao.domain.videoUrl
		}
	}
</script>

<style lang="scss">
	.picture{
		padding: 23rpx 0;
		@extend .any-flex;
		justify-content: space-between;
	}
	.picture-box{
		width: 345rpx;
		height: 274rpx;
		position: relative;
	}
	.picture-box image{
		width: 345rpx;
		height: 274rpx;
	}
	.picture-time{
		display:inline-block;
		background: $any-col;
		position: absolute;
		left: 0;
		bottom: 0;
		font-size: $uni-font-size-base;
		padding: 7rpx;
		color: #ffffff;
	}
	.case-info{
		@extend .any-flex;
	}
	.case-info image{
		width:25rpx;
		height: 35rpx;
	}
	.info-age,.info-state{
		font-size: $uni-font-size-base;
		border: 2rpx solid $any-col;
		margin-left: 15rpx;
		padding: 0rpx 5rpx;
	}
</style>
