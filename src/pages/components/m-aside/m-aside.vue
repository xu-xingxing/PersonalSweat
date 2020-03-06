<template>
    <scroll :data="options" ref="mAside">
	    <div class="m-aside">
            <el-row class="tac">
                <el-col>
                    <el-menu
                        :default-active="$route.path"
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="rgb(164,202,182)"
                        :router="true"
                    >
                        <el-menu-item index="/formRadio">
                            <i class="el-icon-menu"></i>
                            <span slot="title">表单radio</span>
                        </el-menu-item>
                        <el-menu-item index="/formCheckOut">
                            <i class="el-icon-menu"></i>
                            <span slot="title">表单checkout</span>
                        </el-menu-item>
                        <el-menu-item index="/formCascader">
                            <i class="el-icon-menu"></i>
                            <span slot="title">表单cascader</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
	    </div>
    </scroll>
</template>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'
export default {
	data() {
		return {
            options: [
                {id: 1, title: '表单radio'},
                {id: 2, title: '表单checkout'},
                {id: 3, title: '表单cascader'}
            ]
        }
    },
    components: {
        Scroll
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .m-aside {
    width: 200px;
    max-height: 618px;
    position: relative;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
  }
</style>