/**
 * @Description:
 * @Author: tianlang
 * @Email: tianlangstudio@aliyun.com
 * @Date: 20-4-30 上午11:26
 */

import React from 'react';
import {View} from 'react-desktop';
import ToolTip from '../tooltip/index';
import "../../public/style/tlp/start_menu_tlp.scss"

class UserInfoTlP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false
        }
    }
    toggleStartMenu(isOpen) {
        this.setState({isOpen: isOpen})
    }
    render() {
       return (
        <>
            <View
                id="user-info"
                className="user-info-menu-logo"
                onMouseEnter={() => this.toggleStartMenu(true)}
                onMouseLeave={()=> this.toggleStartMenu(false)}
                style={{
                    backgroundSize:'cover',
                    background: `url(${require("../../public/imgs/logo-tlp-220X220.png")}) no-repeat center center / cover`

                }}/>
            <ToolTip   active={this.state.isOpen} position="bottom" arrow="right" parent="#user-info">
                <View className="user-info-tlp"
                      layout="horizontal"
                      horizontalAlignment="left">
                    <ul>
                        <li>用户信息</li>
                        <hr/>
                        <li>退出登录</li>
                        <hr/>
                        <li><a　href="https://github.com/TianLangStudio" target="_blank">关于</a></li>
                    </ul>
                </View>
            </ToolTip>
        </>
     )}
}

export default UserInfoTlP;