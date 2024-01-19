import React from "react";
import { Link } from "react-router-dom";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

function importAll(r) {
	let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}


const images = importAll(require.context('../assets/photos', false, /\.(JPG|png|jpe?g|svg)$/));
const imagesThumb = Object.values(importAll(require.context('../assets/photos/thumbnails', false, /\.(JPG|png|jpe?g|svg)$/)));

const imageList = Object.values(images).map(((img, i) => {
    return {original: img, thumbnail: imagesThumb[i] }
}))

const Venue = () => {    
   // const imagesList = images.map((x) => x));
    return (
        <PageWrapper>
            <Content>
                <h1>Venue</h1>
                <hr />
                <p>FLEC 2024 will take place in Polo Piagge, University of Pisa on June 3-4, 2024 in Pisa, Italy. The workshop is co-located with the 33rd International Symposium on <Link target="blank" to="https://www.hpdc.org/2024">High-Performance Parallel and Distributed Computing (HPDC 2024)</Link>.</p>
            </Content>
        </PageWrapper>
    );
};

export default Venue;
