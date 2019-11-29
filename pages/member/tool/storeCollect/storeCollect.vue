<template>
	<!-- 店铺收藏 -->
	<view>
		<store :store="storeList"></store>
	</view>
</template>

<script>
	import store from "@/components/mine/store.vue"
	export default {
		components: {
			store
		},
		data() {
			return {
				storeList: [],
				page: 1
			}
		},
		methods: {
			findlist(data) {
				this.global.request.post({
					url: this.global.demao.api.shop_collection_list,
					method: "GET",
					data: data,
					success: (res) => {
						if (res.cartInfo.data) {
							this.storeList = this.storeList.concat(res.cartInfo.data)
							this.page = this.page + 1
						} else {
							this.global.utils.showToast_my("没有更多数据了")
						}
					}
				})
			}
		},
		onLoad() {
			this.global.utils.sethead("店铺收藏")
			let data = {
				page: this.page
			}
			this.findlist(data)
		},
		onReachBottom() {
			console.log("hahaha  我到底部了")
			let data = {
				page: this.page
			}
			this.findlist(data)
		},
	}
</script>

<style>
</style>
