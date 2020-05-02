/**
 * @Description:
 * @Author: tianlang
 * @Email: tianlangstudio@aliyun.com
 * @Date: 20-4-29 下午10:22
 */
import React from 'react';
import {View} from 'react-desktop';
import ToolTip from 'react-portal-tooltip';
import { connect } from 'react-redux';
import "../../public/style/tlp/start_menu_tlp.scss"
import {getAppCategoryList, getAppList} from "../../tlp/pages/Home/store/actionCreators";
import { fromJS } from 'immutable';
import {actionCreators as actionCreatorsHomeMac, actionCreators} from "../../tlp/pages/Home/store";
import {APP_LOGO_DEFAULT} from "../../AppConf.js"

class StartMenuTlP extends React.Component{
    state = {
        isOpen: false,
        categorys:[
            {id:"00002",dictLabel:"写作"},
            {id:"00001",dictLabel:"教育"},
        ],
        apps: [
            {id:"000021", name:"简书",url:"https://www.jianshu.com/",
                logo:"https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png"
            },
            {id:"000011", name:"51cto", url:"https://edu.51cto.com/sd/aca72",
                logo:"https://avatars1.githubusercontent.com/u/20293523?s=460&u=c2776d5f7286c3de1cfc5019cffaeb909da5cd2b&v=4"},

        ],
        activeCategoryId:""
    }
    toggleStartMenu(isOpen) {
        this.setState({isOpen: isOpen})
    }

    componentDidMount() {
       getAppList((data) => {
           this.setState({apps:data});
       });
       getAppCategoryList((data) => {
           this.setState({categorys: data});
       });
    }
    categoryClickHandler(categoryId) {
        this.setState({activeCategoryId:categoryId});
    }
    render() {
        const {
            openWindowList,setWindowOpenList
        } = this.props
        let state = this.state;
        return (
            <>
                <View padding="3px 2px" onMouseEnter={() => this.toggleStartMenu(true)}
                      onMouseLeave={()=> this.toggleStartMenu(false)}>
                    <i  id="start-menu" className="iconfont">&#xe602;&nbsp;</i>
                    <span >应用程序</span>
                </View>
                <ToolTip active={state.isOpen} position="bottom" arrow="left" parent="#start-menu">
                   <View className="start_menu_tlp" width="600px" height="500px">
                    <View
                        className="start_menu_tlp_left"
                        width="30%"
                        height="100%"
                        layout="horizontal"
                        horizontalAlignment="left">
                        <ul>
                        {state.categorys.map((category, idx) => (
                                <li key={category.id} onClick={()=>(this.categoryClickHandler(category.id))}>
                                    {category.dictLabel}
                                </li>
                        ))}
                        </ul>
                    </View>
                    <View
                        className="start_menu_tlp_right"
                        width="70%"
                        height="100%"
                        layout="horizontal"
                        horizontalAlignment="left">
                        <ul>
                            {state.apps.map((app) => ((!state.activeCategoryId || state.activeCategoryId == app.categoryId)&&
                                <li onClick={() => setWindowOpenList(app, openWindowList)}
                                    key={app.id} title={app.intro || app.name }>
                                    <img alt={app.name} className="start_menu_app_logo" src={app.logo||APP_LOGO_DEFAULT}/>
                                    <span className="start_menu_app_name">{app.name}</span>
                                </li>
                            ))}
                        </ul>
                    </View>
                   </View>
                </ToolTip>
            </>
        )
    }
}

const initMapStateToProps = (state) => ({
    openWindowList: state.getIn(['homeMac','openWindowList']).toJS()
})
const initMapDispatchToProps = (dispatch) => ({
    /*
     * 添加或显示窗口列表
     */
    setWindowOpenList(window,openWindowList){
        dispatch(actionCreators.setWindowOpenList(window,openWindowList))
    }
})
export default connect(initMapStateToProps, initMapDispatchToProps)(StartMenuTlP)