import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'

class Iframe extends Component {

  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener('load', this.onLoad);
  }

  onLoad = () => {
    // ReactDOM.findDOMNode(this).contentDocument.body.addEventListener('click', this.props.setWindowIndex);
  }

  render() {
    let { style } = this.props
    if(this.props.isLoad){      style.visibility="visible"
    }else{
      style.visibility="hidden"
    }
    return (
      <Fragment>
        <iframe
          title={this.props.title}
          frameBorder={this.props.frameBorder}
          style={style}
          width={this.props.width}
          src={this.props.src}
          onLoad={this.props.onLoad}
        />
      </Fragment>

    )
  }
}


export default Iframe