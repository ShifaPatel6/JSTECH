import React, { useState } from "react";

import LoginFunction from "./LoginFunction";
import Register from "./Register";

const Authlogin = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <>
      {isRegistering ? (
        <Register onSwitchToLogin={() => setIsRegistering(false)} />
      ) : (
        <LoginFunction onSwitchToRegister={() => setIsRegistering(true)} />
      )}
    </>
  );
};

export default Authlogin;
