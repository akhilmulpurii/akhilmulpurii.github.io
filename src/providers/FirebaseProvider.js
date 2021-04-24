import React from "react";
import Firebase from "../service/firebase";

const FirebaseContext = React.createContext();

export default function FirebaseProvider({ children }) {
  React.useEffect(() => {
    Firebase.initFirebase();
  }, []);

  return (
    <FirebaseContext.Provider value={{}}>{children}</FirebaseContext.Provider>
  );
}
