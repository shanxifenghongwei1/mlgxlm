<template>
	<view class="banner">
		<swiper :autoplay="true" :indicator-dots="true" :interval="2000" :duration="1000" indicator-active-color="#FE0000">
			<swiper-item v-for="(item ,index) in bannerlist" :key='index' class="banner-item">
				<view class="swiper-item">
					<image :src="picUrl+item" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
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
			bannerlist:{
				type:Array, //商品数据列表
			}
		},
		methods:{
			linkPages(e){
				console.log(e);
				uni.navigateTo({
					url:e
				})
			}
		},
		created(){
			this.picUrl=this.global.demao.domain.videoUrl
		}
	}
</script>

<style lang="scss">
	.banner {
		width: 100%;
		height: 400rpx;
		background: pink;
	
		swiper {
			width: 100%;
			height: 100%;
	
			image {
				width: 100%;
				height: 100%;
			}
		}
	
		position: relative;
	}
	
</style>
