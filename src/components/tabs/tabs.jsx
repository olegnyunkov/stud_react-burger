import React from 'react';
import TabsStyles from './tabs.module.css';
import {
  Tab,
} from '@ya.praktikum/react-developer-burger-ui-components';

const Tabs = () => {
  const [current, setCurrent] = React.useState('one')
  return (
    <div className={TabsStyles.ingredients__tabs}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  )
}

export default Tabs;