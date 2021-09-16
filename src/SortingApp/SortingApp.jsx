import React from 'react'
import './style.css'
import { mergeSort } from '../SortingAlgorithms/sortingAlgorithms'

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

// randomNumber function
// Generates randomly between two numbers
function randomNumber(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
}

// areEqual function
// Checks to see if both arrays are the same length
function areEqual(arrayOne, arrayTwo) {
  if(arrayOne.length === arrayTwo.length) { return true }
  for(let i = 0; i < arrayOne.length; i++) {
    if(arrayOne[i] === arrayTwo[i]) { return true }
  }
  return false
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

  // resetArray method
  // Generates random bars
  resetArray() {
    const array = []
    for(let i = 0; i < 500; i++) { array.push(randomNumber(5, 500)) }
    this.setState({ array })
  }

  // testAlgorithms method

  // mergeSort method
  mergeSort() {
    const generatedArray = this.state.array
    .slice()
    .sort((a, b) => a - b)
    const sortedArray = mergeSort(this.state.array)

    console.log(areEqual(generatedArray, sortedArray))
  }

  // bubbleSort method

  // Renders from JSX to HTML
  render() {
    const { array } = this.state

    return(
      <div className="container">

        <div className="buttons">
          <button className="button" onClick={() => this.resetArray()}>Generate New Bars</button>
          <button className="button" onClick={() => this.mergeSort()}>Merge Sort</button>
          <button className="button" onClick={() => this.bubbleSort()}>Bubble Sort</button>
        </div>

        {array.map((value, index) => (
          <div
          className="bar"
          key={index}
          style={{height:`${value}px`}}
          ></div>
        ))}

      </div>
    )
  }
}
