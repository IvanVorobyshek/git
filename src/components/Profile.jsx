import cl from './css/Profile.module.css';

const Profile = () => {
    return (
      <div className={cl.content}>
        <div>
          <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' />
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
            <div>
                new post
            </div>
            <div>
            <div>
                post 1
            </div>
            <div>
              post 2
            </div>
            <div>
                post 3
            </div>
            </div>
            </div>
      </div>
    );
}

export default Profile;