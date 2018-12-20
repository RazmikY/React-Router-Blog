import React from 'react';
import PropTypes from 'prop-types';
import Api from './Api';
import { Link } from 'react-router-dom';
import SomeText from './SomeText';


const ImagePage = props => {
    const image = Api.get(parseInt(props.match.params.id, 10));
    if (!image) {
        return <div>Sorry, but the image page was not found</div>;
    }
    let imgStyle = {
        width: '100%',
        height: '271px'
    };
    return (
        <div className='image-page'>
            <img src={image.imgM} style={imgStyle} />
            <span className={`${image.category}M`}>{image.category}</span>
            <p className='dataM'>
                {image.data}
                {' | '}
                <a className='authorM'>{image.author}</a>
            </p>
            <SomeText />
            <button className='back'>
                <Link to='/' style={{ display: 'block' }}>
                    Back
                </Link>
            </button>
        </div>
    );
};

ImagePage.propTypes = {
    id: PropTypes.number,
    match: PropTypes.object.isRequired
};
export default ImagePage;
