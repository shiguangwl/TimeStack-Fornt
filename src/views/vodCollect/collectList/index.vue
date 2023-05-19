<template>
    <div class="app-container">
<!--        <el-form :model="queryParams" ref="queryRef" :inline="true" v-show="showSearch" label-width="68px">-->
<!--            <el-form-item label="" prop="id">-->
<!--                <el-input-->
<!--                        v-model="queryParams.id"-->
<!--                        placeholder="请输入"-->
<!--                        clearable-->
<!--                        @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="资源站名" prop="name">-->
<!--                <el-input-->
<!--                        v-model="queryParams.name"-->
<!--                        placeholder="请输入资源站名"-->
<!--                        clearable-->
<!--                        @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="采集接口" prop="apiUrl">-->
<!--                <el-input-->
<!--                        v-model="queryParams.apiUrl"-->
<!--                        placeholder="请输入采集接口"-->
<!--                        clearable-->
<!--                        @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="最后一次采集时间" prop="lastScheduleTime">-->
<!--                <el-date-picker clearable-->
<!--                                v-model="queryParams.lastScheduleTime"-->
<!--                                type="date"-->
<!--                                value-format="YYYY-MM-DD"-->
<!--                                placeholder="请选择最后一次采集时间">-->
<!--                </el-date-picker>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="当前状态" prop="state">-->
<!--                <el-input-->
<!--                        v-model="queryParams.state"-->
<!--                        placeholder="请输入当前状态"-->
<!--                        clearable-->
<!--                        @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="当前采集页" prop="size">-->
<!--                <el-input-->
<!--                        v-model="queryParams.size"-->
<!--                        placeholder="请输入当前采集页"-->
<!--                        clearable-->
<!--                        @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="当前采集总页数" prop="page">-->
<!--                <el-input-->
<!--                        v-model="queryParams.page"-->
<!--                        placeholder="请输入当前采集总页数"-->
<!--                        clearable-->
<!--                        @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="备注" prop="remark">-->
<!--                <el-input-->
<!--                        v-model="queryParams.remark"-->
<!--                        placeholder="请输入备注"-->
<!--                        clearable-->
<!--                        @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item>-->
<!--                <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>-->
<!--                <el-button icon="Refresh" @click="resetQuery">重置</el-button>-->
<!--            </el-form-item>-->
<!--        </el-form>-->

        <el-row :gutter="10" class="mb8">
            <el-col :span="1.5">
                <el-button
                        type="primary"
                        plain
                        icon="Plus"
                        @click="handleAdd"
                        v-hasPermi="['vodCollect:collectList:add']"
                >新增</el-button>
            </el-col>
            <el-col :span="1.5">
                <el-button
                        type="success"
                        plain
                        icon="Edit"
                        :disabled="single"
                        @click="handleUpdate"
                        v-hasPermi="['vodCollect:collectList:edit']"
                >修改</el-button>
            </el-col>
            <el-col :span="1.5">
                <el-button
                        type="danger"
                        plain
                        icon="Delete"
                        :disabled="multiple"
                        @click="handleDelete"
                        v-hasPermi="['vodCollect:collectList:remove']"
                >删除</el-button>
            </el-col>
<!--            <el-col :span="1.5">-->
<!--                <el-button-->
<!--                        type="warning"-->
<!--                        plain-->
<!--                        icon="Download"-->
<!--                        @click="handleExport"-->
<!--                        v-hasPermi="['vodCollect:collectList:export']"-->
<!--                >导出</el-button>-->
<!--            </el-col>-->
            <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
        </el-row>

        <el-table v-loading="loading" :data="collectListList" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55" align="center" />
            <el-table-column label="ID" width="50" align="center" prop="id" />
            <el-table-column label="资源站名" align="center" prop="name" />
            <el-table-column label="采集接口" width="400" align="center" prop="apiUrl" />
            <el-table-column label="采集任务"  width="80" align="center" prop="autoFetch" >
                <template #default="scope">
                    <span>{{ scope.row.autoFetch == 1 ? '开启':'关闭' }}</span>
                </template>
            </el-table-column>
            <el-table-column label="最近采集时间" align="center" prop="lastScheduleTime" width="180">
