<template>
	<!-- 店铺收藏 -->
	<view>
		<goods :titCon="good_list" :more="false" place="3"></goods>
	</view>
</template>

<script>
import goods from "@/components/mine/goods.vue"
	export default {
		components:{
			goods
		},
		data() {
			return {
				good_list:[],
				page:1
			}
		},
		methods: {
			findlist(data) {
				this.global.request.post({
					url: this.global.demao.api.collection_list,
					method: "GET",
					data: data,
					success: (res) => {
						console.log(res)
						if(res.cartInfo.data.length){
							this.good_list = this.good_list.concat(res.cartInfo.data)
							this.page = this.page + 1
						}else{
							this.global.utils.showToast_my("没有更多数据了")
						}
					}
				})
			}
		},
		onLoad() {
			this.global.utils.sethead("商品收藏")
			let data={page:this.page}
			this.findlist(data)
		},
		onReachBottom() {
			console.log("hahaha  我到底部了")
			let data={page:this.page}
			this.findlist(data)
		},
	}
</script>

<style>
</style>
