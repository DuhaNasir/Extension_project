
import Api from '../Api'; //importing the api instance created in Api.js
import { useState , useEffect } from 'react' //usestate to save the data and useeffect to fetch data when the component mounts


export default function useCards(){
const [data, setData] = useState([]);
const [error, setError] = useState(null);   
const [loading, setLoading] = useState(true);

// function to add new card
const addCard=async(formData)=>{
  try {
    setError(null);
await Api.post("/cards/create" , formData);
getData(); 

  }catch(error){
    setError(error.message);


  }finally{
    setLoading(false);
  }
};


// function to fetch data from api
const getData=async()=>{
  try {
    setError(null);
const response = await Api.get("/cards");
setData(response.data.data);


  }catch(error){
    setError(error.message);


  }finally{
    setLoading(false);
  }
};


//fetch data when the component starts
useEffect(() => {
getData();
},[]);

return { data, loading, error, addCard };}
