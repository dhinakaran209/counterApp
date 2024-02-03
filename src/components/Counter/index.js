import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0, timer: 0}
  onIncrement = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }
  onDecrement = () => {
    this.setState(prevState => {
      return {count: prevState.count - 1}
    })
  }

  startWatch = () => {
    this.setState(prevState => {
      setInterval(() => {
        prevState.count -= 1
        console.log(prevState.count)
      }, 1000)
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div className="btn-container">
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
        <div>
          <button className="button" onClick={this.startWatch}>
            Start
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
