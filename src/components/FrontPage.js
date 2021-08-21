
import Header from './Header';
import HeadingSlide from './Slider/HeadingSlide';
import HeadingSection from './HeadingSection/HeadingSection';
import DualBanner from './Banner/DualBanner'
import Products from './Products/Products';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function FrontPage() {
    const { products } = useSelector(state => state.ProductReducers);
    return (
        <div>
            <div className="container" style={{ paddingTop: '100px' }}>
                <HeadingSlide />
                <HeadingSection />
                <div className="" style={{ position: 'relative' }}>
                    <h1 className="text-center mb-5">FEATURE PRODUCT</h1>
                </div>

                <div className="row mb-3">
                    {
                        products.slice(0, 8).map(pd => <Products key={pd.id} products={pd}></Products>)
                    }
                </div>
                <DualBanner />
                <div className="row mb-3 mt-3">
                    {
                        products.slice(2, 10).reverse().map(pd => <Products key={pd.id} products={pd}></Products>)
                    }
                    <Link to="/shop"><button className="btn form-control btn-danger">More</button></Link>
                </div>
            </div>
        </div>
    )
}

export default FrontPage
