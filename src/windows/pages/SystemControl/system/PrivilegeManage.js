import React, {Component, Fragment} from 'react'
import { Button } from '@alifd/next'

import ContentRight from "../../../../components/content/ContentRight"
import PrivilegeTree from "../../../../components/tree/PrivilegeTree";

const breadcrumbRoute = {
  title:'首页',
  url:"/win/system",
  list:[
    {name:"权限管理",url:'/privilege_manage'}
  ]
}

class PrivilegeManage extends Component {

  state = {}

  render() {
    return (
      <Fragment>
        <ContentRight
          className="privilege_manage"
          breadcrumbRoute={breadcrumbRoute}
        >
          <header>
            <h2>权限管理</h2>
            <Button>批量删除</Button>
            <Button type="primary">添加权限</Button>
          </header>
          <div className="privilege_manage_trees">
            <PrivilegeTree/>
          </div>
        </ContentRight>
      </Fragment>
    )
  }
}


export default PrivilegeManage