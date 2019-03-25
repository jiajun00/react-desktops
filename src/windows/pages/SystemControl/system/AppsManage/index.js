import React, {Component} from 'react'
import { View } from 'react-desktop/windows'

import "../../../../../public/style/windows/system_control/apps_manage.scss"

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

const breadcrumbRoute = {
  title:'首页',
  url:"/win/system",
  list:[
    {name:"应用管理",url:'/apps_manage'}
  ]
}

class index extends Component {

  state = {}

  render() {
    return (
        <ContentRight
          className="apps_manage"
          breadcrumbRoute={breadcrumbRoute}
        >
          <div className="apps_block">
            <h3>{appsList.system.title}</h3>

            <View
              style={{flexWrap:'wrap'}}
            >
              {appsList.system.list.map(row=>(
                <View key={row.type} className="apps_list">
                  <div className="apps_list_left">
                    <img src={row.img} alt={row.img}/>
                  </div>
                  <View className="apps_list_right">
                    <div className="apps_list_title">{row.name}</div>
                    <AppSet/>
                  </View>
                </View>
              ))}

            </View>
          </div>
          <div className="apps_block">
            <h3>{appsList.customize.title}</h3>
            <View
              style={{flexWrap:'wrap'}}
            >
              {appsList.customize.list.map(row=>(
                <View key={row.type} className="apps_list">
                  <div className="apps_list_left">
                    <img src={row.img} alt={row.img}/>
                  </div>
                  <View className="apps_list_right">
                    <div className="apps_list_title">{row.name}</div>
                    <AppSet isDelete/>
                  </View>
                </View>
              ))}

            </View>
          </div>
        </ContentRight>
    )
  }
}


export default index