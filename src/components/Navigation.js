import { init } from 'ityped';
import React, { useEffect, useRef } from 'react';

const Navigation = () => {
    const textRef = useRef();
  
    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["Resu_me"],

      });
    }, []);
    return (
        <div>
            
{/* <!-- Header --> */}
<header class="pt2 pb1 align--center">
    <div class="container">
        <p>Resume Generator</p>
        <h1 title="Camp Chippewa"><span ref={textRef}></span></h1>
    </div>
</header>
        </div>
    );
}

export default Navigation;
