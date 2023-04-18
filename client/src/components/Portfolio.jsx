import React from 'react';
import "./portfolio.css";

const Portfolio = () => {
    var portfolioList = [
        ["/assets/amst.jpg", "AMST Branding", "https://www.behance.net/gallery/96881659/2019-Updated-Logo-Branding-for-Alt-Media-Studios", "red"],
        ["/assets/matt.jpg", "Matt Hirsch", "https://www.behance.net/gallery/96880097/Logo-Design-Branding-For-Salesman-Matt-Hirsch", "blue"],
        ["/assets/pmc.jpg", "PMC Branding", "https://www.behance.net/gallery/152435567/Protect-My-Collection-Logo-Branding", "red"],
        ["/assets/alce.jpg", "Alice Framework", "https://c-uliano.github.io/alce/", "blue"],
        ["/assets/sigsq.jpg", "Website Design", "https://www.behance.net/gallery/152177495/Website-Design-for-Signature-Square", "red"],
        ["/assets/luxe.jpg", "Website Disign", "https://www.behance.net/gallery/158547829/Ohio-Probate-Luxe-Realtor-Website-Design", "blue"]
    ];

    return (
        <>
            <div className="row">
                {portfolioList.map((item, index) => {
                    return (
                        <div key={index} className="col-lg-4">
                            {/* color class would go in <figure>, but not using it here */}
                            <figure className="photo">
                                <img src={`${item[0]}`} />
                                <figcaption>
                                    <h2>{item[1]}</h2>
                                </figcaption>
                                <a target='_blank' href={`${item[2]}`}></a>
                            </figure>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Portfolio;