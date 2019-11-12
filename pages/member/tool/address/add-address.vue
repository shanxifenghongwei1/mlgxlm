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
				<input type="text" value="" placeholder="请填写您的姓名" v-model="store.name" />
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
				<input type="text" value="" placeholder="请填写您的联系方式" v-model="store.tel" />
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
			<textarea value="" placeholder="请填写详细地址" v-model="store.address_detail" />
			</view>
		
		<view class="detail active" @click="checkboxChange">
			<view class="left">
				设为默认
			</view>
			<view class="con">
				:
			</view>
			<view class="right">
			
			</view>
			<image v-show="store.is_default==1" src="/static/image/other/icon-select-cir-on.png" mode=""></image>
			<image v-show="store.is_default==2" src="/static/image/other/icon-select-cir-out.png" mode=""></image>
		</view>
		
		<button type="warn" @click="save()">选择</button>
	</view>
</template>

<script>
	
	export default {
		data() {
		        return {
					address_id:0,
					
					store:{
						is_default:1
					},
					
					addresstext: '请选择地区',
					
					// select:false,
		        }
		    },
		methods: {
			
			
			//选择城市
			yearChange : function(e){
			    this.addresstext = e.detail.value;
				this.store.address_area=e.detail.value.toString();
			},
			
			//是否选择默认
			checkboxChange:function(e){
				this.store.is_default==1?this.store.is_default=2:this.store.is_default=1
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
				    case !this.store.name:
				        this.showToast_my("用户名不能为空");
				        break;
					case !myreg.test(this.store.tel):
					    this.showToast_my("请输入正确的手机号")
					    break;
					case !this.store.address_area:
					    this.showToast_my("请选择地区")
					    break;
					case !this.store.address_detail:
					    this.showToast_my("请填写详细信息");
					    break;
				     default:
				        return true;
				} 
			},
			
			//提交数据
			save:function(){
				if(this.check()){
					console.log(this.store)
					this.global.request.post({
						url:this.store.id?this.global.demao.api.update_address:this.global.demao.api.user_Address,
						method:"GET",
						data:this.store,
						success:(res)=>{
							console.log("这是返回数据"+res)
							console.log(res.msg)
							this.showToast_my(res.msg);
							setTimeout(()=>{
								uni.navigateBack({
									 delta: 1
								})
							},2000)
						}
					})
				}
			}		
		},
		onLoad(e){
			let a=uni.getStorageSync("address_edit")
			if(a){
				this.store.id=a.id;
				this.store.name=a.name;
				this.store.tel=a.tel;
				this.store.address_detail=a.address_detail;
				this.store.address_area=a.address_provice+","+a.address_city+","+a.address_area;
				this.store.is_default=a.is_default;
				
				
				this.addresstext=a.address_provice+","+a.address_city+","+a.address_area
				this.global.utils.sethead("修改地址")
			}else{
				this.global.utils.sethead("添加地址")
			}
		},
		destroyed(){
			uni.removeStorageSync('address_edit');
		}
	}
</script>

<style lang="scss">
	.page{
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
		background: #ffffff;
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
			width: 500rpx;
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
