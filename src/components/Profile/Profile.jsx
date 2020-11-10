import MyPosts from "./Myposts/MyPosts";
import cl from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={cl.content}>
      <div>
        <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
