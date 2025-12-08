import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello from the index page</h1>
      <Link href="/contact">Go to Contact</Link>
    </div>
  );
}
