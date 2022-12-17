import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  render() {
    const {appItemDetails} = this.props
    const {appName, imageUrl} = appItemDetails
    return (
      <li className="app-item-container">
        <img className="app-img" src={imageUrl} alt={appName} />
        <p className="app-name">{appName}</p>
      </li>
    )
  }
}

export default AppItem
