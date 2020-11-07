import cl from './css/Navbar.module.css';

const Navbar = () => {
    return (
      <nav className={cl.nav}>
        <div className={`${cl.item} ${cl.active}`}>
          <a href="#a">Profile</a>
        </div>
        <div className={cl.item}>
          <a href="#a">Messages</a>
        </div>
        <div className={cl.item}>
          <a href="#a">News</a>
        </div>
        <div className={cl.item}>
          <a href="#a">Music</a>
        </div>
        <div className={cl.item}>
          <a href="#a">Settings</a>
        </div>
      </nav>
    );
}

export default Navbar;