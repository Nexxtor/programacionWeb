let carnet_field =  document.querySelector("#carnet_field")
let schedule_dropdown =  document.querySelector("#schedule_field")
let late_switch =  document.querySelector("#late_switch")
let submit_btn =  document.querySelector("#submit_btn")

let table_body = document.querySelector("#table_body")
let carnet_regex= new RegExp('^[0-9]{8}$')

let all_rows = []
let id_counter = 0;

/*
    Función para agregar un hijo a la tabla
*/

let addStudent = (carnet, schedule, late)=>{
    let new_row = document.createElement("tr")
    let datetime = new Date()
    
    new_row.className = "table-active"
    new_row.innerHTML = 
        `<th scope='row'>${carnet}</th>
        <td>${schedule}</td>
        <td>${datetime.toLocaleString()}</td>
        <td>${late}</td>`

    //Se crea una nueva celda que conedrá el boton
    let cell_conteiner = document.createElement("td")
    
    //Se preprara el boton
    let new_btn = document.createElement("button")
    new_btn.classList.add("btn")
    new_btn.classList.add("btn-danger")

    new_btn.innerText = "Drop"
    // El value contedrá el identificador de la celda, no debe de reiniciarse el contador
    new_btn.value  = id_counter

    /**
     * Logica del boton
     */
    
    new_btn.addEventListener("click", (event)=>{
        let id_element = event.srcElement.value

        /**
         * Logica para eliminar un registro de la tabla
         * Se busca un boton con el id como valor, se obtiene el tr superior, y se elimina del tbody
         */
        let element_node = document.querySelector(`tr>td>button[value='${id_element}']`).parentElement.parentElement
        table_body.removeChild(element_node)
        
        //La busqueda se realizara con el valor que trae el boton. Se comparan todos los id del arreglo
        all_rows.forEach((item, index) =>{
            if(item.id == id_element){
                all_rows.splice(index, 1)
            }
        })
    })



    cell_conteiner.appendChild(new_btn)
    new_row.appendChild(cell_conteiner)

    /**
     * Se alamacenan como JSON todos los valores del registro.
     * Notar que el id es el mismo que se asigno al boton como valor
     */
    all_rows.push({
        "id" : id_counter, 
        "carnet": carnet, 
        "schedule": schedule, 
        "late": late
    })

    table_body.appendChild(new_row)

    // Debe de aumentarse para funcionar como unico
    id_counter++
}

/*
    Función para parsear el valor booleano del late_switch
*/

let parseLateSwitch= (value)=>{
    if(value){
        return "Tardisimo"
    }
    return "A tiempo"
}

/*
    Listener para detectar el click en el boton
*/

submit_btn.addEventListener("click", ()=>{
    let carnet = carnet_field.value
    let schedule = schedule_dropdown.options[schedule_dropdown.selectedIndex].text
    let late = parseLateSwitch(late_switch.checked)

    if(carnet_regex.test(carnet)){
        addStudent(carnet, schedule, late)
    }else{
        alert("Formáto de carnet no válido")
    }
})

/*
    Listener para disparar el botón cuando se aprete enter
*/

carnet_field.addEventListener("keyup", (event)=>{
    let keyCode = event.keyCode
    let carnet = carnet_field.value

    if(keyCode == 13){
        submit_btn.click()
    }

    if(carnet_regex.test(carnet)){
       submit_btn.disabled = false; 
    }else{
        submit_btn.disabled = true; 
    }
})