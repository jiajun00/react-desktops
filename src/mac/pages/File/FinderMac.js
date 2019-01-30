import React, {Component} from 'react'
import { NavLink,Route,Switch,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import {
  View,ListView,Text,
  ListViewFooter, ListViewSection, ListViewSectionHeader, ListViewRow
} from 'react-desktop'
import "../../../public/style/mac/finder_mac.scss"
import LeftnavRightContent from "../../../components/layout/LeftnavRightContent";
import File from "../../../components/file/File";
import FileList from "../../../components/file/FileList";
import Iframe from "../../../components/block/Iframe";

const LeftLayout = (props) => {

    return (
      <ListView className="nav_lists" background="#f1f2f4" width="100%" height="100%">
        {props.leftNavList.map((list)=>(
          <ListViewSection key={list.type}>
            <ListViewSectionHeader style={{fontSize:'12px',border:'none',color:'#666'}}>{list.title}</ListViewSectionHeader>
            {list.navList.map((row)=>(
                  <NavLink key={row.type} to={`${props.match.url}${row.url}`}>
                    <ListViewRow>
                      <i className="iconfont" style={row.iconStyle} dangerouslySetInnerHTML={{__html: row.icon}}/>
                      <Text color="#666" size="13"
                            style={{lineHeight: '20px', marginLeft: '5px', fontWeight: 500}}>{row.name}</Text>
                    </ListViewRow>
                  </NavLink>

            ))}
          </ListViewSection>
        ))}
        <ListViewFooter>
          <Text size="11" color="#696969">Finder</Text>
        </ListViewFooter>
      </ListView>
    )
}

class FinderMac extends Component {

  render()  {
    return (
      <View className="finder" width="100%" height="100%">
        <LeftnavRightContent
          borderCenter="#eee"
          fileLists={this.props.fileLists}
          emptyLists={this.props.emptyLists}
          emptyList={this.props.emptyList}
        >
          <nav style={{height:'100%'}}>
            <LeftLayout match={this.props.match} leftNavList={this.props.leftNavLists}/>
          </nav>
          <main style={{background:'#fff',height:'100%'}}>
            <Switch>
              <Route
                exact
                path={`${this.props.match.url}/download`}
                render={()=><File emptyList={this.props.emptyList} fileLists={this.props.fileLists} emptyLists={this.props.emptyLists} setFileList={this.props.setFileList}/>}
              />
              <Route
                exact
                path={`${this.props.match.url}/application`}
                render={()=><FileList/>}
              />
              <Route
                exact
                path={`${this.props.match.url}/file`}
                render={()=><File emptyList={this.props.emptyList} fileLists={this.props.fileLists} emptyLists={this.props.emptyLists} setFileList={this.props.setFileList}/>}
              />
              <Route
                exact
                path={`${this.props.match.url}/cloud`}
                render={()=><Iframe style={{width:'100%',height:'100%',border:'0'}} isLoad={true} src={'http://cloud.qqxio.cn'}/> }
              />
              <Route
                render={()=><Redirect to={{pathname:`${this.props.match.url}/file`}}/>}
              />
            </Switch>
          </main>
        </LeftnavRightContent>
      </View>
    )
  }
}

const initMapStateToProps = (state) => ({
  emptyLists: state.getIn(['fileMac','emptyLists']).toJS(),
  leftNavLists: state.getIn(['fileMac','leftNavLists']).toJS(),
  fileLists: state.getIn(['fileMac','fileLists']).toJS()
})

const initMapDispatchToProps = (dispatch) => ({
  /*
   * 设置空文件占位列表
   */
  emptyList(list){
    dispatch(actionCreators.empty_list(list))
  },
  /*
   * 排序文件列表
   */
  setFileList(list){
    dispatch(actionCreators.set_file_list(list))
  }
})

export default connect(initMapStateToProps,initMapDispatchToProps)(FinderMac)