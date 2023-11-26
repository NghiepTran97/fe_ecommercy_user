import {
    FaStar,
    FaStarHalf,
    FaAngleLeft,
    FaAngleRight,
    FaMinus,
    FaPlus,
    FaCartShopping,
    FaFacebookF, 
    FaTwitter, 
    FaLinkedinIn, 
    FaInstagram,
    FaEye,
} from 'react-icons/fa6';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Review from './elements/_reviews';

export default function Show()
{
    return (
        <>
            {/** Page Header Start */}
            <div className="container-fluid bg-secondary mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">Shop Detail</h1>
                    <div className="d-inline-flex">
                        <p className="m-0"><a href="">Home</a></p>
                        <p className="m-0 px-2">-</p>
                        <p className="m-0">Shop Detail</p>
                    </div>
                </div>
            </div>
            {/** Page Header End */}

            {/** Shop Detail Start */}
            <div className="container-fluid py-5">
                <div className="row px-xl-5">
                    <div className="col-lg-5 pb-5">
                        <div id="product-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner border">
                                <div className="carousel-item active">
                                    <img className="w-100 h-100" src="/img/product-1.jpg" alt="Image" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100 h-100" src="/img/product-2.jpg" alt="Image" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100 h-100" src="/img/product-3.jpg" alt="Image" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100 h-100" src="/img/product-4.jpg" alt="Image" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                                <FaAngleLeft className='fa-2x text-dark' />
                            </a>
                            <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                                <FaAngleRight className='fa-2x text-dark' />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-7 pb-5">
                        <h3 className="font-weight-semi-bold">Colorful Stylish Shirt</h3>
                        <div className="d-flex mb-3">
                            <div className="text-primary mr-2">
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star-half-alt"></small>
                                <small className="far fa-star"></small>
                            </div>
                            <small className="pt-1">(50 Reviews)</small>
                        </div>
                        <h3 className="font-weight-semi-bold mb-4">$150.00</h3>
                        <p className="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum.</p>
                        <div className="d-flex mb-3">
                            <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
                            <form>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-1" name="size" />
                                    <label className="custom-control-label" for="size-1">XS</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-2" name="size" />
                                    <label className="custom-control-label" for="size-2">S</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-3" name="size" />
                                    <label className="custom-control-label" for="size-3">M</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-4" name="size" />
                                    <label className="custom-control-label" for="size-4">L</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-5" name="size" />
                                    <label className="custom-control-label" for="size-5">XL</label>
                                </div>
                            </form>
                        </div>
                        <div className="d-flex mb-4">
                            <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
                            <form>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-1" name="color" />
                                    <label className="custom-control-label" for="color-1">Black</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-2" name="color" />
                                    <label className="custom-control-label" for="color-2">White</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-3" name="color" />
                                    <label className="custom-control-label" for="color-3">Red</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-4" name="color" />
                                    <label className="custom-control-label" for="color-4">Blue</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-5" name="color" />
                                    <label className="custom-control-label" for="color-5">Green</label>
                                </div>
                            </form>
                        </div>
                        <div className="d-flex align-items-center mb-4 pt-2">
                            <div className="input-group quantity mr-3" style={{ width: '130px' }}>
                                <div className="input-group-btn">
                                    <button className="btn btn-primary btn-minus" >
                                        <FaMinus />
                                    </button>
                                </div>
                                <input type="text" className="form-control bg-secondary text-center" value="1" />
                                <div className="input-group-btn">
                                    <button className="btn btn-primary btn-plus">
                                        <FaPlus />
                                    </button>
                                </div>
                            </div>
                            <button className="btn btn-primary px-3">
                                <FaCartShopping className="mr-1" /> Add To Cart
                            </button>
                        </div>
                        <div className="d-flex pt-2">
                            <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
                            <div className="d-inline-flex">
                                <a className="text-dark px-2" href="">
                                    <FaFacebookF />
                                </a>
                                <a className="text-dark px-2" href="">
                                    <FaTwitter />
                                </a>
                                <a className="text-dark px-2" href="">
                                    <FaLinkedinIn />
                                </a>
                                <a className="text-dark px-2" href="">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row px-xl-5">
                    <div className="col">
                        <Tabs
                            defaultActiveKey="description"
                            className="mb-3 justify-content-center border-secondary mb-4"
                        >
                            <Tab eventKey="description" title="Description">
                                <h4 className="mb-3">Product Description</h4>
                                <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                                <p>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
                            </Tab>
                            <Tab eventKey="infomation" title="Information">
                                <h4 className="mb-3">Additional Information</h4>
                                <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item px-0">
                                                Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                            </li>
                                        </ul> 
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item px-0">
                                                Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                            </li>
                                        </ul> 
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="reviews" title="Reviews">
                                <Review />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
            {/** Shop Detail End */}
        </>
    )
}