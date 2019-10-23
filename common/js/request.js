import demao from './demao.js'
/**
 * 封装ajax的post请求
 * ajaxJson.path 请求地址
 * ajaxJson.data 请求json对象
 * ajaxJson.method 请求方式  默认post
 * ajaxJson.isLoading  true 显示loading
 * ajaxJson.success   请求成功执行方法  可不填,不填全局提示弹窗
 * ajaxJson.complete  始终会执行的方法   可不填
 * ajaxJson.globalJudge 返回状态判断  true：请求处判断逻辑
 */

let a = data=>{
	
	data:{
		
	}
	
}
let requestPost = ajaxJson => {
	
	if (ajaxJson.isLoading) { //为ture 显示loading
			if(ajaxJson.load == undefined ){
				uni.showLoading({
					title: '处理中',
				})
			}else{
				uni.showLoading({
					title: ''+ ajaxJson.load ,
				})
			}

	}
	if (ajaxJson.data == undefined) {
		ajaxJson.data = {};
	}
	
	uni.request({
		url: demao.domain.request + ajaxJson.url,
		data: ajaxJson.data,
		method: "POST",
		dataType: "json",
		header: {
			"Content-Type": 'application/x-www-form-urlencoded', // 默认值
			'X-TOKEN-PETMALL': '' ,
			// + uni.getStorageSync("token")
		},
		success: (result) => {
			// if (ajaxJson.globalJudge == true) { //在请求调用处，处理所有逻辑
			// 	ajaxJson.success(result.data);
			// }
			

			if (result.data.code == 1) { //请求成功
				if (typeof ajaxJson.success === "function") {
					ajaxJson.success(result.data.data);
				} else {
					uni.showToast({
						"title": result.data.msg,
						"icon": "success",
					});
				}
			}else { //未知错误
				uni.showToast({
					"title": result.data.msg,
					"icon": "none",
				});
			}
		},
		complete: (res) => {
		
			if (ajaxJson.isLoading == true){
					uni.hideLoading();
			}
			
			if (typeof ajaxJson.complete === "function") {
				ajaxJson.complete(res);
			}
		}
	})
};
module.exports = {
	post: requestPost
};
