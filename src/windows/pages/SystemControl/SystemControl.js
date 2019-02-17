import React, {Component} from 'react'
import { View } from 'react-desktop'
import {  Route, Switch, NavLink } from 'react-router-dom'
import { Tree,Icon } from '@alifd/next'

import '../../../public/style/windows/system_control.scss'

import LeftnavRightContent from "../../../components/layout/LeftnavRightContent"
import DesktopSet from "../../../components/desktop/DesktopSet"
import DataManage from "./system/DataManage"
import PrivilegeManage from "./system/PrivilegeManage"
import RoleManage from "./system/RoleManage"

const TreeNode = Tree.Node

class SystemControl extends Component {

  render() {
    const { match } = this.props
    return (
      <div className='system_control'>
        <LeftnavRightContent>
          <nav>
            <View height='100%' style={{overflow:'auto'}}>
              <Tree defaultExpandAll defaultSelectedKeys={['desk_manage']} style={{ width: '100%' }}>
                <TreeNode label="系统管理" key="0" selectable={false}>
                  <TreeNode label="系统配置" key="1" selectable={false}>
                    <TreeNode label={<NavLink to={match.path+'/desk_manage'}><Icon size="xs" type="picture" /><span>桌面管理</span></NavLink>} key="desk_manage" isLeaf/>
                    <TreeNode label={<NavLink to={match.path+'/data_manage'}><Icon size="xs" type="set" /><span>系统参数</span></NavLink>} key="data_manage" isLeaf/>
                  </TreeNode>
                  <TreeNode selectable={false} label="用户配置" key="5">
                    <TreeNode label={<NavLink to={match.path+'/privilege_manage'}><Icon size="xs" type="filter" /><span>权限管理</span></NavLink>} key="6" isLeaf/>
                    <TreeNode label={<NavLink to={match.path+'/role_manage'}><Icon size="xs" type="edit" /><span>角色管理</span></NavLink>} key="7" isLeaf/>
                    <TreeNode label={<NavLink to={match.path+'/admin_manage'}><Icon size="xs" type="atm" /><span>管理员列表</span></NavLink>} key="8" isLeaf/>
                    <TreeNode label={<NavLink to={match.path+'/user_manage'}><Icon size="xs" type="account" /><span>用户列表</span></NavLink>} key="9" isLeaf/>
                  </TreeNode>
                </TreeNode>
              </Tree>
            </View>
          </nav>
          <main>
            <Switch>
              <Route path={`${match.path}`} exact component={DesktopSet}/>
              <Route path={`${match.path}/desk_manage`} exact component={DesktopSet}/>
              <Route path={`${match.path}/data_manage`} exact component={DataManage}/>
              <Route path={`${match.path}/privilege_manage`} exact component={PrivilegeManage}/>
              <Route path={`${match.path}/role_manage`} exact component={RoleManage}/>
            </Switch>
          </main>
        </LeftnavRightContent>
      </div>
    )
  }
}


export default SystemControl