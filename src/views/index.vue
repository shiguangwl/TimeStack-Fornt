<template>
  <div class="app-container home">
    <h1>dashBoard - 仪表盘1.0 Dev</h1>
  </div>
</template>

<script setup name="Index">
const version = ref('3.8.5')


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

</style>

