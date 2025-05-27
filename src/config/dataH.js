import { tableData } from './data'
import { ref, onMounted, reactive } from 'vue'
import { clone, delay } from '@pureadmin/utils'

export function useColumns() {
  const dataList = ref([])
  const loading = ref(true)
  const columns = [
    {
      label: '日期',
      prop: 'date',
      width:40,
    },
    {
      label: '号码',
      prop: 'name',
      width:40,
    },
    {
      label: '地址',
      prop: 'address',
      width:40,
    },
    {
      label: '分数',
      prop: 'num1',
      width:40,
    },
    {
      label: '分数',
      prop: 'num2',
      width:40,
    },
    {
      label: '分数',
      prop: 'num3',
      width:40,
    },
    {
      label: '分数',
      prop: 'num4',
      width:40,
    },
    {
      label: '除总分',
      prop: 'exceptTotal',
      width:40,
    },
    {
      label: '总分',
      prop: 'total',
      width:40,
    },
  ]

  /** 分页配置 */
  const pagination = reactive({
    pageSize: 20,
    currentPage: 1,
    pageSizes: [20, 40, 60],
    total: 0,
    align: 'right',
    background: true,
    size: 'small',
  })

  /** 加载动画配置 */
  const loadingConfig = reactive({
    text: '正在加载第一页...',
    viewBox: '-10, -10, 50, 50',
    spinner: `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,
    // svg: "",
    // background: rgba()
  })

  /** 撑满内容区自适应高度相关配置 */
  const adaptiveConfig = {
    /** 表格距离页面底部的偏移量，默认值为 `96` */
    offsetBottom: 110,
    /** 是否固定表头，默认值为 `true`（如果不想固定表头，fixHeader设置为false并且表格要设置table-layout="auto"） */
    // fixHeader: true
    /** 页面 `resize` 时的防抖时间，默认值为 `60` ms */
    // timeout: 60
    /** 表头的 `z-index`，默认值为 `100` */
    // zIndex: 100
  }

  function onSizeChange(val) {
    console.log('onSizeChange', val)
  }

  function onCurrentChange(val) {
    loadingConfig.text = `正在加载第${val}页...`
    loading.value = true
    delay(600).then(() => {
      loading.value = false
    })
  }

  onMounted(() => {
    delay(600).then(() => {
      const newList = []
      Array.from({ length: 6 }).forEach(() => {
        newList.push(clone(tableData, true))
      })
      newList.flat(Infinity).forEach((item, index) => {
        dataList.value.push({ id: index, ...item })
      })
      pagination.total = dataList.value.length
      loading.value = false
    })
  })

  return {
    loading,
    columns,
    dataList,
    pagination,
    loadingConfig,
    adaptiveConfig,
    onSizeChange,
    onCurrentChange,
  }
}
