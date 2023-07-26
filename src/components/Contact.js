import AnimatedLetters from "./AnimatedLetters";

const Contact = () => {
  return (
    <div className="contact-page block">
      <header className="content-page-title text-5xl">
        <AnimatedLetters strArray={"Contact".split("")} customData="Contact" />
      </header>

      <main>  
        <a
            className="bg-apple-yellow block text-sm text-center font-semibold rounded-md m-4 border-0 w-full p-3 hover:drop-shadow-md cursor-pointer duration-500"
            href="https://fionacreedy.myportfolio.com/contact"
            title="Contact Fiona"
        >
            Contact Fiona
        </a>
      </main>
    </div>
  );
};

export default Contact;
