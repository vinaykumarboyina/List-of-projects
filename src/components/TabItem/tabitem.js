import './tabitem.css'

const TabItem = props => {
    const {tabDetails, isActive, updateTabId} = props
    const {tabId,  displayText} = tabDetails
    console.log(isActive)
    const onClickTab = () =>{
        updateTabId(tabId)
    }
    
    const activeTabClassName = isActive ? "active-btn" : ""
    return (
        <li className="tab-item-container">
            <button className = {`tab-btn ${activeTabClassName}`} type="btuton" onClick={onClickTab}>{displayText}</button>
        </li>
    )
}
export default TabItem