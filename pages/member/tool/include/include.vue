<!-- 商家入驻页面 -->
<template>
	<view class="page">
		<block v-if="isEmpty">
			<view class="include-top">
				<view class="list">
					<view class="title">
						商户名称
					</view>
					<view class="must">
						*
					</view>
					<input type="text" value="" placeholder="商户名称" v-model="store.shop_name" />
				</view>
				<view class="list">
					<view class="title">
						主营项目
					</view>
					<view class="must">
						*
					</view>
					<view class="select-con">
						<picker mode="selector" @change="bindPickerChange" :value="index" :range="array" range-key="t_name">
							<view class="uni-input">{{catetext}}</view>
						</picker>
					</view>
				</view>
				<view class="list">
					<view class="title">
						简单介绍
					</view>
					<view class="must">

					</view>
					<textarea value="" placeholder="简单介绍下商户" v-model="store.shop_desc" />
					</view>
			</view>
			
			
			
			
			<view class="include-bottom">
				<view class="list">
					<view class="title">
						联系人
					</view>
					<view class="must">
						*
					</view>
					<input type="text" value="" placeholder="您的称呼" v-model="store.shop_contacts" />
				</view>
				<view class="list">
					<view class="title">
						手机号
					</view>
					<view class="must">
						*
					</view>
					<input type="text" value="" placeholder="您的手机号" v-model="store.shop_phone"/>
				</view>
				<view class="list">
					<view class="title">
						所在区域
					</view>
					<view class="must">
						*
					</view>
					<view class="select-con">
						<picker mode="region" :range="years" @change="yearChange">
						    <view>{{addresstext}} </view>
						</picker>
					</view>
				</view>
				<view class="list">
					<view class="title">
						详细地址
					</view>
					<view class="must">
						*
					</view>
					<input type="text" value="" placeholder="门店的详细地址" v-model="store.shop_address_detail"/>
				</view>
				<view class="list">
					<view class="list-tip">
						用于登录多商户后台，请认真填写
					</view>
				</view>
			</view>
			
			<view class="treaty-tip">
				<checkbox-group @change="checkboxChange">
					<checkbox :checked="checked" />
				</checkbox-group>
				<view class="treaty-see">
					我已阅读并了解了
				</view>
				<view class="treaty-title">
					【入驻申请协议】
				</view>
			</view>
			
			<view class="tj">
				<button type="warn" @click="save">申请入驻</button>
			</view>
			<picker mode="multiSelector" @change="bindPickerChange1" :value="index,index1" :range="testArr" range-key="name" @columnchange="columnchange">
				<view class="uni-input">{{catetext}}</view>
			</picker>
		</block>
		<block v-else>
			<view class="empty">
				<image class="empty-pic" src="/static/image/other/empty.png" mode=""></image>
				<view class="success">
					入驻信息及资料提交成功
				</view>
				<view class="wait">
					请耐心等待平台审核
				</view>
			</view>
		</block>
	</view>
</template>


<script>

	
	export default {
		data() {
		        return {
					store:{},
					
		            array: ['中国', '美国', '巴西', '日本'],
		            index: 0,
					catetext:"经营类别",
					
					addresstext: '请选择地区',
					
					checked:false,
					
					isEmpty:true,
					
					testArr:[
						
						[{name:"美容美发"},{name:"身体护理"},{name:"问题皮肤"},{name:"瑜伽健身"}],
						[{name:"分类1"},{name:"分类2"},{name:"分类3"},{name:"分类4"}]
					]
					
		        }
		    },
		methods: {
			
			//选择类别
		    bindPickerChange: function(e) {
		        console.log('picker发送选择改变，携带值为', e.target.value)
		        this.index = e.target.value;
				this.catetext=this.array[this.index].t_name;
				this.store.shop_type=this.array[this.index].t_id;
		    },
			
			//选择城市
			yearChange : function(e){
			    this.addresstext = e.detail.value;
				this.store.shop_area=e.detail.value.toString();
			},
			
			checkboxChange:function(e){
				this.checked=!this.checked;
			},
			showToast_my:function(e,f){
				uni.showToast({
				    title: e,
				    duration: 3000,
				    icon: f?"success":"none"
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
								this.showToast_my(res.msg,true);
								setTimeout(()=>{
									uni.switchTab({
										url:"/pages/member/member"
									})
								},3000)
							}
						})
					}else{
						console.log(222)
						this.showToast_my("请勾选商家入驻协议");
					}
				}
			},
			
			// 测试
			columnchange(e){
				console.log(e)
			},
			bindPickerChange1(e){
				console.log("value的值改变了")
			}
		},
		onLoad(){
			this.global.utils.sethead("商家入驻")
			this.global.request.post({
				url:"shop_type",
				method:"GET",
				data:{},
				success:(res)=>{
					console.log(res)
					this.array=res.shop_type;
				}
			})
		}
	}
</script>

<style lang="scss">
	.page{
		width: 100%;
		min-height: 100vh;
		background: $uni-border-color;
		background: $any-zol;
	}
	.include-top{
		width: 100%;
	}
	.list{
		padding: 0 3%;
		box-sizing: border-box;
		@extend .any-flex;
		justify-content: space-between;
		align-items: flex-start;
		background: #ffffff;
		border-bottom: 1rpx solid $uni-border-color;
		.title{
			width: 124rpx;
			line-height: 80rpx;
			padding-right:20rpx;
			font-size: $uni-font-size-base;
		}
		.must{
			width: 20rpx;
			height: 80rpx;
			line-height: 90rpx;
			font-size: $uni-font-size-base;
			color: $any-col;
		}
		input{
			flex-grow: 1;
			height: 80rpx;
			font-size: $uni-font-size-base;
		}
		.select-con{
			flex-grow: 1;
			height: 80rpx;
			line-height: 80rpx;
			color: #575757;
			font-size: $uni-font-size-base;
		}
		textarea{
			flex-grow: 1;
			min-height: 150rpx;
			height: auto;
			padding: 24rpx 10rpx;
			box-sizing: border-box;
			font-size: $uni-font-size-base;
		}
	}
	.list-tip{
		font-size: $uni-font-size-sm;
		color: $uni-border-color;
		padding: 8rpx 0;
	}
	.include-bottom{
		width: 100%;
		height: 400rpx;
		margin-top: 20rpx;
	}
	.treaty-tip{
		width: 100%;
		height: 80rpx;
		padding: 0 20rpx;
		background: #ffffff;
		box-sizing: border-box;
		@extend .any-flex;
		align-items: cneter;
		font-size: $uni-font-size-base;
	}
	.treaty-title{
		color: $any-col;
	}
	.tj{
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		bottom: 10%;
	}

	.empty{
		width: 100vw;
		height: 100vh;
		@extend .any-flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: $uni-border-color;
		padding-bottom: 30vh;
		box-sizing: border-box;
		background: #ffffff;
		.empty-pic{
			width: 400rpx;
			height: 275rpx;
		}
		.success{
			font-size: $uni-font-size-base;
			letter-spacing: 8rpx;
			padding-top: 15rpx;
		}
		.wait{
			font-size: $uni-font-size-lg;
			letter-spacing: 13rpx;
			padding-top: 15rpx;
		}
	}
</style>
