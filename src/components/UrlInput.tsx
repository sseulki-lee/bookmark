import React, { useState } from "react";

const ENTER_KEY_CODE: string = "enter";
const urlRegex: RegExp =
  /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

type UrlInputProps = {
  handleButtonClick: (url: string) => void;
};

export default function UrlInput({ handleButtonClick }: UrlInputProps) {
  const [url, setUrl] = useState<string>("");
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };
  const onClick = () => {
    const urlValue = url;
    urlRegex.test(urlValue)
      ? handleButtonClick(urlValue)
      : alert("올바르지 않은 형식입니다.");
  };
  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    if (key.toLowerCase() === ENTER_KEY_CODE) {
      onClick();
    }
  };

  return (
    <div>
      <input type="url" onChange={onChange} onKeyDown={onKeyDown} />
      <button onClick={onClick}>추가</button>
    </div>
  );
}
