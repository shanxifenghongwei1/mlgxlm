import demao from './demao.js'
import post from './request.js'
import utils from './utils.js'
const promiseClick = (data,method) => {
	let p = new Promise(function(resolve, reject) {
		post.post({
			url: method,
			method: "GET",
			data: data,
			isLoading: true,
			success: (res) => {
				// console.log("这是下订单")
				// console.log(res)
				// console.log(res.order_id)
				resolve(res);
			}
		})
		// //做一些异步操作
		// setTimeout(function() {
		// 	console.log('执行完成Promise');
		// 	resolve('要返回的数据可以任何数据例如接口返回数据');
		// }, 2000);
	});
	return p
}
module.exports = {
	make_order : promiseClick
}

