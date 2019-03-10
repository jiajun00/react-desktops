import React, {Component} from 'react'
import {  Route, Switch } from 'react-router-dom'
import { View } from 'react-desktop'
// import {actionCreators} from "./store";


import "../../../public/style/windows/fileManage.scss"

import LeftnavRightContent from "../../../components/layout/LeftnavRightContent";
import FileLeftMenuTree from "../../../components/tree/FileLeftMenuTree";
import {connect} from "react-redux";
import FileContent from "./cotent/FileContent";


class index extends Component {

  state = {}

  render() {
    const { match,menuList,history } = this.props
    return (
      <View className="file_manage">
        <LeftnavRightContent>
          <nav>
            <FileLeftMenuTree
              menuList={menuList}
              match = {match}
            />
          </nav>
          <main>
            <Switch>
              <Route path={`${match.path}/:id`} render={(route)=>(<FileContent history={history} match={route.match} match_old={match}/>)} />
            </Switch>
          </main>
        </LeftnavRightContent>
      </View>
    )
  }
}
const initMapStateToProps = (state) => ({
  emptyLists:state.getIn(["fileManage","emptyLists"]).toJS(),
  menuList:state.getIn(["fileManage","menuList"]).toJS(),
})

const initMapDispatchToProps = (dispatch) => ({})

export default connect(initMapStateToProps,initMapDispatchToProps)(index)