import "../global.css";

export default function MatchScreen() {
  return (
    <>
      <div className="bg-[#1a1a1a] flex justify-center items-center pt-30">
        <div className="bg-[#efa61f] rounded-full h-[120px] w-[120px] flex flex-row justify-center items-center mr-20 mt-80 hover:mt-60 transition-all ease-in-out duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 64 64"
          >
            <path
              fill="#ffffff"
              d="M62 10.571L53.429 2L32 23.429L10.571 2L2 10.571L23.429 32L2 53.429L10.571 62L32 40.571L53.429 62L62 53.429L40.571 32z"
            />
          </svg>
        </div>
        <div className="min-h-[1000px] bg-[#2b2b2b] w-[28%] rounded-3xl outline-amber-400 outline-2">
          <div className="bg-white h-[500px] w-[80%] m-auto mt-15"></div>
          <div>
            <h2 className="text-4xl text-white ml-15 mt-8">Username</h2>

            <div className="flex flex-row items-center ml-15 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#EFA61F"
                  d="M11 7c0 1.66-1.34 3-3 3S5 8.66 5 7s1.34-3 3-3s3 1.34 3 3"
                />
                <path
                  fill="#EFA61F"
                  fill-rule="evenodd"
                  d="M16 8c0 4.42-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8M4 13.75C4.16 13.484 5.71 11 7.99 11c2.27 0 3.83 2.49 3.99 2.75A6.98 6.98 0 0 0 14.99 8c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 2.38 1.19 4.49 3.01 5.75"
                  clip-rule="evenodd"
                />
              </svg>
              <h4 className="text-white font-light text-lg ml-3">He/Him</h4>
            </div>

            <div className="flex flex-row items-center ml-15 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#EFA61F"
                  d="M19 6h-3V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v1H5C3.3 6 2 7.3 2 9v9c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V9c0-1.7-1.3-3-3-3m-9-1h4v1h-4zm10 13c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-5.6L8.7 14H15c.1 0 .2 0 .3-.1l4.7-1.6z"
                />
              </svg>
              <h4 className="text-white font-light text-lg ml-3">
                Software Developer
              </h4>
            </div>
            <div className="flex flex-row items-center ml-15 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#EFA61F"
                  d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
                />
              </svg>
              <h4 className="text-white font-light text-lg ml-3">
                Kolkata, West Bengal
              </h4>
            </div>
          </div>

          <div className="w-[80%] m-auto mt-8">
            <h2 className="text-white text-2xl mt-3">About Me</h2>
            <p className="mt-2 text-white font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              nihil deleniti rerum quibusdam a aut rem eveniet, at impedit
              quaerat illum error vero illo architecto officiis nemo placeat
              porro omnis?
            </p>
          </div>

          <div className="w-[80%] bg-[#1a1a1a] min-h-[100px] m-auto mt-6 rounded-2xl">
            <h4 className="text-white font-light text-lg ml-3 pt-2">
              Similar Skillset
            </h4>
          </div>
          <div className="h-[50px]"></div>
        </div>

        <div className="bg-[#efa61f] rounded-full h-[120px] w-[120px] flex flex-row justify-center items-center ml-20 mt-80 hover:mt-60 transition-all ease-in-out duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="90"
            height="90"
            viewBox="0 0 512 512"
          >
            <path
              fill="#ffffff"
              d="m294.28 256.9l-54.42-54.41a12 12 0 0 0-17 0L12.45 401a12 12 0 0 0-.27 17.2l66.05 66.28a12 12 0 0 0 17.22-.23l198.81-210.36a12 12 0 0 0 .02-16.99m205.05-57.57l-43.89-43.58a21.46 21.46 0 0 0-15.28-6.26a21.9 21.9 0 0 0-12.79 4.14c0-.43.06-.85.09-1.22c.45-6.5 1.15-16.32-5.2-25.22a258 258 0 0 0-24.8-28.74a.6.6 0 0 0-.08-.08c-13.32-13.12-42.31-37.83-86.72-55.94A139.6 139.6 0 0 0 257.56 32C226 32 202 46.24 192.81 54.68A53.4 53.4 0 0 0 176 86.17L192 96s8.06-2 13.86-3.39a62.7 62.7 0 0 1 18.45-1.15c13.19 1.09 28.79 7.64 35.69 13.09c11.7 9.41 17.33 22.09 18.26 41.09c.2 4.23-9.52 21.35-24.16 39.84a8 8 0 0 0 .61 10.62l45.37 45.37a8 8 0 0 0 11 .25c12.07-11 30.49-28 34.67-30.59c7.69-4.73 13.19-5.64 14.7-5.8a19.2 19.2 0 0 1 11.29 2.38a1.24 1.24 0 0 1-.31.95l-1.82 1.73l-.3.28a21.52 21.52 0 0 0 .05 30.54l43.95 43.68a8 8 0 0 0 11.28 0l74.68-74.2a8 8 0 0 0 .06-11.36"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
