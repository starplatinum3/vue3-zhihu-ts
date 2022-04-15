<template>

    <el-form :inline="true" :model="submitData" class="demo-form-inline" :rules="rules" ref="ruleForm">
        <el-card class="box-card">
            <div class="header clearfix">
                <span>stu</span>
                <el-button v-if="!ischeck && !isFind" class="fr" type="primary" @click="validateStu('ruleForm')">提交
                </el-button>
                <el-button v-else class="fr" type="primary" @click="goBack">返回</el-button>
            </div>
            <el-form-item label="name" prop="name">
                <el-input placeholder="请输入name" v-model="formDataStu.name"></el-input>
            </el-form-item>
            <el-form-item label="stu_num" prop="stuNum">
                <el-input placeholder="请输入stu_num" v-model="formDataStu.stuNum"></el-input>
            </el-form-item>
            <el-form-item label="sex" prop="sex">
                <el-input placeholder="请输入sex" v-model="formDataStu.sex"></el-input>
            </el-form-item>
            <el-form-item label="id_num" prop="idNum">
                <el-input placeholder="请输入id_num" v-model="formDataStu.idNum"></el-input>
            </el-form-item>
            <el-form-item label="email" prop="email">
                <el-input placeholder="请输入email" v-model="formDataStu.email"></el-input>
            </el-form-item>
        </el-card>
    </el-form>

    学生基本信息
    <div class="container">
        <el-button @click="loadListStu">刷新</el-button>
        <el-table
                :data="tableDataStu"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header">
            <el-table-column prop="id" label="id" align="center"></el-table-column>
            <el-table-column prop="name" label="name" align="center"></el-table-column>
            <el-table-column prop="stuNum" label="stu_num" align="center"></el-table-column>
            <el-table-column prop="sex" label="sex" align="center"></el-table-column>
            <el-table-column prop="idNum" label="id_num" align="center"></el-table-column>
            <el-table-column prop="email" label="email" align="center"></el-table-column>
            <el-table-column label="操作" width="120" align="center" fixed="right">
                <!--                <template v-slot:scope>-->
                <!--                https://blog.csdn.net/weixin_43267086/article/details/118978631-->
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


        <!-- 编辑弹出框 -->
<!--        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">-->
<!--        <div class="edit-dialog"  v-if="editVisible"></div>-->
<!--        <div class="edit-dialog"  v-show="editVisible"></div>-->
<!--        https://blog.csdn.net/weixin_43267086/article/details/119081457-->
<!--        ESLint: '.sync' modifier on 'v-bind' directive is deprecated. Use 'v-model:propName' instead. (vue/no-deprecated-v-bind-sync)-->
<!--        v-if="editVisible"-->
<!--        <el-dialog class="edit-dialog" title="编辑"  v-model="editVisible" width="30%">-->
<!--&lt;!&ndash;        <el-dialog class="edit-dialog" title="编辑"  v-if="editVisible" width="30%">&ndash;&gt;-->
<!--            <el-form ref="form" :model="form" label-width="110px">-->
<!--                <el-form-item label="ID">-->
<!--                    <el-input v-model="form.id"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="城市名字">-->
<!--                    &lt;!&ndash;                            <el-input v-model="form.picRes"></el-input>&ndash;&gt;-->
<!--                    <el-input v-model="form.name"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="城市图标res">-->
<!--                    <el-input v-model="form.picRes"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="描述">-->
<!--                    <el-input v-model="form.describe" type="textarea"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="需要多少个碎片">-->
<!--                    <el-input v-model="form.fragFullNeed" type="textarea"></el-input>-->
<!--                </el-form-item>-->

