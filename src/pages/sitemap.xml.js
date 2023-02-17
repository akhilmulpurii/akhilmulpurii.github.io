import { projects } from "../helpers/projects.json";

function generateSiteMap(date) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://akhil.pro/</loc>
       <lastmod>${date}</lastmod>
     </url>
     <url>
       <loc>https://www.akhil.pro/#about</loc>
       <lastmod>${date}</lastmod>
     </url>
     <url>
       <loc>https://www.akhil.pro/#contact</loc>
       <lastmod>${date}</lastmod>
     </url>
     <url>
       <loc>https://www.akhil.pro/projects/</loc>
       <lastmod>${date}</lastmod>
     </url>
     ${projects
       .map(({ urlSlug }) => {
         return `
       <url>
           <loc>${`https://akhil.pro/projects/${urlSlug}/`}</loc>
           <lastmod>${date}</lastmod>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

SiteMap.getInitialProps = async ({ res }) => {
  // todays date
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(date);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
