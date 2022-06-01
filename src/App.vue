<template>
<!--  <nav>-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </nav>-->
  <router-view/>

  <van-tabbar class="sticky-bottom " route>
      <van-tabbar-item to="/zhihu" icon="home-o">首页</van-tabbar-item>
<!--      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>-->
 <!-- <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item> -->
      <van-tabbar-item to="/cart" icon="shopping-cart-o">动态</van-tabbar-item>
     <van-tabbar-item to="/" icon="friends-o">加</van-tabbar-item>

      <!-- <van-tabbar-item to="/zhihu" icon="friends-o">知乎</van-tabbar-item> -->
       <!-- <van-tabbar-item to="/zhihu" icon="friends-o">知乎</van-tabbar-item> -->
      <van-tabbar-item to="/" >
<!--          icon="friends-o"-->
<!--          会员-->
          <span>会员</span>
          <template #icon="props">
              <img :src="props.active ? icon.active : icon.inactive" />
          </template>
          </van-tabbar-item>
<!--      <van-tabbar-item to="/mine" icon="friends-o">我的</van-tabbar-item>-->
<!--      <van-tabbar-item to="/MeZhihuNamed" icon="friends-o">我的</van-tabbar-item>-->
      <van-tabbar-item to="/MeWrapper" icon="friends-o">我的</van-tabbar-item>
</van-tabbar>

</template>

<script>



    export default {

        data() {
            let iconList=[
                {
                    active: 'https://img.yzcdn.cn/vant/user-active.png',
                    inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
                },
            ]

            return {
                active: 0,
                icon: {
                    active: 'https://img.yzcdn.cn/vant/user-active.png',
                    inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
                },
            };
        },
    };
</script>

<!--active: 0,-->
<!--icon: {-->
<!--active: 'https://img.yzcdn.cn/vant/user-active.png',-->
<!--inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',-->
<!--},-->

<style lang="scss">
.sticky-bottom {
    // background: deeppink;
    position: sticky;
    // top: 0;
      bottom: 0;
}

    html {
        font-size: 16px;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Microsoft Yahei', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
        box-sizing: border-box;
        flex-shrink: 0;
    }

    #app {
        width: 100vw;
        height: 100vh;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
    }

    .flex-col {
        display: flex;
        flex-direction: column;
    }

    .justify-start {
        display: flex;
        justify-content: flex-start;
    }

    .justify-center {
        display: flex;
        justify-content: center;
    }

    .justify-end {
        display: flex;
        justify-content: flex-end;
    }

    .justify-evenly {
        display: flex;
        justify-content: space-evenly;
    }

    .justify-around {
        display: flex;
        justify-content: space-around;
    }

    .justify-between {
        display: flex;
        justify-content: space-between;
    }

    .items-start {
        display: flex;
        align-items: flex-start;
    }

    .items-center {
        display: flex;
        align-items: center;
    }

    .items-end {
        display: flex;
        align-items: flex-end;
    }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
