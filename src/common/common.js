// import Vue from 'vue';
// import router from "@vue/cli-service/generator/router/template/src/router";

const ip = 'localhost'
const port = '8081'
export const axiosUrl = `http://${ip}:${port}/`

// 使用 Event Bus
const Common = {
    axiosUrl
}
Common.debugMode = true
// let routerDic=function () {
//     let exchange ="/exchange"
// }
const routerDic = {
  exchange: '/exchange',
  city: '/city'
}

const code = {
  success: 200,
  // codeSuccess = 200;
  error: 400
}

Common.code = code
Common.routerDic = routerDic
export default Common
// refactoring  preview
// 没有 do refactor

