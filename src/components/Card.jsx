
export default function Card({card, deleteCard }) {
  return (

<div className="bg-white rounded-2xl  h-52 border border-[#e0dede] flex flex-col">

{/* div for img and text to align items to the start*/}
<div className="flex justify-start ">
<img  src={card.icon}   className=" mt-2 ml-4 size-15 rounded-xl"/>
<div className="flex flex-col "> 
<h1 className="font-bold text-1xl text-[#091540] mt-4 ml-3  ">{card.title}</h1>
<p  className=" text-[#7c7b7b]  text-sm ml-3 "  >{card.description}</p>
</div>
</div>


<div className="flex justify-between gap-4 px-3 mt-auto pb-4 ">
<button className="bg-white rounded-full text-[#091540] text-sm border border-[#e0dede] h-8 w-20  hover:bg-[#c7221a] hover:text-white " onClick={()=>deleteCard(card.id)}> Remove </button>
{/*Toggle buttom */}
   <div className="flex flex-wrap items-center justify-center gap-12 ">
            <label className="relative inline-flex cursor-pointer items-center gap-3 text-gray-900">
                <input type="checkbox" className="peer sr-only" />
                <div className="peer h-7 w-12 rounded-full bg-slate-300 ring-offset-1 transition-colors duration-200 peer-checked:bg-[#c7221a] "></div>
                <span className="dot absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
            </label>
            
        </div>

</div>


</div>)}