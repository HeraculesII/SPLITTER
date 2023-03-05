const firstInput = document.getElementById('logo-dollar');
const secondInput = document.getElementById('logo-person');
const customInput = document.getElementById('number');
const resetInput = document.getElementById('reset-button');
const tipPerson = document.getElementById('tip-person');
const totalPerson = document.getElementById('total-person');
const zeroId = document.getElementById('zero');

// 
tipPerson.textContent='$0.00';
totalPerson.textContent='$0.00';


function calculateTip() {
  let tip = firstInput.value*customInput.value/100;
  let person = tip/secondInput.value;
  tipPerson.textContent = '$' + person.toFixed(2);
  console.log (tipPerson.textContent);
  errorMessage ();
}

function calculateTotal() {
  let tip = firstInput.value*customInput.value/100;
  let totalPerPerson = (Number(firstInput.value)+tip)/secondInput.value;
  totalPerson.textContent = '$'+ totalPerPerson.toFixed(2);
  errorMessage ();

  // let person = tipPerson.textContent*secondInput.value;
  // totalPerson.textContent = person;
}

function percentButton (percent) {
  let tip = firstInput.value*percent.value/100;
  let person = tip/secondInput.value;
  tipPerson.textContent = '$' + person.toFixed(2);
// 
  let totalPerPerson = (Number(firstInput.value)+tip)/secondInput.value;
  totalPerson.textContent = '$' + totalPerPerson.toFixed(2)
  errorMessage ();
}

function reboot () {
  firstInput.value = '';
  secondInput.value = '';
  customInput.value = '';
  tipPerson.textContent='$0.00';
  totalPerson.textContent='$0.00';
  secondInput.style.border='none';
  zeroId.style.display='none'
}

function errorMessage (){
  if (secondInput.value <=0) {
    secondInput.style.border='1px solid #E17457';
    zeroId.style.display='block'
    tipPerson.textContent='$0.00';
    totalPerson.textContent='$0.00';
  } else {
    secondInput.style.border='none';
    zeroId.style.display='none'
  }
}

customInput.addEventListener ('input', calculateTip);
customInput.addEventListener('input', calculateTotal);
resetInput.addEventListener ('click', reboot)