<!--            </el-form>-->
<!--&lt;!&ndash;            v-slot="footer"&ndash;&gt;-->
<!--&lt;!&ndash;            slot="footer"&ndash;&gt;-->
<!--            <span   class="dialog-footer">-->
<!--                <el-button @click="editVisible = false;getData()">取 消</el-button>-->
<!--                <el-button type="primary" @click="saveEdit">确 定</el-button>-->
<!--            </span>-->
<!--        </el-dialog>-->

        <el-dialog class="edit-dialog" title="编辑"  v-model="editVisible" width="30%">
            <el-form ref="formEdit" :model="formEdit" label-width="110px">
                <el-form-item label="id">
                    <el-input v-model="formEdit.id"></el-input>
                </el-form-item>
                <el-form-item label="name">
                    <el-input v-model="formEdit.name"></el-input>
                </el-form-item>
                <el-form-item label="stu_num">
                    <el-input v-model="formEdit.stuNum"></el-input>
                </el-form-item>
                <el-form-item label="sex">
                    <el-input v-model="formEdit.sex"></el-input>
                </el-form-item>
                <el-form-item label="id_num">
                    <el-input v-model="formEdit.idNum"></el-input>
                </el-form-item>
                <el-form-item label="email">
                    <el-input v-model="formEdit.email"></el-input>
                </el-form-item>
            </el-form>
            <span   class="dialog-footer">
                <el-button @click="editVisible = false;getData()">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>

        <!--        <el-form :inline="true" :model="submitData" class="demo-form-inline" :rules="rules" ref="ruleForm">-->
<!--            <el-card class="box-card">-->
<!--                <div class="header clearfix">-->
<!--                    <span>edu_exp</span>-->
<!--                    <el-button v-if="!ischeck && !isFind" class="fr" type="primary" @click="validate('ruleForm')">提交-->
<!--                    </el-button>-->
<!--                    <el-button v-else class="fr" type="primary" @click="goBack">返回</el-button>-->
<!--                </div>-->
<!--                <el-form-item label="school" prop="school">-->
<!--                    <el-input placeholder="请输入school" v-model="formData.school"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="major" prop="major">-->
<!--                    <el-input placeholder="请输入major" v-model="formData.major"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="education" prop="education">-->
<!--                    <el-input placeholder="请输入education" v-model="formData.education"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="stu_id" prop="stuId">-->
<!--                    <el-input placeholder="请输入stu_id" v-model="formData.stuId"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="gpa" prop="gpa">-->
<!--                    <el-input placeholder="请输入gpa" v-model="formData.gpa"></el-input>-->
<!--                </el-form-item>-->
<!--            </el-card>-->
<!--        </el-form>-->

<!--        简历-->
<!--        &lt;!&ndash;        gpa 简历 &ndash;&gt;-->
<!--        <div class="container">-->
<!--            <el-button @click="loadList">刷新</el-button>-->
<!--            <el-table-->
<!--                    :data="tableData"-->
<!--                    border-->
<!--                    class="table"-->
<!--                    ref="multipleTable"-->
<!--                    header-cell-class-name="table-header">-->
<!--                <el-table-column prop="school" label="school" align="center"></el-table-column>-->
<!--                <el-table-column prop="major" label="major" align="center"></el-table-column>-->
<!--                <el-table-column prop="education" label="education" align="center"></el-table-column>-->
<!--                <el-table-column prop="stuId" label="stu_id" align="center"></el-table-column>-->
<!--                <el-table-column prop="gpa" label="gpa" align="center"></el-table-column>-->
<!--                <el-table-column label="操作" width="120" align="center" fixed="right">-->
<!--                    <template v-slot:scope>-->
<!--                        <el-button-->
<!--                                type="text"-->
<!--                                icon="el-icon-edit"-->
<!--                                @click="handleEdit(scope.$index, scope.row)"-->
<!--                        >编辑-->
<!--                        </el-button>-->
<!--                        <el-button-->
<!--                                type="text"-->
<!--                                icon="el-icon-delete"-->
<!--                                class="red"-->
<!--                                @click="handleDelete(scope.$index, scope.row)"-->
<!--                        >删除-->
<!--                        </el-button>-->
<!--                    </template>-->
<!--                </el-table-column>-->

<!--            </el-table>-->

