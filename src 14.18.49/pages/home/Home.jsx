import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
    margin: 0,
    height: '360px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const Home = () => {
    const {arrProduct} = useSelector (state => state.productReducer) 

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <div className='position-relative'>
            <button className='position-absolute' style={{zIndex:"right"}} onClick={()=>{
                Carousel.next();
            }}>{">"}</button>


            Carousel.next()
            {/* <Carousel afterChange={onChange} autoplay={true} effect={"scroll"}>
                <div>
                    <h3 style={contentStyle}>
                        <img src='https://picsum.photos/id/20/2000/360' alt="..." />
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img src='https://picsum.photos/id/21/2000/360' alt="..." />
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img src='https://picsum.photos/id/23/2000/360' alt="..." />
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img src='https://picsum.photos/id/24/2000/360' alt="..." />
                    </h3>
                </div>
            </Carousel> */}
        </div>
    );
}

export default Home