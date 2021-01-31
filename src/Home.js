import './Home.css';
import pic from './pic.jpg';
import Text from './text';
import Radio from './radio';
import Input from './Inputs';
import Btn from './Btn';


function Home(){
    return(
        <div className="Home">
                 <div className="Split1">
                     <header className="head">
                          <label id="l1">Lime</label>
                      </header>
                     <img src={pic}  width ="500px" height="600px" alt="logo"></img>
                      
                 </div>
                  <div  className="Split2">
                      <div className="Split3">
                            <div className="headr">
                               <h6>CREATE NEW ACCOUNT</h6>
                               <h1>Let's get started</h1>
                            </div>
                        
                         <Input/>
                         <Radio/>
                              <div className="para"><a href=""><h5>I already have an account.</h5></a></div><br></br>
                           <Btn/>
                           <Text/>
                      </div>
                  </div>    
                     
             
            </div>
    

    );
}
export default Home;