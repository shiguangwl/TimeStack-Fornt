<template>
  <div style="width: 100%;height: 100%">
<!--      <h1>{{url}}</h1>-->
      <NPlayer
              :options="options"
              :set="setPlayer"
      />
  </div>
</template>

<script setup name="IndexJx">


import {reactive, ref} from "vue";
import {useRoute} from "vue-router";
import { searchVodList } from "@/api/vodCollect/vodList";
import {getCodeImg} from "@/api/login";

const danmakuOptions = {
    area: 0.25,
    items: [
        { time: 1, text: '弹幕～' },
        { time: 2, text: '弹幕～' },
        { time: 4, text: '弹幕～' },
        { time: 4, text: '弹幕～' }
    ]
}

const url = ref(useRoute().query.url);
const player = ref('');
const options = reactive({
    // src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' ,
    // plugins: [new Danmaku(danmakuOptions)]
})

function setPlayer(p){
    player.value = p
}


searchVodList({"kw":url.value}).then(res => {
    let froms = {};
    froms = res.data[0].vodPlayUrl;
    let title = froms.xlm3u8[0].title;
    let url = froms.xlm3u8[0].url;

    options.value.src = url


});
</script>

<style scoped lang="scss">

</style>

