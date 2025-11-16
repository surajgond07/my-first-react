export const Eventhandling =() => {

    // function handleButtonClick(){
    //     alert("Hey I am onClick Event")
    // }
    const handleButtonClick = (Event) =>{
        console.log(Event);
        console.log(Event.target);
        console.log(Event);
        alert("Hey I am onClick Event")
    };

    const handleWelcomeUser = (user) => {
        console.log(`Hey ${user}, Welcome`); 
    }
    return (
        <>
        {/* function component with named function */}
        <button onClick={handleButtonClick}>Click Me</button>
        <br />
        <br />
        <br />
        <button onClick={(Event) => handleButtonClick(Event)}>Click Me - 2</button>
        {/* Inline Event handler */}
        <button onClick={(Event) => console.log(Event)}>Inline Function</button>
        <br />
        {/* Function Component with Inline Arrow Functions */}
        <button onClick={() => alert("Hey I am Inline Event")}>Inline Arrow function</button>
        <br />
        {/* Passing Argument to Event handlers */}
          <button onClick={() => handleWelcomeUser("Suraj")}>Click Me</button>
        
        </>
    
    )
} 