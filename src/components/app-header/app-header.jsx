import React from 'react';
import { 
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon,
    } from '@ya.praktikum/react-developer-burger-ui-components';


const AppHeader = () => {
    return(
        <>
            <BurgerIcon type="secondary" />
            <ListIcon type="secondary" />
            <ProfileIcon type="secondary" />
            <Logo />
        </>
    );
};

export default AppHeader;