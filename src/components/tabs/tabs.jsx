import React, { useEffect } from 'react';
import TabsStyles from './tabs.module.css';
import {
  Tab,
} from '@ya.praktikum/react-developer-burger-ui-components';

const Tabs = ({ inViewBuns, inViewSauces, inViewFilling }) => {
  const [current, setCurrent] = React.useState('one')

  const onTabClick = (tab) => {
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (inViewBuns) {
      setCurrent("buns");
    } else if (inViewSauces) {
      setCurrent("sauces");
    } else if (inViewFilling) {
      setCurrent("mains");
    }
  }, [inViewBuns, inViewFilling, inViewSauces]);

  return (
    <div className={TabsStyles.ingredients__tabs}>
      <Tab value="buns" active={current === 'buns'} onClick={onTabClick}>
        Булки
      </Tab>
      <Tab value="sauces" active={current === 'sauces'} onClick={onTabClick}>
        Соусы
      </Tab>
      <Tab value="mains" active={current === 'mains'} onClick={onTabClick}>
        Начинки
      </Tab>
    </div>
  )
}

export default Tabs;