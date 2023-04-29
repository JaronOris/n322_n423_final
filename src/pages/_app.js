import Link from "next/link";
import { useRouter } from "next/router";
import useFirebase from "@/useHooks/useFirebase";
import "@/styles/globals.css";
import NavStyle from "../styles/Navbar.module.css";
import HomeStyle from "../styles/Home.module.css";

export default function App({ Component, pageProps }) {
  const firebase = useFirebase();

  return (
    <>
      <nav id={NavStyle.navbar}>
        <div className={NavStyle.logo}>
          <img src="/images/uBlog.svg" />
        </div>
        <div className={NavStyle.links}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>{" "}
            <span className={NavStyle.divider}>|</span>
            <li>
              <Link href="/frontPage">Front Page</Link>
            </li>{" "}
            <span className={NavStyle.divider}>|</span>
            <li>
              <Link href="/userPosts">Posts</Link>
            </li>{" "}
            <span className={NavStyle.divider}>|</span>
            {firebase.currentUser.email ? (
              <button className={NavStyle.button} onClick={firebase.logoutUser}>
                Logout
              </button>
            ) : (
              <button className={NavStyle.button} onClick={firebase.loginUser}>
                Login
              </button>
            )}
          </ul>
        </div>
      </nav>

      <div className={HomeStyle.contentPillar}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
