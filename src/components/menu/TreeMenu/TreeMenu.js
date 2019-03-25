import React, {Component} from 'react'
import {Tree} from "@alifd/next/lib/index";
import {NavLink} from "react-router-dom"
import {menuLogo} from "../../../public/utils/com";

const TreeNode = Tree.Node


class TreeMenu extends Component {

  render() {
    const { menu,defaultSelectedKeys } = this.props
    return (
      <Tree defaultExpandAll defaultSelectedKeys={[defaultSelectedKeys]} style={{ width: '100%' }}>
        <TreeNode label={menu.title} key={menu.type} selectable={false}>
          {this.tree(menu.children)}
        </TreeNode>
      </Tree>
    )
  }
  tree = (data) => {
    const {match} = this.props
    return data.map(row=>{
      if(row.children){
        return (
          <TreeNode label={row.title} key={row.type} selectable={false}>
            {this.tree(row.children)}
          </TreeNode>
        )
      }else{
        return (
          <TreeNode
            label={<NavLink to={match.path+row.url}>{menuLogo(row.logo)}<span>{row.title}</span></NavLink>}
            key={row.type}
            isLeaf
          />
        )
      }
    })

  }
}


export default TreeMenu