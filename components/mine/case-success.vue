<!-- 成功案例列表 -->
<template>
	<view class="case-con">
		<view class="case-con-box" v-for="(item,index) in caseList">
			<!-- 图片展示 -->
			<view class="picture">
				<view class="picture-box">
					<image :src="item.prepic" mode=""></image>
					<view class="picture-time">
						体验前
					</view>
				</view>
				<view class="picture-box">
					<image :src="item.pic" mode=""></image>
					<view class="picture-time">
						体验后35天
					</view>
				</view>
			</view>
			<!-- 年纪信息 -->
			<view class="case-info">
				<image src="/static/image/other/bookmark.png" mode=""></image>
				<view class="info-age">
					{{item.age}}
				</view>
				<view class="info-state">
					{{item.state}}
				</view>
			</view>
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
			caseList:{
				type:Array, //商品数据列表
				default:[]
			}
		},
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
		background: yellow;
	}
	.picture-time{
		display:inline-block;
		background: $any-col;
		position: absolute;
		left: 0;
		bottom: 0;
		font-size: $uni-font-size-base;
		padding: 7rpx;
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
