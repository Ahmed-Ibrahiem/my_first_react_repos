import Card from "./Card";
import styles from './card style.module.css'
const Render_products = ({ products_data }) => {
  return (
    <div className={styles.products}>
      {products_data.map((pro_data) => {
        return <Card pro_data={pro_data} key={pro_data.id}/>;
      })}
    </div>
  );
};

export default Render_products;
