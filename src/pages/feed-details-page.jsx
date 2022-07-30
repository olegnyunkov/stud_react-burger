import React, {useEffect} from "react";
import PagesStyles from './pages.module.css';
import FeedDetails from "../components/feed-details/feed-details";
import {useDispatch, useSelector} from "react-redux";
import {onClose, wsInit} from "../services/actions/ws-actions";

export const FeedDetailsPage = () => {
  const dispatch = useDispatch();
  const {wsData} = useSelector(state => state.ws)

  useEffect(() => {
    dispatch(wsInit())
    return () => dispatch(onClose())
  }, [dispatch])

  return (
    <div className={PagesStyles.feed__page}>
      {wsData && <FeedDetails/>}
    </div>
  )
}


