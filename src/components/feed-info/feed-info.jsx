import PagesStyles from "../../pages/pages.module.css";
import React from "react";
import {useSelector} from "react-redux";
import {nanoid} from "nanoid";


const FeedInfo = () => {
  const {wsData, wsGetMessage} = useSelector(state => state.ws);
  const ordersIsDone = wsData.orders.filter((order) => order.status === "done").slice(0, 10);
  const orderIsPending = wsData.orders.filter(order => order.status === "pending").slice(0, 10);

  if (!wsGetMessage) {
    return <p>Загрузка...</p>
  } else {
    return (
      <div className={PagesStyles.feed__stats}>
        <div className={PagesStyles.feed__status}>
          <div className={PagesStyles.feed__ready}>
            <p className='text text_type_main-medium mb-6'>Готовы:</p>
            <div className={PagesStyles.feed__ready_list}>
              {ordersIsDone.map(data => {
                  return <p className='text text_type_digits-default mb-2' key={nanoid()}>{data.number}</p>
              })}
            </div>
          </div>
          <div className={PagesStyles.feed__process}>
            <p className='text text_type_main-medium mb-6'>В работе:</p>
            <div className={PagesStyles.feed__ready_list}>
              {orderIsPending.map(data => {
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