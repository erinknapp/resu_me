import { init } from "ityped";
import React, { useEffect, useRef } from "react";
import "../homepage.css";

const Navigation = () => {
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			showCursor: true,
			backDelay: 1500,
			backSpeed: 60,
			strings: ["Resu_Me"],
		});
	}, []);
	return (
		<div>
			{/* <!-- Header --> */}
			<header className='pt2 pb1 align--center'>
				<div className='container'>
					<img src='assets/MainLogo.png' alt=''></img>
					<h1 title='Camp Chippewa'>
						<span ref={textRef}></span>
					</h1>
				</div>
			</header>
		</div>
	);
};

export default Navigation;
