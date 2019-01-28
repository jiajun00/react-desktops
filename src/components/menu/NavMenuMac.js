import React from 'react'
import "../../public/style/mac/nav_menu_mac.scss"

class NavMenuMac extends React.Component{
  
  state = {
    isChildren: false,
    childrenNavStyle:{},
    openChildrenMenuNav:{}
  }
  render(){
    return (
      <div className="nav_menu_mac" onMouseEnter={this.props.mouseEnter} onMouseLeave={this.props.mouseLeavel} style={this.props.hasOwnProperty('style')?this.props.style:{}}>
        {this.props.dataList.map((list,index) => (
          <ul key={index} className={index>0 ? "borderTop" : ""}>
            {list.map((row,i) => (
              <li
                key={row.name}
                onMouseEnter={(e)=>this.handleMouseEnter(e,row)}
                onMouseLeave={()=>this.handleMouseLeave(row)}
              >
                <div className="nav_check_logo">
                  {row.select &&
                  <i className="iconfont">&#xe66e;</i>
                  }
                </div>
                {row.hasOwnProperty('logo') && (
                  row.logo.type === 0 ?
                    <i
                      className="iconfont nav_left_logo"
                      style={row.logo.style}
                      dangerouslySetInnerHTML={{__html: row.logo.font}}
                    />
                    :
                    <img
                      src={row.logo.src}
                      className={row.logo.class}
                      style={row.logo.style}
                      alt={row.src}
                    />
                )}
                <span>{row.name}</span>
                {row.ischildren &&
                <i className="iconfont nav_right_logo" style={{position:'absolute',right:'5px'}}>&#xe61c;</i>
                }
                {(this.state.isChildren && this.state.openChildrenMenuNav.name === row.name) &&
                <ChildrenMenuNav
                  style={this.state.childrenNavStyle}
                  dataList={this.state.openChildrenMenuNav}
                />
                }
              </li>
            ))}
          </ul>
        ))}
      </div>
    )
  }
  handleMouseEnter(e,row){
    if(row.ischildren){
      let childrenNavStyle = {
        top:(e.currentTarget.offsetTop - e.currentTarget.offsetHeight - 4) + 'px',
        left:(e.currentTarget.offsetLeft + e.currentTarget.offsetWidth + 1) + 'px'
      }
      this.setState({
        isChildren:true,
        childrenNavStyle,
        openChildrenMenuNav:row
      })
    }
  }
  handleMouseLeave = (row) => {
    if(row.ischildren){
      this.setState({
        isChildren:false,
        openChildrenMenuNav:{},
        childrenNavStyle:{}
      })
    }
  }
}

//子菜单组件
const ChildrenMenuNav = (props) => {
  return (
    <div className="nav_menu_mac" style={props.hasOwnProperty('style')?props.style:{}}>
      {props.dataList.children.map((list,index) => (
        <ul key={index} className={index>0 ? "borderTop" : ""}>
          {list.map((row,i) => (
            <li
              key={row.name}
            >
              <div className="nav_check_logo">
                {row.select &&
                <i className="iconfont">&#xe66e;</i>
                }
              </div>
              {row.hasOwnProperty('logo') && (
                row.logo.type === 0 ?
                  <i
                    className="iconfont nav_left_logo"
                    style={row.logo.style}
                    dangerouslySetInnerHTML={{__html: row.logo.font}}
                  />
                  :
                  <img
                    src={row.logo.src}
                    className={row.logo.class}
                    style={row.logo.style}
                    alt={row.src}
                  />
              )}
              <span>{row.name}</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}


export default NavMenuMac