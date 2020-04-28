import { fromJS } from 'immutable'

export default fromJS({
  emptyLists:[],
  fileLists: [ //文件列表
    {name:'文件名1',type:'file',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png',sort:1},
    {name:'文件名22',type:'file',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png',sort:2},
    {name:'文件名3',type:'file',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png',sort:3},
    {name:'文件名4',type:'file',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png',sort:4},
    {name:'文件名43',type:'file',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png',sort:5},
    {name:'文件名6',type:'file',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png',sort:6},
    {name:'文件名7',type:'file',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png',sort:7},
    {name:'文件名8',type:'file',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png',sort:8},
    {name:'文件名9',type:'file',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png',sort:9},
    {name:'文件名87',type:'fileimg',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/fileimg.png',sort:10},
    {name:'文件名232',type:'file',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png',sort:11},
    {name:'文件名34',type:'file',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png',sort:12},
    {name:'文件名55',type:'file',logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png',sort:13},
  ],
  leftNavLists: [
    {
      title:'个人收藏',
      type:'person',
      navList:[
        {type:'download', name:'下载',icon:'&#xe758;',iconStyle:{color:'#93969C'},url:'/download'},
        {type:'application', name:'应用程序',icon:'&#xe69e;',iconStyle:{color:'#93969C'},url:'/application'},
        {type:'file', name:'文稿',icon:"&#xe652;",iconStyle:{color:'#93969C'},url:'/file'},
        {type:'desktop', name:'Desktop',icon:'&#xe685;',iconStyle:{color:'#93969C'},url:'/desktop'},
      ]
    },{
      title:'iCloud',
      type:'iCloud',
      navList:[
        {type:'cloud', name:'云盘',icon:'&#xe76b;',iconStyle:{color:'#93969C'},url:'/cloud'}
      ]
    },{
      title:'标签',
      type:'tags',
      navList:[
        {type:'red', name:'红色',icon:'&#xe606;',iconStyle:{color:'red'},url:'/red'},
        {type:'yellow', name:'黄色',icon:'&#xe606;',iconStyle:{color:'yellow'},url:'/yellow'},
        {type:'blue', name:'蓝色',icon:'&#xe606;',iconStyle:{color:'blue'},url:'/blue'},
        {type:'green', name:'绿色',icon:'&#xe606;',iconStyle:{color:'green'},url:'/green'},
      ]
    }
  ]
})