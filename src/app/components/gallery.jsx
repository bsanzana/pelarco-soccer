import Image from "next/image";

export default function Gallery() {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Imagen 1 */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image
              className="w-full h-96 object-cover"
              src=""
              alt="Placeholder Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Imagen 1</div>
            </div>
          </div>
          {/* Imagen 2 */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image
              className="w-full h-96 object-cover"
              src=""
              alt="Placeholder Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Imagen 2</div>
            </div>
          </div>
          {/* Imagen 3 */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image
              className="w-full h-96 object-cover"
              src=""
              alt="Placeholder Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Imagen 3</div>
            </div>
          </div>
          {/* Imagen 4 */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image
              className="w-full h-96 object-cover"
              src=""
              alt="Placeholder Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Imagen 4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
