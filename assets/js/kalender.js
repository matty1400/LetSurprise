let nav = 0;
let clicked = null;
let events = []

const calendar = document.getElementById('calendar');
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var userID = sessionStorage.getItem('userID');
          fetch("assets/API/get_events.php?userID=" + userID)
          .then(function (response){
            return response.json();
          })
          .then(function  (data){
            var daystesting = document.querySelectorAll(".day");
            
            for (var i = 0; i < data.length ; i++){
              for (var j = 0; j < daystesting.length ; j++){
                if (daystesting[j].dataset.datum == data[i].event_date){
                  // daystesting[j].innerHTML += "<br>" + "<br>" + data[i].event_name;
                  const eventDiv = document.createElement('div');
                  eventDiv.classList.add('event');
                  // eventDiv.setAttribute("id","event" + i);
                  eventDiv.innerText = data[i].event_name;
                  daystesting[j].appendChild(eventDiv);
                  events.push(data[i].event_date);
                  console.log(events)
                }
              }
                
            }
            document.getElementById('deleteButton').addEventListener('click', deleteEvent);
        });

function openModal(date) {
  clicked = date;
  const eventForDay = events.find(e => e === clicked);
  for (var x = 0; x < events.length; x++) {
    
    
  }


  if (eventForDay) {
    document.getElementById('eventText').innerText = eventForDay.title;
    deleteEventModal.style.display = 'block';
  } else {
    newEventModal.style.display = 'block';
  }

  backDrop.style.display = 'block';
}

function load() {
  const dt = new Date();

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

  document.getElementById('monthDisplay').innerText = 
    `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;

  calendar.innerHTML = '';

  for(let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');

    const dayString = `${month + 1}/${i - paddingDays}/${year}`;

    var maand  = month + 1;
    var dag  = i - paddingDays
    datum = maand + "/" + dag + "/" + year;
    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;
      daySquare.dataset.datum = (datum)
      const eventForDay = events.find(e => e.date === dayString);

      if (i - paddingDays === day && nav === 0) {
        daySquare.id = 'currentDay';
        daySquare.dataset.datum = (datum)
      }
      
      if (eventForDay) {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.setAttribute("id","event" + i);
        eventDiv.innerText = eventForDay.title;
        daySquare.appendChild(eventDiv);
      }

      daySquare.addEventListener('click', () => openModal(dayString));
    } else {
      daySquare.classList.add('padding');
    }

    calendar.appendChild(daySquare);

    
  }
  
}


function closeModal() {
  eventTitleInput.classList.remove('error');
  newEventModal.style.display = 'none';
  deleteEventModal.style.display = 'none';
  backDrop.style.display = 'none';
  eventTitleInput.value = '';
  clicked = null;
  load();
}

function saveEvent() {
  if (eventTitleInput.value) {
    eventTitleInput.classList.remove('error');

    events.push({
      date: clicked,
      title: eventTitleInput.value,
    });

    localStorage.setItem('events', JSON.stringify(events));
    
    localGet = localStorage.getItem('events')
    testing = JSON.parse(window.localStorage.getItem('events'))
    lastevent = testing[testing.length-1];

    lasteventNAME = lastevent["title"];
    lasteventDATE = lastevent["date"];
    lasteventID = sessionStorage.getItem('userID');
    
    date1 = lasteventDATE.replace('/','-');
    date2 = date1.replace('/','-');

    const [month, day, year] = date2.split('-');

    const result = [year, month, day].join('-');

    fetch("assets/API/insert_event.php?date=" + lasteventDATE + "&&title=" + lasteventNAME+ "&&userID=" + lasteventID)
    .then(function (response){
        return response.json();
    })
    .then(function  (data){
        
            
    });

    closeModal();
  } else {
    eventTitleInput.classList.add('error');
  }
}

function deleteEvent() {
  events = events.filter(e => e.date !== clicked);
  localStorage.setItem('events', JSON.stringify(events));
  closeModal();
}

function initButtons() {
  document.getElementById('nextButton').addEventListener('click', () => {
    nav++;
    
    load();
    var userID = sessionStorage.getItem('userID');
    fetch("assets/API/get_events.php?userID=" + userID)
    .then(function (response){
      return response.json();
    })
    .then(function  (data){
      var daystesting = document.querySelectorAll(".day");
      
            for (var i = 0; i < data.length ; i++){
              for (var j = 0; j < daystesting.length ; j++){
                if (daystesting[j].dataset.datum == data[i].event_date){
                  daystesting[j].innerHTML += "<br>" + "<br>" + data[i].event_name;
                }
              }
                
            }
            
        });
  });

  document.getElementById('backButton').addEventListener('click', () => {
    nav--;
    load();
    var userID = sessionStorage.getItem('userID');
          fetch("assets/API/get_events.php?userID=" + userID)
          .then(function (response){
            return response.json();
          })
          .then(function  (data){
            var daystesting = document.querySelectorAll(".day");
            
            for (var i = 0; i < data.length ; i++){
              for (var j = 0; j < daystesting.length ; j++){
                if (daystesting[j].dataset.datum == data[i].event_date){
                  daystesting[j].innerHTML += "<br>" + "<br>" + data[i].event_name;
                }
              }
                
            }
            
        });
  });

  document.getElementById('saveButton').addEventListener('click', saveEvent);
  document.getElementById('cancelButton').addEventListener('click', closeModal);
  document.getElementById('deleteButton').addEventListener('click', deleteEvent);
  document.getElementById('closeButton').addEventListener('click', closeModal);
}

initButtons();
load();


// var userID = sessionStorage.getItem('userID');
//           fetch("assets/API/get_events.php?userID=" + userID)
//           .then(function (response){
//             return response.json();
//           })
//           .then(function  (data){
//             var daystesting = document.querySelectorAll(".day");
            
//             for (var i = 0; i < data.length ; i++){
//               for (var j = 0; j < daystesting.length ; j++){
//                 if (daystesting[j].dataset.datum == data[i].event_date){
//                   // daystesting[j].innerHTML += "<br>" + "<br>" + data[i].event_name;
//                   const eventDiv = document.createElement('div');
//                   eventDiv.classList.add('event');
//                   // eventDiv.setAttribute("id","event" + i);
//                   eventDiv.innerText = data[i].event_name;
//                   daystesting[j].appendChild(eventDiv);
//                   events.push(daystesting[j]);
//                 }
//               }
                
//             }
//             document.getElementById('deleteButton').addEventListener('click', deleteEvent);
//         });

// function deleteEvent() {
//   events = events.filter(e => e.date !== clicked);
//   // localStorage.setItem('events', JSON.stringify(events));
//   var daystesting = document.querySelectorAll(".day");
//   console.log(daystesting)
          
          
//   closeModal();
// }
// deleteEvent();