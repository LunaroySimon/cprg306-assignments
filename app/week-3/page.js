import ItemList from './item-list';

export default function Page() {
    // Displaying a list of items using props
    return (
        <main className="p-10 bg-green-950">
            <h1 className="text-4xl font-bold">Shopping List</h1>
            <ItemList/>
        </main>
    );
 }

