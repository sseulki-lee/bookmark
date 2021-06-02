import React from "react";

type UrlSetProps = {
  urlSet: Set<string>;
  handleDeleteButtonClick: (url: string) => void;
};

export default function UrlSet({
  urlSet,
  handleDeleteButtonClick,
}: UrlSetProps) {
  const renderUrl = (url) => {
    return (
      <li key={url}>
        {url}
        <button
          onClick={() => {
            handleDeleteButtonClick(url);
          }}
        >
          삭제
        </button>
      </li>
    );
  };

  return (
    <div>
      <ul>{Array.from(urlSet).map(renderUrl)}</ul>
    </div>
  );
}
