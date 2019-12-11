<template>
	<!-- 我的足迹 -->
	<view>
		<view class="con">
			<goods :titCon="list" :more="false" place="6"></goods>
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
				list:[]
			}
		},
		methods: {
			sele:function(e){
				this.cateid=e
			},
			findList(){
				this.global.login_state.login_state().then((res) => {
					if (res) {
						this.global.request.post({
							url: 'user_history',
							method:'GET',
							success: res => {
								this.list=res.historyInfo;
							}
						})
					}
				})
			}
		},
		onLoad() {
			this.global.utils.sethead("我的足迹")
			this.findList();
		}
	}
</script>

<style>
	.cate{
		margin-top: -20rpx;
	}
</style>
