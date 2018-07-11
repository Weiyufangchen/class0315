import React, {Component} from 'react';
import CommentItem from '../commentItem/CommentItem';

class CommentsList extends Component {


  render(){
    //拿到commentList属性
    const {commentsList, del} = this.props;
    //评论列表可能不只一条，所有需要数组遍历，map方法
    //判断：如果评论全部删除，此时应该显示暂无评论
    let display = commentsList.length ? 'none' : 'block';
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            commentsList.map((item, index) => <CommentItem del={del} item={item} key={index} index={index}/>)
          }
        </ul>
      </div>
    );
  }
}

//暴露出去
export default CommentsList;