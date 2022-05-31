<template>
    <div class="search-container">
        <!-- 搜索栏 -->
        <form action="/">
            <van-search
                    v-model="value"
                    show-action
                    placeholder="请输入搜索关键词"
                    @search="onSearch"
                    @cancel="onCancel"
                    background="#0069db"
                    @focus="isResultShow = false"
            />
        </form>
        <!-- 搜索栏 -->
        <!-- 搜索结果 -->
        <searchResult v-if="isResultShow" />
        <!-- 搜索结果 -->
        <!-- 联想建议 -->
        <searchSuggestion v-else-if="value" />
        <!-- 联想建议 -->
        <!-- 搜索历史 -->
        <searchHistory v-else />
        <!-- 搜索历史 -->
    </div>
</template>

<script>
    import searchHistory from './components/search-history'
    import searchSuggestion from './components/search-suggestion.vue'
    import searchResult from './components/search-result'
    export default {
        name: 'searchIndex',

        data() {
            return {
                value: '',
                isResultShow: false //控制搜索结果的显示与隐藏
            };
        },
        components: {
            searchHistory,
            searchSuggestion,
            searchResult
        },
        mounted() {

        },

        methods: {
            onSearch() {
                this.isResultShow = true
            },
            onCancel() {
                this.$router.back()
            }
        }
    }
</script>

<style lang="less" scoped>
    .search-container {
        .van-search__action {
            color: #fff;
        }
    }
</style>
