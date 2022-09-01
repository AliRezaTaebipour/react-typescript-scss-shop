import styles from "./Product.module.scss";
import { products } from "../../config/dummyData";
import { IProduct } from "../../types/Product";

export const Product: () => JSX.Element[] = () => {
  const tmp: JSX.Element[] = [];

  products.map((product: IProduct) =>
    tmp.push(
      <div className={styles.box}>
        <div className={styles.box__imgs}>
          <img src={product.src1} alt="src1" className={styles.box__firstImg} />
          <img
            src={product.src2}
            alt="src2"
            className={styles.box__secondImg}
          />
        </div>
        <div className={styles.box__name}>{product.name}</div>
        <div className={styles.box__prices}>
          <div className={styles.box__discount}>{product.discount}</div>
          <div className={styles.box__price}>{product.price}</div>
        </div>
      </div>
    )
  );

  return tmp;
};
