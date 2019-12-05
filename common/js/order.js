import demao from './demao.js'
import post from './request.js'
import utils from './utils.js'
const promiseClick = (data, com) => {

	let p = new Promise(function(resolve, reject) {

		data.goods_id = com.goods_id
		data.shop_id = com.shop_id
		data.buy_num = com.num
		data.method_type = com.method_type
		data.is_cart = com.is_cart //0 没通过购物车  1 购物车购买


		post.post({
			url: "order_insert",
			method: "GET",
			data: data,
			isLoading: true,
			success: (res) => {
				// console.log("这是下订单")
				let a = '这是空'
				//接收 普通订单为1  拼团订单为2  优惠卷订单为3   限时抢订单为4
				if (com.method_type == 1) {
					 a = '普通订单为'
				}
				if (com.method_type == 2) {
					 a = '拼团订单为'
				}
				if (com.method_type == 3) {
					 a = '优惠卷订单为'
				}
				if (com.method_type == 4) {
					 a = '限时抢订单为'
				}
				
				console.log({
					mes: '这是' + a + '支付了',
					mu: res
				})
				utils.showToast_my( '' + res.msg )
				utils.jump(1, "/pages/pay/pay?order_id=" + res.order_id) 
				
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
	make_order: promiseClick
}
