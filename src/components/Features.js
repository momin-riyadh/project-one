import React from "react";

export default function Features() {
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-4 mx-auto">
                    <figure>
                        <img
                            className="img-fluid img-rounded img-thumnail"
                            src="https://picsum.photos/250/250"
                            alt=""
                        />
                        <figcaption>
                            <h6>Figure 1 </h6>
                        </figcaption>
                    </figure>
                </div>
                <div className=" col-4 mx-auto">
                    <figure>
                        <img
                            className="img-fluid img-rounded img-thumnail"
                            src="https://picsum.photos/250/250"
                            alt=""
                        />
                        <figcaption>
                            <h6>Figure 2 </h6>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-4 mx-auto">
                    <figure>
                        <img
                            className="img-fluid img-rounded img-thumnail"
                            src="https://picsum.photos/250/250"
                            alt=""
                        />
                        <figcaption>
                            <h6>Figure 3 </h6>
                        </figcaption>
                    </figure>
                </div>
            </div>

            <div className="row py-5">
                <div className="col-12 text-center">
                    <button className="btn btn-lg btn-success">Contact Us</button>
                </div>
            </div>
        </div>
    )
}
