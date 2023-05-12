<template>
    <div class="app-container">
        <el-form :model="queryParams" ref="queryRef" :inline="true" v-show="showSearch" label-width="68px">
            <el-form-item label="采集来源" prop="collectId">
                <el-input
                    v-model="queryParams.collectId"
                    placeholder="请输入采集来源"
                    clearable
                    @keyup.enter="handleQuery"
                />
            </el-form-item>
<!--            <el-form-item label="原始ID" prop="vodId">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodId"-->
<!--                    placeholder="请输入原始ID"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
            <el-form-item label="原始类型" prop="typeId">
                <el-input
                    v-model="queryParams.typeId"
                    placeholder="请输入原始类型"
                    clearable
                    @keyup.enter="handleQuery"
                />
            </el-form-item>
            <el-form-item label="标题" prop="vodName">
                <el-input
                    v-model="queryParams.vodName"
                    placeholder="请输入标题"
                    clearable
                    @keyup.enter="handleQuery"
                />
            </el-form-item>
<!--            <el-form-item label="子标题" prop="vodSub">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodSub"-->
<!--                    placeholder="请输入子标题"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="拼音" prop="vodEn">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodEn"-->
<!--                    placeholder="请输入拼音"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="首字母" prop="vodLetter">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodLetter"-->
<!--                    placeholder="请输入首字母"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="标签" prop="vodTag">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodTag"-->
<!--                    placeholder="请输入标签"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
            <el-form-item label="分类" prop="vodClass">
                <el-input
                    v-model="queryParams.vodClass"
                    placeholder="请输入分类"
                    clearable
                    @keyup.enter="handleQuery"
                />
            </el-form-item>
<!--            <el-form-item label="图片" prop="vodPic">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodPic"-->
<!--                    placeholder="请输入图片"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="演员" prop="vodActor">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodActor"-->
<!--                    placeholder="请输入演员"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="导演" prop="vodDirector">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodDirector"-->
<!--                    placeholder="请输入导演"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="简介" prop="vodBlurb">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodBlurb"-->
<!--                    placeholder="请输入简介"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="备注 如: 更新至xx集,超清720P" prop="vodRemarks">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodRemarks"-->
<!--                    placeholder="请输入备注 如: 更新至xx集,超清720P"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="总集数" prop="vodTotal">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodTotal"-->
<!--                    placeholder="请输入总集数"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="最新更新集" prop="vodSerial">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodSerial"-->
<!--                    placeholder="请输入最新更新集"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="来源卫视/频道" prop="vodTv">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodTv"-->
<!--                    placeholder="请输入来源卫视/频道"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="每周更新时间 如:每周五、周六晚22:00" prop="vodWeekday">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodWeekday"-->
<!--                    placeholder="请输入每周更新时间 如:每周五、周六晚22:00"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="地区" prop="vodArea">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodArea"-->
<!--                    placeholder="请输入地区"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="语言" prop="vodLang">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodLang"-->
<!--                    placeholder="请输入语言"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="年份" prop="vodYear">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodYear"-->
<!--                    placeholder="请输入年份"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="版本 如:高清版本,1080p" prop="vodVersion">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodVersion"-->
<!--                    placeholder="请输入版本 如:高清版本,1080p"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="状态 如:正片,预告片" prop="vodState">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodState"-->
<!--                    placeholder="请输入状态 如:正片,预告片"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="编剧" prop="vodAuthor">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodAuthor"-->
<!--                    placeholder="请输入编剧"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="锁定状态" prop="vodLock">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodLock"-->
<!--                    placeholder="请输入锁定状态"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="资源等级" prop="vodLevel">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodLevel"-->
<!--                    placeholder="请输入资源等级"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="播放积分" prop="vodPointsPlay">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodPointsPlay"-->
<!--                    placeholder="请输入播放积分"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="下载积分" prop="vodPointsDown">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodPointsDown"-->
<!--                    placeholder="请输入下载积分"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="点击量" prop="vodHits">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodHits"-->
<!--                    placeholder="请输入点击量"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="日点击量" prop="vodHitsDay">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodHitsDay"-->
<!--                    placeholder="请输入日点击量"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="周点击量" prop="vodHitsWeek">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodHitsWeek"-->
<!--                    placeholder="请输入周点击量"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="月点击量" prop="vodHitsMonth">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodHitsMonth"-->
<!--                    placeholder="请输入月点击量"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="时长" prop="vodDuration">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodDuration"-->
<!--                    placeholder="请输入时长"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="评分" prop="vodScore">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodScore"-->
<!--                    placeholder="请输入评分"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="更新时间" prop="vodTime">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodTime"-->
<!--                    placeholder="请输入更新时间"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="豆瓣ID" prop="vodDoubanId">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodDoubanId"-->
<!--                    placeholder="请输入豆瓣ID"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="豆瓣评分" prop="vodDoubanScore">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodDoubanScore"-->
<!--                    placeholder="请输入豆瓣评分"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="资源来源 如:youku,qq" prop="vodPlayFrom">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodPlayFrom"-->
<!--                    placeholder="请输入资源来源 如:youku,qq"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="播放途径" prop="vodPlayServer">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodPlayServer"-->
<!--                    placeholder="请输入播放途径"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="播放提示" prop="vodPlayNote">-->
<!--                <el-input-->
<!--                    v-model="queryParams.vodPlayNote"-->
<!--                    placeholder="请输入播放提示"-->
<!--                    clearable-->
<!--                    @keyup.enter="handleQuery"-->
<!--                />-->
<!--            </el-form-item>-->
<!--            <el-form-item label="创建时间" prop="createTime">-->
<!--                <el-date-picker clearable-->
<!--                                v-model="queryParams.createTime"-->
<!--                                type="date"-->
<!--                                value-format="YYYY-MM-DD"-->
<!--                                placeholder="请选择创建时间">-->
<!--                </el-date-picker>-->
<!--            </el-form-item>-->
            <el-form-item label="更新时间" prop="updateTime">
                <el-date-picker clearable
                                v-model="queryParams.updateTime"
                                type="date"
                                value-format="YYYY-MM-DD"
                                placeholder="请选择更新时间">
                </el-date-picker>
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
                    v-hasPermi="['vodCollect:vodList:add']"
                >新增</el-button>
            </el-col>
            <el-col :span="1.5">
                <el-button
                    type="success"
                    plain
                    icon="Edit"
                    :disabled="single"
                    @click="handleUpdate"
                    v-hasPermi="['vodCollect:vodList:edit']"
                >修改</el-button>
            </el-col>
            <el-col :span="1.5">
                <el-button
                    type="danger"
                    plain
                    icon="Delete"
                    :disabled="multiple"
                    @click="handleDelete"
                    v-hasPermi="['vodCollect:vodList:remove']"
                >删除</el-button>
            </el-col>
            <el-col :span="1.5">
                <el-button
                    type="warning"
                    plain
                    icon="Download"
                    @click="handleExport"
                    v-hasPermi="['vodCollect:vodList:export']"
                >导出</el-button>
            </el-col>
            <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
        </el-row>

        <el-table v-loading="loading" :data="vodListList" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55" align="center" />
            <el-table-column label="ID" align="center" prop="id" />
            <el-table-column label="采集来源" align="center" prop="collectId" />
