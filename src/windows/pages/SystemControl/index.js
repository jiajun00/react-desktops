import React, {Component} from 'react'
import { View } from 'react-desktop'
import {  Route, Switch, NavLink, Redirect } from 'react-router-dom'
import { Tree } from '@alifd/next'
import { connect } from "react-redux";
import { actionCreators as actionCreatorsHome } from "../Home/store";
import { menuLogo } from '../../../public/utils/com'

import '../../../public/style/windows/system_control.scss'

import LeftnavRightContent from "../../../components/layout/LeftnavRightContent"
import DesktopSet from "./system/Desktop"
import DataManage from "./system/DataManage"
import PrivilegeManage from "./system/PrivilegeManage"
import RoleManage from "./system/RoleManage"
import UserManage from "./system/UserManage"
import DesktopAppManage from "./system/DesktopAppManage"


const TreeNode = Tree.Node

class Index extends Component {

  render() {
    const {
      LeftMenu,match
    } = this.props
    return (
      <div className='system_control'>
        <LeftnavRightContent>
          <nav>
            <View height='100%' style={{overflow:'auto'}}>
              <Tree defaultExpandAll defaultSelectedKeys={['desk_manage']} style={{ width: '100%' }}>
                <TreeNode label={LeftMenu.title} key={LeftMenu.type} selectable={false}>
                  {this.tree(LeftMenu.children)}
                </TreeNode>
              </Tree>
            </View>
          </nav>
          <main>
            <Switch>
              <Route path={`${match.path}`} exact render={()=><Redirect to={`${match.path}/desk_manage/image`} />}/>
              <Route path={`${match.path}/desk_manage`} exact render={()=><Redirect to={`${match.path}/desk_manage/image`} />}/>
              <Route path={`${match.path}/desk_manage/:type`} component={DesktopSet}/>
              <Route path={`${match.path}/data_manage`} exact component={DataManage}/>
              <Route path={`${match.path}/privilege_manage`} exact component={PrivilegeManage}/>
              <Route path={`${match.path}/role_manage`} exact component={RoleManage}/>
              <Route path={`${match.path}/user_manage`} exact component={UserManage}/>
              <Route path={`${match.path}/desktop_app_manage`} exact component={DesktopAppManage}/>
            </Switch>
          </main>
        </LeftnavRightContent>
      </div>
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

const initMapStateToProps = (state) => ({
  LeftMenu:state.getIn(['systemControl','LeftMenu']).toJS(),
})
const initMapDispatchToProps = (dispatch) => ({
  /*
   * 设置窗口背景
   */
  set_background(type,value){
    dispatch(actionCreatorsHome.set_background(type,value))
  }
})
export default connect(initMapStateToProps,initMapDispatchToProps)(Index)