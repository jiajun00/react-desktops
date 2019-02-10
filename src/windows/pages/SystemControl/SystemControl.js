import React, {Component} from 'react'
import { View } from 'react-desktop'
import { Tree,Breadcrumb,Table,Pagination } from '@alifd/next'
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


class SystemControl extends Component {

  state = {
    dataSource: dataSource(5)
  }

  render() {
    return (
      <div className='system_control'>
        <LeftnavRightContent>
          <nav>
            <View height='100%' style={{overflow:'auto'}}>
              <Tree defaultExpandAll defaultSelectedKeys={['1']} style={{ width: '100%' }}>
                <TreeNode label="系统管理" key="0">
                  <TreeNode label="系统配置" key="1">
                    <TreeNode label="桌面管理" key="2"/>
                    <TreeNode label="系统参数" key="4" />
                  </TreeNode>
                  <TreeNode label="用户配置" key="5">
                    <TreeNode label="权限管理" key="6" />
                    <TreeNode label="角色管理" key="7" />
                    <TreeNode label="管理员管理" key="8" />
                    <TreeNode label="系统用户管理" key="9" />
                  </TreeNode>
                </TreeNode>
              </Tree>
            </View>
          </nav>
          <main>
            <Breadcrumb>
              <Breadcrumb.Item link="javascript:void(0);">首页</Breadcrumb.Item>
              <Breadcrumb.Item link="javascript:void(0);">列表页</Breadcrumb.Item>
              <Breadcrumb.Item link="javascript:void(0);">XXX内容</Breadcrumb.Item>
            </Breadcrumb>
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
          </main>
        </LeftnavRightContent>
      </div>
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


export default SystemControl