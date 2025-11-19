export const EventProps =() =>{
    const HnadleWelcomeUser =(user) =>{
        
        alert(`Hey,${user}`);
    }
      const handleHover =() =>{
        
        alert(`Hey Thanks for Hove me`);
    }
return (
    <>
    <WelcomeUser
     onButtonClick ={() =>HnadleWelcomeUser('Suraj Gond')} onMouseEnter={handleHover}/>
    
    </>
);
};

const WelcomeUser = (props) =>{
    const {onButtonClick, onMouseEnter} = props;
    const handleGreeting =() =>{
        console.log(`Welcome to our Website`);
        onButtonClick();
    }
    return(
        <>
        <button onClick = {onButtonClick}>Click</button>
        <button onMouseEnter = {onMouseEnter}>Hover Me</button>
        <button onClick ={handleGreeting}>Greeting</button>
        </>
    )
}




