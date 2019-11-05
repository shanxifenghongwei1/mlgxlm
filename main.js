import Vue from 'vue'
import App from './App'


import request from "./common/js/request"
import utils from "./common/js/utils"
import status from "./common/js/status"
import card_info from "./common/js/card_info.js"

import "./common/css/font.css"
Vue.config.productionTip = false


Vue.prototype.global = {
	request: request,
	utils: utils,
	status: status,
	card_info: card_info,
}

App.mpType = 'app'
const app = new Vue({
	...App
})
console.log(app)
app.$mount()