<!--            <el-table-column label="原始ID" align="center" prop="vodId" />-->
<!--            <el-table-column label="原始类型" align="center" prop="typeId" />-->
            <el-table-column label="标题" align="center" prop="vodName" />
<!--            <el-table-column label="子标题" align="center" prop="vodSub" />-->
<!--            <el-table-column label="拼音" align="center" prop="vodEn" />-->
            <el-table-column label="状态" align="center" prop="vodStatus" />
<!--            <el-table-column label="首字母" align="center" prop="vodLetter" />-->
            <el-table-column label="标签" align="center" prop="vodTag" />
            <el-table-column label="分类" align="center" prop="vodClass" />
<!--            <el-table-column label="图片" align="center" prop="vodPic" />-->
<!--            <el-table-column label="演员" align="center" prop="vodActor" />-->
            <el-table-column label="导演" align="center" prop="vodDirector" />
<!--            <el-table-column label="简介" align="center" prop="vodBlurb" />-->
            <el-table-column label="备注" align="center" prop="vodRemarks" />
            <el-table-column label="总集数" align="center" prop="vodTotal" />
            <el-table-column label="最新更新集" align="center" prop="vodSerial" />
            <el-table-column label="来源卫视/频道" align="center" prop="vodTv" />
            <el-table-column label="每周更新时间" align="center" prop="vodWeekday" />
            <el-table-column label="地区" align="center" prop="vodArea" />
            <el-table-column label="语言" align="center" prop="vodLang" />
            <el-table-column label="年份" align="center" prop="vodYear" />
            <el-table-column label="版本" align="center" prop="vodVersion" />
            <el-table-column label="状态" align="center" prop="vodState" />
            <el-table-column label="编剧" align="center" prop="vodAuthor" />
            <el-table-column label="锁定状态" align="center" prop="vodLock" />
            <el-table-column label="资源等级" align="center" prop="vodLevel" />
            <el-table-column label="播放积分" align="center" prop="vodPointsPlay" />
            <el-table-column label="下载积分" align="center" prop="vodPointsDown" />
            <el-table-column label="点击量" align="center" prop="vodHits" />
            <el-table-column label="日点击量" align="center" prop="vodHitsDay" />
            <el-table-column label="周点击量" align="center" prop="vodHitsWeek" />
            <el-table-column label="月点击量" align="center" prop="vodHitsMonth" />
            <el-table-column label="时长" align="center" prop="vodDuration" />
            <el-table-column label="评分" align="center" prop="vodScore" />
            <el-table-column label="更新时间" align="center" prop="vodTime" />
            <el-table-column label="豆瓣ID" align="center" prop="vodDoubanId" />
            <el-table-column label="豆瓣评分" align="center" prop="vodDoubanScore" />
