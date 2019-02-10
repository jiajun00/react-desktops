import { fromJS } from 'immutable'
import FileImg1 from '../../../../public/images/logo/file/file.png'
import FileImg2 from '../../../../public/images/logo/file/fileimg.png'
import GitHubImg from'../../../../public/images/logo/github.png'
import QqxioImg from '../../../../public/images/logo/qqxio.png'
import ChartImg from '../../../../public/images/logo/chart.png'
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
  desktopApps:[ //桌面应用图标
    {name:'文件1',type:'filename1',logo:FileImg1,isShow:true,url:'/win/system',isIframe:true,isBlank:false,sort:1},
    {name:'博客', type:'qqxio', logo:QqxioImg,isShow:true,url:'https://www.qqxio.cn',isIframe:true,isBlank:false,sort:2},
    {name:'文件2',type:'filename3',logo:FileImg1,isShow:true,url:'/win/system',isIframe:true,isBlank:false,sort:3},
    {name:'文件3',type:'filename4',logo:FileImg2,isShow:true,url:'/win/system',isIframe:true,isBlank:false,sort:4},
    {name:'github',type:'github',logo:GitHubImg,isShow:true,url:'https://github.com/jiajun00',isIframe:false,isBlank:true,sort:5},
    {name:'数据驾驶舱',type:'data_driver',logo:ChartImg,isShow:true,url:'https://github.com/jiajun00',isIframe:false,isBlank:false,sort:6}
  ],
  openWindowList: [],  //已打开的应用
})