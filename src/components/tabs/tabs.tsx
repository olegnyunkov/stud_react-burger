import React, {FC, useEffect} from 'react';
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
    const element: HTMLElement | null = document.getElementById(tab);
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
        children='Булки'
        onClick={onTabClick}/>
      <Tab 
        value="sauces" 
        active={current === 'sauces'} 
        children='Соусы'
        onClick={onTabClick}/>
      <Tab 
        value="mains" 
        active={current === 'mains'} 
        children='Начинки'
        onClick={onTabClick}/>
    </div>
  )
}

export default Tabs;