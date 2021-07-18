document.querySelectorAll(".question").forEach((question)=>{
    question.addEventListener("click",()=>{
        if(question.parentNode.classList.contains("active")){
            question.parentNode.classList.toggle("active");
        }
        else{
            // if one question-ans is already active and you click on another question , first remove active from the previous and then add active to the current question
            document.querySelectorAll(".question").forEach((question)=>{
                question.parentNode.classList.remove("active");
            })
            question.parentNode.classList.add("active");
        }
    })
});