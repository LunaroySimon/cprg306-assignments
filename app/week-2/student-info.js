import Link from 'next/link';

export default function StudentInfo() {
    return (
      <div>
        <h1>Student Information:</h1>
        <p>Student Name: Simon Luna</p>
        <Link href={"https://github.com/LunaroySimon"}>Simon's Github Link</Link>
      </div>
    );
  }