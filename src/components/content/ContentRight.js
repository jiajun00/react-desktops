import React, {Component} from 'react'
import { Breadcrumb } from '@alifd/next'

import "../../public/style/components/content/content_right.scss"

class ContentRight extends Component {

  state = {}

  render() {
    const {
      merge_url,route_url,className,title
    } = this.props
    return (
      <div className={"content_right "+className}>
        <Breadcrumb>
          <Breadcrumb.Item link={merge_url}>首页</Breadcrumb.Item>
          <Breadcrumb.Item link={merge_url+route_url}>{title}</Breadcrumb.Item>
        </Breadcrumb>
        <div className={"content_right_main "+className+"_content"}>
          {this.props.children}
        </div>
      </div>
    )
  }
}


export default ContentRight