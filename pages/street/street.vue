<template>
	<view class="qqq">
		<view class="app" >
			<waterfall-flow :key="key" :list="list" :loading="loading" @click="choose"></waterfall-flow>
		</view>
		<!-- 小飞机 -->
		<navigator hover-class="none" url="/pages/street/publish" class="publish">
			<image src="/static/image/other/publish.png" mode="widthFix"></image>
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
				 key: 0,
				
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
		

		onReachBottom() {
			// this.page++;
			// this.loading = true;
			// this.getList();
			console.log('上拉加载')
			this.init()
		},
		onPullDownRefresh(){
			console.log('下拉刷新,你刷新个鸡er')
			this.list = [] 
			 this.key += 1 
			this.global.request.post({
				url: 'releaselist',
				success: res => {	
					if(res.info.data.length){
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
					
					this.list =a.reverse();

						
					}else{
						this.global.utils.showToast_my('没有更多新资讯啦 ~')
						
					}
					uni.stopPullDownRefresh()
				}
					
			})
			
			
			// setTimeout(()=>{
			// 	console.log('dasda')
			// 	this.global.utils.jump( 4 ,'/pages/street/street')
			// },1000)
		},
		onLoad() {
			
			// this.getList();
		},
		methods: {


			// 请求数据
			init() {
				this.global.request.post({
					url: 'releaselist',
					data:{ page:this.page },
					success: res => {	
						if(res.info.data.length){
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
						}else{
							this.global.utils.showToast_my('没有更多新资讯啦 ~')
						}	
					}
				})
			},
			// 选中
			choose(item) {
				// item 返回选中 JSON 对象
				console.log(item)
				this.global.utils.jump(  1 , "/pages/street/street_detail?id=" + item.currentTarget.dataset.id  )
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
