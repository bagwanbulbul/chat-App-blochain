import React, { Component } from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

export default class ForgetPassword extends Component {
    render() {
        return (
            <>
                <Header />
                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5 col-md-8 col-sm-12 mx-auto">

                                <div class="authentication">

                                    <div class="form-group">
                                        <form id="form" method="POST">
                                            <div class="form-group">
                                                <label class="fw-regular" for="exampleInputOtp">OTP</label>
                                                <input type="text" class="form-control validate" name="otp" id="exampleInputotp" placeholder="otp" required />
                                                <p id="otpcheck" style={{ color: 'red' }}>*Wrong OTP</p>
                                            </div>
                                            <div class="form-group">
                                                <label class="fw-regular w-100" for="exampleInputPassword1">New Password</label>
                                                <input type="password" class="form-control validate" name="newpassword" id="exampleInputNewPassword1" placeholder="Enter 6 character or more" required />
                                                <p id="newpasswordcheck" style={{ color: 'red' }} >*Incorrect password</p>
                                            </div>
                                            <div class="form-group">
                                                <label class="fw-regular w-100" for="exampleInputPassword1">Confirm Password</label>
                                                <input type="password" class="form-control validate" name="password" id="exampleInputPassword1" placeholder="Enter 6 character or more" required />
                                                <p id="passwordcheck" style={{ color: 'red' }} >*Password Mistmatch</p>
                                            </div>
                                            <button class="button uppercase w-100 text-center">Login</button>
                                        </form>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}