<!--            <div class="pagination">-->
<!--                <el-pagination-->
<!--                        background-->
<!--                        layout="prev, pager, next"-->
<!--                        :current-page="pageParam.pageIndex"-->
<!--                        :page-size="pageParam.pageSize"-->
<!--                        :total="pageTotal"-->
<!--                        @current-change="loadStu"-->
<!--                >-->
<!--                </el-pagination>-->
<!--            </div>-->
<!--        </div>-->
    </div>

</template>

<script>

    import method from "@/utils/method";
    import Common from "@/common/common";
    // import { useRouter } from "vue-router";
    export default {
        name: 'EduExpTable',
        components: {},
        data() {
            return {
                formDataStu: {
                    name: "",
                    stuNum: "",
                    sex: "",
                    idNum: "",
                    email: "",
                },
                formData: {
                    school: "",
                    major: "",
                    education: "",
                    stuId: "",
                    gpa: "",
                },
                value: '选项1',
                editVisible: false,
                form: [],
                formEdit: [],
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
                pageTotal: 0,
                tableDataStu: [],
            }
        },
        created() {
            // this.loadList()
            this.listStu()
        },
        methods: {
            editCancel() {
                this.editVisible = false;
                // getData()
                this.loadList()
            },
            handleDelete(index, row) {
                console.log("row")
                console.log(row)
                method.postWithParams("stu/delete", {},{id:row.id}, this)
                    .then(response => {
                        console.log("response")
                        console.log(response)
                        // this.loadList()
                        this.loadListStu()
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            handleEdit(index, row) {
                this.idx = index;
                // this.form = row;
                this.formEdit = row;
                this.editVisible = true;
                console.log("this.editVisible")
                console.log(this.editVisible)
                console.log("handleEdit")
                // console.log(handleEdit)
                console.log("row")
                console.log(row)
            },
            handleWatch(index, row) {
                // this.idx = index;
                // this.form = row;
                // this.editVisible = true;
                // studi
                console.log("row")
                console.log(row)
                this.$router.push({path: "edu-exp-table", query: {stuId: row.id}});
            },

            validate(ruleForm) {
                method.post("eduExp/save", this.formData, this)
                    .then(response => {
                        console.log("response")
                        console.log(response)
                        this.loadList()
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            saveEdit(){
                method.post("stu/save", this.formEdit, this)
                    .then(response => {
                        this.editVisible=false
                        console.log("response")
                        console.log(response)
                        this.loadList()
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            loadList() {
                method.postWithParams("eduExp/list", {}, this.pageParam, this)
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

            validateStu(ruleForm) {
                method.post("stu/save", this.formDataStu, this)
                    .then(response => {
                        console.log("response")
                        console.log(response)
                        this.$message.success('提交成功！');
                        this.loadListStu()
                    })
                    .catch(error => {
                        console.log(error);
                        this.$message.error('提交失败！' + error);
                    });
            },

            listStu() {
                method.postWithParams("stu/list", {}, this.pageParam, this)
                    .then(response => {
                        let content = response.data.content
                        this.tableDataStu = content
                        // this.pageTotal = response.data.pageable.pageSize;
                        this.pageTotal = response.data.totalElements
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                // this.$router.push({ path: "Issue", query: { issueId: row.number } });
            },


            loadListStu() {
                method.postWithParams("stu/list", {}, this.pageParam, this)
                    .then(response => {
                        let content = response.data.content
                        this.tableDataStu = content
                        console.log(  "this.tableDataStu")
                        console.log(  this.tableDataStu)
                        // this.pageTotal = response.data.pageable.pageSize;
                        this.pageTotal = response.data.totalElements
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },

            load(val) {
                this.pageParam.pageNumber = val - 1
                this.loadList()
            },
            loadStu(val) {
                this.pageParam.pageNumber = val - 1
                this.loadListStu()
            },

        }
    }
</script>

<style scoped>

    .edit-dialog{
        background: #a930ff;
        /*position: absolute;*/
        width: 200px;
        height: 200px;
    }

    .pagination {
        margin: 20px 0;
        text-align: right;
    }

    .container {
        padding: 30px;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
        /*margin-bottom: 30px;*/
        margin-bottom: 200px;
    }


</style>
