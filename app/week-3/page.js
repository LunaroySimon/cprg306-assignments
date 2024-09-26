import ItemList from './item-list';

export default function Page() {
    // Displaying a list of items using props
    return (
        <main className='m-4'>
            <h1 className='text-3xl font-bold'>Shopping List</h1>
            <ItemList/>
        </main>
    );
 }