<!--                <template #default="scope">-->
<!--                    <span>{{ parseTime(scope.row.lastScheduleTime, '{y}-{m}-{d}') }}</span>-->
<!--                </template>-->
            </el-table-column>
            <el-table-column label="当前采集页" width="90"  align="center" prop="size" />
            <el-table-column label="当前采集总页数" align="center" prop="page" />
            <el-table-column label="备注" align="center" prop="remark" />
            <el-table-column label="当前状态"  width="80" align="center" prop="state" >
                <template #default="scope">
                    <el-tag
                        type="warning"
                        class="mx-1"
                        effect="plain"
                        round
                    >
                        <span>{{ parseState(scope.row.state)}}</span>
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column label="采集操作" width="230" align="center" prop="id" >
                <template #default="scope">
                    <div style="display: flex">
                        <el-button type="primary" @click="createCollectTask(24,scope.row.id)" size="small">本日</el-button>
                        <el-button type="primary" @click="createCollectTask(168,scope.row.id)" size="small">本周</el-button>
                        <el-button type="primary" @click="createCollectTask(null,scope.row.id)" size="small">采集所有</el-button>
                        <el-button type="primary" @click="cancelCollectTask(scope.row.id)" size="small">取消采集</el-button>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="230" align="center" class-name="small-padding fixed-width">
                <template #default="scope">
                    <el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)" v-hasPermi="['vodCollect:collectList:edit']">修改</el-button>
                    <el-button link type="primary" icon="Delete" @click="handleDelete(scope.row)" v-hasPermi="['vodCollect:collectList:remove']">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <pagination
                v-show="total>0"
                :total="total"
                v-model:page="queryParams.pageNum"
                v-model:limit="queryParams.pageSize"
                @pagination="getList"
        />

        <!-- 添加或修改资源采集站对话框 -->
        <el-dialog :title="title" v-model="open" width="50%" append-to-body>
            <el-form ref="collectListRef" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="资源站名" prop="name">
                    <el-input v-model="form.name" placeholder="请输入资源站名" />
                </el-form-item>
                <el-form-item label="采集接口" prop="apiUrl">
                    <el-input v-model="form.apiUrl" placeholder="请输入采集接口" />
                </el-form-item>
                <el-form-item label="最近采集时间" prop="lastScheduleTime">
                    <el-date-picker clearable
                                    v-model="form.lastScheduleTime"
                                    type="date"
                                    value-format="YYYY-MM-DD"
                                    placeholder="请选择最后一次采集时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="当前状态" prop="state">
                    <el-input v-model="form.state" placeholder="请输入当前状态" />
                </el-form-item>
                <el-form-item label="当前采集页" prop="size">
                    <el-input v-model="form.size" placeholder="请输入当前采集页" />
                </el-form-item>
                <el-form-item label="当前采集总页数" prop="page">
                    <el-input v-model="form.page" placeholder="请输入当前采集总页数" />
                </el-form-item>
                <el-form-item label="备注" prop="remark">
                    <el-input v-model="form.remark" placeholder="请输入备注" />
                </el-form-item>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button type="primary" @click="submitForm">确 定</el-button>
                    <el-button @click="cancel">取 消</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup name="CollectList">
import { collectCancel, collect, listCollectList, getCollectList, delCollectList, addCollectList, updateCollectList } from "@/api/vodCollect/collectList";

const { proxy } = getCurrentInstance();

const collectListList = ref([]);
const open = ref(false);
const loading = ref(true);
const showSearch = ref(true);
const ids = ref([]);
const single = ref(true);
const multiple = ref(true);
const total = ref(0);
const title = ref("");

