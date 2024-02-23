import { useNavigate } from "react-router-dom";
import { MDBBtn } from 'mdb-react-ui-kit';
const Comp404 = () => {
    const navigate = useNavigate()
  return (
    <div className='Comp404' style={{display:'flex',objectFit:'cover'}}>


     <img  src="https://media.licdn.com/dms/image/C5612AQEPYce5KpNLyg/article-cover_image-shrink_720_1280/0/1551659700811?e=2147483647&v=beta&t=O9mBMiF-V12jCRJwaBNDWLKNL8cku2QSoCXtKP3vCHg"/>


     <MDBBtn className='me-1' color='warning' onClick={()=>{
        navigate('/')
     }} >
     Back To Home
      </MDBBtn>
      <MDBBtn className='me-1' color='warning' onClick={()=>{
        navigate(-1)
     }} >
Back      </MDBBtn>
   
    </div>
  )
};

export default Comp404