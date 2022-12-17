import React,{useEffect} from 'react';
import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import ShoesCard from '../../components/ShoesCard/ShoesCard';
import axios from 'axios';
import { getProductAction } from '../../redux/reducer/productReducer';
import { async } from 'q';
const contentStyle = {
    margin: 0,
    height: '360px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const Home = () => {
    const {arrProduct} = useSelector(state => state.productReducer) 
    const dispatch = useDispatch();

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    const getAllProduct = async () => {
        const result = await axios ({
            url:'https://shop.cyberlearn.vn/api/Product',
            method:'GET'
        
        });
        // const action = {
        //     type:'',
        //     payload:result.data.content
        // }

        //   const action = getProductAction(result.data.content)  
        // console.log(action);
        const action = getAllProduct();
        dispatch(action)
    }    
    useEffect(() => {
        getAllProduct()
    }, [])
    
    return (
        <div className='position-relative'>
            <button className='position-absolute' style={{zIndex:"right"}} onClick={()=>{
                Carousel.next();
            }}>{">"}</button>


            Carousel.next()
             <Carousel afterChange={onChange} autoplay={true} effect={"scroll"}>
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
            </Carousel> 
                <div className='container'>
                    <h3>Products Featured</h3>
                    <div className='row'>
                        {arrProduct.map((prod,idx) => {
                            return <div className='col-4'>
                                key={prod.id}
                                <ShoesCard prod={prod}/>   
                            </div>
                        })}
                    </div>
                </div>
        </div>
    );
}

export default Home