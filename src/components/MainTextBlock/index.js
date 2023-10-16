import React from "react";
import "./index.scss";
import GoBackButton from "../GoBackButton";

const MainTextBlock = (props) => {
  const blockClass =
    props.mainText.infoUrl === ""
      ? "main-title-block"
      : "main-title-block wseemore";
  const idioma = props.idioma;
  const textLink = props.textLink;

  return (
    <div className={blockClass}>
      <h1 className="title">
        {props.mainText.title ? props.mainText.title : ""}
      </h1>

      <div className="subtitle-cont">
        <div className="subtitle">
          {props.mainText.subTitle ? props.mainText.subTitle : ""}
        </div>

        {props.mainText.infoUrl ? (
          <div className="d-flex flex-center">
            <a
              className="btn-primary btn--yellow text-uppercase desktop-view"
              href={props.mainText.infoUrl}
              target="_blank"
            >
              {textLink
                ? textLink
                : idioma === "es"
                ? "MÁS INFORMACIÓN"
                : "MORE INFORMATION"}
            </a>
          </div>
        ) : null}
      </div>

      <div className="thirdtitle">
        {props.mainText.thirdTitle ? props.mainText.thirdTitle : ""}
      </div>

      <div
        className="disclaimer"
        dangerouslySetInnerHTML={{
          __html: props.mainText.disclaimer ? props.mainText.disclaimer : "",
        }}
      >
        {}
      </div>
    </div>
  );
};

export default MainTextBlock;
