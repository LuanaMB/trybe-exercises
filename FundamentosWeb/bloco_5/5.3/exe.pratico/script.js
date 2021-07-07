function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//1)
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
function createDaysOfTheMonth() {  
  let ul = document.getElementById('days');
  for (index = 0; index < dezDaysList.length; index += 1) {
    let li = document.createElement('li');
    let day=dezDaysList[index];
    if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
      li.className= 'day holiday'
      li.innerText = day;
      ul.appendChild(li);
    }
    else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
      li.className= 'day friday'
      li.innerText = day;
      ul.appendChild(li);
    }
    else if (dezDaysList[index] === 25 ){
      li.className= 'day holiday friday'
      li.innerText = day;
      ul.appendChild(li);
    } else {
      li.innerText = day;
      li.className= 'day'
      ul.appendChild(li);
    }
  };
};
createDaysOfTheMonth()
//2)
function holiday(word){
  let pai= document.querySelector('.buttons-container');
  let buttons= document.createElement('button');
  buttons.id='btn-holiday';
  buttons.innerText= 'Feriados';
  pai.appendChild(buttons);
}
holiday()
//3)
function displayHolidays(){
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'green';
  let setNewColor = 'white';


  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

displayHolidays();
//4)
function friday(){
  let friday= document.querySelector('.buttons-container');
  let buttonFriday= document.createElement('button');
  buttonFriday.innerText='Sexta-Feira';
  buttonFriday.id='btn-friday';
  friday.appendChild(buttonFriday);
}
friday()
/*5)DUVIDA
function fridayClick(){
  let getbuttonFriday= document.querySelector('#btn-friday');
  let getFridayDay= document.querySelectorAll('.friday');
  let string= 'Sexta-Feira';
  console.log(getFridayDay);

  getbuttonFriday.addEventListener('click',function() {
    for(let index=0; index<getFridayDay.length; index+=1){
      if(getFridayDay[index].innerHTML==='friday'){
        getFridayDay.innerText= string;
      }
    }
  })
}

fridayClick()
//6)*/
const divContainer= document.querySelector('.days-container')
function zoom(event){
  let days=document.querySelector('#days');
  event.target.style.fontSize='30px';
  event.target.style.fontWeight = '600';  
}
divContainer.addEventListener('mouseover', zoom)

function zoomBack(event){
  let days=document.querySelector('#days');
  event.target.style.fontSize='20px';  
  event.target.style.fontWeight = '200';
}
divContainer.addEventListener('mouseout', zoomBack)
//7)
function tarefas(name){
  let myTask= document.querySelector('.my-tasks');
  let tarefa= document.createElement('span');
  tarefa.innerText= name;
  myTask.appendChild(tarefa);
}
tarefas('cozinhar')
//8)