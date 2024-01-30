// Card.jsx

import React, { useState } from "react";
import styles from "./Card.module.scss";
import Button from "./ui/Button/Button";
import FavoriteButton from "./ui/FavoriteButton/FavoriteButton";
import { useLocation } from "react-router-dom";
import { useCats } from "../../hooks/useCats";

interface Cat {
  cat: {
    id: string;
    url: string;
  };
}

function Card({ cat }: Cat): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const { btnClick, handlerClick, handlerDelete } = useCats();

  return (
    <div
      className={`${styles.card} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.cardContent}>
        <img className="card-img-top" src={cat.url} alt="Card image cap" />
        {isHovered &&
          (btnClick || location.pathname === "/favorite" ? (
            <FavoriteButton handlerDelete={handlerDelete} cardId={cat.id} />
          ) : (
            <Button handlerClick={handlerClick} cardId={cat.id} url={cat.url} />
          ))}
      </div>
    </div>
  );
}

export default React.memo(Card);
