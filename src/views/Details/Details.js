import React, {Component} from 'react';
import { MDBCard, MDBCardImage, MDBContainer, 
MDBCol, MDBRow} from 'mdbreact';
import './details.css'
class Details extends Component {
  render(){
  return (
 <React.Fragment>
        <MDBCard>
        <MDBCardImage className="imageTop" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" />
        </MDBCard>
      <MDBContainer className="movieDetails">
      <MDBRow>
        <MDBCol md="3">
        <img src="https://themelayer.net/html/bioscope/images/actor/3.png" className="rounded d-block" alt="aligment" />
        </MDBCol>
        <MDBCol md="7">
        <div>
        <h2> Captain Marvel</h2>
        <br/><br/>
        <h6>Genre: <span>Action, Adventure</span></h6>
        <h6>Released: <span> 25 Decemeber 2018</span> </h6>
        </div>
        <div>
          <h3>Movie Plot</h3> 
          <p>
          Louis Creed, his wife Rachel and their two children Gage and Ellie move to a rural home where they are welcomed and enlightened about the eerie 'Pet Sematary' located nearby. After the tragedy of their cat being killed by a truck, Louis resorts to burying it in the mysterious pet cemetery, which is definitely not as it seems, as it proves to the Creeds that sometimes dead is better.
          The man was just the early Lorem ipsum
          </p>
        </div>
        
        </MDBCol>
        <MDBCol md="2">
      
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  
  </React.Fragment>
  )
  }
}

export default Details;