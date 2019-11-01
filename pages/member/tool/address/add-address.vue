<template>
	<view class="page">
		<view class="user">
			<view class="left">
				姓名
			</view>
			<view class="con">
				:
			</view>
			<view class="right">
				<input type="text" value="" placeholder="请填写您的姓名" v-model="store.name"/>
			</view>
		</view>
		<view class="user">
			<view class="left">
				联系电话
			</view>
			<view class="con">
				:
			</view>
			<view class="right">
				<input type="text" value="" placeholder="请填写您的联系方式" v-model="store.phone"/>
			</view>
		</view>
		<view class="user">
			<view class="left">
				所在地区
			</view>
			<view class="con">
				:
			</view>
			<view class="right">
				<picker mode="region" :range="years" @change="yearChange" style="width: 90%">
					<view>{{addresstext}} </view>
				</picker>
				<image src="/static/image/other/icon-left.png" mode=""></image>
			</view>
		</view>
		<view class="detail">
			<view class="left">
				详细地址
			</view>
			<view class="con">
				:
			</view>
			<textarea value="" placeholder="请填写详细地址" v-model="store.detaol"/>
		</view>
		
		<view class="detail active">
			<view class="left">
				设为默认
			</view>
			<view class="con">
				:
			</view>
			<view class="right">
				
			</view>
			<image v-show="store.select" src="/static/image/other/icon-select-cir-on.png" mode=""></image>
			<image v-show="!store.select" src="/static/image/other/icon-select-cir-out.png" mode=""></image>
		</view>
		
		<button type="warn">选择</button>
	</view>
</template>

<script>
	
	export default {
		data() {
		        return {
					address_id:0,
					
					store:{},
					
					addresstext: '请选择地区',
					
					select:false,
					
					isEmpty:true
		        }
		    },
		methods: {
			
			
			//选择城市
			yearChange : function(e){
			    this.addresstext = e.detail.value;
				this.store.shop_area=e.detail.value.toString();
			},
			
			checkboxChange:function(e){
				this.checked=!this.checked;
			},
			showToast_my:function(e){
				uni.showToast({
				    title: e,
				    duration: 2000,
				    icon:"none"
				});
				return false;
			},
			check:function(){
				var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
				switch(true) {
				    case !this.store.shop_name:
				        this.showToast_my("商家名字不能为空");
				        break;
				    case !this.store.shop_type:
				        this.showToast_my("请选择经营类别")
				        break;
					case !this.store.shop_contacts:
					   this.showToast_my("您的称呼不能为空")
					   break;
					case !myreg.test(this.store.shop_phone):
					    this.showToast_my("请输入正确的手机号")
					    break;
					case !this.store.shop_area:
					    this.showToast_my("请选择地区")
					    break;
					case !this.store.shop_address_detail:
					    this.showToast_my("请填写详细信息");
					    break;
				     default:
				        return true;
				} 
			},
			
			//提交数据
			save:function(){
				if(this.check()){
					if(this.checked){
						console.log(111)
						this.global.request.post({
							url:"shop_settled",
							method:"GET",
							data:this.store,
							success:(res)=>{
								console.log("这是返回数据"+res)
								console.log(res.msg)
								this.showToast_my(res.msg);
								setTimeout(()=>{
									uni.switchTab({
										url:"/pages/member/member"
									})
								},2000)
							}
						})
					}else{
						console.log(222)
						this.showToast_my("请勾选商家入驻协议");
					}
				}
			}		
		},
		onLoad(e){
			console.log(e)
			
			// this.global.utils.sethead("商家入驻")
			// this.global.request.post({
			// 	url:"shop_type",
			// 	method:"GET",
			// 	data:{},
			// 	success:(res)=>{
			// 		console.log(res)
			// 		this.array=res.shop_type;
			// 	}
			// })
		}
	}
</script>

<style lang="scss">
	.page{
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
	}
	.user{
		width: 100%;
		height: 80rpx;

		@extend .any-flex;
		align-items: center;
		font-size: $uni-font-size-base;
		border-bottom: 1rpx solid #cccccc;
	}
	.left{
		width: 130rpx;
		height: 100%;
		line-height: 85rpx;
	}
	.con{
		width: 30rpx;
		text-align: center;
	}
	.right{
		flex-grow: 1;
		height: 100%;
		@extend .any-flex;
		justify-content: space-between;
		align-items: center;
		input{
			width: 100%;
	
			background: #ffffff;
			border: none;
		}
		image{
			width: 14rpx;
			height: 25rpx;
			padding-right: 10rpx;
		}
	}
	.detail{
		@extend .any-flex;
		align-items: flex-start;
		width: 100%;
		font-size: $uni-font-size-base;
		.left{
			height:80rpx;
		}
		.con{
			width: 30rpx;
			text-align: center;
			line-height: 80rpx;
		}
		textarea{
			flex-grow: 1;
			padding: 20rpx 0;
			box-sizing: border-box;
			margin-top: 10rpx;
			line-height: 100%;
			height: 130rpx;
		}
	}
	.detail.active{
		margin-top: 20rpx;
		align-items: center;
		image{
			width: 35rpx;
			height: 35rpx;
			padding-right: 20rpx;
		}
	}
	button{
		margin-top: 20rpx;
	}
	
	
	
	.left {
	    text-align:justify;
	    text-justify:distribute-all-lines;/*ie6-8*/
	    text-align-last:justify;/* ie9*/
	    -moz-text-align-last:justify;/*ff*/
	    -webkit-text-align-last:justify;/*chrome 20+*/
	}
	@media screen and (-webkit-min-device-pixel-ratio:0){/* chrome*/
	    .left:after{
	        content:".";
	        display: inline-block;
	        width:100%;
	        overflow:hidden;
	        height:0;
	    }
	}
</style>
