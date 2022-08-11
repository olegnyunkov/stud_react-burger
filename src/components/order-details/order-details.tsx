import React, {FC} from "react";
import OrderDetailsStyles from './order-details.module.css';
import doneIcon from '../../images/done.png'
import {useSelector} from "../../utils/types";


const OrderDetails = () => {
  const {order, isLoading, errorLoading} = useSelector(state => state.order)

  if (isLoading) {
    return <p>Загрузка...</p>
  } else if (errorLoading) {
    return <p>Произошла ошибка при получении данных</p>
  } else {
    return (
      <div className={OrderDetailsStyles.order__container}>
        <p className="text text_type_digits-large mt-20">{order.order.number}</p>
        <p className="text text_type_main-medium mt-8">{order.name}</p>
        <img src={doneIcon} alt="готово" className='mt-15'/>
        <p className="text text_type_main-default mt-15">{'Ваш заказ начали готовить'}</p>
        <p
          className="text text_type_main-default text_color_inactive mt-2 mb-15">{'Дождитесь готовности на орбитальной станции'}</p>
      </div>
    )
  }
}

export default OrderDetails;