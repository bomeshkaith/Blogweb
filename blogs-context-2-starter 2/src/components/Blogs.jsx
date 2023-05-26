import "./Blogs.css";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";

function Blogs() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className=" flex flex-col gap-y-10 my-4 px-8 py-2 ">
      {loading ? (
        <div className="   text-blue-600 min-h-[80vh] w-full flex justify-center items-center">
          <p className="  text-center font-bold text-3xl">Loading</p>
        </div>
      ) : posts.length === 0 ? (
        <div className=" min-h-[80vh] w-full flex justify-center items-center">
          <p className="  text-center font-bold text-3xl">No Blogs Found !</p>
        </div>
      ) : (
        posts.map((post) => <BlogDetails key={post.id} post={post} />)
      )}
    </div>
  );
}
export default Blogs;
