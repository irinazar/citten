import { useEffect, useRef } from "react";
import { useAppDispatch } from "./reduxHooks";
import { getAllCats } from "../features/catsThunks";

export const useLoading = (): {
  lastElement: React.MutableRefObject<null>;
} => {
  const lastElement = useRef(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        void dispatch(getAllCats());
      }
    });

    if (lastElement.current) {
      observer.observe(lastElement.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    lastElement,
  };
};
