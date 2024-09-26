export default function Item({name, quantity, category}) {

    return (
        // Using props to pass the data to the component
        <div className="p-4">
            <ul>
                <li ><span className="font-bold">Item:</span> <span>{name}</span> </li>
                <li><span className="font-bold">Quantity:</span> {quantity}</li>
                <li><span className="font-bold">Category:</span> {category}</li>
            </ul>
        </div>
    );
 }