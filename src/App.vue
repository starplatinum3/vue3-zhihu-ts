<template>
    <div>
    <!--  <nav>-->
    <!--    <router-link to="/">Home</router-link> |-->
    <!--    <router-link to="/about">About</router-link>-->
    <!--  </nav>-->
<!--    <transition :name="transitionName">-->
<!--        <router-view/>-->
<!--    </transition>-->


<!--        把Component 原件拿到里面去 -->
        <router-view v-slot="{ Component }">
<!--            <transition name="fade-transform">-->
            <transition :name="transitionName">
                <!-- name="fade-transform"为为组件设置转场动画的名字 -->
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </transition>
        </router-view>
<!--        ————————————————-->
<!--        版权声明：本文为CSDN博主「逆风优雅」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。-->
<!--        原文链接：https://blog.csdn.net/qq_44603011/article/details/125021052-->

<!--        <transition name="fade-transform">-->
<!--            &lt;!&ndash; name="fade-transform"为为组件设置转场动画的名字 &ndash;&gt;-->
<!--            <keep-alive>-->
<!--                <component :is="Component" />-->
<!--            </keep-alive>-->
<!--        </transition>-->

<!--        ————————————————-->
<!--        版权声明：本文为CSDN博主「逆风优雅」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。-->
<!--        原文链接：https://blog.csdn.net/qq_44603011/article/details/125021052-->


    <van-tabbar class="sticky-bottom " route>
        <van-tabbar-item to="/zhihu" icon="home-o">首页</van-tabbar-item>
        <!--      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>-->
        <!-- <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item> -->
        <van-tabbar-item to="/cart" icon="shopping-cart-o">动态</van-tabbar-item>
        <van-tabbar-item to="/" icon="friends-o">加</van-tabbar-item>

        <!-- <van-tabbar-item to="/zhihu" icon="friends-o">知乎</van-tabbar-item> -->
        <!-- <van-tabbar-item to="/zhihu" icon="friends-o">知乎</van-tabbar-item> -->
        <van-tabbar-item to="/">
            <!--          icon="friends-o"-->
            <!--          会员-->
            <span>会员</span>
            <template #icon="props">
                <img :src="props.active ? icon.active : icon.inactive"/>
            </template>
        </van-tabbar-item>
        <!--      <van-tabbar-item to="/mine" icon="friends-o">我的</van-tabbar-item>-->
        <!--      <van-tabbar-item to="/MeZhihuNamed" icon="friends-o">我的</van-tabbar-item>-->
        <van-tabbar-item to="/MeWrapper" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
    </div>
</template>

<script>


    export default {
        watch: {
            //使用watch 监听$router的变化
            $route(to, from) {
                //如果to索引大于from索引,判断为前进状态,反之则为后退状态
                console.log(to, "to");
                console.log(from, "from");
                if (to.meta.index > from.meta.index) {
                    //设置动画名称
                    this.transitionName = "slide-left";
                } else {
                    this.transitionName = "slide-right";
                }
            },
        },
        data() {
            let iconList = [
                {
                    active: 'https://img.yzcdn.cn/vant/user-active.png',
                    inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
                },
            ]

            return {
                transitionName:"slide-right",
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


    .fade-transform-enter-active,
    .fade-transform-leave-active {
        transition: opacity  5s ease 0s;
    }

    .fade-transform-enter-from,
    .fade-transform-leave-to {
        opacity: 0;
    }

    .fade-transform-leave-from,
    .fade-transform-enter-to {
        opacity: 1;
    }
    /*————————————————*/
    /*版权声明：本文为CSDN博主「逆风优雅」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。*/
    /*                                   原文链接：https://blog.csdn.net/qq_44603011/article/details/125021052*/

    .slide-right-enter-active, .slide-right-leave-active, .slide-left-enter-active, .slide-left-leave-active {
        will-change: transform;
        /*优化 性能*/
        transition: all 500ms;
        position: absolute;
    }

    .slide-right-enter {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

    .slide-right-leave-active {
        opacity: 0;
       /* x -是一个 <length> 代表移动向量的横坐标。*/
       /* xyz */
        transform: translate3d(100%, 0, 0);
    }

    .slide-left-enter {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .slide-left-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

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
