import React, {Component, Fragment} from 'react'
import { Button,Tree } from '@alifd/next'

const TreeNode = Tree.Node

const dataList =
  {id:0,name:'系统',url:null,children:[
    {id:1,name:'系统管理',url:'/win/system',children:[
        {id:2,name:'系统配置',url:'/win/system',children:[
            {id:3,name:'桌面管理',url:'/win/system',children:null},
            {id:4,name:'系统参数',url:'/win/system',children:null}
        ]},
        {id:5,name:'用户配置',url:'/win/system',children:[
            {id:6,name:'权限管理',url:'/win/system',children:null},
            {id:7,name:'角色管理',url:'/win/system',children:null},
            {id:8,name:'管理员管理',url:'/win/system',children:null},
            {id:9,name:'用户管理',url:'/win/system',children:null}
        ]}
    ]},
    {id:10,name:'博客',url:'',children:null},
    {id:11,name:'文件夹',url:'',children:null}
  ]}

class PrivilegeTree extends Component {

  state = {}

  render() {
    const { isShow } = this.props
    return (
      <Tree checkable={!isShow} defaultExpandAll showLine>
        <TreeNode label={dataList.name}>
          {this.tree(dataList.children)}
        </TreeNode>
      </Tree>
    )
  }
  tree = (data) => {
    const { isShow } = this.props
    return data.map((row)=>{
      if(row.children){
        return (
          <TreeNode
            key = {row.id}
            label={
              <div className="privilege_manage_tree_leaf">
                <span>{row.name}</span>
                {!isShow && <Button size="small">修改</Button>}
                </div>
            }
          >
            {row.children && this.tree(row.children)}
          </TreeNode>
        )
      }else{
        return (
            <TreeNode
              key = {row.id}
              label={
                <div className="privilege_manage_tree_leaf">
                  <span>{row.name}</span>
                  {!isShow &&
                    <Fragment>
                      <Button size="small">修改</Button>
                      <Button size="small">删除</Button>
                    </Fragment>}
                </div>
              }
            />
        )
      }
    })
  }
}


export default PrivilegeTree