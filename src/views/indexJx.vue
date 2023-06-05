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
                            <div  class="tag"><span>简介：</span>{{item.vodContent}}</div>
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
import {searchVodList} from "@/api/vodCollect/vodList";



const customStyle = reactive({
    width: '100px',
    height: '100px',
})

let isShowBut = ref(true);
let contentShow = ref(false);

const mouseoverDiv = function () {
    // isShowBut.value = true
    customStyle.width = '30%'
    customStyle.height = '80%'
    contentShow.value = true;
}
const onmouseoutDiv = function () {
    customStyle.width = '100px'
    customStyle.height = '100px'
    contentShow.value = false;
}




// // 3秒内没有移动鼠标，隐藏按钮,移动鼠标显示按钮
// let timer = null;
// document.onmousemove = function () {
//     clearTimeout(timer);
//     isShowBut.value = true
//     timer = setTimeout(function () {
//         isShowBut.value = false
//     }, 3000)
// }

const danmaku = new Danmaku({
    area: 0.25,
    items: []
})
let vData = reactive({})
const url = ref(useRoute().query.url);

const hls = new Hls()
let player = reactive({});


const options = reactive({
    plugins: [danmaku],
    contextMenus: ['loop', 'pip'],
    contextMenuToggle: true,
})

async function init() {
    // 弹幕视图配置
    let video = player.danmaku.player.video
    video.style.objectFit = 'fill'
    let div = player.danmaku.el
    div.style.height = '85%'
    // 警告弹幕数据
    const sortedItems = [
        {time: 1, type: 'top', text: '欢迎使用弹幕影视', color: '#ff0000'},
        {time: 1, type: 'top', text: ',请勿相信任何广告', color: '#1700ff'},
        {time: 1, type: 'bottom', text: '请勿相信任何广告', color: '#ff0000'},
        {time: 1, type: 'bottom', text: '请勿相信任何广告', color: '#97ff00'},
        {time: 1, type: 'bottom', text: '欢迎使用弹幕影视', color: '#8300ff'},
    ]
    player.danmaku.resetItems(sortedItems)





    // 加载数据
    let res = await searchVodList({"kw": url.value});
    vData = res.data;

    // HLS配置
    hls.attachMedia(player.video)
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        hls.loadSource("https://vip.lz-cdn8.com/20220429/5418_870a0718/index.m3u8")
    })
}

function setPlayer(p) {
    player = p
    init();
}

// 点击播放
function clickEpisode(url){
    console.log("播放链接:",url)
    hls.attachMedia(player.video)
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        hls.loadSource(url)
    })
}

/*// document.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// });
//
// console.log = function() {};
// console.error = function() {};
// console.warn = function() {};
//
// setInterval(function() {
//     if (window.console && window.console.firebug) {
//         // 开发者工具已打开
//         // 在这里可以执行一些操作或显示警告信息
//     }
// }, 1000);*/


// 禁用F12
// document.onkeydown = document.onkeyup = document.onkeypress = function (event) {
//     if (event.keyCode === 123) {
//         event.preventDefault();
//         window.event.returnValue = false;
//     }
// }

// setInterval(function () {
//     const before = new Date();
//     (function(){}).constructor("debugger")();
//     // debugger;
//     const after = new Date();
//     const cost = after.getTime() - before.getTime();
//     if (cost > 100) {
//         document.body.innerHTML='年轻人，不要太好奇';
//         window.close();
//         window.location = "about:blank";
//     }
// }, 1000);


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
                    width: 30px;
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

