import Mock from 'mockjs'
// 将mock数据文件引入
import data1 from '../mock/mock.js'

Mock.mock('/monitor/moniData', 'post', data1.moniData)
