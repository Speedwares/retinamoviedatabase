import React, {Component} from 'react';
import { MDBCard, MDBCardImage, MDBContainer, 
MDBCol, MDBRow, MDBIcon} from 'mdbreact';
import './details.css'
import VideoCarousel from './../../components/VideoCarousel';
import CastCarousel from './../../components/CastCarousel'
import ReviewJumbotron from './../../components/ReviewJumbotron'
import Footer from './../../components/Footer/Footer'

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
          </p>
        </div>
        
        </MDBCol>
        <MDBCol md="2">
        <MDBIcon fab icon="gratipay" />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <div className="container">
          <h2> Videos </h2>
        </div>
      <div className="container">
        <VideoCarousel/>
      </div>
      </MDBRow>

      <MDBRow>
        <div className="container">
          <h2> Cast & Crew </h2>
        </div>
      <div className="container">
        <CastCarousel/>
      </div>
      </MDBRow>
      <MDBRow>
        <div className="container">
          <h2> Reviews </h2>
        </div>
      <div className="containerrev">
        <ReviewJumbotron/>
      </div>
      </MDBRow>
    </MDBContainer>

    <Footer/>
  </React.Fragment>
  )
  }
}

export default Details;