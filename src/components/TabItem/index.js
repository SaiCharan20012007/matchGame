import './index.css'

const TabItem = props => {
  const {displayText, changeActiveId, id, selected} = props

  const changeId = () => {
    changeActiveId(id)
    console.log(selected)
  }

  const styles = selected ? 'tab-title-1' : ''

  return (
    <li className="list-container" onClick={changeId}>
      <button type="button">
        <p className={styles}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
