import React, {Component} from 'react';
import CommentItem from '../commentItem/CommentItem';

class CommentsList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    //接收通过props传递进来的数据
    const {commentsList, del} = this.props;
    //获取状态
    //判断评论列表的长度，来决定是否隐藏
    let display = commentsList.length ? 'none' : 'block';
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            commentsList.map((item, index)=> <CommentItem del={del} item={item} key={index} index={index}/>)
          }
        </ul>
      </div>
    )
  }
}

export default CommentsList;