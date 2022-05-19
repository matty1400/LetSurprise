let suggestions = []

function getNames(){
    fetch("assets/API/getnames.php")

    .then(function (response){
        return response.json();
    })
    .then(function  (data){
        for (let i = 0; i < data.length; i++)
        {suggestions.push(data[i].firstName + " " + data[i].lastName)
        };
        console.log(suggestions);
        
    });
};

getNames();