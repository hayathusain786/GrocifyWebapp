import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { SendFeedback } from "../services/userService";

const Contact = () => {
  const data = {
    name: "",
    email: "",
    message: "",
  };

  const [inputData, setInputData] = useState(data);

  useEffect(() => {
    //  Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await SendFeedback(inputData);
      debugger;
      if (resp.status == 201) {
        toast.success("Thanks for your feedback.");
      }
      setInputData(data);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <section>
      <div className="w-full min-h-screen">
        {/* Banner  */}
        <div className="w-full md:h-52 h-40 bg-[url(../src/assets/images/all-banner.jpg)] bg-center bg-cover">
          <h1 className="bg-text-dark/60 w-full h-full flex items-center justify-center md:text-7xl text-4xl text-white">
            CONTACT US
          </h1>
        </div>
        <div className="my-16">
          <form className="flex flex-col items-center text-sm">
            <h1 className="text-4xl font-semibold text-slate-700 pb-4">
              Get in touch with us
            </h1>
            <p className="text-sm text-gray-500 text-center pb-10">
              At Grocefy, we value your feedback. Reach out anytime for
              questions,
              <br /> support, or suggestions—we’re always here to help!
            </p>

            <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
              <div className="w-full">
                <label className="text-black/70" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-secondary"
                  type="text"
                  required
                  value={inputData.name}
                  onChange={(e) =>
                    setInputData({ ...inputData, name: e.target.value })
                  }
                />
              </div>
              <div className="w-full">
                <label className="text-black/70" htmlFor="name">
                  Your Email
                </label>
                <input
                  className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-secondary"
                  type="email"
                  required
                  value={inputData.email}
                  onChange={(e) =>
                    setInputData({ ...inputData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="mt-6 w-[350px] md:w-[700px]">
              <label className="text-black/70" htmlFor="name">
                Message
              </label>
              <textarea
                className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-secondary"
                required
                value={inputData.message}
                onChange={(e) =>
                  setInputData({ ...inputData, message: e.target.value })
                }
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-5 bg-gradient-to-b from-primary to-secondary text-white h-12 w-56 px-4 rounded active:scale-95 transition hover:bg-gradient-to-b hover:from-secondary hover:to-primary"
              onClick={(e) => handleSubmit(e)}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
