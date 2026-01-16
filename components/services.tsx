import { CheckCircle2, Zap, Shield, Globe } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "تصميم الويب",
      description: "تصميم مواقع احترافية وعصرية تعكس هوية علامتك التجارية بشكل مميز.",
    },
    {
      icon: Zap,
      title: "تطوير التطبيقات",
      description: "تطوير تطبيقات قوية وسريعة باستخدام أحدث التقنيات والمكتبات.",
    },
    {
      icon: Shield,
      title: "أمان البيانات",
      description: "حماية شاملة لبيانات عملك مع أعلى معايير الأمان والخصوصية.",
    },
    {
      icon: CheckCircle2,
      title: "الدعم المستمر",
      description: "دعم فني متميز متاح 24/7 لضمان استمرارية عمل خدماتك.",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            خدماتنا <span className="text-primary">المتقدمة</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات المتخصصة لتلبية جميع احتياجاتك
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 group"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
