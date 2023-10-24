import React from "react";

const ContactForm = () => {
  const [name, setName] = useState("HARENDRA");
  const [email, setEmail] = useState("nithsgautam@gmail.com");
  const [text, setText] = useState("Subscribe to this channel");

  return (
    <section className="container">
      <div>
        <form>
          <button></button>
          <button></button>
          <input></input>
          <input placeholder="name" type="text"></input>
          <input placeholder="email" type="email"></input>
          <input placeholder="text" type="textarea"></input>
          <button>SUBMIT</button>
        </form>
        <div>
          <img src="" />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