<!--            <el-table-column label="详情" align="center" prop="vodContent" />-->
<!--            <el-table-column label="资源来源 如:youku,qq" align="center" prop="vodPlayFrom" />-->
<!--            <el-table-column label="播放途径" align="center" prop="vodPlayServer" />-->
<!--            <el-table-column label="播放提示" align="center" prop="vodPlayNote" />-->
<!--            <el-table-column label="播放链接" align="center" prop="vodPlayUrl" />-->
            <el-table-column label="创建时间" align="center" prop="createTime" width="180">
                <template #default="scope">
                    <span>{{ parseTime(scope.row.createTime, '{y}-{m}-{d}') }}</span>
                </template>
            </el-table-column>
            <el-table-column label="更新时间" align="center" prop="updateTime" width="180">
                <template #default="scope">
                    <span>{{ parseTime(scope.row.updateTime, '{y}-{m}-{d}') }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
                <template #default="scope">
                    <el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)" v-hasPermi="['vodCollect:vodList:edit']">修改</el-button>
                    <el-button link type="primary" icon="Delete" @click="handleDelete(scope.row)" v-hasPermi="['vodCollect:vodList:remove']">删除</el-button>
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

        <!-- 添加或修改VodCollect 影视数据列表对话框 -->
        <el-dialog :title="title" v-model="open" width="500px" append-to-body>
            <el-form ref="vodListRef" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="采集来源" prop="collectId">
                    <el-input v-model="form.collectId" placeholder="请输入采集来源" />
                </el-form-item>
<!--                <el-form-item label="原始ID" prop="vodId">-->
<!--                    <el-input v-model="form.vodId" placeholder="请输入原始ID" />-->
<!--                </el-form-item>-->
<!--                <el-form-item label="原始类型" prop="typeId">-->
<!--                    <el-input v-model="form.typeId" placeholder="请输入原始类型" />-->
<!--                </el-form-item>-->
                <el-form-item label="标题" prop="vodName">
                    <el-input v-model="form.vodName" placeholder="请输入标题" />
                </el-form-item>
                <el-form-item label="子标题" prop="vodSub">
                    <el-input v-model="form.vodSub" placeholder="请输入子标题" />
                </el-form-item>
<!--                <el-form-item label="拼音" prop="vodEn">-->
<!--                    <el-input v-model="form.vodEn" placeholder="请输入拼音" />-->
<!--                </el-form-item>-->
<!--                <el-form-item label="首字母" prop="vodLetter">-->
<!--                    <el-input v-model="form.vodLetter" placeholder="请输入首字母" />-->
<!--                </el-form-item>-->
                <el-form-item label="标签" prop="vodTag">
                    <el-input v-model="form.vodTag" placeholder="请输入标签" />
                </el-form-item>
                <el-form-item label="分类" prop="vodClass">
                    <el-input v-model="form.vodClass" placeholder="请输入分类" />
                </el-form-item>
<!--                <el-form-item label="图片" prop="vodPic">-->
<!--                    <el-input v-model="form.vodPic" placeholder="请输入图片" />-->
<!--                </el-form-item>-->
                <el-form-item label="演员" prop="vodActor">
                    <el-input v-model="form.vodActor" placeholder="请输入演员" />
                </el-form-item>
                <el-form-item label="导演" prop="vodDirector">
                    <el-input v-model="form.vodDirector" placeholder="请输入导演" />
                </el-form-item>
