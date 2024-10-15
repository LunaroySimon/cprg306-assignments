import NewItem from './new-item';

export default function Page() {
    // Displaying a list of items using props
    return (
        <main className="flex justify-center p-10 w-full">
            <NewItem/>     
        </main>
    );
 }