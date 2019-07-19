/**
 * mock数据服务器模块，用于暴露mock接口，返回数据
 */
import Mock from 'mockjs';
import category from './category.json';
import categoryList from './categoryList.json'
import homeData from './homeData.json';
// mock /home接口
Mock.mock('/home', {code: 0, data: homeData});
Mock.mock('/categorylist', {code: 0, data: category});
console.log('mockServer启动了...')