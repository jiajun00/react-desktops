import React, {Component} from 'react'
import "../../public/style/mac/page_header.scss"

class PageHeader extends Component {

    state = {}

    render() {
        return (
          <div className="page_header">
              <div>面包屑</div>
              <div className="page_header_main">
                  <div className="page_header_main_logo">l</div>
                  <div className="page_header_main_header">
                      <div className="page_header_main_header_title">
                          <h3>title</h3>
                          <div className="page_header_main_header_title_nav">title-right</div>
                      </div>
                      <div className="page_header_main_content">
                          
                      </div>
                  </div>
              </div>
          </div>
        )
    }
}


export default PageHeader