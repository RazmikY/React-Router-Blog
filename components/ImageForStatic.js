import React from 'react';
import PropTypes from 'prop-types';

const ImageForStatic = ({ data }) => {
    return (
        <React.Fragment>
            {data.map(i => (
                <div className='static-Co' key={i.id}>
                    <img src={i.imgM} className='static-img' />
                    <span className={`${i.category}S`}>{i.category}</span>
                    <p>{i.text}</p>
                    <p className='data'>
                        {i.data}
                        {' | '}
                        <a className='author'>{i.author}</a>
                    </p>
                </div>
            ))}
        </React.Fragment>
    );
};

ImageForStatic.propTypes = {
    data: PropTypes.array.isRequired
};

export default ImageForStatic;
