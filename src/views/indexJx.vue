<template>
    <div @mouseover="mouseoverDiv" @mouseout="onmouseoutDiv" id="container" :style="customStyle" v-show="isShowBut">
        <div class="floating-btn"><span>但幕</span></div>
        <div v-show="contentShow" id="content">
            <div class="item">
                <div class="l">
                    <img alt="你好" src="https://img0.baidu.com/it/u=4162443464,2854908495&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500">
                </div>
                <div class="r">
                    <div class="info">
                        <div class="title">我是标题</div>
                        <div class="row">
                            <div class="tag"><span>类型：</span>动漫</div>
                            <div class="tag"><span>地区：</span>日本</div>
                            <div class="tag"><span>年份：</span>2021</div>
                            <div class="tag"><span>主演：</span>第三方,电饭锅,是</div>
                        </div>
                        <div class="row">
                            <div class="tag"><span>简介：</span>第三方,水电费水电费水电费多少肺癌 以后刚发的还让他会更好富贵花园提建议,是</div>
                        </div>
                    </div>
                    <div class="episodes">
                        <div class="episodeItem">1</div>
                        <div class="episodeItem">2</div>
                        <div class="episodeItem">3</div>
                        <div class="episodeItem">4</div>
                        <div class="episodeItem">5</div>
                        <div class="episodeItem">6</div>
                        <div class="episodeItem">7</div>
                        <div class="episodeItem">8</div>
                        <div class="episodeItem">9</div>
                        <div class="episodeItem">10</div>
                        <div class="episodeItem">11</div>
                        <div class="episodeItem">12</div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="l">
                    <img alt="你好" src="https://img0.baidu.com/it/u=4162443464,2854908495&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500">
                </div>
                <div class="r">
                    <div class="info">
                        <div class="title">我是标题</div>
                        <div class="row">
                            <div class="tag"><span>类型：</span>动漫</div>
                            <div class="tag"><span>地区：</span>日本</div>
                            <div class="tag"><span>年份：</span>2021</div>
                            <div class="tag"><span>主演：</span>第三方,电饭锅,是</div>
                        </div>
                        <div class="row">
                            <div class="tag"><span>简介：</span>第三方,水电费水电费水电费多少肺癌 以后刚发的还让他会更好富贵花园提建议,是</div>
                        </div>
                    </div>
                    <div class="episodes">
                        <div class="episodeItem">1</div>
                        <div class="episodeItem">2</div>
                        <div class="episodeItem">3</div>
                        <div class="episodeItem">4</div>
                        <div class="episodeItem">5</div>
                        <div class="episodeItem">6</div>
                        <div class="episodeItem">7</div>
                        <div class="episodeItem">8</div>
                        <div class="episodeItem">9</div>
                        <div class="episodeItem">10</div>
                        <div class="episodeItem">11</div>
                        <div class="episodeItem">12</div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="l">
                    <img alt="你好" src="https://img0.baidu.com/it/u=4162443464,2854908495&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500">
                </div>
                <div class="r">
                    <div class="info">
                        <div class="title">我是标题</div>
                        <div class="row">
                            <div class="tag"><span>类型：</span>动漫</div>
                            <div class="tag"><span>地区：</span>日本</div>
                            <div class="tag"><span>年份：</span>2021</div>
                            <div class="tag"><span>主演：</span>第三方,电饭锅,是</div>
                        </div>
                        <div class="row">
                            <div class="tag"><span>简介：</span>第三方,水电费水电费水电费多少肺癌 以后刚发的还让他会更好富贵花园提建议,是</div>
                        </div>
                    </div>
                    <div class="episodes">
                        <div class="episodeItem">1</div>
                        <div class="episodeItem">2</div>
                        <div class="episodeItem">3</div>
                        <div class="episodeItem">4</div>
                        <div class="episodeItem">5</div>
                        <div class="episodeItem">6</div>
                        <div class="episodeItem">7</div>
                        <div class="episodeItem">8</div>
                        <div class="episodeItem">9</div>
                        <div class="episodeItem">10</div>
                        <div class="episodeItem">11</div>
                        <div class="episodeItem">12</div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="l">
                    <img alt="你好" src="https://img0.baidu.com/it/u=4162443464,2854908495&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500">
                </div>
                <div class="r">
                    <div class="info">
                        <div class="title">我是标题</div>
                        <div class="row">
                            <div class="tag"><span>类型：</span>动漫</div>
                            <div class="tag"><span>地区：</span>日本</div>
                            <div class="tag"><span>年份：</span>2021</div>
                            <div class="tag"><span>主演：</span>第三方,电饭锅,是</div>
                        </div>
                        <div class="row">
                            <div class="tag"><span>简介：</span>第三方,水电费水电费水电费多少肺癌 以后刚发的还让他会更好富贵花园提建议,是</div>
                        </div>
                    </div>
                    <div class="episodes">
                        <div class="episodeItem">1</div>
                        <div class="episodeItem">2</div>
                        <div class="episodeItem">3</div>
                        <div class="episodeItem">4</div>
                        <div class="episodeItem">5</div>
                        <div class="episodeItem">6</div>
                        <div class="episodeItem">7</div>
                        <div class="episodeItem">8</div>
                        <div class="episodeItem">9</div>
                        <div class="episodeItem">10</div>
                        <div class="episodeItem">11</div>
                        <div class="episodeItem">12</div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="l">
                    <img alt="你好" src="https://img0.baidu.com/it/u=4162443464,2854908495&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500">
                </div>
                <div class="r">
                    <div class="info">
                        <div class="title">我是标题</div>
                        <div class="row">
                            <div class="tag"><span>类型：</span>动漫</div>
                            <div class="tag"><span>地区：</span>日本</div>
                            <div class="tag"><span>年份：</span>2021</div>
                            <div class="tag"><span>主演：</span>第三方,电饭锅,是</div>
                        </div>
                        <div class="row">
                            <div class="tag"><span>简介：</span>第三方,水电费水电费水电费多少肺癌 以后刚发的还让他会更好富贵花园提建议,是</div>
                        </div>
                    </div>
                    <div class="episodes">
                        <div class="episodeItem">1</div>
                        <div class="episodeItem">2</div>
                        <div class="episodeItem">3</div>
                        <div class="episodeItem">4</div>
                        <div class="episodeItem">5</div>
                        <div class="episodeItem">6</div>
                        <div class="episodeItem">7</div>
                        <div class="episodeItem">8</div>
                        <div class="episodeItem">9</div>
                        <div class="episodeItem">10</div>
                        <div class="episodeItem">11</div>
                        <div class="episodeItem">12</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style="display: none;width: 100%;height: 100%;">
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



