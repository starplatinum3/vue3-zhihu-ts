<template>
<div class="flex-col page">
    <div class="justify-center">
        <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623ac70e5a7e3f03102b5e76/623ac932154114001109113e/16480226745051692490.png"
                class="switch"
        />
<!--        <svg t="1648713439961" class="icon switch" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10676" width="128" height="128"><path d="M399.872 908.288H199.68c-43.008 0-78.336-35.328-78.336-78.336v-223.232c0-10.752 8.704-19.456 19.456-19.456s19.456 8.704 19.456 19.456v223.232c0 21.504 17.408 38.912 38.912 38.912H399.36c10.752 0 19.456 8.704 19.456 19.456s-8.192 19.968-18.944 19.968zM830.464 908.288h-211.968c-10.752 0-19.456-8.704-19.456-19.456s8.704-19.456 19.456-19.456h211.968c21.504 0 38.912-17.408 38.912-38.912v-223.232c0-10.752 8.704-19.456 19.456-19.456s19.456 8.704 19.456 19.456v223.232c0.512 42.496-34.816 77.824-77.824 77.824zM140.8 407.04c-10.752 0-19.456-8.704-19.456-19.456V199.168c0-43.008 35.328-78.336 78.336-78.336h200.704c10.752 0 19.456 8.704 19.456 19.456s-8.704 19.456-19.456 19.456H199.68c-21.504 0-38.912 17.408-38.912 38.912v188.416c-0.512 11.264-9.216 19.968-19.968 19.968zM888.832 404.48c-10.752 0-19.456-8.704-19.456-19.456V199.168c0-21.504-17.408-38.912-38.912-38.912h-211.968c-10.752 0-19.456-8.704-19.456-19.456s8.704-19.456 19.456-19.456h211.968c43.008 0 78.336 35.328 78.336 78.336v185.856c0 10.24-8.704 18.944-19.968 18.944z" fill="#4C4C4C" p-id="10677"></path><path d="M907.776 524.288H122.368c-10.752 0-19.456-8.704-19.456-19.456s8.704-19.456 19.456-19.456h785.408c10.752 0 19.456 8.704 19.456 19.456s-8.704 19.456-19.456 19.456z" fill="#4C4C4C" p-id="10678"></path></svg>-->
        <div class="flex-col group_1">
            <div class="section_1"></div>
            <img
                    src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623ac70e5a7e3f03102b5e76/623ac932154114001109113e/16480226745054629632.png"
                    class="image"
            />
        </div>
        <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623ac70e5a7e3f03102b5e76/623ac932154114001109113e/16480226745055815529.png"
                class="image_1"
        />
    </div>
    <div class="flex-col group_2">
        <MeCreate class="section_2" />
        <BuyVip class="section_4" />
        <GridBook class="image-wrapper" />
        <CreateCenter class="section_6" />
    </div>
</div>

</template>


<script>

    import MeCreate from '@/components/MeCreate.vue';
    import BuyVip from '@/components/BuyVip.vue';
    import GridBook from '@/components/GridBook.vue';
    import CreateCenter from '@/components/CreateCenter.vue';

    export default {
        name:"MeZhihu",
        components: {
            MeCreate,
            BuyVip,
            GridBook,
            CreateCenter,
        },
        data() {
            return {};
        },
    };
</script>

<style scoped>

    .section_2 {
        margin-left: 0.31rem;
        margin-right: 0.13rem;
    }
    .section_4 {
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
