import React from 'react';
import { Bar } from 'react-chartjs-2';
import {useState} from 'react';
import { array } from 'prop-types';


function VerticalBar(props){

  const [state, setState] = useState(
    {
    items: props.item,
    choices: [props.choices],
    index: props.index,
  }
  )
  // const [choices, setChoices] = useState()
// const loop = (argLoop) =>{
//   const arrChoices = [];
//   for(const item in state){
//     let boolean = true;
//     for(const choice in argLoop){
//       if (argLoop.hasOwnProperty(choice)){
//         const localValue = item[choice];
//         const filterValue = argLoop[choice];
//         if (!localValue || (localValue && filterValue)){
//           boolean = false;
//           break;
//         }
//       }
//     }
//     if (boolean){
//       arrChoices.push(item);
//     }
//   }
//   setChoices(arrChoices)
// }
  
// const arrChoices = [];
// setChoices(arrChoices);
// props.stateTRC.map(function(item2){
//   const newState = {...state}
//   newState.choice = item2.choices
//   setState(newState);
// })
let choiceArray =[];
for(let choices of state.choices)
{
  let arrayLoop = [];
  for(let item of choices){
    arrayLoop.push(item.choice);
  }
  choiceArray.push(arrayLoop);
  console.log(choiceArray)
}

let votesArray =[];
for(let votes of state.choices)
{
  let arrayLoop = [];
  for(let item of votes){
    arrayLoop.push(item.votes);
    console.log(item.votes)
  }
  votesArray.push(arrayLoop);
  console.log(votesArray)
}

const data = {
  labels: choiceArray[0],
  // props.choiceState,
  // state.choices.map(function(choice,index,array){
  //   const arrChoices = [];
  //   for(var k in choice){
  //     // if(choice[k].choice){
  //       arrChoices.push(choice[k].choice)
  //   return arrChoices, console.log(arrChoices)}}),


    
  // state.choice,
  // props.stateTRC.map(function(item2){
    // for (var k in item2.choices){
    //   console.log(item2.choices[k])
    // return item2.choices
    // }
    
  //     // arrChoices.push(item)
  //     // console.log(state)
  //     return item.choices[k].choice
      
      // arrChoices.push(choice);
      // setChoices(arrChoices)
      // console.log(arrChoices)
      // return arrChoices;
    
    // return item.choices[0].choice;
  // }),

  // labels: state.map(function(item){
  //   for(let choice of item.choices){
  //     for(let index in item.choices){
  //       console.log(choice)
  //       const arrChoices = [];
  //       if(index+1 === index++){
  //         arrChoices.push(choice)
  //       }
  //       return arrChoices;
  //   }
  //     }
    
    
  // }),




  datasets: [
    {
      label: '# of Votes',
      data: 
      votesArray[0],
      // state.items.map(function(item){
      //   for (var k in item.choices){
      //     console.log(item.choices[k].votes); return item.choices[k].votes}}),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
return(
  <div>
    
      <div className='header'>
      <h1 className='title'>{state.items.question}</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/VerticalBar.js'
        >
          {state.items.choices.url}
        </a>
      </div>
    </div>
    <Bar data={data} options={options} />
    
    </div>
  
);
}
export default VerticalBar;