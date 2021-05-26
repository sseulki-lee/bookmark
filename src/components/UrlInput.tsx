import React, { useState } from "react";

type UrlInputProps = {
  onSubmit: (url: string) => void;
};
export default function UrlInput({ onSubmit }: UrlInputProps) {
  const [url, setUrl] = useState<string>("");
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };
  const handleSubmit = () => {
    onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="url" onChange={onChange} />
      <input type="submit" value="추가" />
    </form>
  );
}
