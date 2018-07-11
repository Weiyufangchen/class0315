import React, {Component} from 'react';


//添加评论组件
class AddComment extends Component {
  constructor(props){
    super(props);
    //  修改this指向（自定义函数的this为undefined）
    this.addComment = this.addComment.bind(this);
  }

  addComment(){
    //获取输入框的值
    let name = this.refs.name.value.trim();
    let comment = this.refs.comment.value.trim();
    //判断是否合乎规范
    if (!name || !comment) {
      alert('您输入的内容不合乎规范，请重新输入：');
      return;
    }
    //拿到props传递过来的add方法
    const {add} = this.props;
    add(name, comment);
    this.refs.name.value = '';
    this.refs.comment.value = '';
  }

  render(){
    return(
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input ref='name' type="text" className="form-control" placeholder="用户名" />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea ref='comment' className="form-control" rows="6" placeholder="评论内容"></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

//暴露出去
export default AddComment;