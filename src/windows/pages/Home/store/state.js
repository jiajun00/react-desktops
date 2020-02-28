import { fromJS } from 'immutable'

export default fromJS({
  dataTime:{  //时间显示
    year:'0000',
    month:'00',
    day:'00',
    hour:'00',
    minute:'00',
    week:''
  },
  contextMenu:{ //右键菜单
    desktops:[
      {name:'查看',type:'view',sort:1,line:false,children:[
          {name:'大图标',type:'large_logo',logo:{type:'point',value:false},line:false,sort:1,func:{type:'select',runFunctionType:'selectContextMenuType',group:'view',position:'desktops'}},
          {name:'中图标',type:'middle_logo',logo:{type:'point',value:true},line:false,sort:2,func:{type:'select',runFunctionType:'selectContextMenuType',group:'view',position:'desktops'}},
          {name:'小图标',type:'small_logo',logo:{type:'point',value:false},line:true,sort:3,func:{type:'select',runFunctionType:'selectContextMenuType',group:'view',position:'desktops'}},
          {name:'显示桌面图标',type:'is_show',logo:{type:'icon',value:'select'},line:false,sort:3,func:{type:'isShow',runFunctionType:'handleShowDesktopApps',group:'view',position:'desktops'}}
        ]},
      {name:'排列方式',type:'sort_type',sort:2,line:true,children:[
          {name:'按日期排列',type:'date_sort',logo:{type:'point',value:false},line:false,sort:1,func:{type:'select',runFunctionType:'selectContextMenuType',group:'sort_type',position:'desktops'}},
          {name:'按类型排列',type:'class_sort',logo:{type:'point',value:false},line:false,sort:2,func:{type:'select',runFunctionType:'selectContextMenuType',group:'sort_type',position:'desktops'}},
          {name:'名称',type:'name_sort',logo:{type:'point',value:true},line:false,sort:3,func:{type:'select',runFunctionType:'selectContextMenuType',group:'sort_type',position:'desktops'}},
          {name:'属性',type:'attr_sort',logo:{type:'point',value:false},line:false,sort:4,func:{type:'select',runFunctionType:'selectContextMenuType',group:'sort_type',position:'desktops'}}
        ]},
      {name:'刷新',type:'refresh',sort:3,line:true,children:null,func:{type:'refresh',runFunctionType:'refreshCurrentPage'}},
      {name:'删除',type:'delete',sort:4,line:false,children:null},
      {name:'重命名',type:'rename',sort:5,line:true,children:null},
      {name:'桌面背景',
        type:'desktop',
        sort:6,
        logo:{type:'image',value:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/menu/desktop.png"},
        line:false,
        children:null,
        func:{
          type:'openWindow',
          runFunctionType:'openDesktopSet',
          value:{
            name:'系统管理',
            type:'system',
            logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/system_control.png',
            isShow:true,
            url:'/win/system/desk_manage',
            isIframe:true,
            isBlank:false,
            sort:1
          }
        }
      }
    ],
    startMenu:[
      {name:'显示',type:'view',sort:1,line:false,children:[
          {name:'大图标',type:'large_logo',logo:{type:'point',value:false},line:false,sort:1},
          {name:'中图标',type:'middle_logo',logo:{type:'point',value:true},line:false,sort:2},
          {name:'小图标',type:'small_logo',logo:{type:'point',value:false},line:true,sort:3},
          {name:'显示桌面图标',type:'is_show',logo:{type:'icon',value:'select'},line:false,sort:3}
        ]},
      {name:'排列方式',type:'sort_type',sort:2,line:true,children:[
          {name:'按日期排列',type:'date_sort',line:false,sort:1},
          {name:'按类型排列',type:'class_sort',line:false,sort:2},
          {name:'名称',type:'name_sort',line:false,sort:3},
          {name:'属性',type:'attr_sort',line:false,sort:4}
        ]},
      {name:'桌面背景',type:'desktop',sort:6,logo:{type:'image',value:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/menu/desktop.png"},line:false,children:null}
    ]
  },
  background:{  //桌面背景
    type:'image',
    value:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/home/desktop-2.jpg'
  },
  isOpenMessageBox:false,//是否打开消息框
  isOpenStartBox:false,//是否打开开始菜单
  desktopApps:[ //桌面应用图标  isBlank是否在新标签页中打开
    {name:'系统管理',type:'system',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/system_control.png',isShow:true,url:'/win/system',isIframe:true,isBlank:false,sort:1},
    {name:'博客', type:'qqxio', logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/qqxio.png',isShow:true,url:'https://www.qqxio.cn',isIframe:true,isBlank:false,sort:2},
    {name:'文件夹',type:'filename3',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png',isShow:true,url:'/win/file/0',isIframe:true,isBlank:false,sort:3},
    {name:'消息管理',type:'message',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/news.png',isShow:true,url:'/win/message',isIframe:true,isBlank:false,sort:3},
    {name:'云盘',type:'cloud',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/cloudpan.png',isShow:true,url:'http://cloud.qqxio.cn',isIframe:true,isBlank:false,sort:4},
    {name:'github',type:'github',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/github.png',isShow:true,url:'https://github.com/jiajun00',isIframe:false,isBlank:true,sort:5},
    {name:'数据驾驶舱',type:'data_driver',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/chart.png',isShow:true,url:'https://github.com/jiajun00',isIframe:false,isBlank:false,sort:6},
  ],
  desktopAppsShowControl:{  //控制桌面图标显示控制
    isShow:true,  //是否显示
    size:'middle_logo', //图标大小
    rankType:'name_sort' //排列顺序
  },
  openWindowList: [],  //已打开的应用
  startBoxLeftApps:[  //开始菜单左侧应用列表
    {
      lab:'A',
      list:[
        {name:'Adobe',type:'Adobe',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png',isShow:true,url:null,isIframe:true,isBlank:false,sort:0,children:[{name:'系统管理',type:'system',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/system_control.png',isShow:true,url:'/win/system',isIframe:true,isBlank:false,sort:1},{name:'博客', type:'qqxio', logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/qqxio.png',isShow:true,url:'https://www.qqxio.cn',isIframe:true,isBlank:false,sort:2}]}
      ]
    },
    {
      lab:'B',
      list:[
        {name:'博客', type:'qqxio', logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/qqxio.png',isShow:true,url:'https://www.qqxio.cn',isIframe:true,isBlank:false,sort:2,children:null},
        {name:'捕鱼达人',type:'fish',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/fish.png',isShow:true,url:'http://game.qqxio.cn/fish',isIframe:true,isBlank:false,sort:8,children:null},
      ]
    },
    {
      lab:'B',
      list:[
        {name:'博客', type:'qqxio', logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/qqxio.png',isShow:true,url:'https://www.qqxio.cn',isIframe:true,isBlank:false,sort:2,children:null},
      ]
    },
    {
      lab:'G',
      list:[
        {name:'github',type:'github',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/github.png',isShow:true,url:'https://github.com/jiajun00',isIframe:false,isBlank:true,sort:5,children:null},
      ]
    },
    {
      lab:'S',
      list:[
        {name:'数据驾驶舱',type:'data_driver',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/chart.png',isShow:true,url:'https://github.com/jiajun00',isIframe:false,isBlank:false,sort:6,children:null},
        {name:'水果忍者',type:'fruit_ninja',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/fruit_ninja.png',isShow:true,url:'http://game.qqxio.cn/fruit_ninja',isIframe:true,isBlank:false,sort:7,children:null},
      ]
    },
    {
      lab:'T',
      list:[
        {name:'太空战机',type:'fly',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/fly.png',isShow:true,url:'http://game.qqxio.cn/fly',isIframe:true,isBlank:false,style:{width:622,height:467},sort:9,children:null}
      ]
    },
    {
      lab:'W',
      list:[
        {name:'文件夹',type:'filename3',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png',isShow:true,url:'/win/system',isIframe:true,isBlank:false,sort:3,children:null},
      ]
    },
    {
      lab:'X',
      list:[
        {name:'系统管理',type:'system',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/system_control.png',isShow:true,url:'/win/system',isIframe:true,isBlank:false,sort:1,children:null},
      ]
    },
    {
      lab:'Y',
      list:[
        {name:'云盘',type:'cloud',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/cloudpan.png',isShow:true,url:'http://cloud.qqxio.cn',isIframe:true,isBlank:false,sort:4,children:null},
      ]
    },
  ],
  startBoxRightApps:[ //开始菜单右侧应用
    {name:'标题',type:'app1',img:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/application/wangyi.jpg',colSpan:6,sort:1},
    {type:'app2',img:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/application/weather.png',colSpan:6,sort:2},
    {type:'app3',img:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/application/xiami.jpg',colSpan:12,sort:3},
  ]
})