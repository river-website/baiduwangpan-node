<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                        <el-menu-item index="1">处理中心</el-menu-item>
                        <el-menu-item index="2">我的工作台</el-menu-item>
                        <el-menu-item index="3">
                            <a href="https://www.ele.me" target="_blank">订单管理</a>
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <el-col :span="3">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :span="18">
                        <div class="grid-content bg-purple-light">
                            <Search />
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Search from '~/components/Search.vue'
export default {
    components: {
    Search
  },
    data() {
        return {
            activeIndex: "1"
            
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>
<style>

</style>