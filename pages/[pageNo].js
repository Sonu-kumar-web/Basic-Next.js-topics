import { useRouter } from "next/router";

const PageNo = () => {
  const router = useRouter();
  const pageNumber = router.query.pageNo;
  return (
    <>
      <h2>PageNo {pageNumber}</h2>
    </>
  );
};

export default PageNo;
