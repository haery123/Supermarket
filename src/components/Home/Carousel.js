import React from 'react';

const Carousel = () => {
    return (
        <>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
      {/* <!-- Indicators --> */}
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="item active">
         <a href="beverages.html"> <img className="first-slide" src="images/b1.jpg" alt="First slide" /></a>
       
        </div>
        <div className="item">
         <a href="personalcare.html"> <img className="second-slide " src="images/b3.jpg" alt="Second slide" /></a>
         
        </div>
        <div className="item">
          <a href="household.html"><img className="third-slide " src="images/b1.jpg" alt="Third slide" /></a>
          
        </div>
      </div>
    
    </div>
            
        </>
    );
};

export default Carousel;