import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  //定义接收类型
  static propTypes = {
    search: PropTypes.func.isRequired
  }

  search = () => {
    //获取输入框的数据,去掉首尾空格
    const searchName = this.refs.searchName.value.trim();
    //判断是否符合规范
    if (searchName) {
      this.props.search(searchName);
    } else {
      alert('输入数据不能为空！')
    }
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref="searchName" type="text" placeholder="enter the name you search"/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}

//定义接收的类型
/*Search.propTypes = {
  search: PropTypes.func.isRequired
}*/
export default Search;