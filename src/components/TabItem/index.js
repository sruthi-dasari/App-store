import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  render() {
    const {tabDetails} = this.props
    const {displayText} = tabDetails
    return (
      <li className="tab-item-container">
        <button className="tab-btn">{displayText}</button>
      </li>
    )
  }
}

export default TabItem
