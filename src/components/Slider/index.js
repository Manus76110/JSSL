// == Import : npm
import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// styles
import "./slider.scss"

// 2) je recupere mon props et je le passe en parametre de ma fonction Slider
function Slider({ slider }) {
    //console.log(slider);

    return (
        <Carousel>
            {slider.map(slider => (
                <div key={slider.id}>
                    <img className='pictures' src={slider.picture} alt="" />
                </div>
            ))}
        </Carousel>
    )
}

Slider.propTypes = {
    slider: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            picture: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};
export default Slider;