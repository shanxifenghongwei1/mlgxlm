<script>
	import demo from "@/common/js/demao.js"
	export default {
		onLaunch: function(e) {
			console.log("全局数据")
			if(e.query.p_id){
				uni.setStorageSync("p_id",e.query.p_id)
			}
			uni.checkSession({
				success: (res) => {
					console.log("成功")
					console.log(res)
					//1:登录  0：未登录
					if (res.errMsg !== "checkSession:ok") {
						this.global.status.state.login = 0;
						uni.clearStorageSync()
					} else {
						// this.global.status.state.login = 1;
						if(uni.getStorageSync("session")){
							this.global.status.state.login = 1;
						}else{
							this.global.status.state.login = 0;
							uni.clearStorageSync()
						}
					}
				},
				fail: (res) => {
					console.log("失败")
					console.log(res)
					this.global.status.state.login = 0;
					uni.clearStorageSync()
				}
			})
		},
		onShow: function() {
			this.getLocationInfo()
		},
		onHide: function() {
			console.log('App Hide')
		},

		methods: {
			getLocationInfo() { //2. 获取地理位置
			
				let that = this;
				uni.getLocation({
					type: 'wgs84',
					success(res) {
						console.log("获取成功")
						console.log(res)
						let latitude, longitude;
						latitude = res.latitude.toString();
						longitude = res.longitude.toString();
						that.global.lat= res.latitude.toString();
						that.global.lng= res.longitude.toString();
						that.getCity(latitude,longitude)
					},
					fail(res){
						console.log("获取失败")
					}
				});
			},
			getCity(lat, lon) {
				let that=this;
				uni.request({
					header: {
						"Content-Type": "application/text"
					},
					url: "https://api.map.baidu.com/reverse_geocoding/v3?coordtype=gcj02ll&ret_coordtype=gcj02ll&radius=1000&ak=AXHWyGXEyPgmFWvXIW3bQIrA9v7f991M&sn=&output=json&callback=function%20()%20%7B%7D&extensions_poi=1&extensions_road=false&extensions_town=false&language=zh-CN&language_auto=0&location=" +
						lat + "%2C" + lon,
					success(re) {
						if (re.statusCode === 200) {
							console.log(re.data.result.addressComponent.city)
							that.global.city = re.data.result.addressComponent.city;
						} else {
							that.global.utils.showToast_my("获取信息失败，请稍后重试！")
						}
					}
				});
			}

		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
