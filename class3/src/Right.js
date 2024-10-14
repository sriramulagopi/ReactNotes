const data = [
  {
    time: "2024 — PRESENT",
    title: "Senior Frontend Engineer, Accessibility ·",
    discription:
      "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    tools: ["JavaScript", "TypeScript", "React", "Storybook"],
  },
  {
    time: "2018 — 2024",
    title: "Lead Engineer ·",
    discription:
      "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
    tools: [
      "JavaScript",
      "TypeScript",
      "HTML&&CSS",
      "React",
      "Next.js",
      "React Native",
      "WordPress",
      "Contentful",
      "Node.js",
      "PHP",
    ],
  },
  {
    time: "July — Dec 2017",
    title: "UI Engineer Co-op ·Apple",
    discription:
      "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
    tools: ["Ember", "SCSS", "JavaScript", "MusicKit.js"],
  },
  {
    time: "2016 — 2017",
    title: "Developer · Scout",
    discription:
      "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community.",
    tools: ["Jekyll", "SCSS", "JavaScript", "WordPress"],
  },
  {
    time: "July — Dec 2016",
    title: "Software Engineer Co-op ·",
    discription:
      "Worked with the UI team to engineer and improve major features of Starry’s customer-facing Android app.",
    tools: ["Cordova", "Backbone", "JavaScript", "CSS"],
  },
  {
    time: "July — Dec 2015",
    title: "Creative Technologist Co-op · MullenLowe",
    discription:
      "Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.",
    tools: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
];
const data2 = [
  {
    img: "https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=256&q=75",
    title: "Build a Spotify Connected",
    discription:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more. ",
  },
  {
    img: "https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&w=256&q=75",
    title: "Spotify",
    discription:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    tools: ["React", "Express", "Spotify API", "Heroku"],
  },
  {
    img: "https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&w=256&q=75",
    title: "Halcyon Theme",
    discription:
      "Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
  },
  {
    img: "https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&w=256&q=75",
    title: "brittanychiang.com",
    discription:
      "An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks",
    tools: ["Gatsby", "Styled Components", "Netlify"],
  },
];
function renderData(data) {
  return data.map((item) => {
    return (
      <div className="cards">
        {item.time ? (
          <b>{item.time}</b>
        ) : (
          <img src={item.img} alt="Invalid URL" />
        )}
        <div className="card">
          <h5>{item.title}</h5>
          <p>{item.discription}</p>
          <div className="chips">
            {item.tools &&
              item.tools.map((item) => {
                return <span>{item}</span>;
              })}
          </div>
        </div>
      </div>
    );
  });
}
export const Right = function () {
  return (
    <div className="right">
      <div className="rightchild1" id="rightchild1">
        <p>
          Back in 2012, I decided to try my hand at creating custom Tumblr
          themes and tumbled head first into the rabbit hole of coding and web
          development. Fast-forward to today, and I’ve had the privilege of
          building software for an advertising agency, a start-up, a huge
          corporation, and a digital product studio.
        </p>
        <p>
          My main focus these days is building accessible user interfaces for
          our customers at Klaviyo. I most enjoy building software in the sweet
          spot where design and engineering meet — things that look good but are
          also built well under the hood. In my free time, I've also released an
          online video course that covers everything you need to know to build a
          web app with the Spotify API.
        </p>
        <p>
          When I’m not at the computer, I’m usually rock climbing, reading,
          hanging out with my wife and two cats, or running around Hyrule
          searching for Korok seeds.
        </p>
      </div>
      <div className="rightchild2" id="rightchild2">{renderData(data)}</div>
      <div className="rightchild3 rightchild2" id="rightchild3">{renderData(data2)}</div>
      <div className="rightchild3 rightchild4">
        <div className="cards">
          <img
            src="https://brittanychiang.com/_next/image?url=%2Fimages%2Fwriting%2Falgolia-search.jpeg&w=256&q=75"
            alt="Invalid URL"
          />
          <div>
            <b>2020</b>
            <h5>Integrating Algolia Search with WordPress</h5>
          </div>
        </div>
        <div className="cards">
          <img
            src="https://brittanychiang.com/_next/image?url=%2Fimages%2Fwriting%2Fheadless.jpeg&w=256&q=75"
            alt="Invalid URL"
          />
          <div>
            <b>2019</b>
            <h5>Building a Headless Mobile App CMS From</h5>
          </div>
        </div>
      </div>
      <div className="lastChild">
        <p>Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel. All text is set in the Inter typeface.</p>
      </div>
    </div>
  );
};
