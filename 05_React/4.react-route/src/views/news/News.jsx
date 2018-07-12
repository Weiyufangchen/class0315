import React, {Component} from 'react';

class News extends Component {
  state = {
    data: ['News01', 'News02', 'News03']
  }
  render () {
    const {data} = this.state;
    return (
      <div>
        <ul>
          {
            data.map((item, index) => <li key={index}>{item}</li>)
          }
        </ul>
        <button onClick={()=>this.props.history.goForward()}>前进</button>
        <button onClick={()=>this.props.history.goBack()}>后退</button>
      </div>

    )
  }
}

export default News;