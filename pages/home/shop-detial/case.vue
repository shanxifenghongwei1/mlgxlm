<template>
	<view class="case-succ">
		<caseSucc :caseList="caseList"></caseSucc>
	</view>
</template>

<script>
		import caseSucc from "@/components/mine/case-success.vue";
		export default{
			components:{
				caseSucc
			},
			data(){
				return{
					options:{},
					picUrl:"",
					caseList:[]
				}
			},
			created(){
				
			},
			onLoad(e){
				this.options=e;
				if(e.shop_id){
					let that=this;
					let data = {};
					data.shop_id = this.options.shop_id;
					this.global.request.post({
						url: this.global.demao.api.caselist,
						method: "GET",
						data: data,
						success(res){
							that.caseList=res.caseInfo;
						}
					})
				}
			}
		}
</script>

<style>
	.case-succ{
		width: 100%;
		padding: 20rpx 3% 20rpx;
		box-sizing: border-box;
		box-shadow: $any-zol 0px 0px 10rpx;
	}
</style>
