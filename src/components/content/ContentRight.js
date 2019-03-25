import React, {Component} from 'react'
import { Breadcrumb } from '@alifd/next'
import {  Link } from 'react-router-dom'

import "../../public/style/components/content/content_right.scss"

class ContentRight extends Component {
  constructor(props){
    super(props)
    this.breakcrumbList = []
    this.i = 0

  }
  state = {
    breadcrumb_list:[]
  }
  componentDidMount(){
    if(this.props.isFile){
      this.search_item(this.props.match.params.id)
    }
  }
  shouldComponentUpdate(newProps, newState){
    if(this.props.isFile && newProps.match.params.id !== this.props.match.params.id){
      this.search_item(newProps.match.params.id)
    }
    return true
  }
  render() {
    const {
      className,isFile,breadcrumbRoute
    } = this.props
    return (
      <div className={"content_right "+className}>
        {isFile ?
            this.fileBreadcrumbItem()
          :
          <Breadcrumb>
            <Breadcrumb.Item><Link to={breadcrumbRoute.url}>{breadcrumbRoute.title}</Link></Breadcrumb.Item>
            {breadcrumbRoute.list.map((row,i)=>(
              <Breadcrumb.Item key={i}><Link to={breadcrumbRoute.url + row.url}>{row.name}</Link></Breadcrumb.Item>
            ))}

          </Breadcrumb>
        }
        <div className={"content_right_main "+className+"_content"}>
          {this.props.children}
        </div>
      </div>
    )
  }
  fileBreadcrumbItem = () => {
    const { breadcrumb_list } = this.state
    const { match_old,menuList } = this.props
    return (
      <Breadcrumb>
        <Breadcrumb.Item><Link to={match_old.path+"/0"}>{menuList.name}</Link></Breadcrumb.Item>
        {breadcrumb_list.map(row=>(
          <Breadcrumb.Item key={row.id}><Link to={match_old.path+"/"+row.id}>{row.name}</Link></Breadcrumb.Item>
        ))}
      </Breadcrumb>
    )
  }
  search_item = (id) => {
    if(parseInt(id)){
      const { menuList } = this.props
      const { list } = menuList
      const menu = list.find(row=>{
        return row.id === parseInt(id)
      })
      this.breakcrumbList[this.i] = menu
      this.i += 1
      if(menu.pid === 0){
        const breadcrumb_list = this.breakcrumbList.reverse()
        this.setState({
          breadcrumb_list
        },()=>{
          this.breakcrumbList = []
          this.i = 0
        })
      }else {
        this.search_item(menu.pid)
      }
    }else{
      this.setState({
        breadcrumb_list: []
      })
    }
  }
}


export default ContentRight