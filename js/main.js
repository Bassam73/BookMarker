
var arrURLS = [];


if(localStorage.getItem("sites")!=null){
    arrURLS= JSON.parse(localStorage.getItem("sites"))
    displayARR()
}

var urlRegex  = /^(ftp|http|https):\/\/[^ "]+$/ ;
var siteNameRegex =  /[a-zA-Z][a-zA-Z][a-zA-Z]/;

function addURL(){
    
    var siteName=document.getElementById('siteName').value;
    var siteUrl=document.getElementById('siteUrl').value ;
    if(urlRegex.test(siteUrl)==true && siteNameRegex.test(siteName)==true ){
    var sites ={
        name: siteName,
        URL : siteUrl,
    }
    arrURLS.push(sites);
    displayARR();
    clearInput()
    localStorage.setItem("sites",JSON.stringify(arrURLS))
    
    }
    else{
        swal("Site Name or Url is not valid, Please follow the rules below :", "Site name must contain at least 3 characters , Site URL must be a valid one ", "error");
    }
    

}

function deleteItem(index){
    arrURLS.splice(index, 1)
    displayARR()
    localStorage.setItem("sites",JSON.stringify(arrURLS))
}

function displayARR() {
    var cartona = ""
    for(var i = 0 ; i < arrURLS.length; i++){
        cartona+=`
        <tr>
        <td class="align-middle">${i+1}</td>
        <td class="align-middle">${arrURLS[i].name}</td>
        <td class="align-middle"><a href="${arrURLS[i].URL}" target="_blank"><button class="btn visit-btn"><i class="fa-solid fa-eye"></i> Visit</button></td></a>
        <td class="align-middle"><button onclick="deleteItem(${i})" class="btn delete-btn"><i class="fa-solid fa-trash"></i> Delete</button></td>
        </tr>
        `
    }

    document.getElementById('demo').innerHTML=cartona;
}



function urlValidation(){
    var siteUrl=document.getElementById('siteUrl').value ;

    if(urlRegex.test(siteUrl)==false){
        document.getElementById('siteUrl').classList.add("is-invalid")
    }
    else{
        document.getElementById('siteUrl').classList.remove("is-invalid")
    }
}

function nameValidation(){
    var siteName=document.getElementById('siteName').value;
    if(siteNameRegex.test(siteName)==false){
        document.getElementById('siteName').classList.add("is-invalid")
    }
    else{
        document.getElementById('siteName').classList.remove("is-invalid")
    }
}


function clearInput(){

    document.getElementById('siteUrl').value=""
    document.getElementById('siteName').value=""
}