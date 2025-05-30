<template>
  <el-divider />
  <el-space wrap>
    <el-text>总分排名</el-text>
    <el-button text type="primary">软件学院专硕</el-button>
    <el-button text type="primary">选择2</el-button>
    <el-button text type="primary">选择3</el-button>
    <el-button text type="primary">选择4</el-button>
    <el-button text type="primary">选择5</el-button>
    <el-button text type="primary">选择6</el-button>
  </el-space>
  <el-divider />
  <el-space wrap>
    <el-text>净分排名</el-text>
    <el-button text type="primary">选择1</el-button>
    <el-button text type="primary">选择2</el-button>
    <el-button text type="primary">选择3</el-button>
    <el-button text type="primary">选择4</el-button>
    <el-button text type="primary">选择5</el-button>
    <el-button text type="primary">选择6</el-button>
  </el-space>
  <el-divider class="divide" />

  <el-row class="person">
    <el-space>
      <el-button text type="primary">首页</el-button>
      <el-button text type="primary">个人成绩</el-button>
      <el-button text type="primary">修改查询密码</el-button>
      <el-button text type="primary">退出登录</el-button>
    </el-space>
  </el-row>
  <el-row class="person">
    <el-space>
      <el-button text type="primary">按总分</el-button>
      <el-button text type="primary">按除总分</el-button>
    </el-space>
  </el-row>

  <!-- <el-table :data="tableData" :show-header="false" :row-class-name="(row, index) => 'table-body'">
    <el-table-column prop="title" />
    <el-table-column prop="c1" />
    <el-table-column prop="c2" />
    <el-table-column prop="c3" />
    <el-table-column prop="c4" />
    <el-table-column prop="c5" />
    <el-table-column prop="c6" />
  </el-table> -->
</template>
<script setup>
const tableData = [
  {
    title: '总分排名',
    c1: '11',
    c2: '22',
    c3: '33',
    c4: '',
    c5: '',
    c6: '',
  },
  {
    title: '净分排名',
    c1: '',
    c2: '',
    c3: '',
    c4: '',
    c5: '',
    c6: '',
  },
]
</script>

<style scoped>
.el-divider {
  margin: 0px;
}
.person {
  display: flex;
  justify-content: center;
}
.el-button {
  width: 50px;
  white-space: normal;
  padding: 0px;
}

:deep(.table-body) {
  background: var(--bg-color);
}
</style>
