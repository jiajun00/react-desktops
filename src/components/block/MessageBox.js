import React, {Component, Fragment} from 'react'
import { View } from "react-desktop"
import { Animate,Icon } from '@alifd/next';


class MessageBox extends Component {

  render() {
    const {
      isOpenMessageBox,
      closeMessageBox
    } = this.props
    return (
      <Fragment>
        <Animate
          animation="message_box_expand"
          beforeEnter={this.beforeEnter}
          onEnter={this.onEnter}
          afterEnter={this.afterEnter}
          beforeLeave={this.beforeLeave}
          onLeave={this.onLeave}
          afterLeave={this.afterLeave}
        >
          {isOpenMessageBox ?
            <View
              className="message_box"
              height="100%"
              width={350}
              layout="vertical"
              style={{position:'absolute',right:0}}
            >
              <div className="message_box_header">
                <h2>最新消息</h2>
                <span>清除全部</span>
              </div>
              <div className="message_box_content">
                <ul>
                  <li>
                    <h3>冰雪封冻不住的喜悦</h3>
                    <p>经济法阿斯顿时代大厦的啊茭的开发建设的九分裤接口空间看接口看键空间空间空间空间看接口接口接口</p>
                    <Icon size="xs" type="delete-filling" />
                  </li>
                </ul>
              </div>
            </View>
            :
            null
          }
        </Animate>
        {isOpenMessageBox &&
          <div onClick={closeMessageBox} style={{position:'absolute',width:'100%',height:'calc(100% + 37px)',zIndex:1}} />
        }
      </Fragment>

    )
  }


  beforeEnter = (node) => {
    this.width = node.offsetWidth;
    node.style.right = `-${this.width}px`;
  }

  onEnter = (node) => {
    node.style.right = `0px`;
  }

  afterEnter = (node) => {
    // this.width = null;
  }

  beforeLeave = (node) => {
    node.style.right = `0px`;
  }

  onLeave = (node) => {
    node.style.right = `-${this.width}px`;
  }

  afterLeave = (node) => {
    // node.style.right = null;
  }
}


export default MessageBox