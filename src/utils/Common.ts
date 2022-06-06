// import Vue from 'vue';
// import router from "@vue/cli-service/generator/router/template/src/router";

const ip = 'localhost'
const port = '8889'

const secKillIp = 'localhost'
const secKillPort = '82'
// const port = '8081'
// const port = '82'

export const axiosUrl = `http://${ip}:${port}/`
export const secKillUrl = `http://${secKillIp}:${secKillPort}`

const code = {
    // success: 200,
    // // codeSuccess = 200;
    // error: 400

    success: '1000',
    error: 400
}

const routerDic = {
    exchange: '/exchange',
    city: '/city'
}

const configWww = {
    headers: {
     // "token": Vue.$cookies.get("token"),
     //   'token': vue.$cookies.get('token'),
     'Content-Type': "application/x-www-form-urlencoded"
     // 'Content-Type': 'application/json;charset=utf-8' // 头部信息
    }
   }

   const configJson = {
    headers: {
     // "token": Vue.$cookies.get("token"),
     //   'token': vue.$cookies.get('token'),
    //  'Content-Type': "application/x-www-form-urlencoded"
     'Content-Type': 'application/json;charset=utf-8' // 头部信息
    }
   }



// 使用 Event Bus
const Common = {
    axiosUrl,
    debugMode: true,
    code: code,
    routerDic:routerDic,
    secKillUrl,
    configJson,
    configWww
}
// Common.debugMode = true
// let routerDic=function () {
//     let exchange ="/exchange"
// }


// Common.code = code
// Common.routerDic = routerDic
export default Common
// refactoring  preview
// 没有 do refactor

