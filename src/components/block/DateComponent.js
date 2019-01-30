import React, {Component, Fragment} from 'react'

class DateComponent extends Component {
  componentDidMount(){
    this.getDate()

  }
  shouldComponentUpdate(newProps) {
    if(newProps.dataTime!==this.props.dataTime){
      return true
    }
    return false
  }
  render() {
    const { year,month,day,hour,minute,week } = this.props.dataTime
    return (
      <div className="data_time">
        { this.props.type === 'win' ?
          <Fragment>
            <div>
              {`${hour}:${minute} 周${week}`}
            </div>
            <div>
              {`${year}/${month}/${day}`}
            </div>
          </Fragment>
          :
          <Fragment>{`${year}/${month}/${day} ${hour}:${minute} 周${week}`}</Fragment>
        }
      </div>
    )
  }

  getDate = () => {
    const { dataTime,setDataTime } = this.props
    const date = new Date()
    const year = date.getFullYear()
    let month = date.getMonth() + 1 // 获取当前月份
    let day = date.getDate() // 获取当前是几号
    const weekIndex = date.getDay() //获取当前星期X(0-6,0代表星期天)
    let hour = date.getHours() //小时
    let minute = date.getMinutes() //分钟
    // let second = date.getSeconds() //秒
    const week_arr = ['日','一','二','三','四','五','六']
    if(month<=9){
      month = '0'+ month
    }
    if(day<=9){
      day = '0' + day
    }
    if(hour<=9){
      hour = '0' + hour
    }
    if(minute<=9){
      minute = '0' + minute
    }
    if(dataTime.minute !== minute || dataTime.hour !== hour || dataTime.day !== day){
      const week = week_arr[weekIndex]
      const time = {
        year,
        month,
        day,
        hour,
        minute,
        week
      }
      setDataTime(time)
    }
    setTimeout(this.getDate,1000)
  }
}


export default DateComponent