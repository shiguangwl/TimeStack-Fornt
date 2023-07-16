<template>
    <div @mouseover="mouseoverDiv" @mouseout="onmouseoutDiv" id="container" :style="customStyle" v-show="isShowBut">
        <div class="floating-btn"><span>但幕</span></div>
        <div v-show="contentShow" id="content">
            <div v-for="item in vData" class="item">
                <div class="l">
                    <img alt="你好" :src="item.vodPic">
                </div>
                <div class="r">
                    <div class="info">
                        <div class="title">{{item.vodName}}</div>
                        <div class="row">
                            <div class="tag"><span>类型：</span>{{item.vodTag }}</div>
                            <div class="tag"><span>地区：</span>{{item.vodArea}}</div>
                            <div class="tag"><span>年份：</span>2021</div>
                            <div class="tag"><span>主演：</span>第三方,电饭锅,是</div>
                        </div>
                        <div class="row">
                            <div  class="tag"><span>简介：</span>{{removeHtmlTags(item.vodContent)}}</div>
                        </div>
                    </div>
                    <div class="source" v-for="(value, key) in item.vodPlayUrl">
                        <span style="font-size: 16px;">{{ key }}</span>
                        <div class="episodes">
                            <div v-for="episode in value" @click="clickEpisode(episode.url)" class="episodeItem">{{ episode.title }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style="width: 100%;height: 100%;">
        <NPlayer
                :options="options"
                :set="setPlayer"
        />
    </div>
</template>

<script setup name="IndexJx">
import {reactive, ref} from "vue";
import {useRoute} from "vue-router";
import Danmaku from "@nplayer/danmaku";
import Hls from 'hls.js'
import { searchVodList, getBullet } from "@/api/vodCollect/vodList";
// import { ElMessage } from 'element-plus'
//
//
// ElMessage.success("欢迎使用但幕影视~")

// ===================================== 样式 Start ==================================
const customStyle = reactive({
    width: '100px',
    height: '100px',
})
const mouseoverDiv = function () {
  // isShowBut.value = true
  customStyle.width = '40%'
  customStyle.height = '85%'
  contentShow.value = true;
}
const onmouseoutDiv = function () {
    customStyle.width = '100px'
    customStyle.height = '100px'
    contentShow.value = false;
}
let isShowBut = ref(true);
let contentShow = ref(false);
// ===================================== 样式 End ==================================


// =============================== 播放器配置 Start ===============================
const url = ref(useRoute().query.url);
const title = ref('');
const danmuList = reactive([
  {time: 1, type: 'top', text: '欢迎使用弹幕影视', color: '#ff0000',isMe: true,force: true},
  {time: 1.5, type: 'top', text: '资源来自互联网,请勿相信任何广告', color: '#1700ff',isMe: true,force: true},
  {time: 2, type: 'top', text: '资源来自互联网,请勿相信任何广告', color: '#1700ff',isMe: true,force: true},
  {time: 2.5, type: 'top', text: '资源来自互联网,请勿相信任何广告', color: '#1700ff',isMe: true,force: true},
  {time: 3, type: 'top', text: '资源来自互联网,请勿相信任何广告', color: '#1700ff',isMe: true,force: true},
])


const danmaku = new Danmaku({
  items: [],
  speed: 0.75,
})
let vData = reactive({})

const hls = new Hls()
let player = reactive({});
const options = reactive({
    plugins: [danmaku],
    contextMenus: ['loop', 'pip'],
    contextMenuToggle: true,
})

// 初始化绑定
function setPlayer(p) {
    player = p
    init();
}

async function init() {
  // 弹幕视图配置合适高度
  let video = player.danmaku.player.video;
  video.style.objectFit = 'fill';
  let div = player.danmaku.el;
  div.style.height = '85%';

  /** 加载弹幕数据 **/

  let danmaData = await getBullet({"url": url.value});
  let danmuObj = JSON.parse(danmaData.msg);
  // 解析接口返回数据
  parseDanmu(danmuObj)

  if (!title.value){
    console.log("获取title为空",title.value,danmuList)
    return;
  }
  // 装载弹幕
  player.danmaku.resetItems(danmuList)


  /** 获取播放资源  **/
  // 加载数据 TODO 待优化检索资源
  let kw = title.value.split(" ")[0].trim();
  let res = await searchVodList({"kw": title.value});
  vData = res.data;

  // HLS配置
  hls.attachMedia(player.video)
  // // 自动播放
  // player.on(EVENT.LOADED_METADATA, function () {
  //   player.play();
  // })

}

// 点击播放事件
function clickEpisode(url){
    console.log("播放链接:",url)
    hls.loadSource(url)
}


// 去除html标签
function removeHtmlTags(str) {
    return str.replace(/<[^>]*>/g, '');
}



// 解析弹幕
function parseDanmu(danmu) {
  console.log("弹幕接口数据:",danmu)
  title.value = danmu.title;

  // 判断url是否包含bilibili
  if (url.value.indexOf("bilibili") !== -1) {
    // bilibili弹幕
    parseBilibiliXml(danmu.url);
  } else {
    // 其他弹幕
    /*    {
      "timepoint": 1,
        "content": "一博我来💚",
        "ct": 1,
        "size": 20,
        "color": 16777215,
        "unixtime": 1686988954,
        "uid": 1291286829
    }*/
    let contentList = danmu.content;
    for (let i = 0; i < contentList.length; i++) {
      let item = contentList[i];
      let danmuItem = {
        time: item.timepoint,
        type: 'scroll',
        text: item.content,
        color: '#' + item.color.toString(16)
      }
      danmuList.push(danmuItem)
    }

    console.log("弹幕装载成功条数",contentList.length)
  }
}


// 解析B站xml文件
function parseBilibiliXml(url){

}
</script>

<style scoped lang="scss">
#container {
    // 设置超出显示滚动条
    overflow-x: hidden;
    overflow-y: scroll;

    z-index: 9999;
    padding: 0 10px;
    // 内容垂直分布,填充全部
    display: flex;
    flex-direction: column;
    //justify-content: space-between;

    // 固定在右上角
    border-radius: 5px;
    position: fixed;
    right: 30px;
    top: 30px;
    transition: all 0.3s;
    &:hover{
        background-color: #1c84c6;
        // 设置 floating-btn 颜色为#fff;
        .floating-btn{
            color: #fff;
        }
    }
    .floating-btn{
        background-color: #1c84c6;
        border-radius: 15px;
        height: 30px;
        width: 70px;
        color: crimson;
        font-size: 19px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.5s;
    }
}
#content{
    margin-top: 5px;
    flex-grow : 1;
    width: 100%;
    //background-color: #bfcbd9;
    display: flex;
    flex-direction: column;
    .item{
        border: #1f2d3d 1px solid;
        margin-bottom: 10px;
        width: 100%;
        display: flex;
        .l{
            width: 30%;
            img{
                height: 170px;
                width: 120px;
                object-fit: fill;
                //border-radius: 5px;
            }
        }
        .r{
            width: 70%;
            .info{
                .title{
                    font-size: 20px;
                    font-weight: bold;
                }
                .row{
                    display: flex;
                    // 自动换行
                    flex-wrap: wrap;

                    .tag{
                        // 省略超过100字的内容省略号显示结尾
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        span{
                            color: #515a6e;
                        }
                        background-color: #1c84c6;
                        color: #fff;
                        padding: 2px 5px;
                        margin: 5px;
                        border-radius: 5px;
                    }
                }
            }
            .episodes{
                display: flex;
                flex-wrap: wrap;
                .episodeItem{
                    text-align: center;
                    height: 30px;
                    padding: 5px 5px;
                    margin: 5px;
                    background-color: #7171C6;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>

