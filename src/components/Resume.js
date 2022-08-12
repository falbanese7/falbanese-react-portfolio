import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import resume from '../assets/resume/Francesco Developer Resume.pdf';

function Resume(props) {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <embed id="Resume" src={resume} width="100%" height="750px" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Resume;
