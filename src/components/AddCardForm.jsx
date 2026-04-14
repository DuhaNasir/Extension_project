import { useState } from 'react' //usestate to save the data and useeffect to fetch data when the component mounts

export default function AddCardForm({onAddCard}) {
  
//state to save the form data
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [icon, setIcon   ] = useState(null);   

//
const handleSubmit = async (e) => {
e.preventDefault(); //تمنع الصفحه من انها تتحمل كلها 


//formdata to send the data to the api
const formData = new FormData(); //obj
//there are three attributes in the form data title, description and icon
formData.append('title', title); 
formData.append('description', description);
formData.append('icon', icon);

await onAddCard(formData); //send the data to the parent component to add the card

//clear the form after submit
setTitle('');       
setDescription(''); 
setIcon(null);     
};
  
return (


<form onSubmit={handleSubmit} className="bg-white rounded-2xl  w-min border border-[#e0dede] flex flex-col p-4 gap-4 mx-5 md:mx-15 mb-10  ">
    <h1 className='font-bold text-center py-3 '>Add New Card</h1>
<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className=' px-3 border border-[#e0dede] rounded-xl hover:border-[#c7221a]' />
<textarea rows="5" cols="5" value={description} onChange={(e) => setDescription(e.target.value)}  placeholder="Description" className='p-3 border border-[#e0dede] rounded-xl hover:border-[#c7221a]'></textarea>
<input type="file" onChange={(e) => setIcon(e.target.files[0])}   className='px-3  border border-[#e0dede] rounded-xl  hover:border-[#c7221a]' />
<input type="submit" value="Add Card" className=" bg-[#c7221a] rounded-full px-3 text-white border border-[#c7221a]  hover:bg-white hover:text-[#091540]   flex justify-center items-center" />
</form>




  )}