const LoginScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col transform scale-x-110">
        <div className="mb-6 flex justify-center">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-teal-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
        <label className="text-xs font-bold text-teal-500 mb-[5px] bg-transparent">
          USERNAME
        </label>
        <input
          className="p-2.5 mb-5 text-x bg-transparent border-0 border-b-2 border-teal-500 focus:outline-none rounded-none"
          type="text"
          placeholder="example@gmail.com"
        />

        <label className="text-xs font-bold text-teal-500 mb-[5px] bg-transparent">
          PASSWORD
        </label>
        <input
          className="p-2.5 mb-5 text-x bg-transparent border-0 border-b-2 border-teal-500 focus:outline-none rounded-none"
          type="password"
          placeholder="********"
        />

        <button className="bg-teal-500 text-white font-bold p-3 rounded-[25px] hover:bg-teal-600 transition duration-300 ease-linear">
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
