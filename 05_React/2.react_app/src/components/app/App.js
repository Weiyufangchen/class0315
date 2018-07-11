import React, {Component} from 'react';
import AddComment from '../addComment/AddComment';
import CommentsList from '../commentsList/CommentsList';

//定义组件
class App extends Component {
  //初始化数据状态
  constructor (props) {
    super(props);
    this.state = {
      commentsList: [
        {name: 'xiaowu', comment: '今天天气挺好'},
        {name: 'xiaosan', comment: '666'}
      ]
    };
    //修正this指向
    this.add = this.add.bind(this);
    this.del = this.del.bind(this);
  }

  //添加评论的方法
  add (comment){
    //获取当前的状态
    const {commentsList} = this.state;
    //将要添加的数据添加进去
    commentsList.unshift(comment);
    //更新状态
    this.setState({commentsList});
  }
  //删除评论的方法
  del (index){
    //获取当前的状态
    const {commentsList} = this.state;
    //删除指定下标的评论
    commentsList.splice(index, 1);
    //更新状态
    this.setState({commentsList})
  }

  render() {
    const {commentsList} = this.state;
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <AddComment add={this.add}/>
          <CommentsList commentsList={commentsList} del={this.del}/>
        </div>
      </div>
    )
  }
}

export default App;