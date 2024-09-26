const Contact = () => {
  return (
    <>
      <div
        className="w-full z-10 bg-blue-800 flex justify-center items-center 
            text-4xl text-white font-extrabold py-4 shadow-md mt-20"
      >
        Contact Us
      </div>
      <br />
      <div className=" flex items-center justify-center rounded shadow-md">
        <div className="font-bold text-xl min-h-screen p-3 rounded shadow-md mx-auto">
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
          <div className="mt-2">
            <label className="block text-sm font-medium">Any Query:</label>
            <textarea
              className="textarea textarea-bordered w-full h-20 p-2 mt-1"
              placeholder="Message"
            />
          </div>
          <a href=" ">
            <button className=" flex items-center justify-center ml-16 mt-1
             bg-gray-400 p-4 rounded-full shadow-lg">
              Submit
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
