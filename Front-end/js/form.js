


const donor = [];
document.getElementById("my-form").addEventListener("submit", (event) => {
    event.preventDefault(); 
    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const bloodgroup = document.getElementById("group").value;
    const addrs = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;

    donor.push({ name, gender, bloodgroup, addrs, phone });
    
    localStorage.setItem('donorData', JSON.stringify(donor));
    
    document.getElementById("name").value = "";
    document.getElementById("group").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phone").value = "";
});

// function validation
