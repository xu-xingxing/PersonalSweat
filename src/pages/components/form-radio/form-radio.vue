<template>
  <div>
    <p>element ui的radio组件</p>
    <el-divider></el-divider>
    <el-radio @change="hanleChange" v-model="radio" label="1">备选项</el-radio>
    <el-radio @change="hanleChange" v-model="radio" label="2">备选项</el-radio>
    <p>
      注意：要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。
    </p>
    <div style="margin-top: 50px">
    <el-radio-group v-model="radio" size="mini" @change="hanleChange">
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>
  </div>
  <p>注意***:使用change事件拿到value的值即lable的值</p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
      return {
        radio: '1'
      };
  },
  methods: {
    hanleChange (value) {
      console.log(value)
    }
  }
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  p {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
  }
</style>