import { fromJS } from 'immutable'

export default fromJS({
  LeftMenu:{  //左侧菜单列表
    title:'系统管理',
    type:'system_control',
    url:null,
    children:[
      {
        title:'系统配置',
        type:'system_set',
        url:null,
        children:[
          {title:'桌面管理',type:'desk_manage',url:'/desk_manage',logo:{type:'icon',value:'picture',size:'xs'},children:null},
          {title:'系统参数',type:'data_manage',url:'/data_manage',logo:{type:'icon',value:'set',size:'xs'},children:null}
        ]
      },{
        title:'用户配置',
        type:'user_set',
        url:null,
        children:[
          {title:'权限管理',type:'privilege_manage',url:'/privilege_manage',logo:{type:'icon',value:'filter',size:'xs'},children:null},
          {title:'角色管理',type:'role_manage',url:'/role_manage',logo:{type:'icon',value:'edit',size:'xs'},children:null},
          {title:'管理员列表',type:'admin_manage',url:'/admin_manage',logo:{type:'icon',value:'atm',size:'xs'},children:null},
          {title:'用户管理',type:'user_manage',url:'/user_manage',logo:{type:'icon',value:'account',size:'xs'},children:null}
        ]
      },{
        title:'应用配置',
        type:'apply_set',
        url:null,
        children:[
          {title:'应用管理',type:'apps_manage',url:'/apps_manage',logo:{type:'icon',value:'favorites-filling',size:'xs'},children:null},
          {title:'桌面应用管理',type:'desktop_app_manage',url:'/desktop_app_manage',logo:{type:'icon',value:'edit',size:'xs'},children:null}
        ]
      }
    ]
  }
})