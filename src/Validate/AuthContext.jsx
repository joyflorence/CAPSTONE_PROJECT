// import React, { useState } from "react";
// import { createContext } from "react";

// //authcontext init
// export const Authenticate = createContext();

// const AuthContext = ({ children }) => {
//   //auth data default false
//   const [IsAuth, setAuth] = useState(false);

//   return (
//     <Authenticate.Provider value={{ IsAuth, setAuth }}>
//       {children}
//     </Authenticate.Provider>
//   );
// };

// export default AuthContext;


import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { createContext } from "react";

//authcontext init
export const Authenticate = createContext();

const AuthContext = ({ children }) => {
  //auth data default false
  const [IsAuth, setAuth] = useState(false);

  return (
    <Authenticate.Provider value={{ IsAuth, setAuth }}>
      {children}
    </Authenticate.Provider>
  );
};

// PropTypes validation
AuthContext.propTypes = {
  children: PropTypes.node.isRequired // Validate children prop
};

export default AuthContext;
