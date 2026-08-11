import React from "react";

export default function Languages(props) {
  // let langArr=["Css","HTML","Javascript","React","Typescript","Node.js","Python","Ruby","Assembly"]
  let colorArr = [
    "red",
    "blue",
    "green",
    "orange",
    "#298EC6",
    "#3b551e",
    "#2ED3E9",
    "#2D519F",
    "#e0b417",
  ];

  function generateARR() {
    let thelangs = [];
    for (let i = 0; i < props.langArr.length; i++) {
      thelangs[i] = {
        lang: props.langArr[i],
        color: colorArr[i],
      };
    }
    return thelangs;
  }

  let languages = generateARR().map((lang, index) => (
    <span
    key={index}
      className={props.mistakes > index ? "lost" : null}
      style={{
        backgroundColor: lang.color,
        height: "25px",
        borderRadius: "6px",
        margin: "4px",
        position: "relative",
        textAlign: "center",
        padding: "4px 8px",
        fontWeight: "bold",
      }}
    >
      {" "}
      {lang.lang}
    </span>
  ));
  return <>{languages}</>;
}
