import back from '../assets/back.svg'
import { useNavigate } from "react-router-dom"


function Top({header,cardStatus,goBack}) {
  const navigate=useNavigate()
const backButton= <img onClick={()=>{navigate('/')}}src={back} alt=""  style={{backgroundColor:'black',marginRight:'10px'}}/>
  
  return <div className="top"> <h1> {goBack && backButton}{header}</h1> <p>{cardStatus}</p></div>
}

export default Top