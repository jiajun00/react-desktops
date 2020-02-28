import React, {Component} from 'react'
import { Table,Pagination,Search,Button,Dialog } from '@alifd/next'

import ContentRight from "../../../../components/content/ContentRight"
import PrivilegeTree from "../../../../components/tree/PrivilegeTree";

const dataSource = (j) => {
  const result = [];
  for (let i = 0; i < 10; i++) {
    result.push({
      title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },
      id: 1003 + i + j,
      time: 2000 + j,
      name:'角色'+i
    });
  }
  return result;
}

const breadcrumbRoute = {
  title:'首页',
  url:"/win/system",
  list:[
    {name:"角色管理",url:'/role_manage'}
  ]
}

class RoleManage extends Component {

  state = {
    dataSource: dataSource(10),
    privilege_visible:false
  }

  render() {
    const {privilege_visible} = this.state
    return (
      <ContentRight
        className="role_manage"
        breadcrumbRoute={breadcrumbRoute}
      >
        <div className="system_control_main_search">
          <Search key="2" type="dark" shape="simple" placeholder="请输入管理员名" style={{width: 250}}/>
        </div>
        <div className='system_control_main_table'>
          <h2>角色列表</h2>
          <Table dataSource={this.state.dataSource}
                 loading={this.state.loading}>
            <Table.Column align="center" title="Id" dataIndex="id" width={140} />
            <Table.Column align="center" title="角色" dataIndex="name" width={140} />
            <Table.Column align="center" title="创建时间" dataIndex="time" width={200} />
            <Table.Column
              align="center"
              title="操作"
              cell={
                (value, index, record) => {
                  return (
                    <div className="system_control_main_table_operation">
                      <Button onClick={()=>{this.showDialog('privilege_visible')}}>查看权限</Button>
                      <Button onClick={()=>{console.log(record.id)}}>修改</Button>
                      <Button onClick={()=>{this.deleteRole(record.id)}}>删除</Button>
                    </div>
                )}
              }
              width={200}
            />
          </Table>
          <Pagination onChange={this.onChange} className="page-demo" />
        </div>
        <Dialog
          title="权限列表"
          closeable="mask,close,esc"
          visible={privilege_visible}
          isFullScreen={false}
          footer={<Button type="primary" onClick={()=>{this.onClose('privilege_visible')}}>关闭</Button>}
        >
          <div style={{width:300}}>
            <PrivilegeTree isShow/>
          </div>

        </Dialog>
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
  showDialog = (state) => {
    this.setState({
      [state]: true
    })
  }
  onClose = (state) => {
    this.setState({
      [state]: false
    })
  }
  deleteRole = (id) => {
    Dialog.confirm({
      title: '删除角色',
      content: '是否确认删除该角色?',
      onOk: () => console.log('ok'),
      onCancel: () => console.log('cancel')
    })
  }
}


export default RoleManage
