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
  isOpenMessageBox:false,//是否打开消息框
  isOpenStartBox:false,//是否打开开始菜单
  desktopApps:[ //桌面应用图标  isBlank是否在新标签页中打开
    {name:'系统管理',type:'system',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/system_control.png',isShow:true,url:'/win/system',isIframe:true,isBlank:false,sort:1},
    {name:'博客', type:'qqxio', logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/qqxio.png',isShow:true,url:'https://www.qqxio.cn',isIframe:true,isBlank:false,sort:2},
    {name:'文件夹',type:'filename3',logo:'Https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png',isShow:true,url:'/win/system',isIframe:true,isBlank:false,sort:3},
    {name:'云盘',type:'cloud',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/cloudpan.png',isShow:true,url:'http://cloud.qqxio.cn',isIframe:true,isBlank:false,sort:4},
    {name:'github',type:'github',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/github.png',isShow:true,url:'https://github.com/jiajun00',isIframe:false,isBlank:true,sort:5},
    {name:'数据驾驶舱',type:'data_driver',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/chart.png',isShow:true,url:'https://github.com/jiajun00',isIframe:false,isBlank:false,sort:6},
    {name:'水果忍者',type:'fruit_ninja',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/fruit_ninja.png',isShow:true,url:'http://game.qqxio.cn/fruit_ninja',isIframe:true,isBlank:false,sort:7},
    {name:'捕鱼达人',type:'fish',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/fish.png',isShow:true,url:'http://game.qqxio.cn/fish',isIframe:true,isBlank:false,sort:8},
    {name:'太空战机',type:'fly',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/fly.png',isShow:true,url:'http://game.qqxio.cn/fly',isIframe:true,isBlank:false,style:{width:622,height:467},sort:9},
    {name:'使用文档(访问密码:desktops)',type:'course',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/course.png',isShow:true,url:'http://showdoc.qqxio.cn/web/#/1?page_id=1',isIframe:true,isBlank:false,sort:10},
    {name:'考试系统',type:'exam',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/exam.png',isShow:true,url:'http://ems.qqxio.cn',isIframe:true,isBlank:false,style:{width:1230,height:601},sort:11},
    {name:'招聘信息',type:'job',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/vue.png',isShow:true,url:'http://splider.qqxio.cn',isIframe:true,isBlank:false,style:{width:600,height:600},sort:12},
    {name:'CRM',type:'crm',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/crm.png',isShow:true,url:'http://xcrm.qqxio.cn',isIframe:true,isBlank:false,sort:13}
  ],
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
  ]
})