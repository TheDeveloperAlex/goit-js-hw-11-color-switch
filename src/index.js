const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtnNode = document.querySelector('[data-action="start"]');
const stopBtnNode = document.querySelector('[data-action="stop"]');

startBtnNode.style.padding = "25px";
stopBtnNode.style.padding = "25px";
startBtnNode.style.fontSize = "15px";
stopBtnNode.style.fontSize = "15px";
startBtnNode.style.backgroundColor = "green";
stopBtnNode.style.backgroundColor = "red";
startBtnNode.style.borderRadius = "10px";
stopBtnNode.style.borderRadius = "10px";
startBtnNode.style.marginRight = "20px";


const bodyNode = document.body;
let interval;
// bodyNode.classList.add('color');

// // const panelNode = document.querySelector('#panel');
//   // panelNode.addEventListener('click', e => {
//     // console.log(e.target);
//     if (e.target.tagName !== 'BUTTON') return false;
//     if (e.target === startBtnNode) {
//       // bodyNode.classList.add('isActive');
//       id = setInterval(() => {
//         bodyNode.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
//         }, 1000); 
//     }
//       // if (bodyNode.classList.contains('isActive')) {
        
//         // startBtnNode.disabled = false;
//       // }
      
//     if (e.target === stopBtnNode) {
//       // bodyNode.classList.remove('isActive');
//       clearInterval(id);
//     }
// });


startBtnNode.addEventListener('click', e => {
  interval = setInterval(() => {
        bodyNode.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);
  startBtnNode.disabled = true;
});

stopBtnNode.addEventListener('click', e => {
  clearInterval(interval);
  startBtnNode.disabled = false;
});