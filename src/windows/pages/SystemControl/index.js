import React, {Component} from 'react'
import { View } from 'react-desktop'
import {  Route, Switch, Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import { actionCreators as actionCreatorsHome } from "../Home/store";

import '../../../public/style/windows/system_control/system_control.scss'

import LeftnavRightContent from "../../../components/layout/LeftnavRightContent"
import TreeMenu from "../../../components/menu/TreeMenu/TreeMenu";
import DesktopSet from "./system/DesktopBackgroundSet"
import DataManage from "./system/DataManage"
import PrivilegeManage from "./system/PrivilegeManage"
import RoleManage from "./system/RoleManage"
import UserManage from "./system/UserManage"
import DesktopAppManage from "./system/DesktopAppManage"
import AppsManage from "./system/AppsManage"



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
              <TreeMenu match={match} menu={LeftMenu} defaultSelectedKeys='desk_manage'/>
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
              <Route path={`${match.path}/apps_manage`} exact component={AppsManage}/>
              <Route path={`${match.path}/desktop_app_manage`} exact component={DesktopAppManage}/>
            </Switch>
          </main>
        </LeftnavRightContent>
      </div>
    )
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