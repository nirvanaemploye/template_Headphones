import ContactBg from "../../../assets/ContactImg/ContactHero.png";

const style = {
  backgroundImage: `url(${ContactBg})`, // Removed extra curly brace
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
};


const ContactHero = () => {
  return (
    <section>
      <div style={style} className="text-center  text-white space-y-4 py-44 2xl:py-52">
        <h1 className="text-6xl font-bold ">Contact</h1>
        <p>
          <span>Home</span> <span className="text-primary">/ contact</span>
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
