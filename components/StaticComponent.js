import React from 'react';
import ImageForStatic from './ImageForStatic';

import img1 from '../images/Layer 3.png';
import img2 from '../images/Layer 4.png';

const data = [
    {
        text: 'Donec elementum dui semper, pretium dui quis, pre-tium nisel',
        id: 1,
        category: 'Trips',
        data: '11 september 2016',
        author: 'John Doe',
        imgM: img1
    },
    {
        text:'Maecenas quis lobortis nunc. Nullam sit amet augue vel odio congue vulputate a ut nisi',
        id: 2,
        category: 'Tech',
        data: '11 september 2016',
        author: 'John Doe',
        imgM: img2
    }
];

const StaticComponent = () => (
    <div className='static-header'>
        <div className='static-main'>
            <ImageForStatic data={data} />
        </div>
    </div>
);

export default StaticComponent;
