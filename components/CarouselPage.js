import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselPage = () => (
    <Carousel>
        <Carousel.Item>
            <img
                width={'100%'}
                height={'526px'}
                alt='900x500'
                src={'https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg'}
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                width={'100%'}
                height={526}
                alt='900x500'
                src={'https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg'}
            />
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                width={'100%'}
                height={'526px'}
                alt='900x526'
                src={'https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg'}
            />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                width={'100%'}
                height={'526px'}
                alt='900x526'
                src={'https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg'}
            />
            <Carousel.Caption>
                <h3>Forth slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
);


// const CarouselPage = () => (
//     <div className="container">
//         <div id="myCarousel" className="carousel slide" data-ride="carousel">
//             <ol className="carousel-indicators">
//                 <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
//                 <li data-target="#myCarousel" data-slide-to="1"></li>
//                 <li data-target="#myCarousel" data-slide-to="2"></li>
//                 <li data-target="#myCarousel" data-slide-to="3"></li>
//             </ol>

//             <div className="carousel-inner">
//                 <div className="item active">
//                     <img src={'https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg'}
//                         alt="Los Angeles" style={{width:'100%', height:'526px'}}/>
//                     <h3>First slide label</h3>
//                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>     
//                 </div>
//                 <div className="item">
//                     <img src={'https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg'}
//                         alt="Chicago" style={{width:'100%', height:'526px'}}/>
//                     <h3>Second slide label</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>     
//                 </div>
//                 <div className="item">
//                     <img src={'https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg'}
//                         alt="New york" style={{width:'100%', height:'526px'}}/>
//                     <h3>Third slide label</h3>
//                     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>

//                 </div>
//                 <div className="item">
//                     <img src={'https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg'}
//                         alt="New york" style={{width:'100%', height:'526px'}}/>
//                     <h3>Forth slide label</h3>
//                     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                 </div>
//             </div>
//             <a className="left carousel-control" href="#myCarousel" data-slide="prev">
//                 <span className="glyphicon glyphicon-chevron-left"></span>
//                 <span className="sr-only">Previous</span>
//             </a>
//             <a className="right carousel-control" href="#myCarousel" data-slide="next">
//                 <span className="glyphicon glyphicon-chevron-right"></span>
//                 <span className="sr-only">Next</span>
//             </a>
//         </div>
//     </div>
// );

export default CarouselPage;
