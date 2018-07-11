import React, {Component} from 'react';
import AddComment from '../addComment/AddComment';
import CommentsList from '../commentsList/CommentsList';


//主组件
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      commentsList: [
        {name: '项羽', comment: '有志者，事竟成，破釜沉舟，百二秦关终成楚。'},
        {name: '勾践', comment: '苦心人，天不负，卧薪尝胆，三千越甲可吞吴。'}
      ]
    }
  //  修改this指向（自定义函数的this为undefined）
    this.add = this.add.bind(this);
    this.del = this.del.bind(this);
  }


  //定义添加评论方法，传递给AddComment组件
  add (name, comment){
    //拿到当前状态
    const {commentsList} = this.state;
    //把输入框的数据添加到App组件状态上
    commentsList.unshift({name, comment});
    //更新状态
    this.setState({commentsList});
  }

  //定义删除评论方法,传递给每个Item组件上的a标签
  del(index){
    const {commentsList} = this.state;
    commentsList.splice(index, 1);
    this.setState({commentsList})
  }

  render(){
    //拿到初始状态的commentsList
    const {commentsList} = this.state;
    return(
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

//暴露出去
export default App;