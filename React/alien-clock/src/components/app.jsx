import React, { Component } from 'react';
import alien from "./alien.jpg";


const daysInMonth = [
  [44, 42, 48, 40, 48, 44, 40, 44, 42],
  [40, 40, 42, 44, 48, 42, 40, 44, 38],
];

// class AlienClockApp extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       alienYear: 1,
//       alienMonth: 1,
//       alienDay: 1,
//       alienHour: 0,
//       alienMinute: 0,
//       alienSecond: 0,
//     };
//   }
class AlienClockApp extends Component {
  constructor(props) {
    super(props);

    // Get the current system time
    const now = new Date();

    this.state = {
      alienYear: now.getFullYear(),    // Get the current year
      alienMonth: now.getMonth() + 1, // Get the current month (0-based)
      alienDay: now.getDate(),         // Get the current day of the month
      alienHour: now.getHours(),       // Get the current hour (24-hour format)
      alienMinute: now.getMinutes(),   // Get the current minute
      alienSecond: now.getSeconds(),   // Get the current second
    };
  }




  componentDidMount() {
    this.updateClockInterval = setInterval(this.updateAlienClock, 500); // Update every 1 Alien second (500ms in Earth time)
  }

  componentWillUnmount() {
    clearInterval(this.updateClockInterval);
  }

  updateAlienClock = () => {
    const {
      alienYear,
      alienMonth,
      alienDay,
      alienHour,
      alienMinute,
      alienSecond,
    } = this.state;

    let newSecond = alienSecond + 1;
    if (newSecond >= 90) {
      newSecond = 0;
      let newMinute = alienMinute + 1;
      if (newMinute >= 90) {
        newMinute = 0;
        let newHour = alienHour + 1;
        if (newHour >= 36) {
          newHour = 0;
          let newDay = alienDay + 1;
          if (newDay > daysInMonth[alienYear % 2][alienMonth - 1]) {
            newDay = 1;
            let newMonth = alienMonth + 1;
            if (newMonth > 18) {
              newMonth = 1;
              const newYear = alienYear + 1;
              this.setState({
                alienYear: newYear,
              });
            }
            this.setState({
              alienMonth: newMonth,
            });
          }
          this.setState({
            alienDay: newDay,
          });
        }
        this.setState({
          alienHour: newHour,
        });
      }
      this.setState({
        alienMinute: newMinute,
      });
    }
    this.setState({
      alienSecond: newSecond,
    });
  };

  setAlienClock = () => {
    const newYear = parseInt(prompt("Enter Alien Year (2804 or higher):"));
    const newMonth = parseInt(prompt("Enter Alien Month (1-18):"));
    const newDay = parseInt(prompt("Enter Alien Day (1-48):"));
    const newHour = parseInt(prompt("Enter Alien Hour (0-35):"));
    const newMinute = parseInt(prompt("Enter Alien Minute (0-89):"));
    const newSecond = parseInt(prompt("Enter Alien Second (0-89):"));

    if (
      Number.isInteger(newYear) &&
      Number.isInteger(newMonth) &&
      Number.isInteger(newDay) &&
      Number.isInteger(newHour) &&
      Number.isInteger(newMinute) &&
      Number.isInteger(newSecond) &&
      newYear >= 2804 &&
      newMonth >= 1 &&
      newMonth <= 18 &&
      newDay >= 1 &&
      newDay <= 48 &&
      newHour >= 0 &&
      newHour <= 35 &&
      newMinute >= 0 &&
      newMinute <= 89 &&
      newSecond >= 0 &&
      newSecond <= 89
    ) {
      this.setState({
        alienYear: newYear,
        alienMonth: newMonth,
        alienDay: newDay,
        alienHour: newHour,
        alienMinute: newMinute,
        alienSecond: newSecond,
      });
    } else {
      alert("Invalid input. Please enter valid integers within the specified ranges.");
    }
  };

  render() {
    const {
      alienYear,
      alienMonth,
      alienDay,
      alienHour,
      alienMinute,
      alienSecond,
    } = this.state;

    return (
      <div className="App">
        <div className="alien-clock">
          <h1>Alien Clock  </h1> 
          <img src={alien} alt="Alien" className="myImage" />               
          <p>
            Year {alienYear}, Month {alienMonth}, Day {alienDay}, Hour{alienHour}, Minute {alienMinute}, Second {alienSecond}
          </p>
          <button onClick={this.setAlienClock}>Set Alien Clock</button>
        </div>
      </div>
    );
  }
}

export default AlienClockApp;
