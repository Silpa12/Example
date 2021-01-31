
import './Inputs.css';


function Input() {
    return(
        <div className="f1">
        <div className="form">
                    <input type="email" 
                       id="email" 
                       placeholder="Enter email"/></div>
                   <br></br>

                <div className="form">
                    <input type="password" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                <div className="form">
                    <input type="password" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                    />
                </div>
                </div>
    );
    
}
export default Input;