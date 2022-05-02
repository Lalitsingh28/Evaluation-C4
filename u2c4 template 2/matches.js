// write js code here corresponding to matches.html
var matchArr = JSON.parse(localStorage.getItem("schedule")) || []
displayData(matchArr)


function displayData(matchArr){
    matchArr.forEach(elem =>{
        
        var tr = document.createElement("tr")

        var td1 = document.createElement("td")
        td1.innerText = elem.matchData.match

        var td2 = document.createElement("td")
        td2.innerText = elem.matchData.TeamA

        var td3 = document.createElement("td")
        td3.innerText = elem.matchData.TeamB

        var td4 = document.createElement("td")
        td4.innerText = elem.matchData.date

        var td5 = document.createElement("td")
        td5.innerText = elem.matchData.venue

        var td6 = document.createElement("td")
        td6.innerText = "favourites"
        td6.attributes("click",function(){
            addTofav (elem)
        })
        
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
        console.log(tr)
    })
    
    function addTofav (elem){
         matchArr.push(elem)
         localStorage.setItem("favourites",JSON.stringify(matchArr))
    }

    

}