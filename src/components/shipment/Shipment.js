import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css'

const Shipment = () => {
    
    const [loggedIn , setLoggedIn] = useContext(UserContext)
    console.log(loggedIn);
    
  
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
        
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
  
    
      
     
      <input name="name" defaultValue={loggedIn.name} ref={register({ required: true })}  placeholder="enter your name" />
      {errors.name && <span className="error">Name is required</span>}
      
      
      <input name="email" defaultValue={loggedIn.email} ref={register({ required: true })}  placeholder="enter your  email"  />
      {errors.email && <span className="error">email is required</span>}

      
      <input name="address" ref={register({ required: true })}  placeholder="enter your address"  />
      {errors.address && <span className="error">address is required</span>}

      <input name="phone" ref={register({ required: true })}  placeholder="enter your phone "  />
      {errors.phone && <span className="error">phone is required</span>}

      <input type="submit"/>
    </form>
        </div>
    );
};

export default Shipment;