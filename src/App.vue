<template>
  <div id="app">

        <header class="header">
          <h2>消息</h2>
        </header>
        <main class="main">
          
       <router-view/>
        </main>
        <footer class="footer">
            <ul class="list">
                <li>
                  <router-link to='/home'>信息</router-link>
                </li>
                <li>
                  <router-link to='/mine'>我的</router-link>
                </li>
                <li>
                  <router-link to='/share'>分享</router-link>
                </li>
            </ul>
        </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import url('./common/sass/style.scss');
</style>
