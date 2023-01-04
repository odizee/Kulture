import Image from 'next/image';
import { OrdersData } from './OrdersData';
import styles from './ordersdata.module.scss';
import ordersImage from '../../assets/ordersimage.svg';

function MyOrders() {
  return OrdersData.map((option) => (
    <div className={styles.myorders}>
      <div className={styles.myorders__image}>
        <Image src={ordersImage} alt={option.Name} />
      </div>
      <div className={styles.myorders__details}>
        <h2>{option.Name}</h2>
        <div className={styles.or}>
          <p>{option.or}</p>
        </div>
        <p>
          by {option.username} <span>{option.moniker}</span>
        </p>
        <p>{option.license}</p>
        <h4>{option.date}</h4>
        <h3>{option.price}</h3>
      </div>
    </div>
  ));
}

export default MyOrders;
