import React from 'react'
import Popup from 'reactjs-popup'
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
  if(arrayOne.length === arrayTwo.length) { return 'Your initial and post-sort results are the same!' }
  for(let i = 0; i < arrayOne.length; i++) {
    if(arrayOne[i] === arrayTwo[i]) { return 'Your initial and post-sort results are the same!' }
  }
  return 'Your initial and post-sort results are NOT the same!'
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

  // testAlgorithm method
  // Tests an algorithm 50 times to check if both the initial and post-sort arrays are the same
  testAlgorithm() {
    for(let i = 0; i < 50; i++) {
      const array = []
      const length = randomNumber(1, 1000)
      for(let i = 0; i < length; i++) { array.push(randomNumber(-1000, 1000)) }
    }
    const generatedArray = this.state.array
    .slice()
    .sort((a, b) => a - b)
    const sortedArray = mergeSort(this.state.array)

    return window.alert(areEqual(generatedArray, sortedArray))
  }

  // mergeSort method
  // mergeSort() {}

  // bubbleSort method

  // Renders from JSX to HTML
  render() {
    const { array } = this.state

    return(
      <div className="container">

        <div className="buttons">
          <button className="buttonOne" onClick={() => this.resetArray()}>Generate New Bars</button>
          <button className="buttonTwo" onClick={() => this.testAlgorithm()}>Test Algorithm</button>
          <Popup
          trigger={<div className="menu">Sorting Algorithms</div>}
          position="right top"
          on="hover"
          closeOnDocumentClick
          mouseLeaveDelay={100}
          mouseEnterDelay={0}
          contentStyle={{ padding: '0px', border: 'none' }}
          arrow={false}
          >
            <div className="menu-list">
              <button className="subButton" onClick={() => this.mergeSort()}>Merge Sort</button>
              <button className="subButton" onClick={() => this.bubbleSort()}>Bubble Sort</button>
            </div>
          </Popup>


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
