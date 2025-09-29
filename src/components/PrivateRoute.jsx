import React from "react";

const PrivateRoute = ({ isAdmin, children }) => {
  if (!isAdmin) {
    return (
      <div className="isNotAdmin">
        <h2> Accès refusé</h2>
        <p>Vous n’avez pas les droits nécessaires pour accéder à cette page.</p>
      </div>
    );
  }

  return children; // S'il a le role admin (true dans le state du App) on return le children, qui est la page Profile contenu dans App.jsx. Si il n'en a pas on return le accès interdit contenu dans la condition en haut
};

export default PrivateRoute;
