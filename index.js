// write js code here corresponding to index.html
// You should add submit event on the form



document.querySelector("#masaiForm").addEventListener("submit",myFunction)

var matArr=JSON.parse(localStorage.getItem("schedule"))||[]
 function myFunction()
 {
  event.preventDefault()
  
  var matObj=
  {
    matchNum:masaiForm.matchNum.value,
    teamA:masaiForm.teamA.value,
    teamB:masaiForm.teamB.value,
    date:masaiForm.date.value,
    venue:masaiForm.venue.value,
  };
  alert("Details are submitted");
  matArr.push(matObj)
  // console.log(matArr)
  localStorage.setItem("schedule",JSON.stringify(matArr))
 }
