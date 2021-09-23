import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";
import {Button} from "react-bootstrap";
function ProfilComponent(props) {
  return (
    <div style={{backgroundColor:"#1B1A17",textAlign:"center"}}>
      <h1 style={{backgroundColor:"#fff",color:"#9C3D54",width:500,marginLeft:'32%'}}>{props.fullName}</h1>
      <h2 style={{backgroundColor:"#9C3D54",color:"#1B1A17", width:500,marginLeft: '5%'}}>{props.profession}</h2>
      <p style={{backgroundColor:"#907FA4",color:"#fff",width:500,marginLeft: '60%'}}>{props.bio}</p>
      <img src={props.myimage} alt='iphone13' style={{width:500,border:'2px white solid'}}/>
      <p><Button variant="light" onClick={props.handleName} style={{border:'2px #1B1A17 solid'}}>Alert </Button></p>
    </div>
  )
}
  ProfilComponent.defaultProps={fullName:"Galo Diokhane", bio:"Etudiant en Master Mathematiques à l'UCAD",
  profession:'Developpeur WEB'}

  ProfilComponent.propTypes={
    stringProp: PropTypes.string
    }

export default ProfilComponent;