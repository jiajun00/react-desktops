import React, {Component} from 'react'
import { View } from "react-desktop"
import { Animate } from '@alifd/next';


class MessageBox extends Component {

  constructor(props){
    super(props)
  }

  render() {
    const { isOpenMessageBox } = this.props
    return (
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
              width={220}
              style={{position:'absolute',right:0}}
            >
              asd
            </View>
          :
          null
        }

      </Animate>
    )
  }


  beforeEnter = (node) => {
    console.log(this)
    this.width = node.offsetWidth;
    node.style.width = '0px';
  }

  onEnter = (node) => {
    node.style.width = `${this.width}px`;
  }

  afterEnter = (node) => {
    this.width = null;
  }

  beforeLeave = (node) => {
    node.style.width = `${this.width}px`;
  }

  onLeave = (node) => {
    node.style.width = '0px';
  }

  afterLeave = (node) => {
    node.style.width = null;
  }
}


export default MessageBox