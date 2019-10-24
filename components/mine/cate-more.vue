<!-- 分类+更多组件 -->
<template>
	<view class="newbox any-flex" style="align-items: flex-start;box-shadow: 0rpx 0rpx 10rpx #cfcdcd;">
		<scroll-view :scroll-into-view='ids' :class="menue == true ? 'menu' : 'menu1' " scroll-x>
			<view class="scroll-list">
				<view @click="runid(item.id)" :id=" 'a'+ item.id " v-for="(item,index) in menulist" :key='index' :class=" 'a'+ item.id == ids ? 'active' : '' "
				 class="menu-list">{{item.text}}</view>
			</view>
		</scroll-view>
		<view class="down iconfont icon-icon-up" @click="menushow"></view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				ids:"a1",
				menue:true,
			};
		},
		props:{
			menulist:{
				type:Array, //商品数据列表
				default:[]
			}
		},
		methods:{
			menushow() {
				this.menue == true ? this.menue = false : this.menue = true;
			},
			runid(e){
				this.ids="a"+e;
				this.menue =true;
				this.$emit('cateid',e)
			}
		}
	}
	
</script>

<style lang="scss">
	.newbox {
		margin-top: 20rpx;
		overflow: hidden;

	
		.down {
			height: 64rpx;
			background: #FFFFFF;
			width: 60rpx;
			text-align: center;
			line-height: 64rpx;
		}
	
		.menu {
			overflow: hidden;
			white-space: nowrap;
			width: 95%;
			margin: 0 0 0 20rpx;
	
			.scroll-list {
				width: 100%;
	
				.menu-list {
					display: inline-block;
					padding: 10rpx 20rpx;
					border-radius: 50rpx;
					font-size: $uni-font-size-lg;
				}
			}
		}
	
		.menu1 {
			overflow: hidden;
			border-bottom: 1rpx solid $any-zol;
			width: 95%;
			margin: 0 0 0 20rpx;
	
			.scroll-list {
				width: 100%;
	
				.menu-list {
					display: inline-block;
					padding: 10rpx 20rpx;
					border-radius: 50rpx;
					font-size: $uni-font-size-lg;
				}
			}
		}
	
		.active {
			color: $any-col;
			position: relative;
		}
	
		.active:after {
			content: '';
			display: block;
			position: absolute;
			top: 55rpx;
			left: 10%;
			width: 80%;
			height: 8rpx;
			background: $any-col;
		}
	}
</style>
