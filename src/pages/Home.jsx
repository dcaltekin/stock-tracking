import Login from "../components/Login";
import { useSiteContext } from "../context/SiteContext";

function Home() {
  const { user } = useSiteContext();
  //
  console.log(user);
  return (
    <div>
      <Login />
    </div>
  );
}

export default Home;
