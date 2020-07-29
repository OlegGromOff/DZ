import React from "react";

export default function FavoriteLists({ list, removeFromList }) {
  return (
    <ul>
      {list.map((item) => (
        <div key={item.id}>
          <li className="favoriteHero">
            {item.name}
          </li>
          <button
            onClick={() => {
              removeFromList(item.id);
            }}
          >
            Remove From Favorite
          </button>
        </div>
      ))}
    </ul>
  );
}