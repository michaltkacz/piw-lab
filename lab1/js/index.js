import schedule from './schedule.js';

function loadTableData(items) {
  const table = document.getElementById('scheduleBody');
  items.forEach((item) => {
    let index = 0;
    let row = table.insertRow();
    let day = row.insertCell(index++);
    day.innerHTML = item.day;
    item.events.forEach((ev) => {
      let cell = row.insertCell(index++);
      let content = `<p> ${ev.time} </p> <p> ${ev.title} </p>`;
      cell.innerHTML = content;
    });
  });
}

loadTableData(schedule);
