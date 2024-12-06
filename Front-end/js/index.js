

function logDonorData() {
    // Retrieve the donor data from localStorage
    const storedData = localStorage.getItem('donorData');
    
    // If there's no data in localStorage, alert or do nothing
    if (!storedData) {
        console.log("No donor data found in localStorage.");
        return;
    }
    
    // Parse the stored data back to an array
    const donors = JSON.parse(storedData);
    str1=``
    str2=``
    // Log each donor's data individually
    donors.forEach((donor, index) => {
        console.log(`Donor ${index + 1}:`);
        console.log(`Name: ${donor.name}`);
        console.log(`Gender: ${donor.gender}`);
        console.log(`Blood Group: ${donor.bloodgroup}`);
        console.log(`Address: ${donor.addrs}`);
        console.log(`Phone: ${donor.phone}`);
        console.log('-----------------------------------');

        str1+=`
        <tr>
                    <td ><input type="text" name="" id="nam" value="${donor.name}"></td>
                    <td ><input type="text" name="" id="gen" value="${donor.gender}"></td>
                    <td ><input type="text" name="" id="bldgrp" value="${donor.bloodgroup}"></td>
                    <td ><input type="text" name="" id="addrs" value="${donor.addrs}"></td>
                    <td ><input type="text" name="" id="ph" value="${donor.phone}"></td>
                    <td style="border: none; width: 148px;">
                        <button style="background-color: blue;" onclick=" editDetails(${index},"nam","gen","bldgrp","addrss","ph")">EDIT</button>
                        <button style="background-color: green;" onclick="saveDetails(${index},"nam","gen","bldgrp","addrss","ph")">SAVE</button>
                        <button onclick="delDetails(${index},"nam","gen","bldgrp","addrss","ph")">DELETE</button></td>
                    </tr>
        `

        str2+=`
            <tr>
                <th>NAME</th><td ><input type="text" name="" id="name" value="${donor.name}"></td>
            </tr>
            <tr>
                <th>GENDER</th><td ><input type="text" name="" id="gend" value="${donor.gender}"></td>
            </tr>
            <tr>
                <th>BLOOD</th><td ><input type="text" name="" id="blodgrp" value="${donor.bloodgroup}"></td>
            </tr>
            <tr>
                <th>ADDRESS</th><td ><input type="text" name="" id="adrs" value="${donor.addrs}"></td>
            </tr>
            <tr>
                <th>PHONE</th><td ><input type="text" name="" id="phn" value="${donor.phone}"></td>
            </tr>
            </table>
        <div class="buttons-phone">
            <button onclick="editDetails(${index},"name","gend","blodgrp","adrs","phn")">edit</button>
            <button onclick="saveDetails(${index},"name","gend","blodgrp","adrs","phn")">save</button>
            <button onclick="delDetails( ${index},"name","gend","blodgrp","adrs","phn")">delete</button>
        </div>
        `

    });
    document.getElementById("display").innerHTML=str1
    document.getElementById("phone-view").innerHTML=str2
}

// Call the function to log data
logDonorData();


function editDetails(id,inp1,inp2,inp3,inp4,inp5){
    document.getElementsByClassName(`${inp1}`)[id].focus()
    document.getElementsByClassName(`${inp1}`)[id].addEventListener("change",(event)=>{
    document.getElementsByClassName(`${inp2}`)[id].focus()
    })
    document.getElementsByClassName(`${inp2}`)[id].addEventListener("change",(event)=>{
        document.getElementsByClassName(`${inp3}`)[id].focus()
        })
    document.getElementsByClassName(`${inp3}`)[id].addEventListener("change",(event)=>{
        document.getElementsByClassName(`${inp4}`)[id].focus()
    })
    document.getElementsByClassName(`${inp4}`)[id].addEventListener("change",(event)=>{
        document.getElementsByClassName(`${inp5}`)[id].focus()
        })
}
