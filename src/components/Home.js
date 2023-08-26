import React from "react";
import vg from "../assets/2.jpg";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>React-UI</h1>
          <p>A Simple Single Page Application To Demonstrate React-UI</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div className="">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            soluta earum omnis impedit. Voluptates esse cumque minus incidunt,
            rem eos, neque accusamus rerum fuga nesciunt laborum magni at nam,
            perspiciatis impedit. Velit dolorem aut architecto nihil labore
            reprehenderit voluptatum harum adipisci. Veritatis ipsum nostrum,
            quasi rem quidem fugiat dolorem hic.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            numquam pariatur natus voluptatum beatae, eum cum praesentium, enim
            esse earum unde eos odit aliquam culpa, ullam tenetur. Repudiandae
            beatae consectetur blanditiis velit doloremque placeat animi quaerat
            tempora asperiores! Dolor consequuntur pariatur sunt distinctio eius
            deleniti iusto, voluptates earum. Molestias, praesentium?Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Nulla, adipisci!
            Repudiandae sint tempora velit ex nemo. Accusamus suscipit aliquid
            soluta similique qui tempore sequi explicabo, repellendus placeat
            natus animi voluptas impedit adipisci distinctio quaerat. Possimus
            rerum sit doloremque beatae vel qui vitae facere, blanditiis, quia
            ullam delectus, odit repellat. Nemo quas esse voluptatum ratione a
            et, adipisci excepturi obcaecati at possimus officiis suscipit, quis
            animi consequatur, laudantium corporis illum deserunt recusandae
            atque praesentium? At eum accusamus recusandae incidunt facere sit
            porro quibusdam quisquam adipisci eligendi officiis possimus minima
            atque, magni nesciunt numquam expedita dignissimos delectus corporis
            exercitationem blanditiis nostrum! Commodi?
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
        <h1>Brands</h1>
        <article>
            <div style={
                {
                    animationDelay:"0.3s",
                }
            }>
                <AiFillGoogleCircle />
                <p>Google</p>
            </div>
            <div style={
                {
                    animationDelay:"0.5s",
                }
            }>
                <AiFillAmazonCircle />
                <p>Amazon</p>
            </div>
            <div style={
                {
                    animationDelay:"0.7s",
                }
            }>
                <AiFillYoutube />
                <p>YouTube</p>
            </div>
            <div style={
                {
                    animationDelay:"1s",
                }
            }>
                <AiFillInstagram />
                <p>Instagram</p>
            </div>
        </article>
        </div>
      </div>
    </>
  );
};

export default Home;
