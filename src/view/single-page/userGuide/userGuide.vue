<template>
  <div class="userGuide">
    <div class="search">
      <Row>
        <Col span="18">
          <Input search enter-button placeholder="按照姓名查询员工信息，记得回车哦" />
        </Col>
        <Col span="3">
          <Button type="primary">添加员工</Button>
        </Col>
        <Col span="3">
          <Button type="primary">导出excel</Button>
        </Col>
      </Row>
    </div>
    <div class="main">
      <Row>
        <Col span="24">
          <div class="main_page">
            <Page class="pageStyle" simple show-sizer show-total></Page>
          </div>
        </Col>
      </Row>

      <Table
        :height="tableHeight"
        style="width:100%"
        border
        ref="selection"
        :columns="columns4"
        :data="data1"
      ></Table>
    </div>
  </div>
</template>

<script>
import services from '../../../api/services'
import { export2Excel } from '../../../components/common/js/util'
export default {
  components: {},
  data () {
    return {
      tableHeight: 0,
      columns4: [],
      data1: [],
      dataTotal: []
    }
  },
  created () {
  },
  computed: {
    userInfo () {
      return this.$store.getters['user/getUser_info'] || []
    }
  },
  mounted () {
    console.dir(this.userInfo)
    this.tableHeight = (document.documentElement.clientHeight * (7 / 10))
  },
  methods: {

  }
}
</script>

<style lang="less" scope>
.userGuide {
  height: 100%;

  .search {
    height: 9%;
    padding-left: 10px;
    text-align: left;
    margin: 2px;
    .btnStyle {
      height: 36%;
    }
    .ivu-col-span-3 {
      padding-left: 57px !important;
    }

    .formStyle {
      padding-top: 15px;
      height: 60%;
    }
  }
  .main {
    padding: 10px;
    .main_page {
      height: 10%;
      display: flex;
      flex-direction: row;
      float: right;
      .pageStyle {
        width: auto;
        margin-bottom: 5px;
      }
      .textStyle {
        width: auto;

        // margin-left: 1140px;
        font-size: 14px;
        height: 32px;
        line-height: 29px;
      }
    }
  }
  .footer {
    //  height: 20%;
  }
}
.ivu-form .ivu-form-item-label {
  text-align: left;
}
button,
html [type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
  margin-right: 10px;
}

.ivu-input-group {
  width: 33%;
}
</style>
