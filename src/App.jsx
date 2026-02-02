
function App() {

  return (
    
<div className=" " > 


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



<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  md:gap-4 px-11 pb-16 " >
{/* cards*/}

{/*card 1 */}

<div className="bg-white rounded-2xl  h-52 border border-[#e0dede] flex flex-col">

{/* div for img and text to align items to the start*/}
<div className="flex justify-start ">
<img  src="/images/logo-devlens.svg"   className=" mt-2 ml-4"/>
<div className="flex flex-col "> 
<h1 className="font-bold text-1xl text-[#091540] mt-4 ml-3  ">DevLens</h1>
<p  className=" text-[#7c7b7b]  text-sm ml-3 "  >Quickly inspect page layouts and visualize element boundaries.</p>
</div>
</div>



<div className="flex justify-between gap-4 px-3 mt-auto pb-4 ">
<button className="bg-white rounded-full text-[#091540] text-sm border border-[#e0dede] h-8 w-20  hover:bg-[#c7221a] hover:text-white "> Remove </button>
{/*Toggle buttom */}
   <div className="flex flex-wrap items-center justify-center gap-12 ">
            <label className="relative inline-flex cursor-pointer items-center gap-3 text-gray-900">
                <input type="checkbox" className="peer sr-only" />
                <div className="peer h-7 w-12 rounded-full bg-slate-300 ring-offset-1 transition-colors duration-200 peer-checked:bg-[#c7221a] "></div>
                <span className="dot absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
            </label>
            
        </div>

</div>


</div>




{/*card 2 */}
<div className="bg-white rounded-2xl h-52 border border-[#e0dede] flex flex-col ">

{/* div for img and text to align items to the start*/}
<div className="flex justify-start">
<img  src="/images/logo-style-spy.svg"   className=" mt-2 ml-4"/>
<div className="flex flex-col gap-2"> 
<h1 className="font-bold text-1xl text-[#091540] mt-4 ml-3  ">StyleSpy</h1>
<p  className=" text-[#7c7b7b]  text-sm ml-3 "  >Instantly analyze and copy CSS from any webpage element.</p>
</div>
</div>


{/* buttoms */}
<div className="flex justify-between gap-4 px-3  mt-auto pb-4">
 {/* Remove buttom */}
<button className="bg-white rounded-full text-[#091540] text-sm border border-[#e0dede] h-8 w-20  hover:bg-[#c7221a] hover:text-white "> Remove </button>
{/*Toggle buttom */}
   <div className="flex flex-wrap items-center justify-center gap-12">
            <label className="relative inline-flex cursor-pointer items-center gap-3 text-gray-900">
                <input type="checkbox" className="peer sr-only" />
                <div className="peer h-7 w-12 rounded-full bg-slate-300 ring-offset-1 transition-colors duration-200 peer-checked:bg-[#c7221a] "></div>
                <span className="dot absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
            </label>
            
        </div>

</div>


</div>




{/*card 3 */}
<div className="bg-white rounded-2xl  h-52 border border-[#e0dede] flex flex-col  ">
    
{/* div for img and text to align items to the start*/}
<div className="flex justify-start">
<img  src="/images/logo-speed-boost.svg"   className=" mt-2 ml-4"/>
<div className="flex flex-col gap-2"> 
<h1 className="font-bold text-1xl text-[#091540] mt-4 ml-3  ">SpeedBoost</h1>
<p  className=" text-[#7c7b7b]  text-sm ml-3 "  >Optimizes browser resource usage to accelerate page loading.</p>
</div>
</div>


{/* buttoms */}
<div className="flex justify-between gap-4 px-3   mt-auto pb-4">
 {/* Remove buttom */}
<button className="bg-white rounded-full text-[#091540] text-sm border border-[#e0dede] h-8 w-20  hover:bg-[#c7221a] hover:text-white "> Remove </button>
{/*Toggle buttom */}
   <div className="flex flex-wrap items-center justify-center gap-12">
            <label className="relative inline-flex cursor-pointer items-center gap-3 text-gray-900">
                <input type="checkbox" className="peer sr-only" />
                <div className="peer h-7 w-12 rounded-full bg-slate-300 ring-offset-1 transition-colors duration-200 peer-checked:bg-[#c7221a] "></div>
                <span className="dot absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
            </label>
        </div>

</div>


</div>


{/*card 4 */}
<div className="bg-white rounded-2xl  h-52 border border-[#e0dede] flex flex-col ">

{/* div for img and text to align items to the start*/}
<div className="flex justify-start">
<img  src="/images/logo-json-wizard.svg"   className=" mt-2 ml-4"/>

<div className="flex flex-col gap-2"> 
<h1 className="font-bold text-1xl text-[#091540] mt-4 ml-3  ">JSONWizard</h1>
<p  className=" text-[#7c7b7b]  text-sm ml-3 "  >Quickly inspect page layouts and visualize element boundaries.</p>

</div>

</div>


{/* buttoms */}
<div className="flex justify-between gap-4 px-3  mt-auto pb-4">
 {/* Remove buttom */}
<button className="bg-white rounded-full text-[#091540] text-sm border border-[#e0dede] h-8 w-20  hover:bg-[#c7221a] hover:text-white "> Remove </button>
{/*Toggle buttom */}
   <div className="flex flex-wrap items-center justify-center gap-12">
            <label className="relative inline-flex cursor-pointer items-center gap-3 text-gray-900">
                <input type="checkbox" className="peer sr-only" />
                <div className="peer h-7 w-12 rounded-full bg-slate-300 ring-offset-1 transition-colors duration-200 peer-checked:bg-[#c7221a] "></div>
                <span className="dot absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
            </label>
            
        </div>

</div>


</div>

{/*card 5 */}
<div className="bg-white rounded-2xl  h-52 border border-[#e0dede] flex flex-col">

{/* div for img and text to align items to the start*/}
<div className="flex justify-start">
<img  src="/images/logo-tab-master-pro.svg"   className=" mt-2 ml-4"/>

<div className="flex flex-col gap-2"> 
<h1 className="font-bold text-1xl text-[#091540] mt-4 ml-3  ">TabMaster Pro</h1>
<p  className=" text-[#7c7b7b]  text-sm ml-3 "  >Organizes browser tabs into groups and sessions.</p>

</div>

</div>


{/* buttoms */}
<div className="flex justify-between gap-4 px-3  mt-auto pb-4">
 {/* Remove buttom */}
<button className="bg-white rounded-full text-[#091540] text-sm border border-[#e0dede] h-8 w-20  hover:bg-[#c7221a] hover:text-white "> Remove </button>
{/*Toggle buttom */}
   <div className="flex flex-wrap items-center justify-center gap-12">
            <label className="relative inline-flex cursor-pointer items-center gap-3 text-gray-900">
                <input type="checkbox" className="peer sr-only" />
                <div className="peer h-7 w-12 rounded-full bg-slate-300 ring-offset-1 transition-colors duration-200 peer-checked:bg-[#c7221a] "></div>
                <span className="dot absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
            </label>
            
        </div>

</div>


</div>




{/*card 6 */}
<div className="bg-white rounded-2xl h-52 border border-[#e0dede] flex flex-col">

{/* div for img and text to align items to the start*/}
<div className="flex justify-start">
<img  src="/images/logo-viewport-buddy.svg"   className=" mt-2 ml-4"/>

<div className="flex flex-col gap-2"> 
<h1 className="font-bold text-1xl text-[#091540] mt-4 ml-3  ">ViewportBuddy</h1>
<p  className=" text-[#7c7b7b]  text-sm ml-3 "  >Simulates various screen resolutions directly within the browser.</p>

</div>

</div>



{/* buttoms */}
<div className="flex justify-between gap-4 px-3   mt-auto pb-4">
 {/* Remove buttom */}
<button className="bg-white rounded-full text-[#091540] text-sm border border-[#e0dede] h-8 w-20  hover:bg-[#c7221a] hover:text-white "> Remove </button>
{/*Toggle buttom */}
   <div className="flex flex-wrap items-center justify-center gap-12">
            <label className="relative inline-flex cursor-pointer items-center gap-3 text-gray-900">
                <input type="checkbox" className="peer sr-only" />
                <div className="peer h-7 w-12 rounded-full bg-slate-300 ring-offset-1 transition-colors duration-200 peer-checked:bg-[#c7221a] "></div>
                <span className="dot absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
            </label>
            
        </div>

</div>


</div>





{/*card 7 */}
<div className="bg-white rounded-2xl  h-52 border border-[#e0dede] flex flex-col">

{/* div for img and text to align items to the start*/}
<div className="flex justify-start">
<img  src="/images/logo-markup-notes.svg"   className=" mt-2 ml-4"/>

<div className="flex flex-col gap-2"> 
<h1 className="font-bold text-1xl text-[#091540] mt-4 ml-3  ">Markup Notes</h1>
<p  className=" text-[#7c7b7b]  text-sm ml-3 "  >Enables annotation and notes directly onto webpages for collaborative debugging.</p>

</div>

</div>



{/* buttoms */}
<div className="flex justify-between gap-4 px-3 mt-auto pb-4">
 {/* Remove buttom */}
<button className="bg-white rounded-full text-[#091540] text-sm border border-[#e0dede] h-8 w-20  hover:bg-[#c7221a] hover:text-white "> Remove </button>
{/*Toggle buttom */}
   <div className="flex flex-wrap items-center justify-center gap-12">
            <label className="relative inline-flex cursor-pointer items-center gap-3 text-gray-900">
                <input type="checkbox" className="peer sr-only" />
                <div className="peer h-7 w-12 rounded-full bg-slate-300 ring-offset-1 transition-colors duration-200 peer-checked:bg-[#c7221a] "></div>
                <span className="dot absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
            </label>
            
        </div>

</div>



</div>


{/*card 8 */}
<div className="bg-white rounded-2xl  h-52  border border-[#e0dede] flex flex-col">

{/* div for img and text to align items to the start*/}
<div className="flex justify-start">
<img  src="/images/logo-grid-guides.svg"   className=" mt-2 ml-4"/>

<div className="flex flex-col gap-2"> 
<h1 className="font-bold text-1xl text-[#091540] mt-4 ml-3  ">GridGuides</h1>
<p  className=" text-[#7c7b7b]  text-sm ml-3 "  >Overlay customizable grids and alignment guides on any webpage.</p>

</div>

</div>


{/* buttoms */}
<div className="flex justify-between gap-4 px-3 mt-auto pb-4">
 {/* Remove buttom */}
<button className="bg-white rounded-full text-[#091540] text-sm border border-[#e0dede] h-8 w-20  hover:bg-[#c7221a] hover:text-white "> Remove </button>
{/*Toggle buttom */}
   <div className="flex flex-wrap items-center justify-center gap-12">
            <label className="relative inline-flex cursor-pointer items-center gap-3 text-gray-900">
                <input type="checkbox" className="peer sr-only" />
                <div className="peer h-7 w-12 rounded-full bg-slate-300 ring-offset-1 transition-colors duration-200 peer-checked:bg-[#c7221a] "></div>
                <span className="dot absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
            </label>
            
        </div>

</div>



</div>




{/*card 9 */}
<div className="bg-white rounded-2xl  h-52 border border-[#e0dede] flex flex-col ">

{/* div for img and text to align items to the start*/}
<div className="flex justify-start">
<img  src="/images/logo-palette-picker.svg"   className=" mt-2 ml-4"/>

<div className="flex flex-col gap-2"> 
<h1 className="font-bold text-1xl text-[#091540] mt-4 ml-3  ">Palette Picker</h1>
<p  className=" text-[#7c7b7b]  text-sm ml-3 "  >Instantly extracts color palettes from any webpage.</p>

</div>

</div>



{/* buttoms */}
<div className="flex justify-between gap-4 px-3 mt-auto pb-4">
 {/* Remove buttom */}
<button className="bg-white rounded-full text-[#091540] text-sm border border-[#e0dede] h-8 w-20  hover:bg-[#c7221a] hover:text-white "> Remove </button>
{/*Toggle buttom */}
   <div className="flex flex-wrap items-center justify-center gap-12">
            <label className="relative inline-flex cursor-pointer items-center gap-3 text-gray-900">
                <input type="checkbox" className="peer sr-only" />
                <div className="peer h-7 w-12 rounded-full bg-slate-300 ring-offset-1 transition-colors duration-200 peer-checked:bg-[#c7221a] "></div>
                <span className="dot absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
            </label>
            
        </div>

</div>



</div>

{/*card 10 */}
{/*background */}
<div className="bg-white rounded-2xl  h-52 border border-[#e0dede] flex flex-col ">

{/* div for img and text to align items to the start*/}
<div className="flex justify-start">
<img  src="/images/logo-link-checker.svg"   className=" mt-2 ml-4"/>
<div className="flex flex-col gap-2"> 
<h1 className="font-bold text-1xl text-[#091540] mt-4 ml-3  ">LinkChecker</h1>
<p  className=" text-[#7c7b7b]  text-sm ml-3 "  >Scans and highlights broken links on any page.</p>
</div>
</div>


{/* buttoms */}
<div className="flex justify-between gap-4 px-3  mt-auto pb-4">
 {/* Remove buttom */}
<button className="bg-white rounded-full text-[#091540] text-sm border border-[#e0dede] h-8 w-20  hover:bg-[#c7221a] hover:text-white "> Remove </button>
{/*Toggle buttom */}
   <div className="flex flex-wrap items-center justify-center gap-12">
            <label className="relative inline-flex cursor-pointer items-center gap-3 text-gray-900">
                <input type="checkbox" className="peer sr-only" />
                <div className="peer h-7 w-12 rounded-full bg-slate-300 ring-offset-1 transition-colors duration-200 peer-checked:bg-[#c7221a] "></div>
                <span className="dot absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
            </label>
            
        </div>

</div>



</div>


{/*card 11 */}
{/*background */}
<div className="bg-white rounded-2xl  h-52 border border-[#e0dede] flex flex-col ">

{/* div for img and text to align items to the start*/}
<div className="flex justify-start">
<img  src="/images/logo-dom-snapshot.svg"   className=" mt-2 ml-4"/>
<div className="flex flex-col gap-2"> 
<h1 className="font-bold text-1xl text-[#091540] mt-4 ml-3  ">DOM Snapshot</h1>
<p  className=" text-[#7c7b7b]  text-sm ml-3 "  >Capture and export DOM structures quickly.</p>
</div>
</div>


{/* buttoms */}
<div className="flex justify-between gap-4 px-3  mt-auto pb-4">
 {/* Remove buttom */}
<button className="bg-white rounded-full text-[#091540] text-sm border border-[#e0dede] h-8 w-20  hover:bg-[#c7221a] hover:text-white "> Remove </button>
{/*Toggle buttom */}
   <div className="flex flex-wrap items-center justify-center gap-12">
            <label className="relative inline-flex cursor-pointer items-center gap-3 text-gray-900">
                <input type="checkbox" className="peer sr-only" />
                <div className="peer h-7 w-12 rounded-full bg-slate-300 ring-offset-1 transition-colors duration-200 peer-checked:bg-[#c7221a] "></div>
                <span className="dot absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
            </label>
            
        </div>

</div>



</div>




{/*card 12 */}
{/*background */}
<div className="bg-white rounded-2xl  h-52 border border-[#e0dede] flex flex-col">

{/* div for img and text to align items to the start*/}
<div className="flex justify-start">
<img  src="/images/logo-console-plus.svg"   className=" mt-2 ml-4"/>
<div className="flex flex-col gap-2"> 
<h1 className="font-bold text-1xl text-[#091540] mt-4 ml-3  ">ConsolePlus</h1>
<p  className=" text-[#7c7b7b]  text-sm ml-3 "  >Enhanced developer console with advanced filtering and logging.</p>
</div>
</div>


{/* buttoms */}
<div className="flex justify-between gap-4 px-3  mt-auto pb-4">
 {/* Remove buttom */}
<button className="bg-white rounded-full text-[#091540] text-sm border border-[#e0dede] h-8 w-20  hover:bg-[#c7221a] hover:text-white "> Remove </button>
{/*Toggle buttom */}
   <div className="flex flex-wrap items-center justify-center gap-12">
            <label className="relative inline-flex cursor-pointer items-center gap-3 text-gray-900">
                <input type="checkbox" className="peer sr-only" />
                <div className="peer h-7 w-12 rounded-full bg-slate-300 ring-offset-1 transition-colors duration-200 peer-checked:bg-[#c7221a] "></div>
                <span className="dot absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
            </label>
            
        </div>

</div>


</div>




  
</div>

</div>
    
  )
}

export default App