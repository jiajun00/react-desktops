/**
 * @Description:
 * @Author: tianlang
 * @Email: tianlangstudio@aliyun.com
 * @Date: 20-4-29 下午10:22
 */
import React from 'react';
import {View} from 'react-desktop';
import ToolTip from 'react-portal-tooltip';

class AppCenter extends React.Component{
    state = {
        isOpen: false
    }
    toggleAppCenter(isOpen) {
        this.setState({isOpen: isOpen})
    }
    render() {
        return (
            <>
                <View padding="3px 2px" onMouseEnter={() => this.toggleAppCenter(true)}
                      onMouseLeave={()=> this.toggleAppCenter(false)}>
                    <i  id="app-center" className="iconfont">&#xe602;&nbsp;</i>
                    <span >应用程序</span>
                </View>
                <ToolTip active={this.state.isOpen} position="bottom" arrow="left" parent="#app-center">
                   <View width="600px" height="500px">
                    <View
                        width="30%"
                        height="26px"
                        layout="horizontal"
                        horizontalAlignment="center">
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                    </View>
                    <View
                        width="70%"
                        height="26px"
                        layout="horizontal"
                        horizontalAlignment="center">
                        <p>2</p>
                        <p>2</p>
                        <p>2</p>
                        <p>2</p>
                        <p>2</p>
                        <p>2</p>
                    </View>
                   </View>
                </ToolTip>
            </>
        )
    }
}

export default AppCenter