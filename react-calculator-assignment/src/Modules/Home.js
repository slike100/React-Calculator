import React from 'react';
var style = {
  color: 'black',
  margin: '2%',
  width: '50%',
}

class Home extends React.PureComponent {

  handleClick = () => {
    this.props.history.push('/calc');
  }


  render() {
    return (
      <div style={{display: 'grid', gridRow: '2/12', justifyItems: 'center'}}>
        <h1 style={style}>Hello, welcome to my calculator!!! Please navigate around and look at my three cool pages!</h1>
        <button style={style} onClick={this.handleClick}>Go to my calculator!</button>
      </div>
    );
  }
}

export default Home