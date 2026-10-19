export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a194e] text-white">
      <nav className="flex justify-between p-6 bg-[#0a194e]">
        <div className="font-black text-2xl">SKYNET<br/>TRANSPORT KENYA</div>
        <div className="flex gap-6 text-sm">Home My Bookings Routes Help Login <span className="border border-green-500 px-4 py-1 rounded-full">Sign Up</span></div>
      </nav>
      <div className="grid md:grid-cols-2 gap-8 p-8">
        <div>
          <h1 className="text-6xl font-black">Discover • Book Travel</h1>
          <p className="mt-4 text-gray-300">Kenya's trusted bus booking. M-Pesa payments. Get unique code SKY-XXXX to board.</p>
          <button className="bg-green-500 mt-6 px-8 py-3 rounded-xl font-bold">Find Bus →</button>
        </div>
        <div className="bg-white text-black rounded-2xl p-6">
          <h2 className="font-bold text-xl">Search for your bus journey</h2>
          <form action="/search" className="mt-4 grid grid-cols-2 gap-4">
            <div><label className="text-xs">FROM</label><input name="from" defaultValue="Nairobi" className="w-full border p-3 rounded-lg mt-1"/></div>
            <div><label className="text-xs">TO</label><input name="to" defaultValue="Mombasa" className="w-full border p-3 rounded-lg mt-1"/></div>
            <div><label className="text-xs">DATE</label><input type="date" name="date" className="w-full border p-3 rounded-lg mt-1"/></div>
            <div><label className="text-xs">PASSENGERS</label><input name="p" defaultValue="1 Passenger" className="w-full border p-3 rounded-lg mt-1"/></div>
            <button className="col-span-2 bg-green-600 text-white py-3 rounded-lg mt-2 font-bold">Q Find Bus</button>
          </form>
        </div>
      </div>
    </main>
  )
}
