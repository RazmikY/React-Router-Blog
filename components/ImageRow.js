import React from 'react';
import Api from './Api';
import { Link } from 'react-router-dom';

const ImageRow = () => {
    let imgStyle = {
        width: '100%',
        height: '177px'
    };
    let imgBig = {
        width: '100%',
        height: '278px'
    };
    return (
        <React.Fragment>
            {Api.all().map(p => (
                <div key={p.id} className={p.id === 0 ? 'big-column' : 'column'}>
                    <Link to={`./${p.id}`}>
                        <img src={p.imgM} style={p.id === 0 ? imgBig : imgStyle} />
                    </Link>
                    <span className={p.id === 0 ? `${p.category}K` : p.category}>
                        {p.category}
                    </span>
                    <p className={p.id === 0 ? 'titleBig' : 'title'}>{p.title}</p>
                    <p className={p.id === 0 ? 'dataM' : 'data'}>
                        {p.data}
                        {' | '}
                        <a className='author'>{p.author}</a>
                    </p>
                </div>
            ))}
        </React.Fragment>
    );
};
export default ImageRow;
