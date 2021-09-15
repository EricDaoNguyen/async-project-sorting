import React from 'react'
import './style.css'

/* ------------------------------------------------------------ */

// Animation speed in milliseconds
// const ANIMATION_SPEED = 1

// Number of bars
// const NUMBER_OF_BARS = 100

// Primary = Main color of the bars
// Secondary = Color of the bars that're being compared to
// const PRIMARY_COLOR = 'green'
// const SECONDARY_COLOR = 'red'

/* ------------------------------------------------------------ */

// Generates randomly between two numbers
function randomNumber(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
}

// SortingApp component
export default class SortingApp extends React.Component {
  // Main array stored in the state
  constructor() {
    super()
    this.state = { array: [] }
  }

  // Every time the app loads, resetArray method is called
  componentDidMount() { this.resetArray() }

  // Generates random bars
  resetArray() {
    const array = []
    for(let i = 0; i < 100; i++) { array.push(randomNumber(5, 1000)) }
    this.setState({ array })
  }

  // Renders from JSX to HTML
  render() {
    const { array } = this.state

    return(
      <>
      {array.map((value, index) => (
        <div className="bar" key={index}>
          {value}
        </div>
      ))}
      </>
    )
  }
}
