import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  state = {
    data: [],
  }
  componentDidMount() {
    const promise = fetch('http://kodaktor.ru/j/users');
    promise.then(response => response.ok ? response.json() : console.log('Problem with response. Status code: ' + response.status))
    .then(result => {
      this.setState({
          data: result.users 
      });
    })
    .catch(err => console.error(err));
  }
  render() {
    return(
      <ul>{
        this.state.data.map((item, index) => {
          return <li key={index}>{item.login} : {item.password}</li>
        })
      }</ul>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
