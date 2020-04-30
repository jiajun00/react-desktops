/**
 * @Description:
 * @Author: tianlang
 * @Email: tianlangstudio@aliyun.com
 * @Date: 20-4-29 下午10:22
 */
import React from 'react';
import {View} from 'react-desktop';
import ToolTip from 'react-portal-tooltip';
import "../../public/style/tlp/start_menu_tlp.scss"

class StartMenuTlP extends React.Component{
    state = {
        isOpen: false,
        categorys:{
            "hello":[
                {name:"helloword", icon:`url(${require("../../public/imgs/my_computer.png")})`, intro:"ssssssssssssss",id:"11"},
                {name:"helloword", icon:"", intro:"ssssssssssssss",id:"12"},
                {name:"helloword", icon:"", intro:"ssssssssssssss",id:"13"},
                {name:"helloword", icon:"", intro:"ssssssssssssss",id:"14"},
                {name:"helloword", icon:"", intro:"ssssssssssssss",id:"15"}
            ],
            "world":[
                {name:"world", icon:"", intro:"ssssssssssssss",id:"21"},
                {name:"world", icon:"", intro:"ssssssssssssss",id:"22"},
                {name:"world", icon:"", intro:"ssssssssssssss",id:"23"},
                {name:"world", icon:"", intro:"ssssssssssssss",id:"24"},
            ]
        },
        activeCategory:"hello"
    }
    toggleStartMenu(isOpen) {
        this.setState({isOpen: isOpen})
    }
    render() {
        return (
            <>
                <View padding="3px 2px" onMouseEnter={() => this.toggleStartMenu(true)}
                      onMouseLeave={()=> this.toggleStartMenu(false)}>
                    <i  id="start-menu" className="iconfont">&#xe602;&nbsp;</i>
                    <span >应用程序</span>
                </View>
                <ToolTip active={this.state.isOpen} position="bottom" arrow="left" parent="#start-menu">
                   <View className="start_menu_tlp" width="600px" height="500px">
                    <View
                        className="start_menu_tlp_left"
                        width="30%"
                        height="100%"
                        layout="horizontal"
                        horizontalAlignment="left">
                        <ul>
                        {Object.keys(this.state.categorys).map((category, idx) => (
                                <li key={category} onClick={(e)=>(this.activeCategory = category)}>
                                    {category}
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
                            {this.state.categorys[this.activeCategory||"hello"].map((app) => (
                                <li key={app.id} title={app.intro}>
                                    <img className="stat_menu_app_logo" src={app.icon}/>
                                    {app.name}
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

export default StartMenuTlP