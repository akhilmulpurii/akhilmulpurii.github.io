import { projects } from "../helpers/projects.json";

// Function to format the date in the format YYYY-MM-DD, should be able to handle single digit months and days
function formatDate(date) {
  const year = date.getFullYear();
  const month = (1 + date.getMonth()).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return year + "-" + month + "-" + day;
}

// This function generates the XML sitemap
function generateSiteMap(date) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://akhil.pro/</loc>
       <lastmod>${date}</lastmod>
     </url>
     <url>
       <loc>https://www.akhil.pro/blogs</loc>
       <lastmod>${date}</lastmod>
     </url>
     <url>
       <loc>https://www.akhil.pro/contact</loc>
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

// This is the function that will be called by Next.js
function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

// This function will be called at build time
export async function getStaticProps({ res }) {
  // todays date
  const date = formatDate(new Date());

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
