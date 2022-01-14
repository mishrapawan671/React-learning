import Button from "./Button";


const Form =()=>
{
    return(
         <div  className="input-form">
           <label>Enter City Name</label>
           <input type="text" name="city" /> 
           <Button/>

         </div>
    );
};
export default Form;