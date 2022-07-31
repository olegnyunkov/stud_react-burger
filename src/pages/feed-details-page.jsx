import React, {useEffect} from "react";
import PagesStyles from './pages.module.css';
import FeedDetails from "../components/feed-details/feed-details";
import {useDispatch, useSelector} from "react-redux";
import {onClose, wsInit, wsInitToken} from "../services/actions/ws-actions";
import {getCookie} from "../utils/cookie";

export const FeedDetailsPage = () => {
  const dispatch = useDispatch();
  const {wsData} = useSelector(state => state.ws);
  const {ingredients} = useSelector(state => state.ingredients)
  const {authorized} = useSelector(state => state.user)
  const accessToken = getCookie('accessToken');

  useEffect(() => {
    if (!wsData) {
      authorized
        ? dispatch(wsInitToken(`wss://norma.nomoreparties.space/orders?token=${accessToken}`))
        : dispatch(wsInit())
    }
    return () => {
      dispatch(onClose());
    };
  }, [dispatch]);

  return (
    <div className={PagesStyles.feed__page}>
      {wsData && ingredients && <FeedDetails/>}
    </div>
  )
}


