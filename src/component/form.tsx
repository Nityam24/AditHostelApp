 import React from "react";
 import './form.css'

export default function Form(){
    return(
        <form className="complaint-form">
        <h1>ADIT Hostel Maintainance System</h1>
    <div className="main">
          
        <label>Hostel Block</label>
        <select>
        <option value="select hostel block">select hostel block</option>
           <option value="ADIT Boys Hostel Block: A">ADIT Boys Hostel Block: A</option>
          <option value="ADIT Boys Hostel Block: B">ADIT Boys Hostel Block: B</option>
          <option value="ADIT Boys Hostel Block: 5">ADIT Boys Hostel Block: 5</option>
          <option value="ADIT Boys Hostel Block: 6">ADIT Boys Hostel Block: 6</option>
          <option value="ADIT Boys Hostel Block: 7">ADIT Boys Hostel Block: 7</option>
          <option value="ADIT Boys Hostel Block: 8">ADIT Boys Hostel Block: 8</option>
          <option value="ADIT Boys Hostel Block: 11">ADIT Boys Hostel Block: 11</option>
          <option value="Ayurvedic Hut">Ayurvedic Hut</option>
          <option value="Sharda Girls Hostel">Sharda Girls Hostel</option>
        </select>

        <label>Hostel Ractor</label>
        <input type="text" disabled></input>

        <label>Room number</label>
        <input type="text" placeholder="Enter hostel room number "></input>

        <label >complaint Topic </label>

        <div  className="radiobutton">
        <label>Carpentary</label>
        <input type="radio"  name="rd"></input>
        <label>Plumbing</label>
        <input type="radio"  name="rd"></input>
        <label>Electrical</label>
        <input type="radio"  name="rd"></input>
        <label>Masonry</label>
        <input type="radio"  name="rd"></input>
        <label>Other</label>
        <input type="radio"  name="rd"></input>
        </div>

        <label>Brief Complaint Description</label>
        <input type="message" placeholder="Describe your complain in detail"></input>

        <label>Name</label>
        <input type="text" placeholder="Enter your name"></input>

        <label>Mobile Number</label>
        <input type="tel" placeholder="Enter phone number"></input>

        <label>Your Email</label>
        <input type="tel" placeholder="Enter phone Email"></input>
    </div>
        <button className="button">Submit Complaint</button>

        
        </form>
    )
}
