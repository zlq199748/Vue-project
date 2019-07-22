/**
 * mock数据服务器模块，用于暴露mock接口，返回数据
 */
import Mock from 'mockjs';
import category from './category.json';
import categoryListData from './categoryList.json'
import homeData from './homeData.json';
// mock /首页接口
Mock.mock('/homeData', {code: 0, data: homeData});
Mock.mock('/categoryList', {code: 0, data:categoryListData});
Mock.mock('/category',{code: 0, data:category})
console.log('mockServer启动了...')