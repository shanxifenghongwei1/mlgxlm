<template>
	<!-- 商品列表页面 -->
	<view class="">
		<view class="">
			<cateflex :cateList="cateList" :cateid="cateid" @seleId="seleId()"></cateflex>
		</view>
		<goods :titCon="goods_list" :more="false" :place="5"></goods> 
	</view>
</template>

<script>
	import  goods from "@/components/mine/goods.vue";
	import  cateflex from "@/components/mine/cate-flex.vue";
	export default {
		components: {
			goods,cateflex
		},
		data() {
			return {
				options:{},
				goods_list:[1,2,3,4],
				cateList:[{
					id:1,
					name:"全部商品"
				},
				{
					id:2,
					name:"店铺热销"
				},{
					id:3,
					name:"分销上新"
				}],
				cateid:1
			}
		},
		methods: {
			seleId(e){
				this.cateid=e;
			}
		},
		onLoad(options) {
			
		}
	}
</script>

<style>
</style>
