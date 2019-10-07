let carnet_field =  document.querySelector("#carnet_field")
let schedule_dropdown =  document.querySelector("#schedule_field")
let late_switch =  document.querySelector("#late_switch")
let submit_btn =  document.querySelector("#submit_btn")

let table_body = document.querySelector("#table_body")

let addStudent = (carnet, schedule, late)=>{
    let new_row = document.createElement("tr")
    let datetime = new Date()
    
    new_row.className = "table-active"
    new_row.innerHTML = 
        `<th scope='row'>${carnet}</th>
        <td>${schedule}</td>
        <td>${datetime.toLocaleString()}</td>
        <td>${late}</td>`

    table_body.appendChild(new_row)
}

let parseLateSwitch= (value)=>{
    if(value){
        return "Tardisimo"
    }
    return "A tiempo"
}

submit_btn.addEventListener("click", ()=>{
    let carnet = carnet_field.value
    let schedule = schedule_dropdown.options[schedule_dropdown.selectedIndex].text
    let late = parseLateSwitch(late_switch.checked)

    addStudent(carnet, schedule, late)

})

carnet_field.addEventListener("keyup", (e)=>{
    let keyCode = e.keyCode

    if(keyCode == 13){
        submit_btn.click()
    }
})