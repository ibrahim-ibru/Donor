// const donor=[]
// document.getElementById("my-form").addEventListener("submit", (event) => {
//     event.preventDefault(); // Prevents form from submitting and page reload
//     const name = document.getElementById("name").value;
//     const gender = document.querySelector('input[name="gender"]:checked')?.value;
//     const bloodgroup=document.getElementById("group").value
//     const addrs=document.getElementById("address").value
//     const phone=document.getElementById("phone").value
//     console.log(name);
//     donor.push({name,gender,bloodgroup,addrs,phone})
//     let data=JSON.stringify(donor)
//     console.log(data);
//     localStorage.setItem(1,JSON.stringify(data))
//     document.getElementById("name").value=""
//     document.getElementById("group").value=""
//     document.getElementById("address").value=""
//     document.getElementById("phone").value=""

    
// });


const donor = [];
document.getElementById("my-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents form from submitting and page reload
    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const bloodgroup = document.getElementById("group").value;
    const addrs = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;

    donor.push({ name, gender, bloodgroup, addrs, phone });
    
    // Convert the donor array to a string and store it in localStorage
    localStorage.setItem('donorData', JSON.stringify(donor));
    
    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("group").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phone").value = "";
});

// function validation
