export function Menu() {
  return (
    <section className=" py-10 md:py-20 px-2">
      <div className="grid md:grid-cols-2 md:gap-10 mb-15">
        <MenuItem 
          // name="Margherita Classica"
          name="Cheese"
          description="Tipo 00 flour dough (72-hour cold ferment), DOP San Marzano tomatoes, Sicilian sea salt, single estate EVOO, house-made grass-fed mozzarella, hydroponic basil, 24-month Parmigiano Reggiano."
          price="10"
        />
        <MenuItem 
          // name="Berkshire Pepperoni"
          name="Pepperoni"
          description="Tipo 00 flour dough (72-hour cold ferment), DOP San Marzano tomatoes, Sicilian sea salt, single estate EVOO, house-made grass-fed mozzarella, 100% Berkshire pork pepperoni (natural casing, custom spice blend), hydroponic basil, 24-month Parmigiano Reggiano."
          price="12"
        />
      </div>
      <button className="block text-xl border-2 md:border rounded-xl px-12 py-8 mx-auto transition-all hover:bg-white/10">
        Order
      </button>
    </section>
  )
}

function MenuItem({
  name,
  description,
  price
}: {
  name: string
  description: string
  price: string
}) {
  return (
    <div className="flex flex-col max-w-2xl mx-auto md:border py-10 px-10 rounded-xl">
      <h2 className="text-2xl font-semibold mb-4">{name}</h2>
      <p className="text-sm/7 mb-4 text-muted-foreground">{description}</p>
      <p className="text-end italic font-light text-muted-foreground">{price}</p>
    </div>
  )
}