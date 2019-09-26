import React from "react";


class ButtonPlay extends React.Component {
  state = { count_1: 0, count_2: 0, weight_1: 0 };

  random = () => {
    var min = 0;
    var max = 86;
    var rand_1 = Math.round(min + Math.random() * (max - min));
    var rand_2 = Math.round(min + Math.random() * (max - min));
    this.setState({
      count_1: rand_1,
      count_2: rand_2,
      weight_1: this.getPlayerWeight(rand_1)
    });
  };

  getPlayerWeight = id => {
    return id * 2;
  };

  render() {
    return (
      <div>
        <div>{this.state.count_1}</div>
        <div>{this.state.count_2}</div>
        <div>{this.state.weight_1}</div>
        <button onClick={this.random}>Random</button>
      </div>
    );
  }
}

export default ButtonPlay;
