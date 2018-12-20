import img0 from '../images/Layer 11.png';
import img1 from '../images/Layer 3.png';
import img2 from '../images/Layer 7.png';
import img3 from '../images/Layer 6.png';
import img4 from '../images/Layer 8.png';
import img5 from '../images/Layer 5.0.png';
import img6 from '../images/Layer 5.png';

const Api = {
    image: [
        {
            title: 'Proin congue elit fringilla',
            id: 0,
            category: 'Trips',
            data: '11 september 2016',
            author: 'John Doe',
            imgM: img0
        },
        {
            title: 'DIY Tips Tricks Ideas Rapair',
            id: 1,
            category: 'Nature',
            data: '11 september 2016',
            author: 'John Doe',
            imgM:img1
        },
        {
            title: 'Aviation',
            id: 2,
            category: 'People',
            data: '11 september 2016',
            author: 'John Doe',
            imgM: img2
        },
        {
            title: 'Aviation',
            id: 3,
            category: 'Tech',
            data: '11 september 2016',
            author: 'John Doe',
            imgM: img3
        },
        {
            title: 'Aerospace',
            id: 4,
            category: 'Trips',
            data: '11 september 2016',
            author: 'John Doe',
            imgM: img4
        },
        {
            title: 'When Flying was wort',
            id: 5,
            category: 'Trips',
            data: '11 september 2016',
            author: 'John Doe',
            imgM: img5
        },
        {
            title: 'Aircraft Recycled into Furni...',
            id: 6,
            category: 'Fashion',
            data: '11 september 2016',
            author: 'John Doe',
            imgM: img6
        }
    ],
    all: function() {
        return this.image;
    },
    get: function(id) {
        const isImage = p => p.id === id;
        return this.image.find(isImage);
    }
};
export default Api;
