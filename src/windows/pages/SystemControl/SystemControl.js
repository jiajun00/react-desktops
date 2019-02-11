import React, {Component, Fragment} from 'react'
import { View } from 'react-desktop'
import {  Route, Switch, NavLink } from 'react-router-dom'
import { Tree,Breadcrumb,Table,Pagination,Search } from '@alifd/next'

import '../../../public/style/windows/system_control.scss'

import LeftnavRightContent from "../../../components/layout/LeftnavRightContent"

const TreeNode = Tree.Node

const dataSource = (j) => {
    const result = [];
    for (let i = 0; i < 5; i++) {
      result.push({
        title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },
        id: 100306660940 + i + j,
        time: 2000 + j
      });
    }
    return result;
}
const render = (value, index, record) => {
    return <a href="javascript:;">Remove({record.id})</a>
}

class DeskManage extends Component{
  state = {
    dataSource: dataSource(5)
  }
  render(){
    return (
      <Fragment>
        <Breadcrumb>
          <Breadcrumb.Item link="javascript:void(0);">首页</Breadcrumb.Item>
          <Breadcrumb.Item link="javascript:void(0);">列表页</Breadcrumb.Item>
          <Breadcrumb.Item link="javascript:void(0);">XXX内容</Breadcrumb.Item>
        </Breadcrumb>
        <div className="system_control_main_search">
          <Search key="2" type="dark" shape="simple" style={{width: 250}}/>
        </div>
        <div className='system_control_main_table'>
          <h2>表数据</h2>
          <Table dataSource={this.state.dataSource}
                 loading={this.state.loading}>
            <Table.Column title="Id1" dataIndex="id" width={140} />
            <Table.Column title="Time" dataIndex="time" width={500} />
            <Table.Column title="操作" cell={render} width={200} />
          </Table>
          <Pagination onChange={this.onChange} className="page-demo" />
        </div>
      </Fragment>
    )
  }
  onChange = (currentPage) => {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        dataSource: dataSource(currentPage * 5),
        loading: false
      });
    }, 200);
  }
}

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

                    <TreeNode label={<NavLink to={match.path+'/desk_manage'}>桌面管理</NavLink>} key="desk_manage" isLeaf/>
                    <TreeNode label={<NavLink to={match.path+'/data_manage'}>系统参数</NavLink>} key="data_manage" isLeaf/>
                  </TreeNode>
                  <TreeNode label="用户配置" key="5" selectable={false}>
                    <TreeNode label="权限管理" key="6" isLeaf/>
                    <TreeNode label="角色管理" key="7" isLeaf/>
                    <TreeNode label="管理员管理" key="8" isLeaf/>
                    <TreeNode label="系统用户管理" key="9" isLeaf/>
                  </TreeNode>
                </TreeNode>
              </Tree>
            </View>
          </nav>
          <main>
            <Switch>
              <Route path={`${match.path}`} exact component={DeskManage}/>
              <Route path={`${match.path}/desk_manage`} exact component={DeskManage}/>
              <Route path={`${match.path}/data_manage`} exact component={SystemControl}/>
            </Switch>
          </main>
        </LeftnavRightContent>
      </div>
    )
  }
}


export default SystemControl