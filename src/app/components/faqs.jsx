export default function Faqs() {
  return (
    <section className="relative bg-[url(https://p4.wallpaperbetter.com/wallpaper/845/312/843/field-grass-markup-lawn-wallpaper-preview.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="space-y-4">
        <details
          className="group border-s-4 border-green-500 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex justify-center items-center cursor-pointer gap-1.5">
            <h2 className="m-2 text-4xl text-center font-extrabold px-2 text-white bg-green-600 rounded dark:bg-GREEN-500">
              ¿Dónde estamos ubicados?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>
          <div className="flex justify-center items-center p-2">
            <iframe
              width="425"
              height="350"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-71.45621538162233%2C-35.38672334836783%2C-71.44424200057985%2C-35.38159755345063&amp;layer=mapnik"
            ></iframe>
          </div>
        </details>
      </div>
    </section>
  );
}
