import React, {FC} from 'react';

interface IBurgerImage {
  src: string;
  alt: string;
  styles: string;
}

const BurgerImage: FC<IBurgerImage> = ({src, alt, styles}) => {
  return (
    <img src={src} alt={alt} className={styles}/>
  )
}

export default BurgerImage;