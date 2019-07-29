<template>
  <div class="app">
    <main class="main">
      <router-view />
    </main>
    <footer class="footer">
      <router-link to="/home"
                   tag="span">首页</router-link>
      <router-link to="/mian"
                   tag="span">内容</router-link>
      <router-link to="/my"
                   tag="span">我的</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}
html,
body,
.app {
  width: 100%;
  height: 100%;
}
.app {
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
  overflow: auto;
}
.footer {
  height: 50px;
  display: flex;
}
.footer span {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer .router-link-active {
  color: red;
}
</style>
