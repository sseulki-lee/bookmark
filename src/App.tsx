import React, { useState } from "react";
import BookmarkAdder from "./components/UrlInput";
import UrlSet from "./components/UrlSet";

export default function App() {
  const [urlSet, setUrlSet] = useState<Set<string>>(new Set());

  const addUrl = (url: string) => {
    console.log("add url: " + url);
    urlSet.has(url)
      ? alert("이미 존재하는 url입니다.")
      : setUrlSet(new Set(urlSet).add(url));
  };

  const deleteUrl = (url: string) => {
    const newUrlSet = new Set(urlSet);
    newUrlSet.delete(url);
    setUrlSet(newUrlSet);
  };

  const count = urlSet.size;
  return (
    <div>
      <label>url count: {count}</label>
      <BookmarkAdder handleButtonClick={addUrl} />
      <UrlSet urlSet={urlSet} handleDeleteButtonClick={deleteUrl} />
    </div>
  );
}
