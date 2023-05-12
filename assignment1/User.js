import React from "react";
import "./style.css";

export default function App() {

  class User {
    constructor(name, email, password, dateOfBirth, location, profilePicture) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.dateOfBirth = dateOfBirth;
      this.location = location;
      this.profilePicture = profilePicture;
    }
  }
  const user1 = new User(
    "John Doe",
    "john.doe@example.com",
    "password123",
    "1990-01-01",
    "New York",
    "profile_pic.jpg"
  );


  console.log(user1.name);  


  return (
    <div>
      <h1>js Assignment</h1>
      
    </div>
  );
}