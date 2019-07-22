import ajax from './ajax'

export const homeData=()=>ajax('/homeData')//首页数据
export const reqCategoryData = () => ajax('/category')//分类数据


export const reqTopicNav=()=>ajax('/sp/topic/v1/find/getTabs.json')//头部导航数据
export const reqTopicManual=()=>ajax('/sp/topic/v1/find/recManual.json')//内容数据

//搜索的数据内容
export const reqInit=()=>ajax('/sp/xhr/search/init.json?csrf_token=4aa69942c452c294d4be7cf515eb4b53')

//实时发送搜索
export const reqSearch=(keywordPrefix)=>ajax('/sp/xhr/search/searchAutoComplete.json?csrf_token=4aa69942c452c294d4be7cf515eb4b53',{keywordPrefix})
