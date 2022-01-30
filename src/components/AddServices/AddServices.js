import React from "react";
import axios from 'axios';
import { useForm } from "react-hook-form";

import useFirebase from "../../Hook/useFirebase";

const AddServices = () => {
  const { user } = useFirebase();
  const { register, handleSubmit, reset} = useForm();
  const onSubmit = data => {
      
    console.log(data);

    axios.post('https://nameless-sea-23305.herokuapp.com/services',data)
        .then(res => {
            if(res.data.insertedId){
                alert('Than you , added successfully');
                reset();
            }
            console.log(res);
        })
}
  return (
    <div className="add-tour">
            <h1 className="text-warning my-5">Plase add Your choice  </h1>


            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("Name", )} placeholder="Name" /> <br />
            <input type="number" {...register("price")} placeholder="car price" /> <br />

            <textarea {...register("description", )} placeholder="description" /> <br />
             
            <input {...register("image")} placeholder="Image URL"/> <br />
            <input type="submit" />
            </form>
           
           
     <br />



    
        </div>
  );
};

export default AddServices;
