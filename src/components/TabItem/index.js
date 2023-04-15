// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onSelectedTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    onSelectedTabItem(tabId)
  }

  const highLightedTab = isActive ? 'high-light-btn' : ''

  return (
    <li className="list-element">
      <button
        className={`button ${highLightedTab}`}
        type="button"
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
