const Contact = () => {
  return (
    <>
      <div
        className=" flex justify-center items-center text-6xl
         text-white font-extrabold font-sans bg-blue-800 bg mt-28"
      >
        Contact Us
      </div>
      <br />
      <div className=" flex items-center justify-center p-8 rounded shadow-md">
        <div className=" mt-24 font-bold text-xl min-h-screen p-8 rounded shadow-md mx-auto">
          Your name:
          <input
            type="text"
            className=" input input-bordered flex items-start gap-2"
            placeholder="*Jenny"
          />
          <div className=" mt-2">
            Your Email:
            <input
              type="text"
              className=" input input-bordered flex items-start gap-2 "
              placeholder="*jenny@gmail.com"
            />
          </div>
          <div className=" mt-2">
            Phone Number:
            <input
              type="text"
              className=" input input-bordered flex items-start gap-2"
              placeholder="*977-9877654"
            />
          </div>
          <div className=" mt-2">
            Any Query:
            <input
              type="text"
              className=" input input-bordered flex items-start gap-2"
              placeholder="Message"
            />
          </div>
          <a href=" ">
            <button className=" flex items-center justify-center ml-16 mt-4 bg-gray-400 p-4 rounded-full shadow-lg">
              Submit
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
