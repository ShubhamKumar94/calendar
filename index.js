let monthElement = document.getElementById("month");
let yearElement = document.getElementById("year");
let body = document.querySelector("body");
let month;
let year;
let day;
let date = 1;
let table;
let dateLimit = function(){
    if(parseInt(year)%4==0){
        if(parseInt(month)==2){
            return 29;
        }
        else if (month==='1' || month==='3' || month==='5' ||month === '7' || month === '8' || month === '10'|| month === '12' ){
            return 31;
        }
        else{
            return 30;
        }
    }
    else{
        if(month==="2"){
            return 28;
        }
        else if (month==='1' || month==='3' || month==='5' ||month === '7' || month === '8' || month === '10'|| month === '12' ){
            return 31;
        }
        else{
            return 30;
        }
    }
}
monthElement.addEventListener("mouseout",(e)=>{
    month = e.target.value;
});
yearElement.addEventListener("mouseout",(e)=>{
    year = e.target.value;
   
    getTheDay();
});
function getTheDay(){
    day = new Date(`${year}-${month}-01`).getDay();
    createTable();

}
function createTable(){
    if(document.querySelector("table")!=undefined){
        let tempBody = document.querySelector("body");
        let tempChild = document.querySelector("table");
        tempBody.removeChild(tempChild);
        let tempForm = document.querySelector("form");
        tempBody.removeChild(tempForm);
    }
    let tR = document.createElement("tr");
    // let tH = document.createElement("th");
    tR.innerHTML = `<th>Sunday</th>`;
    tR.innerHTML = tR.innerHTML+`<th>Monday</th>`;
    tR.innerHTML = tR.innerHTML+`<th>Tuesday</th>`;
    tR.innerHTML = tR.innerHTML+`<th>Wednesday</th>`;
    tR.innerHTML = tR.innerHTML+`<th>Thursday</th>`;
    tR.innerHTML = tR.innerHTML+`<th>Friday</th>`;
    tR.innerHTML = tR.innerHTML+`<th>Saturday</th>`;
    let tHead = document.createElement("thead");
    table = document.createElement("table");
    tHead.append(tR);
    table.append(tHead);
    body.append(table);
    insertFirstRow(table);

}
function insertFirstRow(table){
    let tR1 = document.createElement("tr");
    for(let i =0; i<7;i++){
        if(i<day){
            tR1.innerHTML = tR1.innerHTML+`<td></td>`;
        }
        else{
            tR1.innerHTML = tR1.innerHTML + `<td id = ${date}>${date}</td>`;
            date++;
        }
    }
    table.append(tR1);
    inserFrom2ndRow(table);
    enterDate();
    date = 1;
    
}
function inserFrom2ndRow(table){
    for(let i =1; i<=5;i++){
        let tR = document.createElement("tr");
        for(let j =0; j<7;j++){
            tR.innerHTML = tR.innerHTML + `<td id = ${date}>${date}</td>`
             console.log(dateLimit());
            if(date === dateLimit()){
               i==6;
               table.append(tR);
               return;
            }
            
            date++;
        }
        table.append(tR);
    }
    }
    function enterDate(){
        let form = document.createElement("form");
        form.innerHTML = form.innerHTML + `<input type = "number" id = "reqNumber"></input>`;
        form.innerHTML = form.innerHTML + `<button>click</button>`;
        body.append(form);
        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            let inputValue = document.getElementById("reqNumber").value;
            let reqDate = document.getElementById(inputValue);
            if(reqDate.style.backgroundColor =="green"){
                reqDate.style.backgroundColor="white";
            }
            else{
                reqDate.style.backgroundColor="green";
            }
        })
    }
