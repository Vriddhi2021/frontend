import React from "react";
import styles from "../styles/galleryImg.module.css";

function GalleryImg() {
    return (
        <div className={styles.container}>
            <h1 className={styles.Heading}>photos</h1>
            <div className={styles.gallery_container}>
                <div className={styles.image_hover}>
                    <img
                        src="https://res.cloudinary.com/ratnakar5938/image/upload/v1647281382/Rectangle_17_krvn0c.png"
                        alt="gallery-img"
                    />
                </div>
                <div className={styles.image_hover}>
                    <img
                        src="https://res.cloudinary.com/ratnakar5938/image/upload/v1647281382/Rectangle_17_krvn0c.png"
                        alt="gallery-img"
                    />
                </div>
                <div className={styles.image_hover}>
                    <img
                        src="https://res.cloudinary.com/ratnakar5938/image/upload/v1647281382/Rectangle_17_krvn0c.png"
                        alt="gallery-img"
                    />
                </div>
                <div className={styles.image_hover}>
                    <img
                        src="https://res.cloudinary.com/ratnakar5938/image/upload/v1647281382/Rectangle_17_krvn0c.png"
                        alt="gallery-img"
                    />
                </div>
                <div className={styles.image_hover}>
                    <img
                        src="https://res.cloudinary.com/ratnakar5938/image/upload/v1647281382/Rectangle_17_krvn0c.png"
                        alt="gallery-img"
                    />
                </div>
                <div className={styles.image_hover}>
                    <img
                        src="https://res.cloudinary.com/ratnakar5938/image/upload/v1647281382/Rectangle_17_krvn0c.png"
                        alt="gallery-img"
                    />
                </div>
            </div>
        </div>
    );
}

export default GalleryImg;
