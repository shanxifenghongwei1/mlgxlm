<script>
	import demo from "@/common/js/demao.js"
	export default {
		onLaunch: function(e) {
			if(e.query.p_id){
				uni.setStorageSync("p_id",e.query.p_id)
			}
			
		},
		onShow: function() {
			this.getLocationInfo()
			uni.checkSession({
				success: (res) => {
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
					this.global.status.state.login = 0;
					uni.clearStorageSync()
				}
			})
		},
		onHide: function() {

		},

		methods: {
			getLocationInfo() { //2. 获取地理位置
			
				let that = this;
				uni.getLocation({
					type: 'wgs84',
					success(res) {
						let latitude, longitude;
						latitude = res.latitude.toString();
						longitude = res.longitude.toString();
						that.global.lat= res.latitude.toString();
						that.global.lng= res.longitude.toString();
						that.getCity(latitude,longitude)
					},
					fail(res){
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
