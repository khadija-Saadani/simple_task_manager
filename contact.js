let contacts = [];

function addContact(){
    const Name=document.getElementById('name').value;
    const Number=document.getElementById('number').value;
    const Email=document.getElementById('email').value;
    if(Name && Number && Email ){
        const contact ={Name , Number , Email};
        contacts.push(contact);
        SaveContacts();
        DisplayContacts();
        ClearForm();
    } else {
        alert("Make sure to fill in every field.")
    }
}

function SaveContacts(){
    localStorage.setItem('contacts', JSON.stringify(contacts));
    
}

function DisplayContacts(){
    const Clist =document.getElementById('contact_list');
    Clist.innerHTML='';
    contacts.forEach((contact, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${contact.Name} - ${contact.Number} - ${contact.Email}
            <button onclick="EditContact(${index})">Edit</button>
            <button onclick="DeleteContact(${index})">Delete</button>`;
        Clist.appendChild(listItem);
    });
}

function EditContact(index){
    const contact = contacts[index];
    document.getElementById('name').value = contact.Name;
    document.getElementById('number').value = contact.Number;
    document.getElementById('email').value = contact.Email;
    DeleteContact(index);
}

function DeleteContact(index){
    contacts.splice(index , 1)
    SaveContacts();
    DisplayContacts();
}

function ClearForm(){
    document.getElementById('name').value='';
    document.getElementById('number').value='';
    document.getElementById('email').value='';
}

function loadContacts() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
        contacts = JSON.parse(savedContacts);
        DisplayContacts();
    }
}  
function isNumberKey(event) {
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode != 8 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return alert("Enter your phone number ! ");
    }
    return true;
  }