import { useAppSelector } from "../../hooks/reduxHooks";
import Card from "../../components/Card/Card";
import styles from "../AllCats/AllCats.module.scss";

export default function FavoriteCats(): JSX.Element {
  


  const favcats = useAppSelector((store) => store.cats.favoriteCats);


  return (
    <div className={styles.container}>
      {favcats?.map((cat) => (
        <Card key={cat.id} cat={cat} />
      ))}
    </div>
  );
}
