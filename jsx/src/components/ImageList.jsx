import React from "react";

export default function ImageList({ imageData }) {
  return (
    <ul>
      {imageData.map((i) => (
        <li key={i.id}>
          <img src={i.download_url} alt={i.author} height={300} />
        </li>
      ))}
    </ul>
  );
}
