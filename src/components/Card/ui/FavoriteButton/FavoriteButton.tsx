// FavoriteButton.tsx
import React from "react";
import styles from "../Button/Button.module.scss";

interface ButtonProps {
  cardId: string;
  handlerDelete: (id: string) => void;
}

function FavoriteButton({ handlerDelete, cardId }: ButtonProps) {
  return (
    <div>
      <button
        onClick={() => handlerDelete(cardId)}
        className={styles.container}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 37"
          fill="#F24E1E;"
        >
          <path
            d="M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z"
            fill="#F24E1E"
          />
        </svg>
      </button>
    </div>
  );
}

export default React.memo(FavoriteButton);
