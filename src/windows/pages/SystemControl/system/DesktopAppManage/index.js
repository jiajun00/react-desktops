import React, {Component} from 'react'
import { Tab,Button,Checkbox,Icon } from '@alifd/next'
import { View } from 'react-desktop'

import "../../../../../public/style/windows/system_control/desktop_app_manage.scss"

import ContentRight from "../../../../../components/content/ContentRight"
import AppSet from "../../../../../components/block/AppSetButton"

const appsList = {
  system:{
    title:'系统应用',
    list:[
      {name:'应用标题',img:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/finder.png',type:'app1',sort:1},
      {name:'应用标题1',img:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/finder.png',type:'app2',sort:2}
    ]
  },
  customize:{
    title:'自定义应用',
    list:[
      {name:'自定义应用1',img:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/finder.png',type:'app1',sort:1},
      {name:'自定义应用2',img:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/finder.png',type:'app2',sort:2}
    ]
  }
}
//选项卡列表
const tabs = [
  {title:'系统默认',type:'system'},
  {title:'自定义',type:'customize'}
]

const breadcrumbRoute = {
  title:'首页',
  url:"/win/system",
  list:[
    {name:"桌面应用管理",url:'/desktop_app_manage'}
  ]
}

class Index extends Component {

  state = {
    system:[],
    customize:[]
  }

  render() {
    console.log(this)
    return (
      <ContentRight
        className="desktop_app_manage"
        breadcrumbRoute={breadcrumbRoute}
      >
        <Button className="desktop_app_manage_save"  type="primary">保存设置</Button>
        <Tab>
          {tabs.map(tab=>(
            <Tab.Item title={tab.title} key={tab.type}>
              <View style={{flexWrap:'wrap'}}>
                {appsList[tab.type].list.map(row=>(
                  <Checkbox
                    key={row.type}
                    checked={this.state[tab.type].indexOf(row.type) > -1 ? true : false }
                    onChange={(isCheck)=>{this.checkApp(tab.type,row.type,isCheck)}}
                  >
                    <View className="apps_list">
                      <div className="apps_list_img">
                        <img src={row.img} alt={row.img}/>
                      </div>
                      <div className="apps_list_title">
                        {row.name}
                      </div>
                      <View style={{alignItems:'center'}}>
                        <div className="apps_list_set">
                          <AppSet/>
                        </div>
                      </View>
                    </View>
                  </Checkbox>
                ))}
                <label className="next-checkbox-wrapper ">
                  <div className="apps_list apps_list_add">
                    <Icon type="add" />
                    <div className="apps_list_add_title">新增{tab.title}应用</div>
                  </div>
                </label>
              </View>
            </Tab.Item>
          ))}
        </Tab>
      </ContentRight>
    )
  }
  /*
   * @param String tab_type 类别
   * @param String app_type 应用
   * @param String isCheck 是否选择
   */
  checkApp = (tab_type,app_type,isCheck) => {
    const arr = this.state[tab_type]
    if(isCheck){
      arr.push(app_type)
    }else{
      const index = arr.indexOf(app_type)
      arr.splice(index,1)
    }
    this.setState({
      [tab_type]:arr
    })
  }
}


export default Index