<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="20"><div class="grid-content bg-purple-light">
            <Header />
            </div></el-col>
          <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="20"><div class="grid-content bg-purple-light">
            <nuxt />
          </div></el-col>
          <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </el-main>
      <el-footer>
        <el-row>
          <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="20"><div class="grid-content bg-purple-light">
            <Footer />
            </div></el-col>
          <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </el-footer>
    </el-container>    
  </div>
</template>
<script>
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'
export default {
  components: {
    Footer,Header
  }
}
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
/* .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  } */
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}
</style>
