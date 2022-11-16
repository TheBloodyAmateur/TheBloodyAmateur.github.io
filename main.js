window.onload = function(){
    fetchRepos().then(data =>{
        let list = document.getElementById("projects-list");
        data.forEach(element => {
            let li = document.createElement("li");
            let a = document.createElement("a");
            var link = document.createTextNode(element.name);
            a.appendChild(link);
            a.href=element.html_url;
            a.target = "_blank";
            a.classList.add("projects-list-element");
            li.appendChild(a);
            list.appendChild(li);
        });
    });
}

async function fetchRepos(){
    const request = await fetch("https://api.github.com/users/TheBloodyAmateur/repos");
    const repos = request.json();
    return repos;
}

function loadResumeInfo(name) {
    var result;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "resume.json", false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    document.getElementById("resume.title").textContent = name;
    document.getElementById("resume.info").textContent = JSON.stringify(JSON.parse(result)[name].info).replaceAll("\"","");
}

function socialField(){
    const field = document.getElementById("social");
    let left = window.getComputedStyle(field).left;
    if(left.lastIndexOf("-")==0){
        field.style.left = "0vw";
    }
    else{
        field.style.left = "-30vw";
    }
}