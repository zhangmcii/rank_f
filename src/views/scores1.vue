<script setup>
import middle from '@/views/middle.vue'
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: '120',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: '120',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: '120',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '120',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '120',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '120',
  },
]
</script>

<template>
  <middle />
  <el-table
    :data="tableData"
    height="250"
    table-layout="auto"
    style="width: 100%"
    :header-cell-class-name="(row, index) => 'table-head'"
    :row-class-name="(row, index) => 'table-body'"
  >
    <el-table-column prop="num" label="num" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="address" label="Address" />

    <el-table-column prop="num1" label="num1" />
    <el-table-column prop="num2" label="num2" />
    <el-table-column prop="num3" label="num3" />
    <el-table-column prop="num4" label="num4" />
    <el-table-column prop="exceptTotal" label="除后总分" />
    <el-table-column prop="total" label="总分" />
  </el-table>
</template>

<style scoped>
.el-table {
  margin-top: 20px;
}
:deep(.table-head) {
  color: black;
  background: var(--bg-color) !important;
}
:deep(.table-body) {
  background: var(--bg-color);
}
</style>
