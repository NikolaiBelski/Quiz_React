
import './index.scss';
import { useState } from 'react';


const questions = [
  {
    title: 'У меня дома живет ... ?',
    variants: ['5 котов', 'жена', 'жена, 5 котов и 3 крысы'],
    correct: 2,
  },
  {
    title: 'Пиво - это ... ',
    variants: ['фу, как противно', 'пища богов', 'не знаю, я веган'],
    correct: 2,
  },
  {
    title: 'Скока можна, скока можна е... мать',
    variants: [
      'Почему так',
      'Обэма виноват',
      'Я прошла авганскую войну',
    ],
    correct: 2,
  },
];

 const Result = ({correctValue}) => {
    return (
        <div className='result'>
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Вы смогли осилить {correctValue} из {questions.length}</h2>
            <a href="/">
            <button>Все х... , давай по-новой</button>

            </a>
        </div>
    )
}



  const  Game = ({questionDate,onClickVariant,state})=> {

    const progress = Math.floor(state/questions.length*100);


  
    return (
      <>
        <div className="progress">
          <div style={{ width: `${progress}%` }} className="progress__inner"></div>
        </div>
        <h1>{questionDate.title}</h1>
        <ul>
       {
        questionDate.variants.map((elem,index) => (
          <li key = {elem} onClick = {()=> onClickVariant(index)}>{elem}</li>
        ))
       }
        </ul>
      </>
    )
  }


function App() {

  const [state, setState] = useState(0);
  const question =  questions[state];
  const [correctValue, setCorrect] = useState(0)

  const onClickVariant = (index) => {

    setState(item=>item+1);
    if (index === question.correct) {
      setCorrect((item) => item+1)
    }
  }

    return (
      <div className="App">

        {
          state!==questions.length? <Game questionDate = {question} onClickVariant = {onClickVariant} state = {state}/>:<Result correctValue = {correctValue}/>
        }
                            
      </div>

      
    );


}

export default App;




