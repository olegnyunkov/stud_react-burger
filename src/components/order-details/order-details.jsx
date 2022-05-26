import React, {useContext} from "react";
import PropTypes from 'prop-types';
import OrderDetailsStyles from './order-details.module.css';
import doneIcon from '../../images/done.png'
import {IngredientsContext} from "../../services/ingredients-context";

const OrderDetails = () => {
  const [, orderInfo] = useContext(IngredientsContext);

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

OrderDetails.propTypes = {
  orderInfo: PropTypes.object.isRequired,
}

export default OrderDetails;