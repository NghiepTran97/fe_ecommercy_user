import React from "react"
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header_login () {
    return (
        <>
            <div className="pt-5 pb-5">
                <div className="container">
                    <nav className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center ml-3">
                            <Link className="d-flex align-items-center title">
                                <FaShoppingBag className="icon"/>
                                <p className="title_name mr-2 ml-3 mb-0">Shopping</p>    
                            </Link>
                            <div className="title_link ml-3">Đăng nhập</div>
                        </div>
                        <div>
                            <Link className="mr-3 hepl">
                            Bạn cần giúp đỡ ?
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default Header_login;