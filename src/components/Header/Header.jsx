import './Header.css'

const Header = ({title, color}) => {
    return (

        <div className={`header ${color}`}>{title}</div>

    )
}

export default Header