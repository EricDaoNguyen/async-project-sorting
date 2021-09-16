import React from 'react'
import Popup from 'reactjs-popup'
import TypeWriterEffect from 'react-typewriter-effect'
import './style.css'
import { mergeSortAnimation } from '../SortingAlgorithms/mergeSort'

// randomNumber function
// Generates randomly between two numbers
function randomNumber(minimum, maximum) { return Math.floor(Math.random() * (maximum - minimum + 1) + minimum) }

// CURRENTLY BROKEN!
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

  // CURRENTLY BROKEN!
  // testAlgorithm method
  // Tests an algorithm 50 times to check if both the initial and post-sort arrays are the same
  // Currently only testing mergeSort
  testAlgorithm() {
    for(let i = 0; i < 50; i++) {
      const array = []
      const length = randomNumber(1, 1000)
      for(let i = 0; i < length; i++) { array.push(randomNumber(-1000, 1000)) }
    }
    const generatedArray = this.state.array
    .slice()
    .sort((a, b) => a - b)
    const sortedArray = mergeSortAnimation(this.state.array)
    return window.alert(areEqual(generatedArray, sortedArray))
  }

  // mergeSort method
  // Changes color between green and red per bar
  // Green = Done
  // Red = Comparison in progress
  mergeSort() {
    const animation = mergeSortAnimation(this.state.array)
    for (let i = 0; i < animation.length; i++) {
      const bar = document.getElementsByClassName('bar')
      const colorChange = i % 3 !== 2
      if(colorChange) {
        const [barOneIndex, barTwoIndex] = animation[i]
        const barOne = bar[barOneIndex].style
        const barTwo = bar[barTwoIndex].style
        const color = i % 3 === 0 ? '#FF0000' : '#26D701'
        setTimeout(() => {
          barOne.backgroundColor = color
          barTwo.backgroundColor = color
        }, i * 10)
      } else {
        setTimeout(() => {
          const [barOneIndex, newHeight] = animation[i]
          const barOne = bar[barOneIndex].style
          barOne.height = `${newHeight}px`
        }, i * 10)
      }
    }}

  // bubbleSort method

  // Renders from JSX to HTML
  render() {
    const { array } = this.state
    return(
      <div className="container">
        <div className="introduction">
          <TypeWriterEffect
          textStyle={{
            fontFamily: 'Times New Roman',
            color: '#FFFFFF',
            fontWeight: 500,
            fontSize: '3em',
          }}
          startDelay={1000}
          cursorColor="#FFFFFF"
          multiText={[
            'Hi there!',
            'My name is Eric.',
            'Welcome to my sorting application!',
            'I hope you enjoy!'
          ]}
          nextTextDelay={1000}
          typeSpeed={100}
          />
        </div>
        <div className="buttons">
          <button className="buttonOne" onClick={() => this.resetArray()}>Generate New Bars</button>
          <button className="buttonTwo" onClick={() => this.testAlgorithm()}>Test Algorithm</button> {/* BROKEN */}
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
    )}}
