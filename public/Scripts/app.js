(function(){
    function Start()
    {
        console.log("App Started");
        let deleteButtons = document.querySelectorAll('.btn-danger');
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure you want to delete this workout from your list?"))
            {
                event.preventDefault();
                window.location.assign('/workoutList');
            }
        });
    }
    
    }  
    window.addEventListener("load", Start);     
})();

