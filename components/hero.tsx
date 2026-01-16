export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block">
              <span className="px-4 py-1.5 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
                مرحباً بك في محفظتي الاحترافية
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">
              اكتشف خدماتي <span className="text-primary">المتميزة</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              مع سنوات من الخبرة، أقدم حلولاً احترافية وعالية الجودة لتحقيق أهدافك وتطوير مشاريعك بنجاح.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold text-center"
              >
                تواصل معنا
              </a>
              <a
                href="#portfolio"
                className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-semibold text-center border border-border"
              >
                شاهد أعمالنا
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <p className="text-sm text-muted-foreground">مشروع منجز</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">100%</div>
                <p className="text-sm text-muted-foreground">رضا العملاء</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5+</div>
                <p className="text-sm text-muted-foreground">سنوات خبرة</p>
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center border border-border overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/profile-image.png"
                alt="صورة شخصية احترافية"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
