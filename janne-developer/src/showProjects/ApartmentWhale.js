import React, { useEffect, useState } from "react";
import "./ApartmentWhale.css";
import { motion } from "framer-motion";

const ApartmentWhale = ({ images, upOrDown, yScroll, initialY, speed }) => {
  const [imagesA, setImagesA] = useState(images);

  return (
    <div className="parallax-apartment-container">
      {imagesA.map((image) => (
        <motion.img
          key={image?.id}
          src={`/images/${image?.name}`}
          alt={image?.name}
          className="img-apartment"
          initial={{
            y: 0,
          }}
          animate={{ opacity: 1, y: upOrDown * (yScroll * speed) }}
          transition={{ delay: 0.1 }}
        />
      ))}
    </div>
  );
};

export default ApartmentWhale;
