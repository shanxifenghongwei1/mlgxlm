<template>
	<view class="qqq">
		<view class="app" >
			<waterfall-flow :list="list" :loading="loading" @click="choose"></waterfall-flow>
		</view>
		<!-- 小飞机 -->
		<navigator hover-class="none" url="/pages/street/publish" class="publish">
			<image src="/static/image/other/publish.png" mode=""></image>
		</navigator>


	</view>
</template>

<script>
	import WaterfallFlow from '@/components/nairenk-waterfall-flow/nairenk-waterfall-flow.vue';
	import uniFab from '@/components/uni-fab/uni-fab';
	export default {
		components: {
			WaterfallFlow
		},
		data() {
			return {
				//数据列表
				page: 1,
				start: 0,
				end: 0,
				list: [], // 列表
				loading: true,
				
				videoUrl:this.global.demao.domain.videoUrl
			}
		},
		onReady() {
			this.init()
		},
		
		onLoad() {
			
			// this.getList();
		},
		onReachBottom() {
			// this.page++;
			// this.loading = true;
			// this.getList();
			console.log('上拉加载')
			this.init()
		},
		onPullDownRefresh(){
			console.log('下拉刷新')
			this.global.request.post({
				url: 'releaselist',
				success: res => {	
					let a = []		
					res.info.data.forEach((item, index) => {
						a.push({
							"id": item.mt_release_id,
							"image": this.videoUrl + '' + (item.mt_pic_url ? item.mt_pic_url.split(',')[0] : ''  ),
							"isimage" : item.mt_move_url ? false : true,
							"vadve" :this.videoUrl + '' +(item.mt_move_url ? item.mt_move_url : '' )  ,
							"content": item.mt_title,
							"user": {
								"name": item.wx_name,
								"avatar": item.wx_headimg
							}
						})
					})
					this.page = 1
					this.list = a 
					uni.stopPullDownRefresh()
					
				}
			})
		},
		methods: {
			

			// 请求数据
			init() {
				this.global.request.post({
					url: 'releaselist',
					data:{ page:this.page },
					success: res => {	
						let a = []		
						res.info.data.forEach((item, index) => {
							a.push({
								"id": item.mt_release_id,
								"image": this.videoUrl + '' + (item.mt_pic_url ? item.mt_pic_url.split(',')[0] : ''  ),
								"isimage" : item.mt_move_url ? false : true,
								"vadve" :this.videoUrl + '' +(item.mt_move_url ? item.mt_move_url : '' )  ,
								"content": item.mt_title,
								"user": {
									"name": item.wx_name,
									"avatar": item.wx_headimg
								}
							})
						})
						this.list = this.list.concat(a) 
						this.page ++ 
					}
				})
			},
			// 选中
			choose(item) {
				// item 返回选中 JSON 对象
				console.log(item)
				this.global.utils.jump( 1 , "/pages/street/street_detail")
			},
			// 模拟加载数据
			
		}
	}
</script>

<style lang="scss">
	.qqq{
		padding-top: 10rpx;
		background: #ccc; 
	}
	.publish {
		width: 92rpx;
		height: 92rpx;
		position: fixed;
		right: 25rpx;
		top: 60%;
		border-radius: 50%;

		image {
			width: 92rpx;
			height: 92rpx;
		}
	}
</style>
