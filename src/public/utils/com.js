import React from 'react'
/*
 * 计算空文件数量并返回空文件数组
 * @param int fileListWidth  文件列表区域总宽度
 * @param int fileWidth  单个文件宽度
 * @param int listLength  文件总数
 * @param int emptyFileLength  空文件数量
 * return false or 空文件列表
 */
export const calc_empty_list = (fileListWidth,finderWidth,listLength,emptyFileLength) => {
  const ColNum = Math.floor(fileListWidth/finderWidth)
  const lastRowNum = listLength%ColNum
  const emptyListNum = ColNum-lastRowNum
  if(emptyFileLength !== emptyListNum){
    const emptyList = []
    for(let i=0;i<emptyListNum;i++){
      emptyList[i]= <div key={i} className="finder_file empty_file"/>
    }
    return emptyList
  }else{
    return false
  }
}

/*
 * 把线性数据转成树形数据
 */
export const setTreeData = (data) => {
  let cloneData = JSON.parse(JSON.stringify(data))    // 对源数据深度克隆
  let tree = cloneData.filter((father)=>{              //循环所有项
    let branchArr = cloneData.filter((child)=>{
      return father.id === child.pid      //返回每一项的子级数组
    });
    if(branchArr.length>0){
      father.children = branchArr;    //如果存在子级，则给父级添加一个children属性，并赋值
    }
    return father.pid === 0;      //返回第一层
  });
  return tree     //返回树形数据
}

