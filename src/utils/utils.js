

export const totalPrice = (ingrId, allIngr) => {

};

export const date = (data) => {
    const orderDate = Number(
        data
        .split('T')[0]
        .split('-')[2]
        .split('')
        .filter((i) => i !== '0')
        .join('')
    );
    const time = data.split('T')[1].split('.')[0].split(':', 2).join(':');
    const newDate = new Date().getDate();
    let result = '';
  
    if (orderDate === newDate) {
        result = `Сегодня, ${time} i-GMT+3`;
    }
    if (orderDate === newDate - 1) {
        result = `Вчера, ${time} i-GMT+3`;
    }
    if (orderDate < newDate - 1 && orderDate > newDate - 5) {
        result = `${newDate - orderDate} дня назад, ${time} i-GMT+3`;
    }
  
    if (orderDate < newDate - 4) {
        result = `${newDate - orderDate} дней назад, ${time} i-GMT+3`;
    }
  
    return result;
  };