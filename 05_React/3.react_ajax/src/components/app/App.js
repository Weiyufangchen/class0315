import React, {Component} from 'react';

import Search from '../search/Search';
import List from '../list/List';

class App extends Component {
  //定义状态
  state = {
    searchName: ''
  }
  //箭头函数，没有this，省略修正this指向
  search = (searchName) => {
    console.log(searchName);
    //更新状态，为最新的值
    this.setState({searchName})
  }

  render() {
    //searchName传给List组件
    const {searchName} = this.state;
    return (
      <div className="container">
        <Search search={this.search}/>
        <List searchName={searchName}/>
      </div>
    )
  }
}

export default App;