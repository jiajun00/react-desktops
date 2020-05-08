import { fromJS } from 'immutable'
export default fromJS({
  dataTime:{
    year:'0000',
    month:'00',
    day:'00',
    hour:'00',
    minute:'00',
    week:''
  },
  tools:[ //工具栏
    {name:'我的电脑',id:'finder',logo:`${require('../../../../public/imgs/my_computer.png')}`,isShow:true,url:'/mac/finder',isIframe:true},
    {name:'上个网', id:'chrome', logo:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/launchpad.png',isShow:true,url:'https://www.baidu.com/',isIframe:true}
  ],
  openWindowList: [],  //已打开的应用
  homeNav:{
    name:'&#xe6be;',
    type:'Home',
    nav:[
      [
        {name:"关于本机",ischildren:false,select:false},
      ],[
        {name:"系统偏好设置...",ischildren:false,select:false}
      ],[
        {name:"最近使用项目",ischildren:true,children:[[{name:"New",select:false}, {name:"Open133",select:false,logo:{type:0,font:'&#xe602;'}}],[{name:"New",ischildren:0,select:true}, {name:"Open",ischildren:false,select:false,logo:{type:0,font:'&#xe602;'}}],[{name:"New",ischildren:0}, {name:"Open",ischildren:1,select:false,logo:{type:0,font:'&#xe602;'}}]],select:false},
      ],[
        {name:"退出登录（用户名）",ischildren:false},
      ]
    ]
  },
  menuNav:[{
    name:'File',
    type:'File',
    nav:[
      [
        {name:"New1",ischildren:false,select:false},
        {name:"Open1",ischildren:false,select:false,logo:{type:0,font:'&#xe602;'}}
      ],[
        {name:"New2",ischildren:false,select:true},
        {name:"Open2",ischildren:true,children:[[{name:"New",select:false}, {name:"Open133",select:false,logo:{type:0,font:'&#xe602;'}}],[{name:"New",ischildren:0,select:true}, {name:"Open",ischildren:false,select:false,logo:{type:0,font:'&#xe602;'}}],[{name:"New",ischildren:0}, {name:"Open",ischildren:1,select:false,logo:{type:0,font:'&#xe602;'}}]],select:false,logo:{type:0,font:'&#xe602;'}}
      ],[
        {name:"New3",ischildren:false},
        {name:"Open3",ischildren:true,children:[[{name:"New2",select:false}, {name:"Open3",select:false,logo:{type:0,font:'&#xe602;'}}],[{name:"New",select:true}, {name:"Open",ischildren:false,select:false,logo:{type:0,font:'&#xe602;'}}],[{name:"New",ischildren:0}, {name:"Open",ischildren:1,select:false,logo:{type:0,font:'&#xe602;'}}]],select:false,logo:{type:0,font:'&#xe602;'}}
      ]
    ]
  },
  {
    name:'Edit',
    type:'Edit',
    nav:[
      [
        {name:"New4",ischildren:false,select:false},
        {name:"Open4",ischildren:false,select:false,logo:{type:0,font:'&#xe602;'}}
      ],[
        {name:"New5",ischildren:false,select:false},
        {name:"Open5",ischildren:true,children:[[{name:"New",ischildren:false,select:false}, {name:"Open",ischildren:false,select:false,logo:{type:0,font:'&#xe602;'}}],[{name:"New",ischildren:false,select:true}, {name:"Open",ischildren:false,select:false,logo:{type:0,font:'&#xe602;'}}],[{name:"New",ischildren:0}, {name:"Open",ischildren:false,select:false,logo:{type:0,font:'&#xe602;'}}]],select:false,logo:{type:0,font:'&#xe602;'}}
      ],[
        {name:"New6",ischildren:false,select:false},
        {name:"Open2adfdfs",ischildren:true,children:[[{name:"New2",ischildren:false,select:false}, {name:"Open3",ischildren:false,select:false,logo:{type:0,font:'&#xe602;'}}],[{name:"New",ischildren:false,select:true}, {name:"Open",ischildren:false,select:false,logo:{type:0,font:'&#xe602;'}}],[{name:"New",ischildren:0}, {name:"Open",ischildren:false,select:false,logo:{type:0,font:'&#xe602;'}}]],select:false,logo:{type:0,font:'&#xe602;'}}
      ]
    ]
  }
  ],
  openMenuNav:{}, //正在访问的菜单项
  isEnterMenu:false,
  isEnterMenuNav:false
})