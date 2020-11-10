import cl from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add new post</button>
      </div>
      <div className={cl.posts}>
        <Post message="WOW!!!" vlike="0" />
        <Post message="Who did this?" vlike="2" />
        <Post message="That is amazing!!!" vlike="3" />
        <Post message="WOW!!!" vlike="71" />
      </div>
    </div>
  );
};

export default MyPosts;
