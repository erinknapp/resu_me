import React from 'react';
import '../homepage.css';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Home = () => {

    return (
        <body>
            <Navigation />
            {/* <!-- Body --> */}
            <main>

                <div className="container">
                    {/* 
    <!-- Info --> */}
                    <section className="grid-row grid-row--center">

                        {/* <!-- PRO --> */}
                        <div className="grid-column span-half pt3 pb3 mobile-m order-1">
                            <div className="relative">
                                <a href="/pro" target="_Blank"><img className="info-image relative z2" src="assets/pro.png" alt="Cabin" /></a>
                                <div className="pattern pattern--left-down absolute z1"></div>
                            </div>
                        </div>
                        <div className="grid-column span-half pt3 pb3 mobile-m order-2">
                            <a href="/pro" style={{ textDecoration: 'none' }} target="_Blank">
                                <h3>Resu_me - Pro ($0.99)</h3>
                            </a>
                            <p>Resu_me - Pro gives you a Premium, modern, professional resume.</p>
                        </div>
                        {/* <!-- LIGHT --> */}
                        <div className="grid-column span-half pt3 pb3 mobile-m order-4">
                            <a href="/light" style={{ textDecoration: 'none' }} target="_Blank">
                                <h3>Resu_me - Light</h3>
                            </a>
                            <p>Resu_me - Light gives you a free, Simple and effective resume.</p>
                        </div>
                        <div className="grid-column span-half pt3 pb3 mobile-m order-3">
                            <div className="relative">
                                <a href="/light" target="_Blank"><img className="info-image relative z2" src="assets/light.png" alt="Teepee" /></a>
                                <div className="pattern pattern--right-middle absolute z1"></div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
            <Footer />
        </body>
    );
}

export default Home;
