import React, {Component} from 'react';

class MessageDetail extends Component {
  state = {
    data: [
      {id: '1', content: '空山新雨后，'},
      {id: '2', content: '天气晚来秋。'},
      {id: '3', content: '明月松间照，'},
      {id: '4', content: '清泉石上流。'}]
  }

  render () {
    console.log(this.props);
    const {params} = this.props.match;
    const {data} = this.state;
    return (
      <ul>
        <li>ID: {params.id}</li>
        <li>TITLE: message0{params.id}</li>
        <li>CONTENT: {data[params.id-1].content}</li>
      </ul>
    )
  }
}

export default MessageDetail;