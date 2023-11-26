import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorStateThird: { textColor: 'blue', bgColor: 'red' },
      colorStateFourth: { textColor: 'red', bgColor: 'blue' },
    };
  }

  changeColor = (key) => {
    this.setState((prevState) => ({
      [key]: {
        ...prevState[key],
        textColor: prevState[key].bgColor,
        bgColor: prevState[key].textColor,
      },
    }));
  };

  render() {
    const { colorStateThird, colorStateFourth } = this.state;

    return (
      <div>
        <p>Дата народження: 03.08.2004 Місце народження: м. Донецьк</p>
        <p
          id='thirdElement'
          style={{
            color: colorStateThird.textColor,
            backgroundColor: colorStateThird.bgColor,
          }}
          onClick={() => this.changeColor('colorStateThird')}
        >
          Школа: академічний ліцей №3 м. Обухів
          <br />
          Університет: КПІ ім. Ігоря Сікорського
        </p>
        <h2
          id='fourthElement'
          style={{
            color: colorStateFourth.textColor,
            backgroundColor: colorStateFourth.bgColor,
          }}
          onClick={() => this.changeColor('colorStateFourth')}
        >
          Хоббі:
        </h2>
        <ul>
          <li>Вивчення мов</li>
          <li>Спорт</li>
          <li>Туризм</li>
          <li>Комп'ютерні ігри</li>
        </ul>
        <h2>Улюблені фільми:</h2>
        <ol>
          <li>"Форрест Ґамп" 1994</li>
          <li>"Бійцівський клуб" 1999</li>
          <li>"Шоу Трумана" 1998</li>
        </ol>
      </div>
    );
  }
}

export default Content;
