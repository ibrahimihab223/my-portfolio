export default function Portfolio() {
  const projects = [
    {
      title: "منصة التجارة الإلكترونية",
      category: "متجر إلكتروني",
      image: "/ecommerce-dashboard.png",
    },
    {
      title: "تطبيق إدارة المشاريع",
      category: "تطبيق ويب",
      image: "/project-management-app.png",
    },
    {
      title: "موقع شركة عقارية",
      category: "موقع كorporate",
      image: "/real-estate-website-hero.png",
    },
    {
      title: "تطبيق الحجوزات",
      category: "تطبيق موبايل",
      image: "/booking-application.jpg",
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            أعمالنا <span className="text-primary">السابقة</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            مجموعة من المشاريع الناجحة التي قمنا بتطويرها لعملائنا الكرام
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-background border border-border hover:border-primary/50 transition-all hover:shadow-xl cursor-pointer"
            >
              {/* Image */}
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
