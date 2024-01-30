import { useCallback, useState } from "react";
import { useAppDispatch } from "./reduxHooks";
import { catsActions } from "../features/catsSlice";

export const useCats = (): {
  btnClick: boolean;
  handlerDelete: (id: string) => void;
  handlerClick: (id: string, url: string) => void;
} => {
  const dispatch = useAppDispatch();
  const [btnClick, setBtnClick] = useState(false);

  const handlerClick = useCallback(
    (id: string, url: string) => {
      dispatch(catsActions.addToFavorites({ id, url }));
      setBtnClick(true);
    },
    [dispatch]
  );

  const handlerDelete = useCallback(
    (id: string) => {
      dispatch(catsActions.deleteFavorites(id));
    },
    [dispatch]
  );

  return {
    btnClick,
    handlerDelete,
    handlerClick,
  };
};
