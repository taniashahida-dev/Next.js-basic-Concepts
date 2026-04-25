import Image from "next/image";


const Models =async () => {
const res =await fetch('http://localhost:8000/models',{cache:'no-store'})
const data = await res.json()
console.log(data)
    return (
        <div>
            <h1 className="text-6xl font-semibold text-center my-10">Models Data</h1>
           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {
                data.map(model=> <div key={model.id} className="border rounded-lg p-5 ">
                    <h1>
                        {model.title}
                    </h1>
               
                    <p>{model.description}</p>
                    <p className="text-green-600 text-2xl">{model.price}</p>
                </div> )
            }
           </div>
        </div>
    );
};

export default Models;