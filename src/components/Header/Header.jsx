import './Header.css'
import moonIcon from '../../assets/moon (3).png'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        Eraly <span>Portfolio</span>
                    </div>

                    <nav className='links'>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contacts">Contact</a>
                        <img className='moon' src={moonIcon} alt="" />
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header