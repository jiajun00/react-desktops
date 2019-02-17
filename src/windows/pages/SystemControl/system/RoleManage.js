import React, {Component} from 'react'
import { Table,Pagination,Search,Button } from '@alifd/next'

import ContentRight from "../../../../components/content/ContentRight"

const dataSource = (j) => {
  const result = [];
  for (let i = 0; i < 10; i++) {
    result.push({
      title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },
      id: 1003 + i + j,
      time: 2000 + j,
      name:'管理员'+i
    });
  }
  return result;
}

const render = (value, index, record) => {
  return (
    <div className="system_control_main_table_operation">
      <Button onClick={()=>{console.log(record.id)}}>查看权限</Button>
      <Button onClick={()=>{console.log(record.id)}}>修改</Button>
      <Button onClick={()=>{console.log(record.id)}}>删除</Button>
    </div>
  )
}

class RoleManage extends Component {

  state = {
    dataSource: dataSource(10)
  }

  render() {
    return (
      <ContentRight
        className="role_manage"
        title="角色管理"
        merge_url="/win/system"
        route_url="/role_manage"
      >
        <div className="system_control_main_search">
          <Search key="2" type="dark" shape="simple" placeholder="请输入管理员名" style={{width: 250}}/>
        </div>
        <div className='system_control_main_table'>
          <h2>表数据</h2>
          <Table dataSource={this.state.dataSource}
                 loading={this.state.loading}>
            <Table.Column align="center" title="Id" dataIndex="id" width={140} />
            <Table.Column align="center" title="管理员" dataIndex="name" width={140} />
            <Table.Column align="center" title="创建时间" dataIndex="time" width={200} />
            <Table.Column align="center" title="操作" cell={render} width={200} />
          </Table>
          <Pagination onChange={this.onChange} className="page-demo" />
        </div>
      </ContentRight>
    )
  }
  onChange = (currentPage) => {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        dataSource: dataSource(currentPage * 10),
        loading: false
      });
    }, 200);
  }
}


export default RoleManage