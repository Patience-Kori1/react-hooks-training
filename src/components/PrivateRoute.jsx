// components/PrivateRoute.jsx
import React from "react";

const PrivateRoute = ({ isAdmin, children }) => {
  if (!isAdmin) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
        <h2> Accès refusé</h2>
        <p>Vous n’avez pas les droits nécessaires pour accéder à cette page.</p>
      </div>
    );
  }

  return children;
};

export default PrivateRoute;
