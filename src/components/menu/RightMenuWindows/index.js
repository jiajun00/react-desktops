import React, {Component} from 'react'
import { Animate } from '@alifd/next'
import RightMenuWindows from "./RightMenuWindows"
import "../../../public/style/components/menu/right_menu_windows.scss"


class index extends Component {

  state = {}
  render() {
    const {
      isOpenContextMenu
    } = this.props
    return (
      <Animate animation="right_menu_expand"
               beforeEnter={this.beforeEnter}
               onEnter={this.onEnter}
               afterEnter={this.afterEnter}
               beforeLeave={this.beforeLeave}
               onLeave={this.onLeave}
               afterLeave={this.afterLeave}>
        {isOpenContextMenu ?
          <RightMenuWindows {...this.props}/>
          : null
        }
      </Animate>
    )
  }
  beforeEnter(node) {
    node.style.opacity = 0
  }

  onEnter(node) {
    node.style.opacity = 1
  }

  afterEnter(node) {
    // node.style.height = null;
  }

  beforeLeave(node) {
    node.style.opacity = 1
  }

  onLeave(node) {
    node.style.opacity = 0
  }

  afterLeave(node) {
    // node.style.height = null;
  }

}


export default index