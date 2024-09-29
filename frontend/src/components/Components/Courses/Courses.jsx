import "./Courses.css";

function Courses() {

  return (
    <section className="courses-wrapper">
      <div className="innerWidth courses-section">
        <div className="courses-right">
          <h1 className="headings">Courses Realted To Your Interest</h1>
          <p>
            We provide a variety of courses related to your<br />
            interest to boost your knowledge base.  
          </p>  
        </div>
        <div className="courses-left">
            <img src="https://st2.depositphotos.com/1350793/8441/i/450/depositphotos_84415820-stock-photo-hand-drawing-online-courses-concept.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Courses;