import { useRouter } from "next/router";
import Link from "next/link";
import { route } from "next/dist/server/router";

const PageNo = () => {
  const router = useRouter();
  const pageNumber = router.query.pageNo;
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        <a onClick={() => router.push("/")}>Home</a>
      </nav>
      <h2>PageNo {pageNumber}</h2>
    </>
  );
};

export default PageNo;
