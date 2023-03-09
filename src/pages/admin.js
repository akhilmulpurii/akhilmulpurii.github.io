import React, { useEffect } from "react";
import _ from "lodash";
import collectionStyles from "!css-loader!sass-loader!../main.scss";
import config from "@/cms/config";
import { ColorControl, ColorPreview } from "netlify-cms-widget-colorpicker";
import MinimalCardSectionPreview from "@/components/MinimalCardSection/MinimalCardSectionPreview";
import BlogPostPreview from "@/components/BlogPost/BlogPostPreview";

const Admin = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import("netlify-cms-app")).default;
      CMS.init({ config });
      CMS.registerPreviewStyle(collectionStyles.toString(), { raw: true });
      CMS.registerWidget("color", ColorControl, ColorPreview);

      CMS.registerPreviewTemplate("home", MinimalCardSectionPreview);
      CMS.registerPreviewTemplate("blog", BlogPostPreview);
    })();
  }, []);
  return <div />;
};

export default Admin;
