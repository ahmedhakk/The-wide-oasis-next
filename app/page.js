import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Page() {
  return (
    <div>
      <h1>The Wild Oasis. Wilcome to paradise.</h1>

      {/* <a href="/cabins">Explore luxury cabins</a> */}
      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  );
}
