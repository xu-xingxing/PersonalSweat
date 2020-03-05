<template>
  <div id="app">
    <el-container>
      <el-header height="80px">
        <m-header></m-header>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
       <el-footer>Footer</el-footer>
    </el-container height="80px">
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
export default {
  name: 'App',
  components: {
    MHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable.styl"
html, body, #app, .el-container 
  padding: 0
  margin: 0
  height: 100%
.el-header, .el-footer 
  color: #333
  text-align: center
  line-height: 80px
.el-header
  background-color: $color-h-background
.el-footer 
  background-color: $color-b-background
.el-aside 
  background-color: #d3dce6
  color: #333
  text-align: center
.el-main 
  background-color: #e9eef3
  color: #333
  text-align: center
  background: $color-m-background

</style>
