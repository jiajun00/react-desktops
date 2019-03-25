import React, {Component} from 'react'
import { Search } from '@alifd/next'

import ContentRight from "../../../../components/content/ContentRight";

const breadcrumbRoute = {
  title:'首页',
  url:"/win/system",
  list:[
    {name:"用户管理",url:'/user_manage'}
  ]
}

class UserManage extends Component {

  state = {}

  render() {
    return (
      <ContentRight
        className="user_manage"
        breadcrumbRoute={breadcrumbRoute}
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