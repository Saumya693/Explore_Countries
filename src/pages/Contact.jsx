import React from "react";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <div>
      <section className="section-contact ">
        <h2 className="container-title mt-5">Contact us</h2>

        <form
          className="mx-auto"
          style={{ width: "500px " }}
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            className="form-control my-2"
            required
            autoComplete="off"
            placeholder="Enter your name"
            name="username"
          />
          <input
            type="email"
            className="form-control my-2"
            required
            autoComplete="off"
            placeholder="Enter your email"
            name="email"
          />
          <textarea
            className="form-control my-2"
            rows="5"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit" className="btn btn-primary mt-2">
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
