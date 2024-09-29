import "./Notes.css";

function Notes() {

  return (
    <section className="notes-wrapper">
      <div className="innerWidth notes-section">
        <div className="notes-left">
            <img src="./src/assets/Notes.png" alt="" />
        </div>
        <div className="notes-right">
          <h1 className="headings">AI-Powered <span id="grad">Smart Notes</span></h1>
          <p>
            Introducing our cutting-edge AI-based note-taking tool,<br />
            designed to help you effortlessly create, organize, and<br />
            calculate within your notes.
          </p>
          <button className="button-blue">Try It Now</button>
        </div>
      </div>
    </section>
  );
}

export default Notes;
