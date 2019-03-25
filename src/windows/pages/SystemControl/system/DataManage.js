import React, {Component} from 'react'
import { Form, Input,Radio } from '@alifd/next';
import ContentRight from "../../../../components/content/ContentRight";

const FormItem = Form.Item
const formItemLayout = {
  labelCol: {
    fixedSpan: 10
  },
  wrapperCol: {
    span: 14
  }
}
const RadioGroup = Radio.Group

const breadcrumbRoute = {
  title:'首页',
  url:"/win/system",
  list:[
    {name:"系统参数",url:'/data_manage'}
  ]
}

class DataManage extends Component {

  state = {}

  render() {
    return (
      <ContentRight
        className="data_manage"
        breadcrumbRoute={breadcrumbRoute}
      >
        <h1>系统参数设置</h1>
        <Form style={{width: '60%'}} {...formItemLayout} >
          <FormItem label="系统名称:">
            <Input htmlType="text" name="title" placeholder="请输入系统名称"/>
          </FormItem>
          <FormItem label="系统关键字:">
            <Input htmlType="text" name="keywords" placeholder="请输入系统关键字"/>
          </FormItem>
          <FormItem label="系统描述:" help="describe">
            <Input.TextArea placeholder="请输入系统描述" name="describe" />
          </FormItem>
          <FormItem label="所在国家:">
            <Input htmlType="text" name="area" defaultValue="中国" placeholder="请输入系统关键字"/>
          </FormItem>
          <FormItem label="组织:">
            <RadioGroup name="sex" >
              <Radio value="male">个人</Radio>
              <Radio value="female">企业</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="通讯地址:">
            <Input htmlType="text" name="address" placeholder="请输入通讯地址"/>
          </FormItem>
          <FormItem label="联系方式:">
            <Input htmlType="tel" name="tel" placeholder="请输入联系方式"/>
          </FormItem>
          <FormItem label="电子邮件:">
            <Input htmlType="email" name="email" placeholder="请输入电子邮件"/>
          </FormItem>
          <FormItem label=" ">
            <Form.Submit type="primary" onClick={this.handleSubmit}>保存设置</Form.Submit>
          </FormItem>
        </Form>
      </ContentRight>
    )
  }
  handleSubmit = (values) => {
    console.log('Get form value:', values);
  };

}


export default DataManage