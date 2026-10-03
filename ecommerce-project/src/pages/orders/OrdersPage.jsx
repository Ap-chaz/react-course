import axios from 'axios';
import { useEffect, useState, Fragment } from 'react';
import OrdersPageGrid from './OrdersGrid';
import Header from '../../components/Header';
import './OrdersPage.css';

function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersData = async () => {
      const response = await axios.get('/api/orders?expand=products');
      setOrders(response.data);
    };

    fetchOrdersData();
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