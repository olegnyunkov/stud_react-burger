import React from 'react';
import Constructor from './burger-constructor.module.css';
import {
    LockIcon,
    CurrencyIcon,
    DeleteIcon,
    ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = (props) => {
    console.log(props)
    return(
        <section>
            <div>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={1255}
                    thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                />
            </div>
            <div>
                {
                    props.data.map((item) => {
                        if(item.type === 'main' && 'sauce') {
                            return <ConstructorElement
                                text={item.name}
                                price={item.price}
                                thumbnail={item.image}
                            />
                        }})
                }
            </div>
            <div>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={1255}
                    thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                />
            </div>
            <div>

            </div>

        </section>
    )
}

export default BurgerConstructor;
