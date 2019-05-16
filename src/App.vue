<template>
  <div id="app">

    <!-- 1 mint-ui组件实现的顶部Header -->
    <mt-header fixed title="Shop"></mt-header> 
    <!-- 2 HomeVue组件 -->
    <router-view/>
    <!--3  m-ui组件实现的底部tabber-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/tabbar-with-chat">
        <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link class="mui-tab-item" to="/tabbar-with-contact">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </router-link>
      <router-link class="mui-tab-item" to="/tabbar-with-map">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
