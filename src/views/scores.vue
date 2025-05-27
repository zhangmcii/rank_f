<script setup>
import { PureTable } from '@pureadmin/table'
import '@pureadmin/table/dist/style.css'
import { ref } from 'vue'
import { useColumns } from '@/config/dataH.js'

const tableRef = ref()
const {
  loading,
  columns,
  dataList,
  pagination,
  loadingConfig,
  adaptiveConfig,
  onSizeChange,
  onCurrentChange,
} = useColumns()


</script>
<template>
  <pure-table
    ref="tableRef"
    adaptive
    stripe
    :adaptiveConfig="adaptiveConfig"
    row-key="id"
    alignWhole="center"
    showOverflowTooltip
    :loading="loading"
    :loading-config="loadingConfig"
    :data="
      dataList.slice(
        (pagination.currentPage - 1) * pagination.pageSize,
        pagination.currentPage * pagination.pageSize,
      )
    "
    :columns="columns"
    :pagination="pagination"
    @page-size-change="onSizeChange"
    @page-current-change="onCurrentChange"
  />
</template>
<style scoped></style>
