import React from 'react';
import {Link} from 'react-router-dom';

const Breadcrumb = () => {
    return (
        <>
        <div className="products-breadcrumb">
        <div className="container">
          <ul>
            <li>
              <i className="fa fa-home" aria-hidden="true"></i>
              <Link to="/">Home</Link>
              <span>|</span>
            </li>
          </ul>
        </div>
      </div>
            
        </>
    );
};

export default Breadcrumb;