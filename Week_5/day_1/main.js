console.log("DOM event")

 function button_click(){
    console.log('Button clicked!');
    let h1 = document.createElement('h1');
    h1.textContent=
    body.appendChild(h1);
 }

 //add an event to a button
 let btn2=document.getElementById('btn-2');
 btn2.onclick = button_click;

 //create profiles
 let btnprofiles = document.getElementById('btn-3');
 btnprofiles.onclick = createprofiles;

 function createprofiles(){
    console.log('Creating Profiles...');

    let py_pt_class =[
        {id: 1, user:'Bruno' , email:'bruno@coolascode.com'},
        {id: 2, user:'Joeri' , email:'joeri@coolascode.com'},
        {id: 3, user:'laurent' , email:'laurent@westtech.com'},
        {id: 4, user:'Angkush' , email:'angkush@westtech.com'},
        {id: 5, user:'Ally' , email:'ally@SAweb.com'},
        {id: 6, user:'Shivastav' , email:'shivastav@SAweb.com'},
        {id: 7, user:'Kadeer' , email:'kadeer@coolascode.com'},
        {id: 8, user:'Demien' , email:'demein@developerintitute.com'},
    ]
 }

 //exercise 1
  function insertRow(){
    console.log('inserting row....');

    let table = document.getElementById('sample table');

    let row = document.createElement('tr');

    let cell1 = document.createElement('td');
    
  }