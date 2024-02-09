export default function Gallery() {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Imagen 1 */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-96 object-cover"
              src="https://scontent-scl2-1.xx.fbcdn.net/v/t39.30808-6/368665412_762546325876194_5069477718659993585_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFBE9ZRsiBJq4ka2tSake587n8-qtla813ufz6q2VrzXX9qUDACbU0VcPdEmi6GA6ttMvDzd8DmdmdKTIgn2Q5n&_nc_ohc=rq5pmytnoiEAX-4hIDv&_nc_ht=scontent-scl2-1.xx&oh=00_AfDXQj5Xqfr2G63PJryPJW7bBCqktNF4aVXiwxC0utbMHQ&oe=65C89FD1"
              alt="Placeholder Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Imagen 1</div>
            </div>
          </div>
          {/* Imagen 2 */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-96 object-cover"
              src="https://scontent-scl2-1.xx.fbcdn.net/v/t39.30808-6/368700013_762546315876195_794490488845018677_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeEkQicbTzRMN11Z1OUZrlIW2GL-blBD2MfYYv5uUEPYx7FdsQFnDNtssCEhTusQbYHOr8EZZkFgcNyIuc8-CN1T&_nc_ohc=Lze9kwiS-rAAX_XKqnx&_nc_ht=scontent-scl2-1.xx&oh=00_AfAzC_kHk3UmR9vzxg4X5tS29GgMyfeEjgLR9aVrjZwaOA&oe=65C87041"
              alt="Placeholder Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Imagen 2</div>
            </div>
          </div>
          {/* Imagen 3 */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-96 object-cover"
              src="https://scontent-scl2-1.xx.fbcdn.net/v/t39.30808-6/332237419_595774052452130_3155615130587267883_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHeAHV5R-Z1HpSKg5WUpSLWTUc1Hlz4YHtNRzUeXPhgewczvQOxG2Ew6OUVZy0Iw_hteoU8mEaRvLGOACOD-t3x&_nc_ohc=X4852SJYwPIAX94Xk_M&_nc_ht=scontent-scl2-1.xx&oh=00_AfCL6NHI4k84kHCnJy5T8hWyThhuAEkSfMeiXYanyVqEdA&oe=65C988D9"
              alt="Placeholder Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Imagen 3</div>
            </div>
          </div>
          {/* Imagen 4 */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-96 object-cover"
              src="https://scontent-scl2-1.xx.fbcdn.net/v/t39.30808-6/291704360_1359833514505262_8415953427561303924_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeF81JdzXJJ2F9BJoKeZdL2mdm8ZtL4OgOt2bxm0vg6A628QaOc6SOWLv_VziXYvfKknmRrMLL2tKmNM4TrIkssV&_nc_ohc=fdIrFklr1asAX_OEX4p&_nc_ht=scontent-scl2-1.xx&oh=00_AfBPysfYdNs_5LnzunEHtzz5sHvyG_g7kvYrVBHY9gwvJQ&oe=65C831DD"
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
