import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Link } from 'react-router-dom';

export default function Home() {

   

    return (
        <div>
            <>
               <Header />
                <section>
                   <div className="container">
                        <div className="row">
                             <div className="col-lg-5 col-md-8 col-sm-12 mx-auto ">
                                 <div className="text-center">
                                     <h2>Log in</h2>
                                     <h4 className="mt-2 fw-light color-text">Choose an option to log in</h4>
                                 </div>

                                 <div className="authentication mt-12 color-white" action="">
                                     <Link to="/optional-login/role=1" className="button w-100 my-4 sm:my-2" >Credi<span className="fw-light">Block</span> <span className="uppercase role fw-light">Client</span></Link>                                   
                                     <Link to="/optional-login/role=2" className="button  btn-sblue w-100 my-4 sm:my-2">Credi<span className="fw-light">Block</span> <span className="uppercase role fw-light">Broker</span></Link>
                                     <Link to="/optional-login/role=3" className="button  btn-grey w-100 my-4 sm:my-2">Credi<span className="fw-light">Block</span> <span className="uppercase role fw-light">Supervisor</span></Link>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </section>

                 <Footer />
             </>

        </div>
    )
}






