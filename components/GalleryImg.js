import React from "react";
import styles from "../styles/galleryImg.module.css";
import img1 from '../public/gellery/1.jpg';
import img2 from '../public/gellery/2.jpg';
import img3 from '../public/gellery/3.jpg';
import img4 from '../public/gellery/4.jpg';
import img5 from '../public/gellery/5.jpg';
import img6 from '../public/gellery/6.jpg';
import img7 from '../public/gellery/7.jpg';

function GalleryImg() {
    return (
        <div className={styles.container}>
            <h1 className={styles.Heading}>photos</h1>
           <div className="row mx-auto">
               <div className="col-12 col-md-11 mx-auto">
               <div className={styles.gallery_container}>
                <div className={styles.image_hover}>
                    <img
                        src={img1.src}
                        alt="gallery-img"
                    />
                </div>
                <div className={styles.image_hover}>
                    <img
                        src={img2.src}
                        alt="gallery-img"
                    />
                </div>
                <div className={styles.image_hover}>
                    <img
                        src={img3.src}
                        alt="gallery-img"
                    />
                </div>
                <div className={styles.image_hover}>
                    <img
                        src={img4.src}
                        alt="gallery-img"
                    />
                </div>
                <div className={styles.image_hover}>
                    <img
                        src={img5.src}
                        alt="gallery-img"
                    />
                </div>
                <div className={styles.image_hover}>
                    <img
                        src={img6.src}
                        alt="gallery-img"
                    />
                </div>
            </div>
               </div>
           </div>
        </div>
    );
}

export default GalleryImg;
