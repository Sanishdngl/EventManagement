const Home = () => {
  return (
    <>
      <div
        className=" flex justify-center items-center text-6xl
                   text-white font-extrabold font-sans bg-blue-800 bg mt-28"
      >
        Events
      </div>
      <br />
      <div className=" flex justify-between items-center">
        <div className=" font-extrabold text-4xl ml-10 flex flex-1 justify-center ">
          <div className=" flex justify-start text-black">
            Find and Host Events with eventA
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center ">
        <div className="object-cover transition-transform transform hover:scale-110 hover:shadow-lg">
          <img
            src="https://placehold.co/600x400"
            alt="photo"
            height={300}
            width={300}
          />
        </div>

        <div className="rounded shadow-md h-50 w-72">
          <p>
            The upcoming Global Tech Summit, set to take place in San Francisco
            this October, promises to be a landmark event in the world of
            technology and innovation. Bringing together industry leaders,
            entrepreneurs, and tech enthusiasts from around the globe, the
            summit will feature keynote speeches, panel discussions, and
            hands-on workshops.
          </p>
        </div>
      </div>
      <br />

      <div className="flex justify-around items-center ">
        <div className="rounded shadow-md h-50 w-72">
          <p>
            The upcoming Global Tech Summit, set to take place in San Francisco
            this October, promises to be a landmark event in the world of
            technology and innovation. Bringing together industry leaders,
            entrepreneurs, and tech enthusiasts from around the globe, the
            summit will feature keynote speeches, panel discussions, and
            hands-on workshops.
          </p>
        </div>

        <div className="object-cover transition-transform transform hover:scale-110 hover:shadow-lg">
          <img
            src="https://placehold.co/600x400"
            alt="photo"
            height={300}
            width={300}
          />
        </div>
      </div>
      <br />

      <div className="flex justify-around items-center ">
        <div className="object-cover transition-transform transform hover:scale-110 hover:shadow-lg">
          <img
            src="https://placehold.co/600x400"
            alt="photo"
            height={300}
            width={300}
          />
        </div>

        <div className="rounded shadow-md h-50 w-72">
          <p>
            The upcoming Global Tech Summit, set to take place in San Francisco
            this October, promises to be a landmark event in the world of
            technology and innovation. Bringing together industry leaders,
            entrepreneurs, and tech enthusiasts from around the globe, the
            summit will feature keynote speeches, panel discussions, and
            hands-on workshops.
          </p>
        </div>
      </div>
      <br />

      <div className="flex justify-around items-center ">
        <div className=" rounded shadow-md h-50 w-72">
          <p>
            The upcoming Global Tech Summit, set to take place in San Francisco
            this October, promises to be a landmark event in the world of
            technology and innovation. Bringing together industry leaders,
            entrepreneurs, and tech enthusiasts from around the globe, the
            summit will feature keynote speeches, panel discussions, and
            hands-on workshops.
          </p>
        </div>

        <div className="object-cover transition-transform transform hover:scale-110 hover:shadow-lg">
          <img
            src="https://placehold.co/600x400"
            alt="photo"
            height={300}
            width={300}
          />
        </div>
      </div>
      <br />

      <hr />

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://miamioh.edu/fsb/_files/images/isa/generic-images/isa-generic-11.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Career Consult is providing you a great oppourtinity to discover
              your creativity and boost excellence.
            </p>
            <a href="./Contact">
              <button className="btn btn-primary">Get Started</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
