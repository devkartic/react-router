import React from "react";

const Contact = (props) => {
    // console.log(props);
    setTimeout(()=>{
       props.history.push('/about');
    }, 5000);
    return(
        <div className="card">
            <div className="card-header">
                Featured
            </div>
            <div className="card-body">
                <h5 className="card-title">Contact</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Contact;