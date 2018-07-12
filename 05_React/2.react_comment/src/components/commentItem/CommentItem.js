import React, {Component} from 'react';

import Pubsub from 'pubsub-js';

class CommentItem extends Component {

  delComment =() =>{
    //拿到传递过来的item，index，del等等属性和方法
    let {item, index} = this.props;
    if (window.confirm(`您确定要删除${item.name}的评论吗？`)){
      //发布消息
      Pubsub.publish('INDEX', index);
    }
  };

  render(){
    //拿到传递过来的item和index
    const {item} = this.props;
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;" onClick={this.delComment}>删除</a>
        </div>
        <p className="user"><span>{item.name}</span><span>说:</span></p>
        <p className="centence">{item.comment}</p>
      </li>
    )
  }
}

//暴露出去
export default CommentItem;