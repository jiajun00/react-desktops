import React, {Component} from 'react'
import { Icon, Balloon } from '@alifd/next'

class AppSetButton extends Component {
  state = {
    isVisible:false
  }
  render() {
    const {isVisible} = this.state
    const {isDelete} = this.props
    return (
      <Balloon
        closable={false}
        onVisibleChange={(e)=>{this.setState({isVisible:e})}}
        popupClassName="apps_list_set_content"
        trigger={<Icon className={isVisible?" apps_list_set rotation":"apps_list_set"} size="xs" type="arrow-down"/>}
        triggerType="hover"
        align="bl"
      >
        <ul>
          <li>查看</li>
          <li>编辑</li>
          {isDelete && <li>删除</li>}
        </ul>
      </Balloon>
    )
  }
}


export default AppSetButton