<!--                <el-form-item label="简介" prop="vodBlurb">-->
<!--                    <el-input v-model="form.vodBlurb" placeholder="请输入简介" />-->
<!--                </el-form-item>-->
                <el-form-item label="备注" prop="vodRemarks">
                    <el-input v-model="form.vodRemarks" placeholder="请输入备注" />
                </el-form-item>
                <el-form-item label="总集数" prop="vodTotal">
                    <el-input v-model="form.vodTotal" placeholder="请输入总集数" />
                </el-form-item>
                <el-form-item label="最新更新集" prop="vodSerial">
                    <el-input v-model="form.vodSerial" placeholder="请输入最新更新集" />
                </el-form-item>
                <el-form-item label="来源TV" prop="vodTv">
                    <el-input v-model="form.vodTv" placeholder="请输入来源卫视/频道" />
                </el-form-item>
                <el-form-item label="每周更新时间" prop="vodWeekday">
                    <el-input v-model="form.vodWeekday" placeholder="请输入每周更新时间" />
                </el-form-item>
                <el-form-item label="地区" prop="vodArea">
                    <el-input v-model="form.vodArea" placeholder="请输入地区" />
                </el-form-item>
                <el-form-item label="语言" prop="vodLang">
                    <el-input v-model="form.vodLang" placeholder="请输入语言" />
                </el-form-item>
                <el-form-item label="年份" prop="vodYear">
                    <el-input v-model="form.vodYear" placeholder="请输入年份" />
                </el-form-item>
                <el-form-item label="版本" prop="vodVersion">
                    <el-input v-model="form.vodVersion" placeholder="请输入版本" />
                </el-form-item>
                <el-form-item label="状态" prop="vodState">
                    <el-input v-model="form.vodState" placeholder="请输入状态" />
                </el-form-item>
                <el-form-item label="编剧" prop="vodAuthor">
                    <el-input v-model="form.vodAuthor" placeholder="请输入编剧" />
                </el-form-item>
                <el-form-item label="锁定状态" prop="vodLock">
                    <el-input v-model="form.vodLock" placeholder="请输入锁定状态" />
                </el-form-item>
                <el-form-item label="资源等级" prop="vodLevel">
                    <el-input v-model="form.vodLevel" placeholder="请输入资源等级" />
                </el-form-item>
                <el-form-item label="播放积分" prop="vodPointsPlay">
                    <el-input v-model="form.vodPointsPlay" placeholder="请输入播放积分" />
                </el-form-item>
                <el-form-item label="下载积分" prop="vodPointsDown">
                    <el-input v-model="form.vodPointsDown" placeholder="请输入下载积分" />
                </el-form-item>
                <el-form-item label="点击量" prop="vodHits">
                    <el-input v-model="form.vodHits" placeholder="请输入点击量" />
                </el-form-item>
                <el-form-item label="日点击量" prop="vodHitsDay">
                    <el-input v-model="form.vodHitsDay" placeholder="请输入日点击量" />
                </el-form-item>
                <el-form-item label="周点击量" prop="vodHitsWeek">
                    <el-input v-model="form.vodHitsWeek" placeholder="请输入周点击量" />
                </el-form-item>
                <el-form-item label="月点击量" prop="vodHitsMonth">
                    <el-input v-model="form.vodHitsMonth" placeholder="请输入月点击量" />
                </el-form-item>
                <el-form-item label="时长" prop="vodDuration">
                    <el-input v-model="form.vodDuration" placeholder="请输入时长" />
                </el-form-item>
                <el-form-item label="评分" prop="vodScore">
                    <el-input v-model="form.vodScore" placeholder="请输入评分" />
                </el-form-item>
                <el-form-item label="更新时间" prop="vodTime">
                    <el-input v-model="form.vodTime" placeholder="请输入更新时间" />
                </el-form-item>
                <el-form-item label="豆瓣ID" prop="vodDoubanId">
                    <el-input v-model="form.vodDoubanId" placeholder="请输入豆瓣ID" />
                </el-form-item>
                <el-form-item label="豆瓣评分" prop="vodDoubanScore">
                    <el-input v-model="form.vodDoubanScore" placeholder="请输入豆瓣评分" />
                </el-form-item>
<!--                <el-form-item label="详情">-->
<!--                    <editor v-model="form.vodContent" :min-height="192"/>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="资源来源" prop="vodPlayFrom">-->
<!--                    <el-input v-model="form.vodPlayFrom" placeholder="请输入资源来源 如:youku,qq" />-->
<!--                </el-form-item>-->
<!--                <el-form-item label="播放途径" prop="vodPlayServer">-->
<!--                    <el-input v-model="form.vodPlayServer" placeholder="请输入播放途径" />-->
<!--                </el-form-item>-->
<!--                <el-form-item label="播放提示" prop="vodPlayNote">-->
<!--                    <el-input v-model="form.vodPlayNote" placeholder="请输入播放提示" />-->
<!--                </el-form-item>-->
<!--                <el-form-item label="播放链接" prop="vodPlayUrl">-->
<!--                    <el-input v-model="form.vodPlayUrl" type="textarea" placeholder="请输入内容" />-->
<!--                </el-form-item>-->
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

