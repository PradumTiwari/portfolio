
import axios from 'axios';

async function getUserDetails(){
  await new Promise(resolve=>setTimeout(resolve,5000));
    const response={"FirstName":"Pradum","SecondName":"Tiwari","email":"satendarpradum@gmail.com"}
    return response;
}

export default async function Home() {
  
  const userData = await getUserDetails();
  const res = await fetch('http://localhost:3000/api/hello');
  const data=await res.json();

  return (
   <div></div>
  );
}