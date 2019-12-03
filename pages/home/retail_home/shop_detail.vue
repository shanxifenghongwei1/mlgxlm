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
				shop_id:1,
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
				cateid:1,
				page:1
			}
		},
		methods: {
			seleId(e){
				this.cateid = e;
			},
			init(){
				this.global.request.post({
					url:'index_reseller_goodsList',
					data:{
						is_reseller:this.cateid,
						shop_id:this.shop_id,
						page:this.page
					},
					success:res=>{
						this.goods_list = res.re_goodsInfo.data
					}
				})
			}
		},
		onLoad(options) {
			this.shop_id = options.shop_id ,
			this.init()
		}
	}
</script>

<style>
</style>
