import React, {Component} from 'react'

class Portal extends Component {

  state = {}

  render() {
    const buttonStyle = {
      display:'block',
      width:300,
      padding:'50px 0',
      textAlign:'center',
      border:'1px solid #666',
      borderRadius:5,
      margin:'0 auto',
      cursor:'pointer',
      fontSize:38
    }
    return (
      <div style={{paddingTop:20}}>
        <a href="/win" style={buttonStyle}>Windows系统</a>
        &nbsp;&nbsp;&nbsp;
        <a href="/mac" style={buttonStyle}>Mac系统</a>
      </div>
    )
  }
}


export default Portal