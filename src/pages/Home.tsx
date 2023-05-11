import JumboTron from "../components/pages/home/JumboTron";
import NewProducts from "../components/pages/store/NewProducts";
import WhyUs from "../components/pages/home/WhyUs";
import BlogPosts from "../components/pages/blog/BlogPosts";

export default function Home() {
  return (
    <>
      <JumboTron />

      <NewProducts />

      <WhyUs />

      <BlogPosts />
    </>
  );
}
