import React from "react";
import galleryImages from "./galleryimage";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MasonryimgesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {galleryImages.map((i, index) => (
          <img
            className="masonry__img"
            src={i}
            key={index}
            alt=""
            style={{ width: "100%", display: "block", borderRadius: "10px" }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryimgesGallery;
