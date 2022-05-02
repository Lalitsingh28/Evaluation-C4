// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",FUNday)
var matchArr = JSON.parse(localStorage.getItem("schedule")) || []
function FUNday(){
    event.preventDefault();
    var matchData = {
        match : document.querySelector("#matchNum").value,
        TeamA : document.querySelector("#teamA").value,
        TeamB : document.querySelector("#teamB").value,
        date : document.querySelector("#date").value,
        venue : document.querySelector("#venue").value,
    }
   matchArr.push(matchData)
   console.log(matchArr)
   localStorage.setItem("schedule",JSON.stringify(matchArr))
}
