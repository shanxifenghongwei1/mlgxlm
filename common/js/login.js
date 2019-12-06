import demao from './demao.js'
import post from './request.js'
import utils from './utils.js'
const login = () => {

	let p = new Promise(function(resolve, reject) {
		if(uni.getStorageSync("session")){
			resolve(true);
		}else{
			uni.showModal({
			    title: '提示',
			    content: '此功能需要登录哦，是否立即前去登录',
			    success: function (res) {
			        if (res.confirm) {
						utils.jump(1,"/pages/login/login")
			        } else if (res.cancel) {
			            resolve(false);
			        }
			    }
			});
		}
	});
	return p
}
module.exports = {
	login_state: login
}
