<template>
	<view>
		<view style="background:#f6f6f6; height: 100vh; ">
			<view class="backgroun">

				<view class="contentss">
					<view class="text1">欢迎来到美丽共享联盟</view>

					<view class="text2">为您提供优质服务</view>

					<view class="text3">美丽共享联盟需要获得以下信息</view>

					<view class="text4">您的公开信息 ( 昵称、头像等 )</view>

					<button open-type="getUserInfo" class="user" @getuserinfo="userinfor()">微信授权登录</button>

					<view class="text5">返回首页</view>

				</view>


			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				obs:'',
				p_id:""
			}
		},
		onLoad(){
			console.log("登录页")
			console.log(uni.getStorageSync("p_id"))
			this.p_id=uni.getStorageSync("p_id")
			this.global.utils.sethead("登录")
		},
		methods: {
			userinfor(){
				let that = this;
				uni.login({
				  provider: 'weixin',
				  success: function (loginRes) {
					console.log(loginRes.code)
					uni.getUserInfo({
						provider:'weixin',
						success:(userinfor)=>{
							console.log(userinfor)
							let data={};
							data.userinfo=userinfor;
							data.code=loginRes.code;
							if(that.p_id){
								data.openid_d=that.p_id;
							}
							console.log("这是请求数据")
							console.log(data)
							that.global.request.post({
								url: 'weChat',
								method:"GET",
								data: data,
								isLoading: true,
								success: (res) => {
									console.log("-----------登录打印")
									console.log(res)
									that.global.status.state.login=1;
									uni.setStorageSync("session",res);
									uni.navigateBack({
										delta:1
									})
								}
							})	
						}
					})
				  }
				});
			}
			
			
			
		
		}
	}
</script>

<style lang="scss">
	.backgroun {
		width: 100%;
		height: 250px;
		background: url(../../static/image/login/login.png) no-repeat center center;
		background-size: cover;
		position: relative;

		.contentss {
			position: fixed;
			width: 94%;
			height: 430px;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			border-radius: 20px;
			margin: 120px auto 0;
			background: #fff;
			text-align: center;

			// border: 0.5px solid #999;
			.user {
				margin-top: 20px;
				width: 80%;
				height: 35px;
				border-radius: 18px;
				background-image: linear-gradient(to right, $any-col, #f6b8b8);
				font-size: 15px;
				font-weight: 600;
				line-height: 35px;
				color: #FFFFFF;
			}

			.text1 {
				font-size: 23px;
				font-weight: 600;
				color: $any-col;
				margin-top: 95px;
			}

			.text2 {
				font-size: $uni-font-size-base;
				color: $any-col;
				margin-top: 35px;
			}

			.text3 {
				font-size: $uni-font-size-base;
				color: $any-col;
				margin-top: 15px;
			}

			.text4 {
				font-size: $uni-font-size-sm;
				color: #666;
				margin-top: 13px;
			}

			.text5 {
				font-size: $uni-font-size-base;

				margin-top: 30px;
			}
		}

		.posit {
			position: absolute;
			top: 30%;
			left: 40%;
			width: 90px;
			height: 88px;
			border-radius: 13px;
			background-image: linear-gradient(#f6b8b8, #e82e2e);

			.imgs {
				margin: 3px auto;
				width: 70px;
				height: 75px;
				background: url(../../static/image/login/logo.png) no-repeat center center;
				background-size: cover;
			}
		}


	}
</style>
