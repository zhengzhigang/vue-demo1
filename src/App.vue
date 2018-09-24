<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  // components: {
  //   HelloWorld
  // },
}
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ul, ol, li, dl, dt, form, th, td, hr {
    margin: 0;
    padding: 0;
}

html {
    min-height: 100%;
}

body {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 100%;
    width: 100%;
    margin: auto !important;
    font: 14px/1.3 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
    color: #333;
    background-color: #F5F5F5 !important;
}

h1, h2, h3, h4, h5, h6, p, input, button, select, textarea {
    font-size: inherit;
    outline: none;
}

ul, li {
    list-style: none;
}
a {
  text-decoration: none;
}
hr {
  margin: 20px 0;
  height: 5px;
  background: lightblue;
  border: none;
}
button,
input,
optgroup,
select,
textarea {
  margin: 0; /* 2 */
}
button, input { /* 1 */
  overflow: visible;
}
button, select { /* 1 */
  text-transform: none;
  -webkit-appearance: none;
}
button, html [type="button"], /* 1 */
[type="reset"],
[type="submit"] {
  -webkit-appearance: none; /* 2 */
  border: 0;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted red;
}
.clearfix:after{
  display:block;
  clear:both;
  content:"";
  visibility:hidden;
  height:0;
  }
.clearfix{
  zoom:1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 40px;
}
</style>
