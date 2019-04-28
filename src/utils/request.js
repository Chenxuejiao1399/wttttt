import axios from 'axios'
import Vue from 'vue'

// 创建axios实例
const service = axios.create({
    // baseURL: 'http://farmerapi.companycheck.cn/api', // 线上
    baseURL: 'http://192.168.1.29/api', // 线下测试
    timeout: 15000 // 请求超时时间
})

function ShowResponseInfo(code, info) {
    let str = String(code) + ': ' + info
    console.log(str)
}

// request拦截器 - 测试用

// response拦截器 - 测试用


export default service