import React, {Component, Fragment} from 'react'
import { View } from 'react-desktop'
import { Nav,Button,Balloon,Grid,Animate } from '@alifd/next'

import DefaultHeaderImg from '../../public/images/logo/default_header.jpg'
import WanyiApp from '../../public/images/application/wangyi.jpg'
import WeatherApp from '../../public/images/application/weather.png'
import XiamiApp from '../../public/images/application/xiami.jpg'

const{ Row,Col } = Grid
const { Item, Group,SubNav } = Nav

const Logout = <i className="iconfont">&#xeaf7;</i>

class StartBoxWindows extends Component {

  state = {}

  render() {
    const {
      isOpenStartBox,
      closeStartBox
    } = this.props
    return (
      <Fragment>
        <Animate
          animation="start_box_expand"
          beforeEnter={this.beforeEnter}
          onEnter={this.onEnter}
          afterEnter={this.afterEnter}
          beforeLeave={this.beforeLeave}
          onLeave={this.onLeave}
          afterLeave={this.afterLeave}
        >
        {isOpenStartBox ?
        <View className="start_box" style={{position: 'absolute', bottom: 0}}>
          <View className="start_box_left">
            <div className="start_box_left_user">
              <div className="start_box_left_info">
                <img src={DefaultHeaderImg} alt="header_img"/>
                <h3>用户名</h3>
                <p>系统管理员</p>
              </div>
              <div className="start_box_left_vip">
                <div className="start_box_left_vip_info">
                  <i className="iconfont">&#xe6c2;</i>
                  <span>会员空间</span>
                </div>
                <Button type="normal" size="small">开通会员</Button>
              </div>
              <div className="start_box_left_operating">
                <ul>
                  <li>
                    <div>
                      <Balloon align="r" trigger={Logout} closable={false}>退出登录</Balloon>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="start_box_left_menus">
              <Nav style={{width: '100%', height: 330, overflowY: 'auto'}}>
                <Group label="A">
                  <Item icon="account">Navigation One</Item>
                  <Item icon="account">Navigation Two</Item>
                  <Item icon="account">Navigation Three</Item>
                </Group>
                <Group label="B">
                  <Item icon="account">Navigation Four</Item>
                  <Item icon="account">Navigation Five</Item>
                  <Item icon="account">Navigation Six</Item>
                  <SubNav icon="account" label="Sub Nav">
                    <Item icon="account">Item 1</Item>
                    <Item icon="account">Item 2</Item>
                    <Item icon="account">Item 3</Item>
                    <Item icon="account">Item 4</Item>
                  </SubNav>
                </Group>
              </Nav>
            </div>
          </View>
          <View className="start_box_right" layout="vertical">
            <View className="start_box_right_header">
              <h2>应用中心</h2>
            </View>
            <View className="start_box_right_content" layout="vertical">
              <Row gutter={8}>
                <Col span="6">
                  <div className="start_box_application">
                    <img src={WanyiApp} alt="wangyi"/>
                    <h4>标题</h4>
                    <div className="start_box_application_hover"/>
                  </div>
                </Col>
                <Col span="6">
                  <div className="start_box_application">
                    <img src={WeatherApp} alt="wangyi"/>
                    <div className="start_box_application_hover"/>
                  </div>
                </Col>
                <Col span="12">
                  <div className="start_box_application">
                    <img src={XiamiApp} alt="xiami"/>
                    <div className="start_box_application_hover"/>
                  </div>
                </Col>
              </Row>
            </View>
          </View>
        </View>
          :
          null
        }
        </Animate>
        {isOpenStartBox && <div onClick={closeStartBox} style={{position:'absolute',width:'100%',height:'calc(100% + 37px)',zIndex:1}} /> }
      </Fragment>
    )
  }
  beforeEnter = (node) => {
    this.height = node.offsetHeight;
    node.style.bottom = `-${this.height}px`;
  }

  onEnter = (node) => {
    node.style.bottom = `0px`;
  }

  afterEnter = (node) => {
    // this.width = null;
  }

  beforeLeave = (node) => {
    node.style.bottom = `0px`;
  }

  onLeave = (node) => {
    node.style.bottom = `-${this.height}px`;
  }

  afterLeave = (node) => {
    // node.style.bottom = null;
  }
}


export default StartBoxWindows