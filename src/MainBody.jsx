export default function MainBody() {

    const whatToLearn = "React JS";
  
    return (
      <div>
        <p>In this course, we will learn {whatToLearn} by building TaskOPedia!</p>
        <ul>
          <li>Basic Foundation</li>
          <li>Functional and Class Components</li>
        </ul>
       {/*  <div>
          Enter Task <input maxLength={5} readOnly={false}></input>
        </div> */}
      </div>
     
    );
  }