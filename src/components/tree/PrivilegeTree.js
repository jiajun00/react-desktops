import React, {Component} from 'react'
import { Button,Tree } from '@alifd/next'

const TreeNode = Tree.Node

class PrivilegeTree extends Component {

  state = {}

  render() {
    return (
      <Tree defaultExpandAll showLine>
        <TreeNode label="系统">
          <TreeNode label={<div className="privilege_manage_tree_leaf"><span>系统管理</span> <Button size="small">修改</Button></div>}>
            <TreeNode label={<div className="privilege_manage_tree_leaf"><span>系统配置</span> <Button size="small">修改</Button></div>}>
              <TreeNode label={<div className="privilege_manage_tree_leaf"><span>桌面管理</span> <Button size="small">修改</Button><Button size="small">删除</Button></div>} />
              <TreeNode label={<div className="privilege_manage_tree_leaf"><span>系统参数</span> <Button size="small">修改</Button><Button size="small">删除</Button></div>} />
            </TreeNode>
            <TreeNode label={<div className="privilege_manage_tree_leaf"><span>用户配置</span> <Button size="small">修改</Button></div>}>
              <TreeNode label={<div className="privilege_manage_tree_leaf"><span>权限管理</span> <Button size="small">修改</Button><Button size="small">删除</Button></div>} />
              <TreeNode label={<div className="privilege_manage_tree_leaf"><span>角色管理</span> <Button size="small">修改</Button><Button size="small">删除</Button></div>} />
              <TreeNode label={<div className="privilege_manage_tree_leaf"><span>管理员管理</span> <Button size="small">修改</Button><Button size="small">删除</Button></div>} />
              <TreeNode label={<div className="privilege_manage_tree_leaf"><span>用户管理</span> <Button size="small">修改</Button><Button size="small">删除</Button></div>} />
            </TreeNode>
          </TreeNode>
          <TreeNode label={<div className="privilege_manage_tree_leaf"><span>博客</span> <Button size="small">修改</Button><Button size="small">删除</Button></div>}/>
          <TreeNode label={<div className="privilege_manage_tree_leaf"><span>云盘</span> <Button size="small">修改</Button><Button size="small">删除</Button></div>}/>
        </TreeNode>
      </Tree>
    )
  }
}


export default PrivilegeTree