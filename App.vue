<script>
	import demo from "@/common/js/demao.js"
	export default {
		onLaunch: function() {
			console.log('App Launch');
			uni.checkSession({
				success:(res)=>{
					//1:登录  0：未登录
					if(res.errMsg!=="checkSession:ok"){
						this.global.status.state.login=0;
					}else{
						this.global.status.state.login=1;
					}
					console.log(this.global.status.state.login)
				},
				fail:(res)=>{
					if(res.errMsg!=="checkSession:ok"){
						this.global.status.state.login=0;
					}else{
						this.global.status.state.login=1;
					}
					console.log(this.global.status.state.login)
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	
	/*每个页面公共css */
</style>
