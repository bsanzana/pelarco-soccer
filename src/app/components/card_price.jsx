export default function cardPricing(props) {
  return (
    <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-4 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
        <div className="text-center">
          <h2 className="text-lg font-bold text-gray-900">
            {props.title}
            <span className="sr-only">Plan</span>
          </h2>

          <p className="mt-2 sm:mt-4">
            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {props.precio}
            </strong>

            <span className="text-sm font-medium text-gray-700">
              {props.hora}
            </span>
          </p>

          <ul className="mt-6 space-y-2">
            <li className="flex items-center justify-center gap-1">
              <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-lg text-purple-600">
                {props.condition}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <a
        href="#"
        className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
      >
        ARRIENDA
      </a>
    </div>
  );
}
