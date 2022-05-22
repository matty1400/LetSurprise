const searchWrapper = document.querySelector('.search-user');
const inputBox = searchWrapper.querySelector('input');
const suggBox = searchWrapper.querySelector('.autocom-box');
var myWishlist = document.querySelector('#myWishlist');

inputBox.onkeyup = (e)=>{
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());   
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>' + data + '</li>';
        });
        console.log(emptyArray)
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll('li');
        for (let i = 0; i < allList.length; i++)
        {
            allList[i].setAttribute("onclick", "select(this)");
        }
    }
    else
    {
        searchWrapper.classList.remove("active");
    }
}

function select(element){
    let selectedUserData = element.textContent;
    inputBox.value = selectedUserData;
    sessionStorage.setItem("nameofuser", selectedUserData);
    
    var split = selectedUserData.split(" ");
    
    var lastnameAppend = "";

    var restofname = split.splice(1);
    for (let i = 0; i < restofname.length; i++)
    {
        lastnameAppend += restofname[i] + " ";
    }

    sessionStorage.setItem("selecteduserLast", lastnameAppend);
    sessionStorage.setItem("selecteduserFirst", split[0]);
    location.href = "otherUsers.html";
}

function showSuggestions(list){
    let listData;
    if (!list.length)
    {
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
    }
    else
    {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}