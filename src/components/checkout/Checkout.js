import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import { Collapse } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Checkout() {
    const { products, totalPrice, totalQty } = useSelector(state => state.CartReducer);
    const [order, setOrder] = useState(null)


    const fname = useRef(null)
    const lname = useRef(null)
    const daddress = useRef(null)
    const city = useRef(null)
    const district = useRef(null);

    const dispatch = useDispatch();

    const s_fname = useRef(null);
    const s_lname = useRef(null);
    const s_daddress = useRef(null);
    const s_phone = useRef(null);
    const s_city = useRef(null);
    const s_district = useRef(null);

    const [toggle, setToggle] = useState(true)
    const [payToggle, setPayToggle] = useState(false)
    const [open, setOpen] = useState(false);

    const handleBilling = (e) => {
        e.preventDefault();
        const billingData = {
            first_name: fname.current.value,
            last_name: lname.current.value,
            delivery_address: daddress.current.value,
            city: city.current.value,
            district: district.current.value,
        }
        setOrder(billingData);
        setToggle(false)

    }
    const handleShipping = e => {
        e.preventDefault();
        const shippingData = {
            first_name: s_fname.current.value,
            last_name: s_lname.current.value,
            delivery_address: s_daddress.current.value,
            phone: s_phone.current.value,
            city: s_city.current.value,
            district: s_district.current.value,
        }
        // console.log(shippingData)
        const billing = { ...order }
        setOrder({ billingData: billing, shippingData: shippingData });
        setOpen(false)
    }
    const handleConfirm = e => {
        e.preventDefault();
        const payment = "Cast on Payment";
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        const currentDate={date: date, month: month, year: year}
        const customerOrderInformation = { ...order, payment, orderProduct: products, currentDate }
        dispatch({ type: 'CONFIRM_ORDER', payload: { customerOrderInformation: customerOrderInformation } })
    }



    return (
        <div className="cart pt-5">
            <div className="container">
                <div class="content" style={{ marginTop: '100px' }}>
                    <div class="row">
                        <div class="col-md-8">
                            <div id="checkout-form-wizard">
                                <div className={toggle ? '' : 'd-none'}>
                                    <h3>Billing</h3>
                                    <section class="card card-body mb-0">
                                        <div class="mb-4">
                                            <h6 class="card-title mb-3">Billing</h6>
                                            <div class="text-muted">Enter your billing information</div>
                                        </div>
                                        <div class="row g-4 mb-3">
                                            <div class="col-md-6">
                                                <label class="form-label">First Name</label>
                                                <input ref={fname} type="text" ref={fname} class="form-control" />
                                            </div>
                                            <div class="col-md-6">
                                                <label class="form-label">Last Name</label>
                                                <input ref={lname} type="text" ref={lname} class="form-control" />
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Delivery Address</label>
                                            <input ref={daddress} type="text" ref={daddress} class="form-control" />
                                        </div>
                                        <div class="row g-4 mb-3">
                                            <div class="col-md-6">
                                                <label class="form-label">City</label>
                                                <input ref={city} type="text" ref={city} class="form-control" />
                                            </div>
                                            <div class="col-md-6">
                                                <label class="form-label">District</label>
                                                <input ref={district} type="text" ref={district} class="form-control" />
                                            </div>
                                        </div>

                                    </section>
                                    <div className="footer__btn_pagination">
                                        {/* <button className="btn btn-secondary" disabled>Prev</button> */}
                                        <button className="btn btn-info" onClick={handleBilling}>Next</button>
                                    </div>
                                </div>

                                <div className={!toggle ? '' : 'd-none'}>
                                    <div className={!payToggle ? '' : 'd-none'}>
                                        <h3>Shipping</h3>
                                        <section class="card card-body mb-0">
                                            <div class="mb-4">
                                                <h6 class="card-title mb-3">Shipping</h6>
                                                <div class="text-muted">Choose where you want to recived your product.</div>
                                            </div>
                                            <div class="row mb-4">
                                                <div class="col-6">
                                                    <div class="card">
                                                        <div class="card-body d-flex flex-column gap-3">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="radio" name="flexRadioDefault" checked id="flexRadioDefault1" />
                                                                <label class="form-check-label mb-0" for="flexRadioDefault1">Home</label>
                                                            </div>
                                                            <div>Josephin Villa</div>
                                                            <div>81 Fulton Park, Brazil/Pedro Leopoldo</div>
                                                            <div>
                                                                <i class="bi bi-telephone me-2"></i> 408-963-7769
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <p>
                                                <a class="btn btn-outline-primary btn-icon" onClick={() => setOpen(!open)}
                                                    aria-controls="example-collapse-text"
                                                    aria-expanded={open} >
                                                    <i class="bi bi-plus-circle"></i> Add New Address
                                                </a>
                                            </p>

                                            <Collapse in={open}>
                                                <div class="card card-body">
                                                    <h6 class="card-title mb-4">Add New Address</h6>
                                                    <form>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <label class="form-label">First Name</label>
                                                                <input ref={s_fname} type="text" class="form-control" />
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label class="form-label">Last Name</label>
                                                                <input ref={s_lname} type="text" class="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <label class="form-label">Delivery Address</label>
                                                                <input ref={s_daddress} type="text" class="form-control" />
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label class="form-label">Phone</label>
                                                                <input ref={s_phone} type="text" class="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <label class="form-label">City</label>
                                                                <input ref={s_city} type="text" class="form-control" />
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label class="form-label">State</label>
                                                                <input ref={s_district} type="text" class="form-control" />
                                                            </div>
                                                        </div>
                                                        <button class="btn btn-primary" onClick={handleShipping}>Add</button>
                                                    </form>
                                                </div>
                                            </Collapse>
                                        </section>
                                        <div className="footer__btn_pagination">
                                            <button className="btn btn-dark" onClick={() => setToggle(true)}>Prev</button>
                                            <button className="btn btn-info" onClick={() => setPayToggle(true)}>Next</button>
                                        </div>
                                    </div>
                                </div>


                                <div className={payToggle ? '' : 'd-none'}>
                                    <h3>Payment</h3>
                                    <section class="card card-body mb-0">
                                        <div class="mb-4">
                                            <h6 class="card-title mb-3">Payment</h6>
                                            <div class="text-muted">Choose your payment method.</div>
                                        </div>
                                        <div class="accordion accordion-with-radio" id="accordionExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingOne">
                                                    <button onClick={() => setOpen(!open)}
                                                        aria-controls="example-collapse-text"
                                                        aria-expanded={open} class="accordion-button collapsed" type="button">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="radio" />
                                                            <label class="form-check-label mb-0" for="paypalFlexRadioDefault">
                                                                Pay with Paypal
                                                            </label>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <div class="d-flex align-items-center">
                                                            <img width="50" class="me-3" src="../../assets/images/paypal-logo.png" alt="..." />
                                                            You will be redirected to PayPal website to complete your purchase securely.
                                                        </div></div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingThree">
                                                    <button onClick={() => setOpen(!open)}
                                                        aria-controls="example-collapse-text"
                                                        aria-expanded={open} class="accordion-button collapsed" type="button">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="radio" name="paymentFlexRadioDefault" id="cashOnDeliveryFlexRadioDefault" />
                                                            <label class="form-check-label mb-0" for="cashOnDeliveryFlexRadioDefault">
                                                                Cash on Delivery
                                                            </label>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <Collapse in={!open}>
                                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <div class="d-flex align-items-center">
                                                                <img width="50" class="me-3" src="../../assets/images/cash-on-delivery-logo.png" alt="..." />
                                                                Pay with cash when your order is delivered.
                                                            </div>
                                                        </div>
                                                    </div>

                                                </Collapse>
                                            </div>
                                        </div>
                                    </section>
                                    <div className="footer__btn_pagination">
                                        <Link to='/cart'><button className="btn btn-danger" >Cancel</button></Link>
                                        <button className="btn btn-info" onClick={handleConfirm} >Confirm Order</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h5 class="mb-4">Order Summary</h5>
                            <div class="card mb-4">
                                <div class="card-body">
                                    <h6 class="card-title mb-4">Products</h6>
                                    <div class="list-group list-group-flush">
                                        {products.map(product => (
                                            <div class="list-group-item d-flex px-0">
                                                <a href="#" class="me-3">
                                                    <img src={`images/${product.image}`} style={{ height: '50px' }} class="rounded" alt="image" />
                                                </a>
                                                <div>
                                                    <h6 style={{ height: '20px', overflow: 'hidden' }}>{product.name}</h6>
                                                    <div>{product.quantity} x ${product.discountPrice}</div>
                                                </div>
                                                <div class="text-end ms-auto" style={{ width: '50px' }}>{currencyFormatter.format(parseInt(product.quantity) * parseInt(product.discountPrice), { code: 'BDT' })}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>




                            <div class="card mb-4">
                                <div class="card-body">
                                    <h6 class="card-title mb-4">Price</h6>
                                    <div class="row justify-content-center mb-3">
                                        <div class="col-4 text-end">Sub Total :</div>
                                        <div class="col-4">{currencyFormatter.format(totalPrice, { code: 'BDT' })}</div>
                                    </div>
                                    <div class="row justify-content-center mb-3">
                                        <div class="col-4 text-end">Shipping :</div>
                                        <div class="col-4">{currencyFormatter.format(50, { code: 'BDT' })}</div>
                                    </div>
                                    <div class="row justify-content-center mb-3">
                                        <div class="col-4 text-end">Tax(5%) :</div>
                                        <div class="col-4">{currencyFormatter.format((totalPrice * (5 / 100)), { code: 'BDT' })}</div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="col-4 text-end">
                                            <strong>Total :</strong>
                                        </div>
                                        <div class="col-4">
                                            <strong>{currencyFormatter.format((totalPrice * (5 / 100)) + (totalPrice + 50), { code: 'BDT' })}</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Checkout
