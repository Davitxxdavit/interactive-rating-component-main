
    const submitButton = document.getElementById("btn");
    const ratingSection = document.getElementById("rating-start");
    const thankYouSection = document.getElementById("rate-thank");
    submitButton.addEventListener("click", function(){
        // selected number
        const selectedNumber = document.querySelector(".rating-start .active").innerHTML;
        //change section

             thankYouSection.style.display = 'flex';
            ratingSection.style.display = "none";
        document.getElementById("ranking-score").innerHTML = `You selected ${selectedNumber} out of 5`;
       
        
    });


const ratingStars = document.querySelectorAll(".rating-star span");

ratingStars.forEach(star => {
    star.addEventListener("click", function(){
        //remove style
        ratingStars.forEach(s => s.classList.remove("active"));
        //add style
        this.classList.add("active");
        });
    });    


