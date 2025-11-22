
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
    console.log(event);
    console.log("Child clicked");
  };

  return (
    <section className="main-div">
      <div className="g-div" onClick={handleGrandParent}>
        <div className="p-div" onClick={handleParentClick}>
          <button className="c-div" onClick={handleChildClick}>
            Child Div
          </button>
        </div>
      </div>
    </section>
  );
};
