import Link from "next/link";

export default function Home() {
  return (<>
  <h1>i am Home Page</h1>

    <Link href={"/person"}><h1>Goto Person Page</h1></Link>
  </>)
}
