import React, {Component} from 'react'
import {  NavLink } from 'react-router-dom'
import { View } from 'react-desktop'
import { Tree } from '@alifd/next'
import {setTreeData} from "../../public/utils/com";

const TreeNode = Tree.Node

class FileLeftMenuTree extends Component {

  state = {}

  render() {
    const {
      menuList,match
    } = this.props
    const listTree = setTreeData(menuList.list)
    return (
      <View height='100%' style={{overflow:'auto'}}>
        <Tree defaultExpandAll defaultSelectedKeys={['desk_manage']} style={{ width: '100%' }}>
          <TreeNode
            label={
              <NavLink to={match.path+'/0'}>
                <div className="file_manage_label">
                  <img src={menuList.logo} alt={menuList.name}/>
                  <span>{menuList.name}</span>
                </div>
              </NavLink>
            }
            key="0"
            selectable={false}
          >
            {this.tree(listTree)}
          </TreeNode>
        </Tree>
      </View>
    )
  }
  /*
   * 左侧文件树
   * @param data Array 数据 {name:"我的文档",type:"",logo:"",children:null}
   */
  tree = (data) => {
    const { match } = this.props
    return data.map((row)=>{
      if(row.children){
        return (
          <TreeNode
            key={row.type}
            label={
              <NavLink to={match.path+'/'+row.id} >
                <div className="file_manage_label">
                  <img src={row.logo} alt={row.type}/>
                  <span>{row.name}</span>
                </div>
              </NavLink>
            }
            selectable={false}
          >
            {row.children && this.tree(row.children)}
          </TreeNode>
        )
      }else{
        return (
          <TreeNode
            key={row.type}
            label={
              <NavLink to={match.path+'/'+row.id}>
                <img src={row.logo} alt={row.type}/>
                <span>{row.name}</span>
              </NavLink>
            }
            isLeaf
          />
        )
      }
    })
  }
}


export default FileLeftMenuTree