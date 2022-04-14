import axios from 'axios';
import Common from "../common/common";
// import Vue from 'vue';

// const service = axios.create({
//
//     timeout: 5000
// });
//
// service.interceptors.request.use(
//     config => {
//         return config;
//     },
//     error => {
//         console.log(error);
//         return Promise.reject();
//     }
// );
//
// service.interceptors.response.use(
//     response => {
//         if (response.status === 200) {
//             return response.data;
//         } else {
//             Promise.reject();
//         }
//     },
//     error => {
//         console.log(error);
//         return Promise.reject();
//     }
// );

const method = {

  // params:{interfaceState:state} // query参数

  // eslint-disable-next-line no-unused-vars
  postWithParams(url, data, params, vue) {
  // console.log("vue")
  // console.log(vue)
  // console.log("vue.$cookies")
  // console.log(vue.$cookies)
    const jsonDic = {
      headers: {
      // "token": Vue.$cookies.get("token"),
      //   'token': vue.$cookies.get('token'),
        'Content-Type': 'application/json;charset=utf-8' // 头部信息
      }
    }

    // return this.$axios.post(this._api + 'city/list',
    // return Vue.$axios.post(Vue._api + url,
    // $axios.post 传递 param 和 body
    // return vue.$axios.post(vue._api + url,
    //   data, jsonDic,params:params
    // )

    // 参数情况：（interfaceState：query参数，ID：body参数）
    // config: jsonDic
    // return vue.$axios({
    return axios({
      url:Common.axiosUrl+ url,
      method: 'post',
      data: data, // body参数
      params: params, // query参数

    })

  // .then(response => {
  //
  //     console.log("response")
  //     console.log(response)
  //     this.tableDataAll = [];
  //     this.tableDataAll = response.data.data.content;
  //
  // })
  // .catch(function (error) {
  //     console.log("error");
  //     console.log(error);
  // });
  },

  // loadList(tableName,vue,tableData,pageTotal,pageParam) {
  //   // let city = City.createNew()
  //
  //   let data = {}
  //   // method.postWithParams("present/list", data, this.pageParam, this)
  //   method.postWithParams(`${tableName}/list`, data, pageParam, vue)
  //     .then(response => {
  //       console.log("response")
  //       console.log(response)
  //       let content = response.data.content
  //       // tableData=content
  //       tableData.set(content)
  //       // this.tableData = content
  //       // this.formData = content
  //
  //       // this.pageTotal = response.data.sum;
  //       // this.pageTotal = response.data.data.pageable.pageSize;
  //       // this.pageTotal = response.data.pageable.pageSize;
  //       // pageTotal= response.data.pageable.pageSize;
  //       // pageTotal= response.data.pageable.pageSize;
  //       pageTotal.set(response.data.pageable.pageSize)
  //       // console.log(" this.pageTotal")
  //       // console.log(this.pageTotal)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // },

  loadList(tableName,vue,loadData) {
    // let city = City.createNew()

    let data = {}
    // method.postWithParams("present/list", data, this.pageParam, this)
    // method.postWithParams(`${tableName}/list`, data, pageParam, vue)
    method.postWithParams(`${tableName}/list`, data, loadData.pageParam, vue)
      .then(response => {
        console.log("loadData")
        console.log(loadData)
        console.log("response")
        console.log(response)
        let content = response.data.content
        // tableData=content
        // tableData.set(content)
        loadData.tableData=content
        console.log( "loadData.tableData")
        console.log( loadData.tableData)
        // this.tableData = content
        // this.formData = content

        // this.pageTotal = response.data.sum;
        // this.pageTotal = response.data.data.pageable.pageSize;
        // this.pageTotal = response.data.pageable.pageSize;
        // pageTotal= response.data.pageable.pageSize;
        // pageTotal= response.data.pageable.pageSize;
        // loadData. pageTotal.set(response.data.pageable.pageSize)
        loadData. pageTotal=response.data.pageable.pageSize
        // console.log(" this.pageTotal")
        // console.log(this.pageTotal)
      })
      .catch(function (error) {
        console.log(error);
      });
  },


  post(url, data, vue) {
  // console.log("vue")
  // console.log(vue)
  // console.log("vue.$cookies")
  // console.log(vue.$cookies)
    const jsonDic = {
      headers: {
      // "token": Vue.$cookies.get("token"),
      //   'token': vue.$cookies.get('token'),
        'Content-Type': 'application/json;charset=utf-8' // 头部信息
      }
    }

    // return this.$axios.post(this._api + 'city/list',
    // return Vue.$axios.post(Vue._api + url,
    // $axios.post 传递 param 和 body
    // return vue.$axios.post(vue._api + url,
    return axios.post(Common.axiosUrl + url,
      data, jsonDic
    )
  // .then(response => {
  //
  //     console.log("response")
  //     console.log(response)
  //     this.tableDataAll = [];
  //     this.tableDataAll = response.data.data.content;
  //
  // })
  // .catch(function (error) {
  //     console.log("error");
  //     console.log(error);
  // });
  }

}

// function post(url, data) {
//
//     // 这里拿到的 vue 应该不对
//     let jsonDic = {
//         headers: {
//             "token": Vue.$cookies.get("token"),
//             // "token": vue.$cookies.get("token"),
//             "Content-Type": "application/json;charset=utf-8" //头部信息
//         }
//     }
//
//     // return this.$axios.post(this._api + 'city/list',
//     return Vue.$axios.post(Vue._api + url,
//     // return vue.$axios.post(vue._api + url,
//         data, jsonDic
//     )
//     // .then(response => {
//     //
//     //     console.log("response")
//     //     console.log(response)
//     //     this.tableDataAll = [];
//     //     this.tableDataAll = response.data.data.content;
//     //
//     // })
//     // .catch(function (error) {
//     //     console.log("error");
//     //     console.log(error);
//     // });
//
// }

// method.post = post

// export default service;
export default method
