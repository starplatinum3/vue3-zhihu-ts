<template>

<!--    <el-form :inline="true" :model="submitData" class="demo-form-inline" :rules="rules" ref="ruleForm">-->
<!--        <el-card class="box-card">-->
<!--            <div class="header clearfix">-->
<!--                <span>stu</span>-->
<!--                <el-button v-if="!ischeck && !isFind" class="fr" type="primary" @click="validateStu('ruleForm')">提交</el-button>-->
<!--                <el-button v-else class="fr" type="primary" @click="goBack">返回</el-button>-->
<!--            </div>-->
<!--            <el-form-item label="name" prop="name">-->
<!--                <el-input placeholder="请输入name" v-model="formDataStu.name"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="stu_num" prop="stuNum">-->
<!--                <el-input placeholder="请输入stu_num" v-model="formDataStu.stuNum"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="sex" prop="sex">-->
<!--                <el-input placeholder="请输入sex" v-model="formDataStu.sex"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="id_num" prop="idNum">-->
<!--                <el-input placeholder="请输入id_num" v-model="formDataStu.idNum"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="email" prop="email">-->
<!--                <el-input placeholder="请输入email" v-model="formDataStu.email"></el-input>-->
<!--            </el-form-item>-->
<!--        </el-card>-->
<!--    </el-form>-->

<!--    学生基本信息-->
    <div class="container">
<!--        <el-button @click="loadListStu">刷新</el-button>-->
<!--        <el-table-->
<!--                :data="tableDataStu"-->
<!--                border-->
<!--                class="table"-->
<!--                ref="multipleTable"-->
<!--                header-cell-class-name="table-header">-->
<!--            <el-table-column prop="name" label="name"  align="center"></el-table-column>-->
<!--            <el-table-column prop="stuNum" label="stu_num"  align="center"></el-table-column>-->
<!--            <el-table-column prop="sex" label="sex"  align="center"></el-table-column>-->
<!--            <el-table-column prop="idNum" label="id_num"  align="center"></el-table-column>-->
<!--            <el-table-column prop="email" label="email"  align="center"></el-table-column>-->
<!--            <el-table-column label="操作" width="120" align="center" fixed="right">-->
<!--                <template v-slot:scope>-->
<!--                    <el-button-->
<!--                            type="text"-->
<!--                            icon="el-icon-edit"-->
<!--                            @click="handleEdit(scope.$index, scope.row)"-->
<!--                    >编辑-->
<!--                    </el-button>-->
<!--                    <el-button-->
<!--                            type="text"-->
<!--                            icon="el-icon-delete"-->
<!--                            class="red"-->
<!--                            @click="handleDelete(scope.$index, scope.row)"-->
<!--                    >删除-->
<!--                    </el-button>-->
<!--                </template>-->
<!--            </el-table-column>-->

<!--        </el-table>-->

<!--        <div class="pagination">-->
<!--            <el-pagination-->
<!--                    background-->
<!--                    layout="prev, pager, next"-->
<!--                    :current-page="pageParam.pageIndex"-->
<!--                    :page-size="pageParam.pageSize"-->
<!--                    :total="pageTotal"-->
<!--                    @current-change="load"-->
<!--            >-->
<!--            </el-pagination>-->
<!--        </div>-->

    <el-form :inline="true" :model="submitData" class="demo-form-inline" :rules="rules" ref="ruleForm">
        <el-card class="box-card">
            <div class="header clearfix">
                <span>edu_exp</span>
                <el-button v-if="!ischeck && !isFind" class="fr" type="primary" @click="validate('ruleForm')">提交</el-button>
                <el-button v-else class="fr" type="primary" @click="goBack">返回</el-button>
            </div>
            <el-form-item label="school" prop="school">
                <el-input placeholder="请输入school" v-model="formData.school"></el-input>
            </el-form-item>
            <el-form-item label="major" prop="major">
                <el-input placeholder="请输入major" v-model="formData.major"></el-input>
            </el-form-item>
            <el-form-item label="education" prop="education">
                <el-input placeholder="请输入education" v-model="formData.education"></el-input>
            </el-form-item>
            <el-form-item label="stu_id" prop="stuId">
                <el-input placeholder="请输入stu_id" v-model="formData.stuId"></el-input>
            </el-form-item>
            <el-form-item label="gpa" prop="gpa">
                <el-input placeholder="请输入gpa" v-model="formData.gpa"></el-input>
            </el-form-item>
        </el-card>
    </el-form>

        简历
        <!--        gpa 简历 -->
    <div class="container">
        <el-button @click="loadList">刷新</el-button>
        <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header">
            <el-table-column prop="school" label="school"  align="center"></el-table-column>
            <el-table-column prop="major" label="major"  align="center"></el-table-column>
            <el-table-column prop="education" label="education"  align="center"></el-table-column>
            <el-table-column prop="stuId" label="stu_id"  align="center"></el-table-column>
            <el-table-column prop="gpa" label="gpa"  align="center"></el-table-column>
            <el-table-column label="操作" width="120" align="center" fixed="right">
                <template v-slot:scope>
                    <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleEdit(scope.$index, scope.row)"
                    >编辑
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
                    @current-change="loadStu"
            >
            </el-pagination>
        </div>
    </div>
    </div>

</template>

<script>

    import method from "@/utils/method";
    import Common from "@/common/common";
    export default {
        name: 'EduExpTable',
        components: {

        },
        data() {
            return {
                formDataStu: {
                    name:"",
                    stuNum:"",
                    sex:"",
                    idNum:"",
                    email:"",
                },
                formData: {
                    school:"",
                    major:"",
                    education:"",
                    stuId:"",
                    gpa:"",
                },
                value: '选项1',
                editVisible: false,
                form: [],
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
            let stuId = this.$route.query.stuId;
            console.log("stuId")
            console.log(stuId)
            // this.loadList()
            // this.loadById(stuId)
            this.getByStuId(stuId)
        },
        methods: {
            editCancel() {
                this.editVisible = false;
                // getData()
                this.loadList()
            },

            handleEdit(index, row) {
                this.idx = index;
                this.form = row;
                this.editVisible = true;
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
            loadList(){
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
            loadById(id){
                method.postWithParams("eduExp/load", {}, id, this)
                    .then(response => {
                        let content = response.data.content
                        this.tableData = content
                        this.pageTotal = response.data.totalElements
                    })
                    .catch( error=> {
                        console.log(error);
                    });
            },
            getByStuId(stuId){
                method.postWithParams("eduExp/getByStuId", {stuId:stuId}, stuId, this)
                    .then(response => {
                        let content = response.data.content
                        this.tableData = content
                        this.pageTotal = response.data.totalElements
                    })
                    .catch( error=> {
                        console.log(error);
                    });
            },
            validateStu(ruleForm) {
                method.post("stu/save", this.formData, this)
                    .then(response => {
                        console.log("response")
                        console.log(response)
                        this.$message.success('提交成功！');
                        this.loadListStu()
                    })
                    .catch(function (error) {
                        console.log(error);
                        this.$message.error('提交失败！'+error);
                    });
            },
            loadListStu(){
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
