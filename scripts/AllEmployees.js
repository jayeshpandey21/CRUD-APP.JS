const employeesContainerEle = document.getElementById("employees-container");



async function getAllEmployee() {
    try{
        let resp = await fetch("https://crud-app-js-hvut.onrender.com/employees");
        let data = await resp.json();
        console.log(data);
        displayEmployee(data)
    } catch(err){
        console.log(err);
        alert("Something went wrong");
    }
}

//call function after dom tree creation
window.addEventListener("DOMContentLoaded", ()=>{
    getAllEmployee();
})

function displayEmployee(allEmployees){
    allEmployees.map((emp)=>{
        const empCard = document.createElement("article");
        empCard.className = "emp-card";
        empCard.innerHTML =`
        <header class="emp-card-header">
        <h3> ${emp.firstname} ${emp.middlename} ${emp.lastname}</h3>
        <span class="emp-id">ID: ${emp.id}</span>
        </header>
        <section class="emp-info">
         <p><strong>DOB:</strong> ${emp.dob}</p>
         <p><strong>Marital Status:</strong> ${emp.maritalstatus}</p>
        </section>
        <section class="emp-contact">
         <p><strong>Email:</strong> ${emp.email}</p>
         <p><strong>Phone:</strong> ${emp.phoneno}</p>
        </section>
        <section class="emp-address">
            <p><strong>Address:</strong></p>
            <p>${emp.address.street}, ${emp.address.city},<br>
             ${emp.address.state}, ${emp.address.country} - ${emp.address.zipcode}</p>
        </selection>

        <footer class ="emp-actions">
          <button class ="btn-edit-btn" data-id="${emp.id}">Edit</button>
          <button class ="btn-delete-btn" data-id="${emp.id}">Delete</button>
        </footer>
        `;
        employeesContainerEle.append(empCard);
    })
}