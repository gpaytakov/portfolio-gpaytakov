import React from "react";

function Project() {
    const projects = [
      {
        name: "Work Day Scheduler",
        tools: "HTML | CSS | jQuery | Moment.js",
        description:
          "A simple calendar application that allows the user to save events for each hour of the work day.",
        img_link: "https://gpaytakov.github.io/work-day-scheduler/",
        github: "https://github.com/gpaytakov/work-day-scheduler",
      },
      {
        name: "Employee Tracker",
        tools: "Node.js | mysql | JavaScript | dotenv | Inquirer",
        description:
          "Employee tracker app will help business owners to view, manage the departments, roles, and employees in the company.",
        img_link: "https://github.com/gpaytakov/employee-tracker",
      },
      {
        name: "PokeHunt",
        tools: "HTML | CSS (Bulma) | JavaScript (jQuery) | APIs",
        description:
          "PokeHunt is a database search that takes in the name of a Pokemon from the user and returns basic info such as the Pokemon image, type, and stats.",
        img_link: "https://jrj-sys.github.io/PokeHunt/",
        github: "https://github.com/gpaytakov/PokeHunt",
      },
      // {
      // name: "Online Retailer",
      // tools: "Node.js | mysql | Express.js | JavaScript | Insomnia",
      // description:
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      // },
      {
        name: "Weather Dashboard",
        tools: "Server-Side APIs | localStorage | HTML | CSS",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
        img_link: "https://gpaytakov.github.io/weather-dashboard/",
        github: "https://github.com/gpaytakov/weather-dashboard",
      },
      {
        name: "Code Quiz",
        tools: "JavaScript | HTML | CSS",
        description:
          "This is a timed quiz on JavaScript fundamentals that stores high scores.",
        img_link: "https://gpaytakov.github.io/code-quiz/",
        github: "https://github.com/gpaytakov/code-quiz",
      },
      {
        name: "Run Buddy",
        tools: "HTML | CSS",
        description: "A website that offers fitness training services.",
        img_link: "https://gpaytakov.github.io/run-buddy/",
        github: "https://github.com/gpaytakov/run-buddy",
      },
      // {
      // name: "U Develop It",
      // tools: "SQL | Back-end APIs",
      // description:
      //     "A voting app, with candidates, votestable and election database.",
      // },
      // {
      // name: "Food Festival",
      // tools: "Webpack | PWA | Service-Worker | Node.js",
      // description:
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      // },
      // {
      // name: "Note Taker",
      // tools: "food",
      // description:
      //     "Food Festival app will work online and offline, installable, visible in search engines. When from offline to online transition, it will upload all offline data to the database.",
      // },
      // {
      // name: "Team Profile Generator",
      // tools: "Node.js | Jest | JavaScript | GitHub",
      // description:
      //     "Generates a webpage that displays team's basic info that enables quick access to their emails and GitHub profiles, etc.",
      // },
      // {
      // name: "Robot Gladiators",
      // tools: "JavaScript | HTML",
      // description:
      //     "In this game, robots fight and their health points change with when opponent attacks with attack points.",
      // },
      // {
      // name: "Zookeepr",
      // tools: "Express.js | JavaScript | HTML | CSS",
      // description:
      //     "Using server-side APIs/Express.js framework server is created that will respond requests from the client.",
      // },
      {
        name: "Budget Tracker",
        tools:
          "JavaScript | HTML | MongoDB Atlas | Express.js | CSS | Node.js | Heroku",
        description:
          "Budget tracker app will help users a fast and easy way to track their money. It will also allow them to access that information at any time. The app will even work even limited or without internet connection.",
        img_link: "https://lit-ravine-30458.herokuapp.com/",
        github: "https://github.com/gpaytakov/budget-tracker",
      },
      // {
      // name: "Password Generator",
      // tools: "JavaScript | CSS | HTML",
      // description:
      //     "Application generates a random password based on user-selected criteria.",
      //   },
      {
        name: "Quotes for You",
        tools:
          "HTML || CSS || JavaScript || Handlebars || Node.js || Express.js || MySQL || Sequelize || Heroku",
        description:
          "'Quotes For You' is a website where you can read quotes posted by other people. You can post quotes, like quotes posted by others and leave comments when you login to the website.",
        img_link: "https://young-beach-61820.herokuapp.com/",
        github: "https://github.com/gpaytakov/quotes-for-you",
      },
      {
        name: "Give Back!",
        tools: "MongoDB | Express.js | React | Node.js",
        description:
          "This is a MERN stack web application that allows users to post the charitable organizations that they care about most and want to raise awareness for. Our goal was to make this a much more personal experience for users, versus just your typical search engine. Users are also able to search through other’s recommendations, comment on the organizations posted, and are offered a quick and simple way to donate to each of them.",
        img_link: "https://pacific-harbor-75933.herokuapp.com/",
        github: "https://github.com/gpaytakov/donate-for-good",
      },
    ];

    return (
      <div>
        <h4>
          Note: Please click the image to visit deployed website. When you click
          on github, it will open github repository on a new tab.
        </h4>
        <div>
          {projects.map((project, i) => (
            <div id="project" key={i}>
              <div>
                <h2>{project.name}</h2>
                <h6>{project.description}</h6>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <img
                    src={require(`../../assets/GitHub_Logo.png`)}
                    alt={project.name}
                    className="img-github"
                  />
                </a>
              </div>
              <a href={project.img_link} target="_blank" rel="noreferrer">
                <img
                  src={require(`../../assets/${i}.png`)}
                  alt={project.name}
                  className="img-project"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Project;