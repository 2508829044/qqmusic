<template>
  <div class="Newdish">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2020-01-01",
          name: "张三",
          address: "湖南"
        },
        {
          date: "2020-01-02",
          name: "张四",
          address: "湖北"
        },
        {
          date: "2020-01-03",
          name: "张五",
          address: "广东"
        },
        {
          date: "2020-01-04",
          name: "张六",
          address: "深圳"
        },
        {
          date: "2020-01-04",
          name: "张六",
          address: "深圳"
        }
      ]
    };
  },
  medthods: {},
  mounted() {}
};
</script>

<style scoped="scoped" lang="less">
.Newdish {
  width: 100%;
  height: 600px;
  background-color: antiquewhite;
}
</style>
