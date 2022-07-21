import title from '../../assets/images/title.png';
// styles
import "./header.scss"

function Header() {
    return (
        <img className='title' src={title} alt="titre du site" />
    )
}
export default Header;