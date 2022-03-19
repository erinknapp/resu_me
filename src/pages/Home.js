import { init } from 'ityped';
import React, { useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Home = () => {
   
    return (
        <div>
            <Navigation/>
{/* <!-- Body --> */}
<main>

<div class="container">
{/* 
    <!-- Info --> */}
    <section class="grid-row grid-row--center">

        {/* <!-- PRO --> */}
        <div class="grid-column span-half pt3 pb3 mobile-m order-1">
            <div class="relative">
                <a href="/pro" target="_Blank"><img class="info-image relative z2" src="assets/pro.png" alt="Cabin"/></a>
                <div class="pattern pattern--left-down absolute z1"></div>
            </div>
        </div>
        <div class="grid-column span-half pt3 pb3 mobile-m order-2">
            <a href="src/pro.js" style={{ textDecoration: 'none' }} target="_Blank">
                <h3>Resu_me - Pro ($0.99)</h3>
            </a>
            <p>Resu_me - Pro gives you a Premium, modern, professional resume.</p>
        </div>
        {/* <!-- LIGHT --> */}
        <div class="grid-column span-half pt3 pb3 mobile-m order-4">
            <a  href="light/index.html" style={{ textDecoration: 'none' }}  target="_Blank">
                <h3>Resu_me - Light</h3>
            </a>
            <p>Resu_me - Light gives you a free, Simple and effective resume.</p>
        </div>
        <div class="grid-column span-half pt3 pb3 mobile-m order-3">
            <div class="relative">
                <a href="light/index.html" target="_Blank"><img class="info-image relative z2" src="assets/light.png"  alt="Teepee"/></a>
                <div class="pattern pattern--right-middle absolute z1"></div>
            </div>
        </div>
    </section>

</div>
</main>
<Footer/>
        </div>
    );
}

export default Home;
