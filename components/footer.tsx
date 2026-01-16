import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent mb-3">
              محفظتي
            </h3>
            <p className="text-sm text-muted-foreground">منصة احترافية لعرض خدماتك وأعمالك بأفضل صورة.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  الخدمات
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors">
                  أعمالنا
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">خدماتنا</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  تصميم الويب
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  تطوير التطبيقات
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  أمان البيانات
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  الدعم المستمر
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">تابعنا</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-primary/10 hover:bg-primary/20 p-2 rounded-lg transition-colors text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary/10 hover:bg-primary/20 p-2 rounded-lg transition-colors text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary/10 hover:bg-primary/20 p-2 rounded-lg transition-colors text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary/10 hover:bg-primary/20 p-2 rounded-lg transition-colors text-primary">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} محفظتي. جميع الحقوق محفوظة.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                شروط الاستخدام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
