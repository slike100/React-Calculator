import React from 'react';
import Buttons from './Button.js'
import Display from './Display'
import { parse } from 'path';

export default class Calc extends React.Component{
  constructor(prop){
    super(prop);
    this.state = {
      operator: '',
      valOne:  '',
      valTwo: '',
      displayVal: 0,
      decimalPresent: false
    }
  }


  getNum = (e) => {
    if(e.target.name === 'Number' && !this.state.valOne || e.target.name === 'Number' && this.state.operator === ''){
      this.setState({
        valOne: `${this.state.valOne}${e.target.dataset.value}`,
      }, () => this.setState({
        displayVal: this.state.valOne
      }))
    } else if (e.target.name === 'Operator' && this.state.valOne && !this.state.valTwo) {
      this.setState({
        operator: e.target.dataset.value,
      }, () => this.setState({
        displayVal: this.state.operator
      }))
    } else if (e.target.name === 'Number' && this.state.valOne && this.state.operator){
      this.setState({
        valTwo: `${this.state.valTwo}${e.target.dataset.value}`,
      }, () => this.setState({
        displayVal: this.state.valTwo
      }))
    } else if (this.state.operator && this.state.valOne && this.state.valTwo && e.target.dataset.value === '='){
      this.calculate();
    } else if (e.target.dataset.value === 'AC'){
      this.setState({
      operator: '',
      valOne:  '',
      valTwo: '',
      displayVal: 0,
      decimalPresent: false
      })
    } else if (e.target.dataset.value === '.' && !this.state.decimalPresent && !this.state.operator){
      this.setState({
        decimalPresent: true,
        valOne: `${this.state.valOne}${e.target.dataset.value}`
      },() => this.setState({
        displayVal: this.state.valOne
      }))
    } else if (e.target.dataset.value === '.' && this.state.decimalPresent && this.state.operator){
      this.setState({
        decimalPresent: false,
        valTwo: `${this.state.valTwo}${e.target.dataset.value}`
      }, () => this.setState({
        displayVal: this.state.valTwo
      }))
    } else if (e.target.dataset.value === '%' && this.state.valOne || e.target.dataset.value === '%' && this.state.valTwo){
      this.getPercent();
    } else if (e.target.dataset.value === '+/-' && this.state.valOne || e.target.dataset.value === '%' && this.state.valTwo){
      this.changeSign();
    }
  }


  calculate = () => {
    if(this.state.operator === '+'){
      this.setState({
        displayVal: (parseFloat(this.state.valOne) + parseFloat(this.state.valTwo)).toFixed(4),
        operator: '',
        valOne:  (parseFloat(this.state.valOne) + parseFloat(this.state.valTwo)).toFixed(4),
        valTwo: '',
      })
    } else if(this.state.operator === '-'){
      this.setState({
        displayVal: (parseFloat(this.state.valOne) - parseFloat(this.state.valTwo)).toFixed(4),
        operator: '',
        valOne:  (parseFloat(this.state.valOne) - parseFloat(this.state.valTwo)).toFixed(4),
        valTwo: ''
      })
    } else if(this.state.operator === 'X'){
      this.setState({
        displayVal: (parseFloat(this.state.valOne) * parseFloat(this.state.valTwo)).toFixed(4),
        operator: '',
        valOne: (parseFloat(this.state.valOne) * parseFloat(this.state.valTwo)).toFixed(4),
        valTwo: ''
      })
    } else if(this.state.operator === '/'){
      this.setState({
        displayVal: (parseFloat(this.state.valOne) / parseFloat(this.state.valTwo)).toFixed(4),
        operator: '',
        valOne:  (parseFloat(this.state.valOne) / parseFloat(this.state.valTwo)).toFixed(4),
        valTwo: ''
      })
    }
  }

  getPercent = () => {
    if(this.state.valOne && !this.state.operator){
      this.setState({
        valOne: `${this.state.valOne/100}`,
      }, () => this.setState({
        displayVal: this.state.valOne
    }))
  } else if(this.state.valOne && this.state.operator && this.state.valTwo){
    this.setState({
      valTwo: `${this.state.valTwo/100}`,
    }, () => this.setState({
      displayVal: this.state.valTwo
  }))
  }
}

changeSign = () => {
  if(this.state.valOne > 0 && !this.state.operator){
      this.setState({
        valOne: `-${this.state.valOne }`,
      }, () => this.setState({
        displayVal: this.state.valOne
    }))
  } else if(this.state.valOne < 0 && !this.state.operator){
      this.setState({
        valOne: parseFloat(this.state.valOne * -1),
      }, () => this.setState({
        displayVal: this.state.valOne
    }))
  } else if (this.state.valTwo > 0){
    this.setState({
      valTwo: `-${this.state.valTwo}`,
    }, () => this.setState({
      displayVal: this.state.valTwo
    }))
  } else if (this.state.valTwo < 0){
    this.setState({
      valTwo: parseFloat(this.state.valTwo * -1),
    }, () => this.setState({
      displayVal: this.state.valTwo
    }))
  }
}


  render(){
    return (
      <div id="container" >
        <Display displayNum={this.state.displayVal}/>
        <Buttons getNum={this.getNum}/>
      </div>
    )
  }
}
