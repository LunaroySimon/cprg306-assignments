import Link from 'next/link';

export default function Page() {
    return (
      <main className="m-10">
        <h1 className="text-4xl m-10">CPRG 306: Web Development 2 - Assignments</h1>
        <p className="text-2xl p-2 hover:text-cyan-600"><Link href="/week-2">Week 2 Assignment Link</Link></p>
        <p className="text-2xl p-2 hover:text-cyan-600"><Link href="/week-3">Week 3 Assignment Link</Link></p>
        <p className="text-2xl p-2 hover:text-cyan-600"><Link href="/week-4">Week 4 Assignment Link</Link></p>
        <p className="text-2xl p-2 hover:text-cyan-600"><Link href="/week-5">Week 5 Assignment Link</Link></p>
        <p className="text-2xl p-2 hover:text-cyan-600"><Link href="/week-6">Week 6 Assignment Link</Link></p>
      </main>
    );
  }