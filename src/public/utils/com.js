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