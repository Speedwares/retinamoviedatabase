import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";

const ReviewJumbotron = () => {
  return (
    <div>
    <MDBJumbotron fluid className="center-block">
      <MDBContainer>
        <h4 className="display-4"> Rotten Tomatoes </h4>
        <p className="lead">This is a good type of review though. Just saying that occupies the entire horizontal space of its parent.</p>
      </MDBContainer>
    </MDBJumbotron>
    <MDBJumbotron fluid className="center-block">
      <MDBContainer>
        <h4 className="display-4"> Rotten Tomatoes </h4>
        <p className="lead">This is a good type of review though. Just saying that occupies the entire horizontal space of its parent.</p>
      </MDBContainer>
    </MDBJumbotron>
        <MDBJumbotron fluid className="center-block">
      <MDBContainer>
        <h4 className="display-4"> Rotten Tomatoes </h4>
        <p className="lead">This is a good type of review though. Just saying that occupies the entire horizontal space of its parent.</p>
      </MDBContainer>
    </MDBJumbotron>
    </div>
  )
}

export default ReviewJumbotron;