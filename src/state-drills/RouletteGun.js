import React, { Component } from 'react';

export default class RouletteGun extends Component {
  static defaultProps = {
    bulletInChamber: 8
  };

state = {
  chamber: null,
  spinningTheChamber: false,
}

componentWillMount() {
  clearTimeout(this.timeout)
}

handleButtonClick = () => {
  this.setState({ 
    spinningTheChamber: true 
  })
  this.timeout = setTimeout(() => {
    const randomChamber = Math.ceil(Math.random() * 8)
    this.setState({
      chamber: randomChamber,
      spinningTheChamber: false,
    })
  }, 2000)

}

renderDisplay() {
  const { chamber, spinningTheChamber } = this.state
  const { bulletInChamber } = this.props
  if(spinningTheChamber) {
    return 'Spinning the chamber and pulling the trigger!'
  } else if (bulletInChamber === chamber) {
    return 'BANG!!'
  } else {
    return "You're safe!"
  }
}

  render() {
    return (
      <div>
        <p>
          {this.renderDisplay()}
        </p>
        <button onClick={this.handleButtonClick}>Pull the trigger!</button>
      </div>
    )
  }
}