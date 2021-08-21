import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';

function Home() {
    const { products } = useSelector(state => state.ProductReducers);
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="container" style={{ paddingTop: '130px' }}>
                <h1 className="text-center mb-5">ALL PRODUCT JUST FOR YOU</h1>
                <div className="row">
                    <div className="col-md-3" >
                        <h5 class="mb-4">Filter Products</h5>
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center" data-bs-toggle="collapse" aria-expanded="true" data-bs-target="#keywordsCollapseExample" role="button">
                                    <div onClick={() => setOpen(!open)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}
                                    >
                                        Keywords</div>
                                    <div class="bi bi-chevron-down"></div>
                                </div>
                                <Collapse in={!open}>
                                    <div class="collapse show mt-4" id="keywordsCollapseExample">
                                        <div class="input-group">
                                            <input type="text" class="form-control mt-2" placeholder="Phone, Headphone, Shoe ..." />
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center" data-bs-toggle="collapse" aria-expanded="true" data-bs-target="#categoriesCollapseExample" role="button">
                                    <div onClick={() => setOpen(!open)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}
                                    >
                                        Categories</div>
                                    <div class="bi bi-chevron-down"></div>
                                </div>
                                <Collapse in={open}>
                                    <div class="collapse show mt-2" id="categoriesCollapseExample">
                                        <div class="d-flex flex-column gap-3">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="categoryCheck1" />
                                                <label class="form-check-label" for="categoryCheck1">
                                                    All
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="categoryCheck2" />
                                                <label class="form-check-label" for="categoryCheck2">
                                                    Accessories
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="categoryCheck3" />
                                                <label class="form-check-label" for="categoryCheck3">
                                                    Phone
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="categoryCheck4" />
                                                <label class="form-check-label" for="categoryCheck4">
                                                    Headphone
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="categoryCheck5" />
                                                <label class="form-check-label" for="categoryCheck5">
                                                    Camera
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center" data-bs-toggle="collapse" aria-expanded="true" data-bs-target="#priceCollapseExample" role="button">
                                    <div onClick={() => setOpen(!open)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}
                                    >Price</div>
                                    <div class="bi bi-chevron-down"></div>
                                </div>
                                <Collapse in={open}>
                                    <div class=" mt-2 d-flex" id="">
                                        <input id="price-filter" className="form-control w-50 mb-2" placeholder="min-price" />
                                        <input id="price-filter" className="form-control w-50 mb-2" placeholder="max-price" />
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {
                                products.map(pd => (
                                    <div className="col-md-3 mb-5">
                                        <div className="product">
                                            <div className="product__img">
                                                <Link to={`/details/${pd.id}`} ><img src={`/images/${pd.image}`} alt="" /></Link>
                                            </div>
                                            <div className="product__name">
                                                {pd.name}
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="product__price">
                                                        <span className="actualPrice">{currencyFormatter.format(pd.price, { code: 'BDT' })}</span>
                                                        <span className="discount">{pd.discount}%</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="product__discount__price">
                                                        {currencyFormatter.format(pd.discountPrice, { code: 'BDT' })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
