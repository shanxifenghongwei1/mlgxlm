<template>
	<!-- 这个是分销订单详情 -->
	<view class="">
		<view class="">
			<cateflex :cateList="cateList" :cateid="cateid" @seleId="seleId()"></cateflex>
		</view>
		<view class="info">
			<block>
				<view class="li"  v-if="cateid==1 || cateid==2">
					<view class="title base">
						店铺名称
					</view>
					<input type="text" class="input base" v-model="shop_name" placeholder="请填写店铺名称" />
				</view>
				<view class="li" v-if="cateid==3">
					<view class="title base">
						所属行业
					</view>
					<input type="text" class="input base" v-model="hangye" placeholder="请填写所属行业名称" />
				</view>
				<view class="li"  v-if="cateid==1 || cateid==2 || cateid==3 ">
					<view class="title base">
						联系人
					</view>
					<input type="number" class="input base" v-model="name_peoper" placeholder="请填写联系人" />
				</view>
				<view class="li"  v-if="cateid==1 || cateid==2 || cateid==3">
					<view class="title base">
						联系电话
					</view>
					<input type="text" class="input base" v-model="phone" placeholder="请填写联系电话" />
				</view>
				<view class="li"  v-if="cateid==1 || cateid==2">
					<view class="title base">
						店铺地址
					</view>
					<input type="text" class="input base" v-model="address" placeholder="请填写您店铺具体位置" />
				</view>
				
				<view class="li" v-if="cateid==3">
					<view class="title base">
						备注
					</view>
					<input type="text" class="input base" v-model="somemessage" placeholder="请填写您申请的具体事宜" />
				</view>
			</block>
		</view>
		<view class="save" @click="save()">
			<button type="warn">提交信息</button>
		</view>
	</view>
</template>

<script>
	import cateflex from "@/components/mine/cate-flex.vue";
	export default {
		components: {
			cateflex
		},
		data() {
			return {
				cateList: [{
						id: 1,
						name: "分销代理"
					},
					{
						id: 2,
						name: "分销商"
					}, {
						id: 3,
						name: "异业联盟"
					}
				],
				cateid: 1,
				shop_name:'',
				hangye:'',
				name_peoper:'',
				phone:'',
				address:'',
				somemessage:''
			}
		},
		methods: {
			
			// 改变的值
			seleId(e) {
				this.cateid = e;
				shop_name='',
				hangye='',
				name_peoper='',
				phone='',
				address='',
				somemessage=''
			},
			// 提交
			save(){
				// 手机正则
				var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
				
				if(this.cateid == 1 || this.cateid == 2){
					
					if(this.shop_name==''){
						return this.global.utils.showToast_my('请填写店铺名称')
					}
					if(this.name_peoper==''){
						return this.global.utils.showToast_my('请填写联系人')
					}
					if(this.phone==''){
						return this.global.utils.showToast_my('请填写联系电话')
					}
					if (!myreg.test(this.phone)) {
						return this.global.utils.showToast_my('请填写正确的联系电话')
					}
					if(this.address==''){
						return this.global.utils.showToast_my('请填写您店铺具体位置')
					}
					this.init()
					// 请填写店铺负责人
				}else if(this.cateid == 3){
					if(this.hangye==''){
						return this.global.utils.showToast_my('请填写所属行业名称')
					}
					if(this.name_peoper==''){
						return this.global.utils.showToast_my('请填写联系人')
					}
					if(this.phone==''){
						return this.global.utils.showToast_my('请填写联系电话')
					}
					if (!myreg.test(this.phone)) {
						return this.global.utils.showToast_my('请填写正确的联系电话')
					}
					this.init()
				}
			},
			// 添加的请求
			init(){
				this.global.request.post({
					url:'index_reseller_Apply',
					data:{
						is_distribution:this.cateid,
						shop_name:this.shop_name,
						contacts:this.name_peoper,
						contacts_tel:this.phone,
						shop_address:this.address,
						industry:this.hangye,
						remarks:this.somemessage
					},
					success:()=>{
						 this.global.utils.showToast_my('申请成功请耐心等待平台审核哦 ~')
						 setTimeout(()=>{
							  this.global.utils.jump(5,'')
						 },2000)
					}
				})
			},
		},

		onLoad(e) {
			// 从历史里面传过来的值
			this.cateid = e.opec
		}
	}
</script>

<style lang="scss">
	.red {
		color: $any-col;
	}

	.big {
		font-size: 45rpx;
	}

	.lg {
		font-size: $uni-font-size-lg;
	}

	.base {
		font-size: $uni-font-size-base;
	}

	.sm {
		font-size: $uni-font-size-sm;
	}

	.ccc {
		color: #777777;
	}

	.mul {
		@include multi-row-apostrophe(1);
	}

	.tag {
		padding: 5rpx 20rpx;
		border-radius: 50rpx;
		background: $any-col;
		;
	}

	.mar {
		margin-right: 10rpx;
	}

	.wei {
		font-weight: bold;
	}

	.emit {
		width: 100%;
		height: 120rpx;
	}

	.info {
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
		margin-top: 20rpx;

		.li {
			width: 100%;
			height: 120rpx;
			padding: 0 10rpx;
			box-sizing: border-box;
			border-bottom: 1rpx solid #BEBEBE;
			@extend .any-flex;
			justify-content: center;
			flex-direction: column;
			align-items: flex-start;
		}

		input {
			width: 100%;
			height: 40rpx;
			margin-top: 10rpx;
		}
	}
	.save {
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
		margin-top: 40rpx;
	}
</style>
