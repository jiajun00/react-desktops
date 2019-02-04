import { fromJS } from 'immutable'
import FileImg1 from '../../../../public/images/logo/file/file.ico'
import FileImg2 from '../../../../public/images/logo/file/fileimg.ico'
export default fromJS({
  dataTime:{
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
    {name:'文件1',type:'filename1',logo:FileImg1,isShow:true,url:'/win/system',isIframe:true,sort:1},
    {name:'图片文件夹', type:'filename2', logo:FileImg2,isShow:true,url:'http://www.baidu.com',isIframe:true,sort:2},
    {name:'文件2',type:'filename3',logo:FileImg1,isShow:true,url:'/win/system',isIframe:true,sort:3},
    {name:'文件3',type:'filename4',logo:FileImg1,isShow:true,url:'/win/system',isIframe:true,sort:4},
  ],
  openWindowList: [],  //已打开的应用
})