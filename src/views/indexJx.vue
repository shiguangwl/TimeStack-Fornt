<template>
    <div id="container" v-show="isShowBut">
        <button id="floating-btn"></button>
        <div id="content">要显示/隐藏的内容</div>
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


let isShowBut = ref(true);
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

</script>

<style scoped lang="scss">
#container {
  background-color: #1ab394;
  // 固定在右上角
  position: fixed;
  right: 30px;
  top: 30px;
  z-index: 999;
  // 按钮样式
  #floating-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 0 3px #ccc;
    cursor: pointer;
    // 按钮文字样式
    &::after {
      content: '但幕';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  // 要显示/隐藏的内容
  #content {
    width: 200px;
    height: 200px;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 0 3px #ccc;
    position: absolute;
    top: 50px;
    right: 0;
    display: none;
  }

  // 按钮悬浮时显示内容
  &:hover {
    #content {
      display: block;
    }
  }

}
</style>

