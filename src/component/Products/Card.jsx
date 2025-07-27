import styles from "./card style.module.css";
import Add_button from "./Add_button";

const Card = ({ pro_data }) => {
  return (
    <>
      <div
        className={`product ${styles.product}`}
        data-id={pro_data.id}
        data-pro_type={pro_data.category}
      >
        <span className={styles.pro_offer}>offer {pro_data.offer}</span>
        <div className={styles.pro_img_box}>
          <img className={styles.pro_img} src={pro_data.img} alt="" />
        </div>
        <h3 className={styles.pro_name}>{pro_data.name}</h3>
        <div className={styles.pro_price_box}>
          <p className={styles.pro_price}>
            {" "}
            Price: {Number(pro_data.price).toLocaleString()}${" "}
          </p>
          <p className={styles.pro_old_price}>Was: {pro_data.old_price}$</p>
        </div>
        <Add_button pro_data={pro_data}/>
      </div>
    </>
  );
};

export default Card;
