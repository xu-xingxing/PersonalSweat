<template>
  <div class="form-checkout">
    <el-checkbox-group v-model="checkList" @change="hanleChangeCheckbox"> 
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
    data () {
      return {
        checkList: ['选中且禁用','复选框 A']
      };
    },
    methods: {
      hanleChangeCheckbox (value) {
        console.log(value)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>