/**
 * @Description:
 * @Author: tianlang
 * @Email: tianlangstudio@aliyun.com
 * @Date: 20-5-4 下午4:26
 */
import React, {Component} from 'react';
import {Rnd} from 'react-rnd';
import "../../public/style/tlp/start_menu_tlp.scss";

/**
 * 窗口遮盖组件用于遮盖广告
 * position 目前只有left和right值
 * */
class Cover extends Component{
    constructor(props) {
        super(props);
        let position = props.position || 'left';
        let winWidth = parseInt(props.winWidth);//父窗口的宽度
        let width = this.props.width || 2;
        this.state = {
            x:0,
            y:0,
            width:width,
            height:props.winHeight
        };
        if(position === 'right') {
            this.state.x =  winWidth - width;
            this.state.y = 0;
            this.state.width = width;
            this.height = props.winHeight;
        }

    }
    render() {
        let position = this.props.position;
        let className = (this.props.className || "") + " window-cover"
        className += (parseInt(this.state.width) >= 100 && " window-cover-m");
        className += (parseInt(this.state.width) >= 300 && " window-cover-l");
        return(
            <Rnd className={className}
                 disableDragging="true"
                size={{ width: this.state.width,  height: this.state.height }}
                position={{ x: this.state.x, y: this.state.y }}
                enableResizing={{
                        top:true,
                        right: position === "left",
                        bottom:true,
                        left: position !== "left",
                        topRight:false,
                        bottomRight:false,
                        bottomLeft:false,
                        topLeft:false
                    }}
                onResizeStop={(e, direction, ref, delta, position) => {

                    this.setState({
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position,
                    });
                    e.stopPropagation();
                }}
            >
            </Rnd>
        )
    }
}

export default Cover;