// ===== DOM Elements =====
const contactForm = document.getElementById("contactForm")
const successMessage = document.getElementById("successMessage")
const errorMessage = document.getElementById("errorMessage")
const errorText = document.getElementById("errorText")
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const phoneInput = document.getElementById("phone")
const subjectInput = document.getElementById("subject")
const messageInput = document.getElementById("message")

// ===== Form Validation =====
class FormValidator {
  constructor(form) {
    this.form = form
    this.fields = form.querySelectorAll("input, textarea")
  }

  // Validate email format
  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  // Validate phone number (basic validation)
  validatePhone(phone) {
    if (!phone) return true // Phone is optional
    const re = /^[\d\s\-+$$$$]+$/
    return re.test(phone) && phone.length >= 10
  }

  // Validate name
  validateName(name) {
    return name.trim().length >= 3
  }

  // Validate required fields
  validateRequired(value) {
    return value.trim().length > 0
  }

  // Check if field is valid
  isFieldValid(field) {
    const value = field.value
    const name = field.name

    switch (name) {
      case "name":
        return this.validateName(value)
      case "email":
        return this.validateEmail(value) && this.validateRequired(value)
      case "phone":
        return this.validatePhone(value)
      case "subject":
        return this.validateRequired(value)
      case "message":
        return this.validateRequired(value) && value.length >= 10
      default:
        return true
    }
  }

  // Show field error
  showFieldError(field) {
    field.classList.add("is-invalid")
    field.classList.remove("is-valid")
  }

  // Remove field error
  removeFieldError(field) {
    field.classList.remove("is-invalid")
    field.classList.add("is-valid")
  }

  // Validate all fields
  validateAll() {
    let isValid = true

    this.fields.forEach((field) => {
      if (!this.isFieldValid(field)) {
        this.showFieldError(field)
        isValid = false
      } else {
        this.removeFieldError(field)
      }
    })

    return isValid
  }

  // Setup real-time validation
  setupRealtimeValidation() {
    this.fields.forEach((field) => {
      field.addEventListener("blur", () => {
        if (this.isFieldValid(field)) {
          this.removeFieldError(field)
        } else {
          this.showFieldError(field)
        }
      })

      field.addEventListener("input", () => {
        if (this.isFieldValid(field)) {
          this.removeFieldError(field)
        }
      })
    })
  }
}

// ===== Form Submission =====
class FormHandler {
  constructor(form) {
    this.form = form
    this.validator = new FormValidator(form)
    this.isSubmitting = false
    this.init()
  }

  init() {
    this.validator.setupRealtimeValidation()
    this.form.addEventListener("submit", (e) => this.handleSubmit(e))
  }

  handleSubmit(e) {
    e.preventDefault()

    // Prevent double submission
    if (this.isSubmitting) return

    // Hide messages
    this.hideMessages()

    // Validate form
    if (!this.validator.validateAll()) {
      this.showError("يرجى ملء جميع الحقول بشكل صحيح")
      return
    }

    this.submitForm()
  }

  async submitForm() {
    this.isSubmitting = true
    const submitButton = this.form.querySelector('button[type="submit"]')
    const originalButtonText = submitButton.innerHTML

    try {
      // Show loading state
      submitButton.disabled = true
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> جاري الإرسال...'

      // Create FormData
      const formData = new FormData(this.form)

      // Send request
      const response = await fetch("api/contact.php", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        this.showSuccess(data.message || "تم إرسال رسالتك بنجاح")
        this.form.reset()
        this.validator.fields.forEach((field) => {
          field.classList.remove("is-valid", "is-invalid")
        })
      } else {
        this.showError(data.error || "حدث خطأ أثناء الإرسال")
      }
    } catch (error) {
      console.error("Error:", error)
      this.showError("حدث خطأ في الاتصال بالخادم")
    } finally {
      // Reset button state
      this.isSubmitting = false
      submitButton.disabled = false
      submitButton.innerHTML = originalButtonText
    }
  }

  showSuccess(message) {
    successMessage.querySelector("p") ||
      successMessage.appendChild(document.createElement("p")).textContent ||
      successMessage.innerHTML
    successMessage.classList.remove("d-none")
    successMessage.style.animation = "slideInUp 0.3s ease"
    errorMessage.classList.add("d-none")
  }

  showError(message) {
    errorText.textContent = message
    errorMessage.classList.remove("d-none")
    errorMessage.style.animation = "slideInUp 0.3s ease"
    successMessage.classList.add("d-none")
  }

  hideMessages() {
    successMessage.classList.add("d-none")
    errorMessage.classList.add("d-none")
  }
}

// ===== Smooth Scroll Navigation =====
class SmoothScroll {
  constructor() {
    this.setupScrollLinks()
  }

  setupScrollLinks() {
    const links = document.querySelectorAll('a[href^="#"]')

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href")

        if (targetId === "#") return

        const targetElement = document.querySelector(targetId)

        if (targetElement) {
          e.preventDefault()
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })

          // Close mobile menu if open
          const navbarCollapse = document.querySelector(".navbar-collapse")
          if (navbarCollapse.classList.contains("show")) {
            const navbarToggler = document.querySelector(".navbar-toggler")
            navbarToggler.click()
          }
        }
      })
    })
  }
}

// ===== Scroll Animation =====
class ScrollAnimation {
  constructor() {
    this.setupIntersectionObserver()
  }

  setupIntersectionObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "slideInUp 0.6s ease forwards"
          observer.unobserve(entry.target)
        }
      })
    }, options)

    // Observe all service cards and project cards
    const cards = document.querySelectorAll(".service-card, .project-card")
    cards.forEach((card) => {
      card.style.opacity = "0"
      observer.observe(card)
    })
  }
}

// ===== Navbar Background on Scroll =====
class NavbarScroll {
  constructor() {
    this.navbar = document.querySelector(".navbar")
    this.setupScrollListener()
  }

  setupScrollListener() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        this.navbar.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.15)"
      } else {
        this.navbar.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)"
      }
    })
  }
}

// ===== Initialize Application =====
document.addEventListener("DOMContentLoaded", () => {
  // Initialize form handler
  if (contactForm) {
    new FormHandler(contactForm)
  }

  // Initialize smooth scroll
  new SmoothScroll()

  // Initialize scroll animations
  new ScrollAnimation()

  // Initialize navbar scroll
  new NavbarScroll()

  console.log("[v0] Portfolio website initialized successfully")
})

// ===== Utility Functions =====

// Format phone number
function formatPhoneNumber(phone) {
  const cleaned = phone.replace(/\D/g, "")
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3]
  }
  return phone
}

// Debounce function for scroll events
function debounce(func, delay) {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(this, args), delay)
  }
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}
