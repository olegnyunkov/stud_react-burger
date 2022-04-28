import React from 'react';

import { 
    Tab,
    } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerIngredients = (props) => {
    return(
        <section>
            <p>Соберите бургер</p>
            <Tabs />
            <p>Булки</p>
            <p>Соусы</p>

        </section>
    )
}

const Tabs = () => {
    const [current, setCurrent] = React.useState('one')
    return (
      <div style={{ display: 'flex' }}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          One
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Two
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Three
        </Tab>
      </div>
    )
  }

export default BurgerIngredients;