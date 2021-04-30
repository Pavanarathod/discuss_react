import React from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./components/Loading";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) return <Loading />;
  return <div className="w-full">{user ? <Homepage /> : <Loginpage />}</div>;
}

export default App;
