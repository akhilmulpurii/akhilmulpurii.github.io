import React, { useEffect } from "react";
import map from "lodash/map";
import MinimalCardSection from "./index";
import { StyleSheetManager } from "styled-components";

const MinimalCardSectionPreview = ({ entry }) => {
  const data = entry.toJS().data;

  const [iframeHeadElem, setIframeHeadElem] = React.useState(null);

  useEffect(() => {
    const iframe = document.querySelector("#preview-pane");
    console.log(iframe);
    if (iframe?.contentDocument?.head) {
      const ihe = iframe.contentDocument.head;
      setIframeHeadElem(ihe);
    }
  }, []);

  if (!iframeHeadElem) {
    return null;
  }

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <div>
        {map(data?.content, (val, key) => {
          return <MinimalCardSection key={key} {...val} />;
        })}
      </div>
    </StyleSheetManager>
  );
};

export default MinimalCardSectionPreview;
