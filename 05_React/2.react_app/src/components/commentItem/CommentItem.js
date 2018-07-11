import React, {Component} from 'react';

class CommentItem extends Component {
  constructor (props){
    super(props);
    this.delComment = this.delComment.bind(this);
  }
  //删除评论
  delComment(event){
    const {item, index} = this.props;
    // const {index} = event.target.dataset;  一种方法是拿到对应下标，一种是找到对应用户名也可以拿到下标进行删除
    if (window.confirm(`您确认删除${item.name}吗？`)) {
      const {del} = this.props;
      del(index);
    }
  }

  render() {
    //声明接收属性
    const {item, index} = this.props;
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;" data-index={index} onClick={this.delComment}>删除</a>
        </div>
        <p className="user"><span>{item.name}</span><span>说:</span></p>
        <p className="centence">{item.comment}</p>
      </li>
    )
  }
}

export default CommentItem;