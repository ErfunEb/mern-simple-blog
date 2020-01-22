import React from 'react';

import './style.css';

const Loader = () => {

    return (
        <div className="loader-container">
           <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )

}


export default Loader;