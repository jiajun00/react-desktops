import React, {Component} from 'react'
import { Table,Pagination,Search,Button,Dialog } from '@alifd/next'

import ContentRight from "../../../../components/content/ContentRight";

class UserManage extends Component {

  state = {}

  render() {
    return (
      <ContentRight
        className="user_manage"
        title="用户管理"
        merge_url="/win/system"
        route_url="/user_manage"
      >
        <div className="system_control_main_search">
          <Search key="2" type="dark" shape="simple" placeholder="请输入用户名" style={{width: 250}}/>
        </div>
        <div className='system_control_main_table'>
          <h2>用户列表</h2>
        </div>
      </ContentRight>
    )
  }
}


export default UserManage