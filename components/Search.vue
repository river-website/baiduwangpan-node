<template>
    <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
</template>
<script>
export default {
    data() {
        return {
            input5: "",
            select: ''
        };
    }
};
</script>
<style>
.el-input {
    width: 130px;
}
</style>