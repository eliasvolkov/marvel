import React from "react";

interface ICharacter {
  name: string | undefined;
  description: string;
}

export const Character: React.FC<ICharacter> = ({ name, description }) => {
  return (
    <div className="col-3 mb-3 ">
      <div className="card" style={{ height: "100%" }}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {description.slice(0, 50) || "No descriprion"}
          </p>
        </div>
      </div>
    </div>
  );
};
