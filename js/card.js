document.getElementById("card-1").addEventListener("click", function(){
    this.disabled = true;
    let task= document.getElementById("task-assigned").innerText;
    let finalTask= document.getElementById("total-counter").innerText;
    let convertedFinalTask = parseInt(finalTask);
    let convertedTask = parseInt(task);
    let updatedTask = convertedTask-1;
    let updatedFinalTask = convertedFinalTask+1;
    document.getElementById("task-assigned").innerText=updatedTask;
    document.getElementById("total-counter").innerText=updatedFinalTask;
    alert("Board Updated Successfully!");
    if(convertedTask<=1){
        alert("Congratulations! You have completed All taskes..");
    }
    let currentTime = new Date().toLocaleTimeString();
    let title = document.getElementById("card1").innerText;
    let activityTask = document.getElementById("activityLog");
    let section = document.createElement("section");
    section.className="act card rounded-xl p-2 bg-[#f4f7ff] mt-3"
    let p = document.createElement("p");
    p.innerText= `You have completed the task ${title} at ${currentTime} \n`;
    section.appendChild(p);
    activityTask.appendChild(section);
})



document.getElementById("card-2").addEventListener("click", function(){
    this.disabled = true;
    task= document.getElementById("task-assigned").innerText;
    finalTask= document.getElementById("total-counter").innerText;
    convertedFinalTask = parseInt(finalTask);
    convertedTask = parseInt(task);
    updatedTask = convertedTask-1;
    updatedFinalTask = convertedFinalTask+1;
    document.getElementById("task-assigned").innerText=updatedTask;
    document.getElementById("total-counter").innerText=updatedFinalTask;
    alert("Board Updated Successfully!");
    if(convertedTask<=1){
        alert("Congratulations! You have completed All taskes..");
    }
    currentTime = new Date().toLocaleTimeString();
    title = document.getElementById("card2").innerText;
    activityTask = document.getElementById("activityLog");
    section = document.createElement("section");
    section.className="act card rounded-xl p-2 bg-[#f4f7ff] mt-3"
    p = document.createElement("p");
    p.innerText= `You have completed the task ${title} at ${currentTime} \n`;
    section.appendChild(p);
    activityTask.appendChild(section);
})




document.getElementById("card-3").addEventListener("click", function(){
    this.disabled = true;
    task= document.getElementById("task-assigned").innerText;
    finalTask= document.getElementById("total-counter").innerText;
    convertedFinalTask = parseInt(finalTask);
    convertedTask = parseInt(task);
    updatedTask = convertedTask-1;
    updatedFinalTask = convertedFinalTask+1;
    document.getElementById("task-assigned").innerText=updatedTask;
    document.getElementById("total-counter").innerText=updatedFinalTask;
    alert("Board Updated Successfully!");
    if(convertedTask<=1){
        alert("Congratulations! You have completed All taskes..");
    }
    currentTime = new Date().toLocaleTimeString();
    title = document.getElementById("card3").innerText;
    activityTask = document.getElementById("activityLog");
    section = document.createElement("section");
    section.className="act card rounded-xl p-2 bg-[#f4f7ff] mt-3"
    p = document.createElement("p");
    p.innerText= `You have completed the task ${title} at ${currentTime} \n`;
    section.appendChild(p);
    activityTask.appendChild(section);
})





document.getElementById("card-4").addEventListener("click", function(){
    this.disabled = true;
    task= document.getElementById("task-assigned").innerText;
    finalTask= document.getElementById("total-counter").innerText;
    convertedFinalTask = parseInt(finalTask);
    convertedTask = parseInt(task);
    updatedTask = convertedTask-1;
    updatedFinalTask = convertedFinalTask+1;
    document.getElementById("task-assigned").innerText=updatedTask;
    document.getElementById("total-counter").innerText=updatedFinalTask;
    alert("Board Updated Successfully!");
    if(convertedTask<=1){
        alert("Congratulations! You have completed All taskes..");
    }
    currentTime = new Date().toLocaleTimeString();
    title = document.getElementById("card4").innerText;
    activityTask = document.getElementById("activityLog");
    
    section = document.createElement("section");
    section.className="act card rounded-xl p-2 bg-[#f4f7ff] mt-3"
    p = document.createElement("p");
    p.innerText= `You have completed the task ${title} at ${currentTime} \n`;
    section.appendChild(p);
    activityTask.appendChild(section);
})






document.getElementById("card-5").addEventListener("click", function(){
    this.disabled = true;
    task= document.getElementById("task-assigned").innerText;
    finalTask= document.getElementById("total-counter").innerText;
    convertedFinalTask = parseInt(finalTask);
    convertedTask = parseInt(task);
    updatedTask = convertedTask-1;
    updatedFinalTask = convertedFinalTask+1;
    document.getElementById("task-assigned").innerText=updatedTask;
    document.getElementById("total-counter").innerText=updatedFinalTask;
    alert("Board Updated Successfully!");
    if(convertedTask<=1){
        alert("Congratulations! You have completed All taskes..");
    }
    currentTime = new Date().toLocaleTimeString();
    title = document.getElementById("card5").innerText;
    activityTask = document.getElementById("activityLog");

    section = document.createElement("section");
    section.className="act card rounded-xl p-2 bg-[#f4f7ff] mt-3"
    p = document.createElement("p");
    p.innerText= `You have completed the task ${title} at ${currentTime} \n`;
    section.appendChild(p);
    activityTask.appendChild(section);
})






document.getElementById("card-6").addEventListener("click", function(){
    this.disabled = true;
    task= document.getElementById("task-assigned").innerText;
    finalTask= document.getElementById("total-counter").innerText;
    convertedFinalTask = parseInt(finalTask);
    convertedTask = parseInt(task);
    updatedTask = convertedTask-1;
    updatedFinalTask = convertedFinalTask+1;
    document.getElementById("task-assigned").innerText=updatedTask;
    document.getElementById("total-counter").innerText=updatedFinalTask;
    alert("Board Updated Successfully!");
    if(convertedTask<=1){
        alert("Congratulations! You have completed All taskes..");
    }
    currentTime = new Date().toLocaleTimeString();
    title = document.getElementById("card6").innerText;
    activityTask = document.getElementById("activityLog");
    section = document.createElement("section");
    section.className="act card rounded-xl p-2 bg-[#f4f7ff] mt-3"
    p = document.createElement("p");
    p.innerText= `You have completed the task ${title} at ${currentTime} \n`;
    section.appendChild(p);
    activityTask.appendChild(section);
})

