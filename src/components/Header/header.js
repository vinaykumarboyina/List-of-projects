import './header.css'

const Header = () => (
    <nav className="nav-header">
        <div className="nav-content">
            <p className="website-logo">VK</p>
            <ul className="nav-menu">
                <li>
                    <img src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png" className="social-network-img" alt="linked in"/>
                </li>
                <li>
                    <img src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png" className="social-network-img" alt="github"/>
                </li>
                <li>
                    <img src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png" className="social-network-img" alt="twitter"/>
                </li>
            </ul>
        </div>
    </nav>
)
export default Header