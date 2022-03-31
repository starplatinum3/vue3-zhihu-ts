<template>

   <div class="card"> </div>

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
    .card{
        border-radius: 30%;
    }

</style>
