import CardPricing from "./card_price";

export default function Pricing() {
  return (
    <>
      <section className="relative bg-[url(https://p4.wallpaperbetter.com/wallpaper/845/312/843/field-grass-markup-lawn-wallpaper-preview.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="bg-white/15 2xl:bg-transparent 2xl:from-white/15 2xl:to-white/15 ltr:2xl:bg-gradient-to-r rtl:2xl:bg-gradient-to-l">
          <div className=" mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <h1 className="mb-4 text-4xl text-center font-extrabold px-2 text-white bg-green-600 rounded dark:bg-GREEN-500">
              PRECIO
            </h1>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
              <CardPricing
                title="CONTRATO DÍA"
                precio="$10.000"
                condition="Hasta las 19:00 hrs"
                hora="/por hora"
              />

              <CardPricing
                title="CONTRATO NOCHE"
                precio="$15.000"
                condition="Después de las 19:00 hrs"
                hora="/por hora"
              />

              <CardPricing
                title="CONTRATO MES"
                precio="$40.000"
                condition="1 vez por semana escoge una hora"
                hora=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
