import Vue from 'vue'
import App from './App'

import request from "./common/js/request"
import utils from "./common/js/utils"

import "./common/css/font.css"
Vue.config.productionTip = false


Vue.prototype.global = {
	request: request,
	utils:utils
}

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
