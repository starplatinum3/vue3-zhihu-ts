<template>
    <el-form :inline="true" :model="submitData" class="demo-form-inline" :rules="rules" ref="ruleForm">
        <el-card class="box-card">
            <div class="header clearfix">
                <span>t_article</span>
                <el-button v-if="!ischeck && !isFind" class="fr" type="primary" @click="validate('ruleForm')">提交</el-button>
                <el-button v-else class="fr" type="primary" @click="goBack">返回</el-button>
            </div>
            <el-form-item label="title" prop="title">
                <el-input placeholder="请输入title" v-model="formData.title"></el-input>
            </el-form-item>
            <el-form-item label="content" prop="content">
                <el-input placeholder="请输入content" v-model="formData.content"></el-input>
            </el-form-item>
        </el-card>
    </el-form>

    <div class="container">
        <el-button @click="loadList">刷新</el-button>
        <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header">
            <el-table-column prop="id" label="id"  align="center"></el-table-column>
            <el-table-column prop="title" label="title"  align="center"></el-table-column>
            <el-table-column prop="content" label="content"  align="center"></el-table-column>
            <el-table-column label="操作" width="120" align="center" fixed="right">
                <template v-slot="scope">
                    <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleEdit(scope.$index, scope.row)"
                    >编辑
                    </el-button>
                    <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleWatch(scope.$index, scope.row)"
                    >查看
                    </el-button>
                    <el-button
                            type="text"
                            icon="el-icon-delete"
                            class="red"
                            @click="handleDelete(scope.$index, scope.row)"
                    >删除
                    </el-button>
                </template>
            </el-table-column>

        </el-table>

        <div class="pagination">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :current-page="pageParam.pageIndex"
                    :page-size="pageParam.pageSize"
                    :total="pageTotal"
                    @current-change="load"
            >
            </el-pagination>
        </div>

        <el-dialog class="edit-dialog" title="编辑"  v-model="editVisible" width="30%">
            <el-form ref="formEdit" :model="formEdit" label-width="110px">
                <el-form-item label="title">
                    <el-input v-model="formEdit.title"></el-input>
                </el-form-item>
                <el-form-item label="content">
                    <el-input v-model="formEdit.content"></el-input>
                </el-form-item>
            </el-form>
            <span   class="dialog-footer">
                <el-button @click="editVisible = false;getData()">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
    </div>

</template>

<script>

    import method from "@/utils/method";
    import Common from "@/common/common";
    export default {
        name: 'TArticleTable',
        components: {

        },
        data() {
            return {
                formData: {
                    title:"",
                    content:"",
                },
                value: '选项1',
                editVisible: false,
                form: [],
                formEdit:[],
                query: {
                    uname: "",
                    pname: "",
                    pageIndex: 1,
                    pageSize: 10
                },
                pageParam: {
                    pageNumber: 0,
                    pageSize: 10
                },
                tableKey: 0,
                list: null,
                total: 0,
                listLoading: true,
                listQuery: {
                    page: 1,
                    limit: 20,
                    importance: undefined,
                    title: undefined,
                    type: undefined,
                    sort: '+id'
                },
                sortOptions: [{label: 'ID Ascending', key: '+id'}, {label: 'ID Descending', key: '-id'}],
                statusOptions: ['published', 'draft', 'deleted'],
                showReviewer: false,
                temp: {
                    id: undefined,
                    importance: 1,
                    remark: '',
                    timestamp: new Date(),
                    title: '',
                    type: '',
                    status: 'published'
                },
                dialogFormVisible: false,
                dialogStatus: '',
                textMap: {
                    update: 'Edit',
                    create: 'Create'
                },
                dialogPvVisible: false,
                pvData: [],
                rules: {
                    type: [{required: true, message: 'type is required', trigger: 'change'}],
                    timestamp: [{type: 'date', required: true, message: 'timestamp is required', trigger: 'change'}],
                    title: [{required: true, message: 'title is required', trigger: 'blur'}]
                },
                downloadLoading: false,
                tableData: [],
                pageTotal: 0
            }
        },
        created() {
            this.loadList()
        },
        methods: {
            editCancel() {
                this.editVisible = false;
                // getData()
                this.loadList()
            },
            handleWatch(index, row) {

                console.log("row")
                console.log(row)
                this.$router.push({path: "comment-table", query: {articleId: row.id}});
            },
            handleEdit(index, row) {
                this.idx = index;
                // this.form = row;
                this.formEdit = row;
                this.editVisible = true;
            },
            saveEdit(){
                method.post("tArticle/save", this.formEdit, this)
                    .then(response => {
                        this.editVisible=false
                        this.loadList()
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            handleDelete(index, row) {
                method.postWithParams("tArticle/delete", {},{id:row.id}, this)
                    .then(response => {
                        this.loadList()
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            validate(ruleForm) {
                method.post("tArticle/save", this.formData, this)
                    .then(response => {
                        console.log("response")
                        console.log(response)
                        this.$message.success('提交成功！');
                        this.loadList()
                    })
                    .catch(error=> {
                        console.log(error);
                        this.$message.error('提交失败！'+error);
                    });
            },
            loadList(){
                method.postWithParams("tArticle/list", {}, this.pageParam, this)
                    .then(response => {
                        let content = response.data.content
                        this.tableData = content
                        // this.pageTotal = response.data.pageable.pageSize;
                        this.pageTotal = response.data.totalElements
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            loadById(id){
                method.postWithParams("tArticle/load", {}, id, this)
                    .then(response => {
                        let content = response.data.content
                        this.tableData = content
                        this.pageTotal = response.data.totalElements
                    })
                    .catch( error=> {
                        console.log(error);
                    });
            },

            load(val) {
                this.pageParam.pageNumber = val - 1
                this.loadList()
            },
        }
    }
</script>

<style scoped>

    .pagination {
        margin: 20px 0;
        text-align: right;
    }

    .container {
        padding: 30px;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
    }


</style>
