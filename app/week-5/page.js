export default function Page() {
    // Using Forms
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(quantity);
    }
    
    return (
        <main className="p-10 bg-green-950">
            <h1 className="text-4xl font-bold">Week 5 Class Demo</h1>
            <form onSubmit={handleSubmit}>
            
            <button type="submit"></button>
        </form>
        </main>
        ) 
        }