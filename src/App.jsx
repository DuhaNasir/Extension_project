import AddCardForm from './components/AddCardForm';
import Card from './components/Card'; 
import useCards from './hooks/useCards';
import Header from './components/Header'; 
function App() {

const { data, loading, error, addCard } = useCards();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    
<div className="" >


  {/* header*/}
  <Header />


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



<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  md:gap-4 px-6 pb-16 " >
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

<AddCardForm onAddCard={addCard} />
</div>
    
  )
}

export default App