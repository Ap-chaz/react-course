import axios from 'axios';
import { useEffect, useState, Fragment } from 'react';
import OrdersPageGrid from './OrdersGrid';
import Header from '../../components/Header';
import './OrdersPage.css';

function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders?expand=products')
      .then((response) => {
        setOrders(response.data);
      });
  }, []);

  return (
    <>
      <Header cart={cart} />

      <title>Orders</title>

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersPageGrid
          orders={orders}
        />
      </div>
    </>
  );
}

export default OrdersPage;