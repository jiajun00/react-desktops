import React, {Component, Fragment} from 'react'
import { View } from 'react-desktop'
const datalist = [
  {name:'type1-1',color:'#DC8536'},
  {name:'type1-2',color:'#D53230'},
  {name:'type1-3',color:'#C1423F'},
  {name:'type1-4',color:'#B32553'},
  {name:'type1-5',color:'#AF2475'},
  {name:'type1-6',color:'#8D1B85'},
  {name:'type1-7',color:'#7C2393'},
  {name:'type1-8',color:'#6E4FA4'},
  {name:'type2-1',color:'#3E8746'},
  {name:'type2-2',color:'#397A26'},
  {name:'type2-3',color:'#398374'},
  {name:'type2-4',color:'#447C97'},
  {name:'type2-5',color:'#447C97'},
  {name:'type2-6',color:'#6B69CF'},
  {name:'type2-7',color:'#8D8CD3'},
  {name:'type2-8',color:'#8265B3'},
]

class ColorSet extends Component {

  state = {
    current:{
      name:'type2',color:'red'
    }
  }

  render() {
    const {
      current
    } = this.state
    return (
      <Fragment>
        <h2>选择背景色</h2>
        <View className="desktop_set_color_ul">
          {datalist.map(row=>(
            <div
              className={row.name === current.name?'action':''}
              key={row.name}
              style={{backgroundColor:row.color}}
            />
          ))}
        </View>
      </Fragment>
    )
  }
}


export default ColorSet