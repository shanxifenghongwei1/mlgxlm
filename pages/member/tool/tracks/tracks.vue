<template>
	<!-- 我的足迹 -->
	<view>
		<view class="cate">
			<cate :cateList="cateList" :cateid="cateid" @seleId="sele"></cate>
		</view>
		<view class="con" v-show="cateid===1">
			<store></store>
		</view>
		<view class="con" v-show="cateid===2">
			<goods :titCon="titCon" :more="false" place="3"></goods>
		</view>
	</view>
</template>

<script>
	import cate from "@/components/mine/cate-flex.vue"
	import goods from "@/components/mine/goods.vue"
	import store from "@/components/mine/store.vue"
	export default {
		components:{
			cate,goods,store
		},
		data() {
			return {
				cateList:[{name:"店铺",id:1},{name:"商品",id:2}],
				cateid:1,
				shoplists:[1,2,2],
				titCon:[1,2,3]
			}
		},
		methods: {
			sele:function(e){
				this.cateid=e
			}
		},
		onLoad() {
			this.global.utils.sethead("我的足迹")
		}
	}
</script>

<style>
	.cate{
		margin-top: -20rpx;
	}
</style>
