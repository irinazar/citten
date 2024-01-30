import { useAppSelector } from "../../hooks/reduxHooks";
import Card from "../../components/Card/Card";
import styles from "./AllCats.module.scss";
import { useLoading } from "../../hooks/useLoading";

export default function AllCats(): JSX.Element {
  const allCats = useAppSelector((store) => store.cats.allCats);

  const { lastElement } = useLoading();

  return (
    <>
      <div className={styles.container}>
        {allCats?.map((cat) => (
          <Card key={cat.id} cat={cat} />
        ))}
      </div>
      <div ref={lastElement} className={styles.loading}>
        <div>... загружаем еще котиков ...</div>
      </div>
    </>
  );
}
