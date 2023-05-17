<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryRef" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="站源ID" prop="collectId">
        <el-input
          v-model="queryParams.collectId"
          placeholder="请输入站源ID"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="资源名" prop="vodName">
        <el-input
          v-model="queryParams.vodName"
          placeholder="请输入资源名"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="状态" prop="state">
        <el-input
          v-model="queryParams.state"
          placeholder="请输入状态"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
        <el-button icon="Refresh" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="Plus"
          @click="handleAdd"
          v-hasPermi="['vodCollect:collectLog:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="Edit"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['vodCollect:collectLog:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="Delete"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['vodCollect:collectLog:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="Download"
          @click="handleExport"
          v-hasPermi="['vodCollect:collectLog:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="collectLogList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="ID" width="70" align="center" prop="id" />
      <el-table-column label="站源ID" width="80"  align="center" prop="collectId" />
      <el-table-column label="站源" align="center" prop="collectName" />
      <el-table-column label="资源ID" width="80" align="center" prop="vodId" />
      <el-table-column label="资源名" width="380" align="center" prop="vodName" />
        <el-table-column label="状态" align="center" prop="state" >
            <template #default="scope">

                <el-tag v-if="scope.row.state == 1" class="ml-2" type="success">添加</el-tag>
                <el-tag v-if="scope.row.state == 2" class="ml-2" type="info">更新</el-tag>
                <el-tag v-if="scope.row.state == 3">无需更新</el-tag>
            </template>
        </el-table-column>
      <el-table-column label="日志时间" align="center" prop="createTime" width="180">
<!--        <template #default="scope">-->
<!--          <span>{{ parseTime(scope.row.createTime, '{y}-{m}-{d} ') }}</span>-->
<!--        </template>-->
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template #default="scope">
          <el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)" v-hasPermi="['vodCollect:collectLog:edit']">修改</el-button>
          <el-button link type="primary" icon="Delete" @click="handleDelete(scope.row)" v-hasPermi="['vodCollect:collectLog:remove']">删除</el-button>
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

    <!-- 添加或修改采集日志对话框 -->
    <el-dialog :title="title" v-model="open" width="500px" append-to-body>
      <el-form ref="collectLogRef" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="站源ID" prop="collectId">
          <el-input v-model="form.collectId" placeholder="请输入站源ID" />
        </el-form-item>
        <el-form-item label="站源" prop="collectName">
          <el-input v-model="form.collectName" placeholder="请输入站源" />
        </el-form-item>
        <el-form-item label="资源ID" prop="vodId">
          <el-input v-model="form.vodId" placeholder="请输入资源ID" />
        </el-form-item>
        <el-form-item label="资源名" prop="vodName">
          <el-input v-model="form.vodName" placeholder="请输入资源名" />
        </el-form-item>
        <el-form-item label="状态" prop="state">
          <el-input v-model="form.state" placeholder="请输入状态" />
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

<script setup name="CollectLog">
import { listCollectLog, getCollectLog, delCollectLog, addCollectLog, updateCollectLog } from "@/api/vodCollect/collectLog";

const { proxy } = getCurrentInstance();

const collectLogList = ref([]);
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
    pageSize: 30,
    collectId: null,
    vodName: null,
    state: null,
  },
  rules: {
  }
});

const { queryParams, form, rules } = toRefs(data);

/** 查询采集日志列表 */
function getList() {
  loading.value = true;
  listCollectLog(queryParams.value).then(response => {
    collectLogList.value = response.rows;
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
    collectId: null,
    collectName: null,
    vodId: null,
    vodName: null,
    state: null,
    createTime: null
  };
  proxy.resetForm("collectLogRef");
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
  title.value = "添加采集日志";
}

/** 修改按钮操作 */
function handleUpdate(row) {
  reset();
  const _id = row.id || ids.value
  getCollectLog(_id).then(response => {
    form.value = response.data;
    open.value = true;
    title.value = "修改采集日志";
  });
}

/** 提交按钮 */
function submitForm() {
  proxy.$refs["collectLogRef"].validate(valid => {
    if (valid) {
      if (form.value.id != null) {
        updateCollectLog(form.value).then(response => {
          proxy.$modal.msgSuccess("修改成功");
          open.value = false;
          getList();
        });
      } else {
        addCollectLog(form.value).then(response => {
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
  proxy.$modal.confirm('是否确认删除采集日志编号为"' + _ids + '"的数据项？').then(function() {
    return delCollectLog(_ids);
  }).then(() => {
    getList();
    proxy.$modal.msgSuccess("删除成功");
  }).catch(() => {});
}

/** 导出按钮操作 */
function handleExport() {
  proxy.download('vodCollect/collectLog/export', {
    ...queryParams.value
  }, `collectLog_${new Date().getTime()}.xlsx`)
}

getList();
</script>
