import React from "react";

const Home = () => {
  return (

    <div className="container">
      <div className="section">

        <div className="row">
          <div className="col s12 m4">
            <img src="./images/me.jpg"
              alt="miss jody profile image, wearing a gold sweater"
              className="circle responsive-img" id="profileImg" />
          </div>

          <div className="col s12 m8">
            <h4 id="darkOrange">about me</h4>
            <p className="left-align light"> I've finally found a way to bring together my background in both programming and
            my passion for visual art by attending the University of Denver's Coding Bootcamp. This journey has taught me the skills needed to be a MERN stack developer.
            In the future, at my ideal company, I will work closely with other creatives, assisting with bringing their creative to life while I continue to grow my skills
            as a developer and artist.
          </p>
            <p> The degree I recieved from Oklahoma State University in 2012 was for a Bachelor of Fine Arts with a focus in Watercolor. I have found being right brained and having
            this creative backround helps me work well with other developers, giving a think-outside-the-box approach to whatever issue the team is tackling. With over fifteen years
            of customer service experience I also find that my excellent written and oral communication skills are important soft skills to bring to the table.
            </p>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Home;