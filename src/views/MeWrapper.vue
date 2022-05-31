<template>
    <div>
        <MeZhihuNamed @onSearchFocus="onSearchFocus"></MeZhihuNamed>
        <SearchView></SearchView>
    </div>

</template>


<script>

    import { defineComponent } from 'vue';
    import {ref} from 'vue';
    import {useRoute, useRouter} from "vue-router";
    import SearchView from "@/views/SearchView.vue";
    import { reactive, toRefs } from 'vue'
    import MeZhihuNamed from "./MeZhihuNamed";
    // import SearchView from "./SearchView";

    export default defineComponent({
        name: 'HelloWorld',
        props: {
            msg: String,
        },
        components:{
            MeZhihuNamed,
            SearchView
        },
        setup() {
            const state = reactive({
                SearchViewShow: false
            })

            // SearchViewShow
            // useRouter()
            // let router=  useRoute()
            const router = useRouter()
            const  nightSet=()=>{
                console.log("nightSet")
            }
            const  toMsgPage=()=>{
                router.push("MessageView")
            }
            const  onFocus=()=>{
                state.SearchViewShow=true
                // console.log("onFocus")
                // this.$emit("onSearchFocus")
            }
            const  onSearchFocus=()=>{
                console.log("onSearchFocus")
                // state.SearchViewShow=true
                // console.log("onFocus")
                // this.$emit("onSearchFocus")
            }

            // const toolImgs = ref(["@/assets/miku.jpg"]);
            // const toolImgs = ref(["~/assets/miku.jpg"]);
            // const toolImgs = ref(["assets/miku.jpg"]);
            // const toolImgs = ref([require("assets/miku.jpg")]);
            // const toolImgs = ref([require("~/assets/miku.jpg")]);
            // 要require
            const toolImgs = ref([require("@/assets/miku.jpg")]);
            // const toolsImgs=["@/assets/miku.jpg"]
            return {
                ...toRefs(state),
                nightSet,
                toolImgs,
                toMsgPage,
                onFocus
            };
        }
    });
    //
    // // import MeCreate from '@/components/MeCreate.vue';
    // // import BuyVip from '@/components/BuyVip.vue';
    // // import GridBook from '@/components/GridBook.vue';
    // // import CreateCenter from '@/components/CreateCenter.vue';
    // import MeZhihuNamed from "./MeZhihuNamed";
    // import SearchView from "./SearchView";
    //
    // // onSearchFocus
    // export default {
    //     name:"MeZhihu",
    //     components: {
    //         // MeCreate,
    //         // BuyVip,
    //         // GridBook,
    //         // CreateCenter,
    //         MeZhihuNamed,
    //         SearchView
    //     },
    //     data() {
    //         return {};
    //     },
    //
    // };
</script>

<style scoped>

    .section_2 {
        margin-left: 0.31rem;
        margin-right: 0.13rem;
    }
    .new-icon {
        margin-left: 0.19rem;
        margin-top: 0.88rem;
    }
    .image-wrapper {
        margin-top: 1.31rem;
    }
    .section_6 {
        margin-top: 1.38rem;
    }
    .page {
        padding: 3.63rem 2.56rem 6.25rem 2.63rem;
        background-color: rgb(255, 255, 255);
        width: 100%;
        overflow-y: auto;
        height: 100%;
    }
    .group_2 {
        margin-top: 1.31rem;
    }
    .switch {
        width: 3rem;
        height: 2.75rem;
    }
    .group_1 {
        margin-left: 1rem;
        width: 8.38rem;
    }
    .image_1 {
        margin-left: 1.25rem;
        width: 3.56rem;
        height: 0.88rem;
    }
    .section_1 {
        background-color: rgb(196, 196, 196);
        height: 0.94rem;
    }
    .image {
        margin-left: 0.44rem;
        margin-top: 0.63rem;
        width: 4.81rem;
        height: 1.56rem;
    }
    </style>
