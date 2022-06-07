import React from 'react';
import TabsStyles from './tabs.module.css';
import {
  Tab,
} from '@ya.praktikum/react-developer-burger-ui-components';

const Tabs = () => {
  const [current, setCurrent] = React.useState('one')

  const onTabClick = (tab) => {
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={TabsStyles.ingredients__tabs}>
      <Tab value="one" active={current === 'one'} onClick={onTabClick}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={onTabClick}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={onTabClick}>
        Начинки
      </Tab>
    </div>
  )
}

export default Tabs;