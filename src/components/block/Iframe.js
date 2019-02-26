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
    const {
      style,isLoad,title
    } = this.props
    const iStyle = {
      ...style,
      visibility:isLoad?"visible":"hidden"
    }
    return (
      <Fragment>
        <iframe
          name={title+"_frame"}
          title={title}
          frameBorder={this.props.frameBorder}
          style={iStyle}
          width={this.props.width}
          src={this.props.src}
          onLoad={this.props.onLoad}
        />
      </Fragment>

    )
  }
}


export default Iframe