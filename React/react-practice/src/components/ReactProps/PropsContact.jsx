import React from "react";
import Card from "./Card";
import contacts from "./contacts";
 import './styles.css';

function createCard(contact) {
  return (
    <Card
      id ={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function PropsContact() {
  return (
    <div className = "PropsContact">
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
      </div>
  );}

export default PropsContact;
