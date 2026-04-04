
import { useState , useEffect } from 'react' //usestate to save the data and useeffect to fetch data when the component mounts
import axios from 'axios'; //axios to make http requests
import Card from './components/Card'; 


function App() {

const [data, setData] = useState([]);
const [error, setError] = useState(null);   
const [loading, setLoading] = useState(true);

//إعداد API
const api= axios.create({
  baseURL:'https://base-tamimha.techwin.sa/api'
})


// function to fetch data from api
const getData=async()=>{
  try {
    setError(null);
const response = await api.get("/cards");
setData(response.data.data);


  }catch(error){
    setError(error.message);


  }finally{
    setLoading(false);
  }
};



//fetch data when the component mounts
useEffect(() => {
getData();
},[]);

if (loading) {
    return <p className="text-center font-bold mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center font-bold mt-10 text-red-500">{error}</p>;
  }


  return (
    
<div className="" >


  {/* header*/}
<div className=" flex justify-between   bg-white  rounded-xl shadow-md my-8 mx-5 md:mx-15 border border-[#ededed] p-2 h-12" > 
 
<img src="/images/logo.svg" alt="logo" className=" w-40 h-30 pb-22 "/>

<button className="   bg-[#ededed] rounded-sm px-2 py-1 w-8 h-8   hover:bg-[#c8c6c6] ">
<img src="/images/icon-moon.svg" alt="icon-moon" className="size-6 "></img>
</button>
</div>


  {/* Extensions list ,all,active,inactive*/}
<div className="flex justify-between flex-col items-center  md:flex-row  md:pr-16" >

<p className=" text-3xl text-[#091540]  font-bold text-Sans px-18 py-3 md:py-10 
"> Extensions List </p>

<div className=" flex  gap-3 m-3  ">

{/*All */}
<button className=" bg-[#c7221a] rounded-full px-4 py-2 border border-[#e0dede] text-white  " >All</button>




{/*Active */}

<button className=" bg-white rounded-full px-3 text-[#091540] border border-[#e0dede] hover:bg-[#c7221a] hover:text-white">Active</button>



{/*Inactive */}
<button className=" bg-white rounded-full px-3 text-[#091540] border border-[#e0dede]  hover:bg-[#c7221a] hover:text-white "> Inactive</button>



</div>

</div>



<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  md:gap-4 px-3 pb-16 " >
{/* cards*/}
{data.map((item) => (
    <Card
      key={item.id}
      title={item.title}
      description={item.description}
      icon={item.icon}
    />


))}


</div>

</div>
    
  )
}

export default App