const data = reactive({
    form: {},
    queryParams: {
        pageNum: 1,
        pageSize: 10,
        id: null,
        name: null,
        apiUrl: null,
        autoFetch: null,
        lastScheduleTime: null,
        state: null,
        size: null,
        page: null,
        remark: null
    },
    rules: {
        name: [
            { required: true, message: "资源站名不能为空", trigger: "blur" }
        ],
        apiUrl: [
            { required: true, message: "采集接口不能为空", trigger: "blur" }
        ],
        autoFetch: [
            { required: true, message: "是否开启自动采集任务: 1是,0否不能为空", trigger: "change" }
        ],
    }
});

const { queryParams, form, rules } = toRefs(data);

/** 查询资源采集站列表 */
function getList() {
    loading.value = true;
    listCollectList(queryParams.value).then(response => {
        collectListList.value = response.rows;
        total.value = response.total;
        loading.value = false;
    });
}

// 取消按钮
function cancel() {
    open.value = false;
    reset();
}

// 表单重置
function reset() {
    form.value = {
        id: null,
        name: null,
        apiUrl: null,
        autoFetch: null,
        lastScheduleTime: null,
        state: null,
        size: null,
        page: null,
        remark: null
    };
    proxy.resetForm("collectListRef");
}

/** 搜索按钮操作 */
function handleQuery() {
    queryParams.value.pageNum = 1;
    getList();
}

/** 重置按钮操作 */
function resetQuery() {
    proxy.resetForm("queryRef");
    handleQuery();
}

// 多选框选中数据
function handleSelectionChange(selection) {
    ids.value = selection.map(item => item.id);
    single.value = selection.length != 1;
    multiple.value = !selection.length;
}

/** 新增按钮操作 */
function handleAdd() {
    reset();
    open.value = true;
    title.value = "添加资源采集站";
}

/** 修改按钮操作 */
function handleUpdate(row) {
    reset();
    const _id = row.id || ids.value
    getCollectList(_id).then(response => {
        form.value = response.data;
        open.value = true;
        title.value = "修改资源采集站";
    });
}

/** 提交按钮 */
function submitForm() {
    proxy.$refs["collectListRef"].validate(valid => {
        if (valid) {
            if (form.value.id != null) {
                updateCollectList(form.value).then(response => {
                    proxy.$modal.msgSuccess("修改成功");
                    open.value = false;
                    getList();
                });
            } else {
                addCollectList(form.value).then(response => {
                    proxy.$modal.msgSuccess("新增成功");
                    open.value = false;
                    getList();
                });
            }
        }
    });
}

/** 删除按钮操作 */
function handleDelete(row) {
    const _ids = row.id || ids.value;
    proxy.$modal.confirm('是否确认删除资源采集站编号为"' + _ids + '"的数据项？').then(function() {
        return delCollectList(_ids);
    }).then(() => {
        getList();
        proxy.$modal.msgSuccess("删除成功");
    }).catch(() => {});
}

/** 导出按钮操作 */
function handleExport() {
    proxy.download('vodCollect/collectList/export', {
        ...queryParams.value
    }, `collectList_${new Date().getTime()}.xlsx`)
}

function parseState(state){
    // 0正常,1采集中,2暂停采集
    if (state == 0){
        return '正常';
    }else if (state == 1){
        return '采集中';
    }else {
        return '暂停采集';
    }
}

/**
 * 采集操作
 */
function createCollectTask(h,collectId){

    loading.value = true;
    let params = {
        h: h,
        collectId: collectId
    }
    collect(params).then(response => {
        // 延迟1.5秒执行
        setTimeout(function(){
            loading.value = false;
            getList();
            proxy.$modal.msgSuccess("提交采集任务成功");
        },2000);
    });


}


/**
 * 取消采集任务
 */
function cancelCollectTask(collectId){
    loading.value = true;
    let params = {
        collectId: collectId,
    }
    collectCancel(params).then(response => {
        proxy.$modal.msgSuccess("执行取消采集任务成功");
        loading.value = false;
        getList();
    });
}

// 拉取最新数据
setInterval(function(){
    listCollectList(queryParams.value).then(response => {
        collectListList.value = response.rows;
        total.value = response.total;
    });
},5000);

getList();
</script>
