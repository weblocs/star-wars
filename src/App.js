import React, { Component } from "react";
import { connect } from "react-redux";
import { contactsFetched } from "./actions";

const API = "https://swapi.co/api/people/";

function fetchAPI(param) {
  return fetch(API + param.toString(), {
    method: "GET",
    headers: new Headers({  })
  }).then(response => response.json());
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people_max: null,
      user: Object,
      user_2: Object,
      user1_points: 0,
      user2_points: 0,
      message: ""
    };
  }
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ people_max: data.count }));
  }

  toggleButtonState = () => {
    let min = 1;
    let max = this.state.people_max + 1;
    let random = Math.round(min + Math.random() * (max - min));
    let random_2 = Math.round(min + Math.random() * (max - min));

    let mass_1 = 0;
    let mass_2 = 0;

    this.setState({ message: "Loading..." });

    fetchAPI(random)
      .then(data => {
        this.setState({ user: data }, () => {
          console.log("1 user", this.state.user);
          if (this.state.user.mass && this.state.user.mass !== "unknown") {
            mass_1 = parseFloat(this.state.user.mass);
          } else {
            mass_1 = 0;
          }
        });
      })
      .then(() =>
        fetchAPI(random_2).then(data => {
          this.setState({ user_2: data }, () => {
            console.log("2 user", this.state.user_2);
            if (
              this.state.user_2.mass &&
              this.state.user_2.mass !== "unknown"
            ) {
              mass_2 = parseFloat(this.state.user_2.mass);
            } else {
              mass_2 = 0;
            }

            console.log("1 mass", mass_1);
            console.log("2 mass", mass_2);
            if (mass_1 > mass_2) {
              console.log("1 win");
              this.setState({ user1_points: this.state.user1_points + 1 });
              this.setState({ message: "Wygrywa gracz 1" });
            } else if (mass_2 > mass_1) {
              console.log("2 win");
              this.setState({ user2_points: this.state.user2_points + 1 });
              this.setState({ message: "Wygrywa gracz 2" });
            } else if (mass_2 === mass_1) {
              this.setState({ message: "Remis" });
            }
          });
        })
      );
  };

  render() {
    const { user, user_2, user1_points, user2_points, message } = this.state;
    return (
      <div>
        <div>
          <div>
            <p>USER 1</p>
            <p>Points:{user1_points}</p>
            <p>Actual Card</p>
            <p>Name:{user.name}</p>
            <p>Mass:{user.mass}</p>
          </div>
          <div>
            <p>USER 2</p>
            <p>Points:{user2_points}</p>
            <p>Actual Card</p>
            <p>Name:{user_2.name}</p>
            <p>Mass:{user_2.mass}</p>
          </div>
        </div>
        <button onClick={this.toggleButtonState}> Click me </button>
        <p>{message}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.people
  };
};
const mapDispatchToProps = { contactsFetched };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
