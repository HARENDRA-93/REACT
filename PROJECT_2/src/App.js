import React from "react";
import "./App.css";
import Navi from "./components/Navi";
// import ContactHeader from "./components/ContactHeader";
// import ContactForm from "./components/ContactForm";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/ContactHeader/ContactHeader";
const App = () => {
  return (
    <div>
      <Navi />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
};

export default App;
