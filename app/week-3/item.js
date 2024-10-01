export default function Item({name, quantity, category}) {

    return (
        // Using props to pass the data to the component
        <div className="p-4 m-4 bg-green-800 w-3/4">
            <ul>
                <li className=" text-2xl"><span className="font-bold">Item:</span> {name}</li>
                <li className=" text-2xl"><span className="font-bold">Quantity:</span> {quantity}</li>
                <li className=" text-2xl"><span className="font-bold">Category:</span> {category}</li>
            </ul>
        </div>
    );
 }