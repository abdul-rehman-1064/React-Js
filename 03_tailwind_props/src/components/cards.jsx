import React from 'react'

function Cards({username="Student",study,Rollno="Bscs 220**", CGPA}) {
    // console.log(props.username);
    // console.log(username);
    // we can also passess object and array as a variables
    // Function automatically has access of props (properties)
    // In function we can also use props.username and also use {} and pass value to {username}
    // username="students" is a default value if we cannot passes value to app.jsx function can students will came as a username
    // Also we can use {study || "School"} second method but we can use upper method default value in parameter bcz of readability
    
    return (
        <div className="card">
        <div className="card-details">
          <p className="text-title"> {username}</p>
           <p className="text-body">{study || "School"}</p> 
          <p className="text-body">{Rollno} </p>
        </div>
        <button className="card-button">{CGPA || "4"}</button>
      </div>
    )
}

export default Cards
