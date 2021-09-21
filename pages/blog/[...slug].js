import { useRouter } from "next/router";

function BlogPostPages() {
  const router = useRouter();
  console.log("Query", router.query);
  let data = router.query.slug;

  return (
    <>
      <h1>Blog Id {data}</h1>
    </>
  );
}

export default BlogPostPages;
