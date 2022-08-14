import PagesStyles from "../../pages/pages.module.css";
import React, {FC} from "react";
import {nanoid} from "nanoid";
import {TWsDataOrders, useSelector} from "../../utils/types";


const FeedInfo: FC = () => {
  const {wsData} = useSelector(state => state.ws);
  const ordersIsDone = wsData && wsData.orders.filter((order: TWsDataOrders) => order.status === "done").slice(0, 10);
  const orderIsPending = wsData && wsData.orders.filter((order: TWsDataOrders) => order.status === "pending").slice(0, 10);

  if (!wsData) {
    return <p>Загрузка...</p>
  } else {
    return (
      <div className={PagesStyles.feed__stats}>
        <div className={PagesStyles.feed__status}>
          <div className={PagesStyles.feed__ready}>
            <p className='text text_type_main-medium mb-6'>Готовы:</p>
            <div className={PagesStyles.feed__ready_list}>
              {ordersIsDone && ordersIsDone.map((data: TWsDataOrders) => {
                  return <p className={`${PagesStyles.feed__ready_text} text text_type_digits-default mb-2`} key={nanoid()}>{data.number}</p>
              })}
            </div>
          </div>
          <div className={PagesStyles.feed__process}>
            <p className='text text_type_main-medium mb-6'>В работе:</p>
            <div className={PagesStyles.feed__ready_list}>
              {orderIsPending && orderIsPending.map((data: TWsDataOrders) => {
                return <p className='text text_type_digits-default mb-2' key={nanoid()}>{data.number}</p>
              })}
            </div>
          </div>
        </div>
        <div>
          <p className='text text_type_main-medium'>Выполнено за все время:</p>
          <p className={`${PagesStyles.feed__total} text text_type_digits-large`}>{wsData.total}</p>
        </div>
        <div>
          <p className='text text_type_main-medium'>Выполнено за сегодня:</p>
          <p className={`${PagesStyles.feed__total} text text_type_digits-large`}>{wsData.totalToday}</p>
        </div>
      </div>
    )
  }
}

export default FeedInfo;