const customStyle = reactive({
    width: '100px',
    height: '100px',
})

let isShowBut = ref(true);
let contentShow = ref(false);

const mouseoverDiv = function () {
    // isShowBut.value = true
    customStyle.width = '28%'
    customStyle.height = '95%'
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

const url = ref(useRoute().query.url);

const hls = new Hls()
let player = reactive({});


const options = reactive({
    plugins: [danmaku],
    contextMenus: ['loop', 'pip'],
    contextMenuToggle: true,
})

function init() {
    let video = player.danmaku.player.video
    video.style.objectFit = 'fill'
    let div = player.danmaku.el
    div.style.height = '85%'

    const sortedItems = [
        {time: 1, type: 'top', text: '欢迎使用弹幕影视', color: '#ff0000'},
        {time: 1, type: 'top', text: ',请勿相信任何广告', color: '#1700ff'},
        {time: 1, type: 'bottom', text: '请勿相信任何广告', color: '#ff0000'},
        {time: 1, type: 'bottom', text: '请勿相信任何广告', color: '#97ff00'},
        {time: 1, text: '测试弹幕1～'},
        {time: 2, text: '测试弹幕1～'},
        {time: 3, text: '测试弹幕1～'},
        {time: 4, text: '测试弹幕2～'}
    ]
    player.danmaku.resetItems(sortedItems)


    hls.attachMedia(player.video)
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        hls.loadSource('https://s.xlzys.com/play/lejgZR5a/index.m3u8')
    })


    /*    // searchVodList({"kw":url.value}).then(res => {
        //     let froms = {};
        //     froms = res.data[0].vodPlayUrl;
        //     let title = froms.xlm3u8[0].title;
        //     let url = froms.xlm3u8[0].url;
        //
        //     console.log(url)
        //     hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        //         hls.loadSource(url)
        //     })
        //
        // });*/
}

function setPlayer(p) {
    player = p
    init();
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
document.onkeydown = document.onkeyup = document.onkeypress = function (event) {
    if (event.keyCode === 123) {
        event.preventDefault();
        window.event.returnValue = false;
    }
}

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
    flex-grow : 1;
    width: 100%;
    background-color: #bfcbd9;
    display: flex;
    flex-direction: column;
    .item{
        border: #1f2d3d 1px solid;
        margin-bottom: 10px;
        width: 100%;
        display: flex;
        .l{
            height: 170px;
            width: 160px;
            img{
                height: 100%;
                width: 100%;
                object-fit: fill;
                //border-radius: 5px;
            }
        }
        .r{
            margin-left: 10px;
            .info{
                .title{
                    font-size: 20px;
                    font-weight: bold;
                }
                .row{
                    .tag{
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
                .episodeItem{
                    height: 20px;
                    padding: 5px 10px;
                }
            }
        }
    }
}
</style>

