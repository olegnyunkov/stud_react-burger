import React from "react";
import OrderDetailsStyles from './order-details.module.css';
import doneIcon from '../../images/done.png'

const OrderDetails = ({orderInfo}) => {
  return (
    <>
      <div className={OrderDetailsStyles.order__container}>
        <p className="text text_type_digits-large mt-20">{orderInfo.num}</p>
        <p className="text text_type_main-medium mt-8">{orderInfo.title}</p>
        <img src={doneIcon} alt="готово" className='mt-15'/>
        <p className="text text_type_main-default mt-15">{orderInfo.status}</p>
        <p className="text text_type_main-default text_color_inactive mt-2 mb-15">{orderInfo.message}</p>
      </div>
    </>
  )
};

export default OrderDetails;