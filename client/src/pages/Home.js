import React from "react";

const Home = () => {
  return (

    // <div className="container">
    //   <div className="section">

    //     <div className="row">
    //       <div className="col s12 m4">
    //         <img src="./images/me.jpg"
    //           alt="miss jody headshot, wearing a gold sweater"
    //           className="circle responsive-img" id="profileImg" />
    //       </div>

    //       <div className="col s12 m8">
    //         <h4 id="darkOrange">about jody</h4>
    //         <p className="left-align light"> I've finally found a way to bring together my background in both programming and
    //         my passion for visual art by attending the University of Denver's Coding Bootcamp. This journey has taught me the skills needed to be a MERN stack developer.
    //         In the future, at my ideal company, I will work closely with other creatives, assisting with bringing their creative to life while I continue to grow my skills
    //         as a developer and artist.
    //       </p>
    //         <p> The degree I recieved from Oklahoma State University in 2012 was for a Bachelor of Fine Arts with a focus in Watercolor. I have found being right brained and having
    //         this creative backround helps me work well with other developers, giving a think-outside-the-box approach to whatever issue the team is tackling. With over fifteen years
    //         of customer service experience I also find that my excellent written and oral communication skills are important soft skills to bring to the table.
    //         </p>
    //       </div>
    //     </div>

    //   </div>
    // </div>

    <div>
      <div className="wave-container">

        <div className="row">
          <div className="col s12 m4">
            <h1 id="hello">Hello</h1>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6 push-m1">
            <h1 id="myNameIs">my name is</h1>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6 push-m3">
            <h1 id="name">Jody Russell</h1>
          </div>
        </div>

        <div id="imgContainer">
          <img src="./images/me.jpg"
            alt="miss jody headshot, wearing a gold sweater"
            id="profileImg" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5DD39E" fill-opacity="1" d="M0,0L48,53.3C96,107,192,213,288,256C384,299,480,277,576,234.7C672,192,768,128,864,138.7C960,149,1056,235,1152,256C1248,277,1344,235,1392,213.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>


      </div>


      <div className="wave-container row" id="mern">
        <div className="col s12 center-align">
          <h2 id="mernFont">I am a Web Developer with both front-end and
          back-end experience working with the MERN stack.
          I also have an extensive background in both
          customer service and consumer lending.
          </h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#BCE784" fill-opacity="1" d="M0,64L14.1,80C28.2,96,56,128,85,144C112.9,160,141,160,169,154.7C197.6,149,226,139,254,133.3C282.4,128,311,128,339,138.7C367.1,149,395,171,424,192C451.8,213,480,235,508,218.7C536.5,203,565,149,593,149.3C621.2,149,649,203,678,218.7C705.9,235,734,213,762,186.7C790.6,160,819,128,847,138.7C875.3,149,904,203,932,197.3C960,192,988,128,1016,96C1044.7,64,1073,64,1101,69.3C1129.4,75,1158,85,1186,106.7C1214.1,128,1242,160,1271,186.7C1298.8,213,1327,235,1355,240C1383.5,245,1412,235,1426,229.3L1440,224L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"></path></svg>
      </div>

      <div className="wave-container row" id="grad">
        <div className="col s12 center-align">
          <h2>April 2020 I graduated from the University of Denver’s
          Full Stack program, which covered HTML, CSS, JS, and React.
          I also learned how to set up databases and servers to connect
          to front-end, such as MongoDB, Mongoose, and Express.
          Outside of class I explored technologies including Adobe Xd,
          Green Sock animation, Materialize CSS, Sass and ChartJS.
         </h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#348AA7" fill-opacity="1" d="M0,256L30,213.3C60,171,120,85,180,74.7C240,64,300,128,360,170.7C420,213,480,235,540,229.3C600,224,660,192,720,197.3C780,203,840,245,900,266.7C960,288,1020,288,1080,282.7C1140,277,1200,267,1260,218.7C1320,171,1380,85,1410,42.7L1440,0L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
      </div>

      <div className="wave-container row" id="course">
        <div className="col s12 center-align">
          <h2>During the course of the program my classmates and I
          would work on teams of three to four to create a series
          of projects both together and individually. While we started
          in a classroom setting we would later move to remote,
          giving me experience working on teams in both environments.
        </h2>
        </div>
      </div>

      <div className="wave-container row" id="thanks">
        <div className="col s12 center-align">
          <h2>
            Thank you for taking the time to check out my portfolio.
            I've included some of my favorite projects as well as links
            to my resume and how to contact me.
            I look forward to hearing from you soon!
         </h2>
        </div>
      </div>

    </div >
  )
}

export default Home;