document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
  if(day === "Tuesday" || day === "Thursday" ){
      alert('Class Day!')

  }else if (day === "Saturday"){
      alert('Weekend!')

  }else if (day.toLowerCase() == "Sunday".toLowerCase()){
    alert('SUCCESS')
  }
  
  else{
    alert('Boring!')
  }

}
