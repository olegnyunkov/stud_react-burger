import React, {FC, ReactNode, useEffect} from 'react';
import TabsStyles from './tabs.module.css';
import {
  Tab,
} from '@ya.praktikum/react-developer-burger-ui-components';

interface ITabs {
  inViewBuns: boolean;
  inViewSauces: boolean;
  inViewFilling: boolean;
}

const Tabs: FC<ITabs> = (props) => {
  const {inViewBuns, inViewSauces, inViewFilling} = props;
  const [current, setCurrent] = React.useState<string>('one')

  const onTabClick = (tab: string): void => {
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({behavior: "smooth"});
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
      <Tab 
        value="buns" 
        active={current === 'buns'} 
        onClick={(val) => onTabClick(val)}>
        Булки
      </Tab>
      <Tab 
        value="sauces" 
        active={current === 'sauces'} 
        onClick={onTabClick}>
        Соусы
      </Tab>
      <Tab 
        value="mains" 
        active={current === 'mains'} 
        onClick={onTabClick}>
        Начинки
      </Tab>
    </div>
  )
}

export default Tabs;