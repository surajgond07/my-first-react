
import "./EV.css";

export const EventPropagation = () => {

  const handleGrandParent = () => {
    // alert("Grand Parent Div Clicked");
    console.log("Grand Parent Div Clicked");
  };

  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (event) => {
   event.stopPropagation();
    console.log(event);
    console.log("Child clicked");
  };

  return (
    <section className="main-div">
      <div className="g-div" onClickCapture ={handleGrandParent}>
        <div className="p-div" onClickCapture={handleParentClick}>
          <button className="c-div" onClickCapture={handleChildClick}>
            Child Div
          </button>
        </div>
      </div>
    </section>
  );
};
