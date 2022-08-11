import React, {FC} from 'react';

interface ITitle {
  styles: string;
  title: string;
}

const Title: FC<ITitle> = (props) => {
  const {styles, title} = props;

  return (
    <p className={styles}>{title}</p>
  )
}


export default Title;