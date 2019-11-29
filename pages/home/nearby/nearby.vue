<!-- 附近店铺 -->

<template>
	<view>
		<view class="search-box">
			<search></search>
		</view>
		<view class="cate-box">
			<cateFlex :cateList="list" :cateid="cateid" @seleId="seleId"></cateFlex>
		</view>
		<view class="emit">
			
		</view>
		<view>
			<store :store="cateid==1?store:store1"></store>
		</view>
	</view>
</template>

<script>
	import store from "@/components/mine/store.vue"
	import cateFlex from '@/components/mine/cate-flex.vue';
	import search from '@/components/my-search/my-search.vue';
	export default {
		components: {
			store,
			search,
			cateFlex
		},
		data() {
			return {
				options: {},
				//分类列表以及选中id
				list: [{
					id: 1,
					name: "附近店铺"
				}, {
					id: 2,
					name: "销量"
				}],
				cateid: 1,


				store: [],
				page: 1,

				store1: [],
				page1: 1
			}
		},
		methods: {
			seleId(e) {
				this.cateid = e;
			},
			findlist(data, f) {
				this.global.request.post({
					url: this.global.demao.api.nearby_shop,
					method: "GET",
					data: data,
					success: (res) => {

						if(res.shopInfo.length){
							if (f == 1) {
								this.store = this.store.concat(res.shopInfo)
								this.page = this.page + 1
							} else {
								this.store1 = this.store1.concat(res.shopInfo)
								this.page1 = this.page1 + 1
							}
						}else{
							this.global.utils.showToast_my("没有更多数据了")
						}
						
					}
				})
			}
		},
		onLoad(options) {
			this.options = options;
			this.global.utils.sethead(options.head)

			let data = {};
			data = {
				lat: this.global.lat,
				lng: this.global.lng,
				page: this.page,
				limited_type: 1,
			}
			this.findlist(data, 1)
			let data1 = {};
			data1 = {
				lat: this.global.lat,
				lng: this.global.lng,
				page: this.page1,
				limited_type: 2,
			}
			this.findlist(data1, 2)
		},
		onReachBottom() {
			console.log("hahaha  我到底部了")
			if(this.cateid==1){
				let data = {};
				data = {
					lat: this.global.lat,
					lng: this.global.lng,
					page: this.page,
					limited_type: 1,
				}
				this.findlist(data, 1)
			}else{
				let data = {};
				data = {
					lat: this.global.lat,
					lng: this.global.lng,
					page: this.page,
					limited_type: 1,
				}
				this.findlist(data, 1)
			}
		},
	}
</script>

<style>
	.search-box {
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
	}

	.shoplist-box {}
	.emit{
		width: 100%;
		height: 500rpx; 
	}
</style>