<script setup name="VodList">
import { listVodList, getVodList, delVodList, addVodList, updateVodList } from "@/api/vodCollect/vodList";

const { proxy } = getCurrentInstance();

const vodListList = ref([]);
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
        collectId: null,
        vodId: null,
        typeId: null,
        vodName: null,
        vodSub: null,
        vodEn: null,
        vodStatus: null,
        vodLetter: null,
        vodTag: null,
        vodClass: null,
        vodPic: null,
        vodActor: null,
        vodDirector: null,
        vodBlurb: null,
        vodRemarks: null,
        vodTotal: null,
        vodSerial: null,
        vodTv: null,
        vodWeekday: null,
        vodArea: null,
        vodLang: null,
        vodYear: null,
        vodVersion: null,
        vodState: null,
        vodAuthor: null,
        vodLock: null,
        vodLevel: null,
        vodPointsPlay: null,
        vodPointsDown: null,
        vodHits: null,
        vodHitsDay: null,
        vodHitsWeek: null,
        vodHitsMonth: null,
        vodDuration: null,
        vodScore: null,
        vodTime: null,
        vodDoubanId: null,
        vodDoubanScore: null,
        vodContent: null,
        vodPlayFrom: null,
        vodPlayServer: null,
        vodPlayNote: null,
        vodPlayUrl: null,
        createTime: null,
        updateTime: null
    },
    rules: {
        collectId: [
            { required: true, message: "采集来源不能为空", trigger: "blur" }
        ],
    }
});

const { queryParams, form, rules } = toRefs(data);

/** 查询VodCollect 影视数据列表列表 */
function getList() {
    loading.value = true;
    listVodList(queryParams.value).then(response => {
        vodListList.value = response.rows;
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
        vodId: null,
        typeId: null,
        vodName: null,
        vodSub: null,
        vodEn: null,
        vodStatus: null,
        vodLetter: null,
        vodTag: null,
        vodClass: null,
        vodPic: null,
        vodActor: null,
        vodDirector: null,
        vodBlurb: null,
        vodRemarks: null,
        vodTotal: null,
        vodSerial: null,
        vodTv: null,
        vodWeekday: null,
        vodArea: null,
        vodLang: null,
        vodYear: null,
        vodVersion: null,
        vodState: null,
        vodAuthor: null,
        vodLock: null,
        vodLevel: null,
        vodPointsPlay: null,
        vodPointsDown: null,
        vodHits: null,
        vodHitsDay: null,
        vodHitsWeek: null,
        vodHitsMonth: null,
        vodDuration: null,
        vodScore: null,
        vodTime: null,
        vodDoubanId: null,
        vodDoubanScore: null,
        vodContent: null,
        vodPlayFrom: null,
        vodPlayServer: null,
        vodPlayNote: null,
        vodPlayUrl: null,
        createTime: null,
        updateTime: null
    };
    proxy.resetForm("vodListRef");
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
    // reset();
    open.value = true;
    title.value = "添加VodCollect 影视数据列表";
}

/** 修改按钮操作 */
function handleUpdate(row) {
    reset();
    const _id = row.id || ids.value
    getVodList(_id).then(response => {
        form.value = response.data;
        open.value = true;
        title.value = "修改VodCollect 影视数据列表";
    });
}

/** 提交按钮 */
function submitForm() {
    proxy.$refs["vodListRef"].validate(valid => {
        if (valid) {
            if (form.value.id != null) {
                updateVodList(form.value).then(response => {
                    proxy.$modal.msgSuccess("修改成功");
                    open.value = false;
                    getList();
                });
            } else {
                addVodList(form.value).then(response => {
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
    proxy.$modal.confirm('是否确认删除VodCollect 影视数据列表编号为"' + _ids + '"的数据项？').then(function() {
        return delVodList(_ids);
    }).then(() => {
        getList();
        proxy.$modal.msgSuccess("删除成功");
    }).catch(() => {});
}

/** 导出按钮操作 */
function handleExport() {
    proxy.download('vodCollect/vodList/export', {
        ...queryParams.value
    }, `vodList_${new Date().getTime()}.xlsx`)
}

getList();
</script>
