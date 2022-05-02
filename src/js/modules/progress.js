const move = () => {
  const plan = document.querySelector('#plan');
  const fact = document.querySelector('#fact');
  const elem = document.querySelector('#myBar');
    
function calc() {
  if (+fact.value > +plan.value) {
    elem.style.width = 0 + "%";
    alert('Слишком много!');
    fact.value = '';
  } else {
    let factPercent = (fact.value / plan.value)*100;
    elem.style.width = factPercent + "%";
  }
}
fact.addEventListener('input', calc);
  console.log(plan.value)
  console.log(fact.value)
  console.log(elem)
}
export default move;