import { fromJS } from 'immutable'

export default fromJS({
  emptyLists:[],
  fileLists: [],
  menuList:{
    id:0,
    pid:-1,
    name:'我的系统',
    type:'system',
    logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/menu/home.png",
    list:[
      {id:1,pid:0,name:"我的文档",type:"docs",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/menu/file.png"},
      {id:3,pid:1,name:"文件夹1",type:"file1",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png"},
      {id:4,pid:3,name:"文件夹1",type:"file1-1",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png"},
      {id:5,pid:3,name:"文件夹2",type:"file1-2",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png"},
      {id:6,pid:3,name:"文件夹3",type:"file1-3",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png"},
      {id:7,pid:1,name:"文件夹2",type:"file2",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png"},
      {id:2,pid:0,name:"我的资源",type:"source",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/menu/source.png"},
      {id:8,pid:2,name:"文件夹1",type:"file4",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png"},
      {id:9,pid:2,name:"文件夹2",type:"file5",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png"},
      {id:10,pid:2,name:"文件夹3",type:"file6",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png"},
      {id:11,pid:2,name:"文件夹4",type:"file7",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png"},
    ]
  }
})