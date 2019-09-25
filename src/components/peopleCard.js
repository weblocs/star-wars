// import * from 'react';
// function PeopleCard(props) {
// const numbers = ['1','2','3'];
// const people = props.people;
// const doubled = numbers.map((number) => number);


// console.log(doubled);
// console.log(people);
//     return (
//       <ul>{props.people[0].name}</ul>
//     );
//   }
// export default PeopleCard;

import * as React from "react";

export class PeopleCard extends React.Component {
   
  

  render() {
    return (
        <ul>
         {this.props.people[0].name.title}
      </ul>
    );
  }

}
  export default PeopleCard;
