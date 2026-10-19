export default function Home(){
 return(
  <div className="min-h-screen bg-[#0a0e3f] text-white">
   <div className="p-6">
    <h1 className="text-5xl font-black">SKYNET<br/><span className="text-green-500">TRANSPORT</span> KENYA</h1>
    <p className="mt-4 text-gray-300">Book online. Get SKY-XXXX code. Board directly. No queue.</p>
    <div className="bg-white text-black rounded-3xl p-6 mt-8">
     <form action="/search">
      <label className="text-xs font-bold">FROM</label>
      <input name="from" placeholder="Kakamega" className="w-full border p-3 rounded-xl mt-1" required/>
      <label className="text-xs font-bold mt-4 block">TO</label>
      <input name="to" placeholder="Nairobi" className="w-full border p-3 rounded-xl mt-1" required/>
      <button className="w-full bg-green-600 text-white p-4 rounded-xl mt-6 font-bold">Find Bus - Get SKY Code</button>
     </form>
    </div>
   </div>
  </div>
 )
}
