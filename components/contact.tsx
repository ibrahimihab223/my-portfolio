"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("شكراً لتواصلك معنا! سنرد عليك قريباً.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            تواصل <span className="text-primary">معنا</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            هل لديك استفسار؟ تواصل معنا الآن وسنكون سعداء بخدمتك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone */}
            <div className="flex gap-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">رقم الهاتف</h3>
                <p className="text-muted-foreground">+966 50 123 4567</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">البريد الإلكتروني</h3>
                <p className="text-muted-foreground">contact@example.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">العنوان</h3>
                <p className="text-muted-foreground">الرياض، المملكة العربية السعودية</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-6 bg-background p-8 rounded-xl border border-border"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">الاسم</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-secondary text-foreground rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="أدخل اسمك"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-secondary text-foreground rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="بريدك الإلكتروني"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">رقم الهاتف</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-secondary text-foreground rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
                placeholder="رقم هاتفك"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">الرسالة</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-secondary text-foreground rounded-lg border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="اكتب رسالتك هنا"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              إرسال الرسالة
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
