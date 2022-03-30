import React from "react";
import "../homepage.css";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	return (
		<body>
			<Navigation />
			{/* <!-- Body --> */}
			<main>
				<div className='container'>
					{/* 
    <!-- Info --> */}
					<section className='grid-row grid-row--center'>
						{/* <!-- PRO --> */}
						<div className='grid-column span-half pt3 pb3 mobile-m order-1'>
							<div className='relative'>
								<a href='/loginPro' target='_Blank'>
									<img className='info-image relative z2' src='assets/pro.png' alt='Cabin' />
								</a>
								<div className='pattern pattern--left-down absolute z1'></div>
							</div>
						</div>
						<div className='grid-column span-half pt3 pb3 mobile-m order-2'>
							<button className='btn' onClick={() => navigate("/loginPro")}>
								Pro, Sign Up or Login Here
							</button>
							<a href='/loginPro' style={{ textDecoration: "none" }}>
								<h3>Resu_Me - Pro</h3>
								<a href='https://buy.stripe.com/test_aEUeYX3AA0tU9bOeUU' rel='noreferrer'>
									Donate To Resu_Me!
								</a>
							</a>
							<p>Resu_Me - Pro gives you a Premium, modern, professional resume.</p>
						</div>
						{/* <!-- LIGHT --> */}
						<div className='grid-column span-half pt3 pb3 mobile-m order-4'>
							<button className='btn' onClick={() => navigate("/loginLite")}>
								Lite, Sign Up or Login Here
							</button>
							<a href='/loginLite' style={{ textDecoration: "none" }}>
								<h3>Resu_Me - Lite</h3>
							</a>
							<p>Resu_Me - Lite gives you a free, Simple and effective resume.</p>
						</div>
						<div className='grid-column span-half pt3 pb3 mobile-m order-3'>
							<div className='relative'>
								<a href='/loginLite'>
									<img className='info-image relative z2' src='assets/light.png' alt='Teepee' />
								</a>
								<div className='pattern pattern--right-middle absolute z1'></div>
							</div>
						</div>
					</section>
				</div>
			</main>
			<Footer />
		</body>
	);
};

export default Home;
