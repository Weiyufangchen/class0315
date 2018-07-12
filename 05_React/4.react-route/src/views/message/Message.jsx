//引入模块或组件
import React, {Component} from 'react';
import {
  NavLink,
  Route,
} from 'react-router-dom';
//自定义模块或组件
import MessageDetail from '../message_detail/MessageDetail';

class Message extends Component {
  state = {
    message: []
  }

  componentDidMount() {
    setTimeout(() => {
      //假设用定时器模拟请求
      this.setState({
        message: [
          {id: '1', data: "message01"},
          {id: '2', data: "message02"},
          {id: '3', data: "message03"},
          {id: '4', data: "message04"}
        ]
      })
    }, 1000)
  }

  render() {
    // console.log(this.props);  //属性上面有history对象
    const {history} = this.props;
    const {message} = this.state;
    return (
      <div>
        <ul>
          {
            message.map((item, index) => {
              return (<li key={index}>
                <NavLink to={'/home/message/' + item.id}>{item.data}</NavLink> &nbsp;&nbsp;
                <button onClick={()=>history.push('/home/message/' + item.id)}>push查看</button> &nbsp;&nbsp;
                <button onClick={()=>history.replace('/home/message/' + item.id)}>replace查看</button> &nbsp;&nbsp;
                {/*<button onClick={}>删除</button>*/}
              </li>)
            })
          }
        </ul>
        <button onClick={()=>history.goForward()}>前进</button>
        <button onClick={()=>history.goBack()}>后退</button>
        <Route path='/home/message/:id' component={MessageDetail}/>
      </div>
    );
  }
}

export default Message;