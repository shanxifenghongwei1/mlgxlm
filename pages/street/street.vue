<template>
	<view>

		<view class="app">
			<waterfall-flow :list="list" :loading="loading" @click="choose"></waterfall-flow>
		</view>

	</view>
</template>

<script>
	import WaterfallFlow from '@/components/nairenk-waterfall-flow/nairenk-waterfall-flow.vue';
	export default {
		components: {
			WaterfallFlow
		},
		data() {
			return {
				page: 1,
				start: 0,
				end: 0,
				list:[], // 列表
				loading: true
			}
		},
		onLoad() {
			this.getList();
		},
		onReachBottom() {
			// this.page++;
			// this.loading = true;
			// this.getList();
		},
		methods: {
			// 选中
			choose(item) {
				// item 返回选中 JSON 对象
				console.log(item)
			},
			// 模拟加载数据
			getList() {
				setTimeout(()=>{
					this.list=[ 
					{
						"id": 1,
						"image": "http://img2.imgtn.bdimg.com/it/u=2436940115,2560273015&fm=26&gp=0.jpg",
						"content": "我的左手吗？呵…我把它送给了新世界",
						"user": {
							"name": "nairenk",
							"avatar": "https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"
						}
					},{
						"id": 2,
						"image": "http://img1.imgtn.bdimg.com/it/u=2018939532,1617516463&fm=26&gp=0.jpg",
						"content": "我是要成为海贼王的男人",
						"user": {
							"name": "nairenk",
							"avatar": "https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"
						}
					},{
						"id": 2,
						"image": "http://img1.imgtn.bdimg.com/it/u=2498530398,3497901317&fm=26&gp=0.jpg",
						"content": "我是要成为海贼王的男人",
						"user": {
							"name": "nairenk",
							"avatar": "https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"
						}
					},
					{
						"id": 1,
						"image": "http://img2.imgtn.bdimg.com/it/u=2436940115,2560273015&fm=26&gp=0.jpg",
						"content": "我的左手吗？呵…我把它送给了新世界",
						"user": {
							"name": "nairenk",
							"avatar": "https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"
						}
					},{
						"id": 2,
						"image": "http://img1.imgtn.bdimg.com/it/u=2018939532,1617516463&fm=26&gp=0.jpg",
						"content": "我是要成为海贼王的男人",
						"user": {
							"name": "nairenk",
							"avatar": "https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"
						}
					},{
						"id": 2,
						"image": "http://img1.imgtn.bdimg.com/it/u=2498530398,3497901317&fm=26&gp=0.jpg",
						"content": "我是要成为海贼王的男人",
						"user": {
							"name": "nairenk",
							"avatar": "https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"
						}
					},
				]
				},1000)
			}
		}
	}
</script>

<style>

</style>
