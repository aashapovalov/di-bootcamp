import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {hongKong, japan, macao, newYork} from "./assets/index.ts";


export class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={hongKong} />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src={macao} />
                    <p className="legend">Macao</p>
                </div>
                <div>
                    <img src={japan} />
                    <p className="legend">Japan</p>
                </div>
                <div>
                    <img src={newYork} />
                    <p className="legend">Las Vegas</p>
                </div>
            </Carousel>
        );
    }
}
