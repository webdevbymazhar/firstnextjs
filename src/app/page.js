import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1>Move to Dashboard</h1>
      <Link href={"/admin"}>Dashboard</Link>
    </div>
  );
}
