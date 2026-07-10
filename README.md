# Supreme Car Wax — Responsive & Accessible Webpage

Supreme Car Wax is a fully responsive and accessibility‑focused webpage inspired by the public template available at  
https://supremecarwash.netlify.app/.  

I used the **visual idea and assets** (images, icons, and general layout inspiration) from that template, but I built the entire project **from scratch**, including my own HTML structure, CSS Grid/Flexbox layout, accessibility improvements, and responsive behavior.  
My goal was to recreate the look and feel of the template from the header down to the inquiry section while applying best practices in semantic HTML and WCAG accessibility.

---

## 📌 Features

- **Semantic HTML5 structure** (`header`, `main`, `section`, `article`, `footer`, `nav`, `address`)
- **Accessible navigation bar** with ARIA roles and labels
- **Accessible slideshow** with `aria-live="polite"` and descriptive controls
- **Responsive design** using Flexbox, CSS Grid, and media queries
- **Accessible contact form** with proper labels, `id`, `name`, `aria-required`, and `aria-describedby`
- **Keyboard‑friendly focus states**
- **Meaningful alt text** for all images
- **Footer with accessible heading and content info role**

---

## 🧩 Project Structure

```bash
Responsive-Accessible-Page/
├── assets/
│   ├── images/
│   │   ├── homepage/
│   │   │   ├── AboutGarage.webp
│   │   │   ├── car-washing.webp
│   │   │   └── garage.webp
│   │   ├── icons/
│   │   │   ├── car-wash.svg
│   │   │   ├── seat-cleaning.svg
│   │   │   └── vaccuming.svg
│   │   └── slideshow/
│   │       ├── car-wash.webp
│   │       ├── interior.webp
│   │       └── sponge-car-wash.webp
│   └── logo.png
├── CSS/
│   ├── about-us-section.css
│   ├── contact-us-section.css
│   ├── footer-section.css
│   ├── general.css
│   ├── navigation-bar-section.css
│   ├── price-section.css
│   ├── screenSettings.css
│   ├── services-section.css
│   └── slideShow-section.css
├── Scripts/
│   └── slideShow.js
├── index.html
└── README.md
```


---

## 🎯 Technologies Used

- **HTML5**
- **CSS3** (Flexbox, Grid, Media Queries)
- **JavaScript** (slideshow functionality, not required but Implemented thanks yo w3schools)
  https://www.w3schools.com/w3css/w3css_slideshow.asp
- **Bootstrap Icons**
- **WCAG & ARIA guidelines**

---

## 🤖 How I Used AI (Copilot) During This Project

I used **Microsoft Copilot** as a development assistant throughout the project.  
Copilot helped me in several ways:

- **Clarifying accessibility rules** such as when to use `aria-label`, `aria-labelledby`, and `aria-describedby`
- **Improving semantic HTML structure** without breaking my existing CSS layout
- **Debugging issues** like heading hierarchy, missing labels, and slideshow accessibility
- **Explaining best practices** for responsive design using Flexbox and Grid
- **Helping rewrite sections** of my HTML to be more accessible while keeping the same visual layout
- **Providing examples** of how to structure the footer, navbar, and form accessibly
- **Assisting with the README** by helping me articulate the challenges and solutions clearly

Copilot did **not** generate the entire project; instead, I used it as a tool to refine my code, understand accessibility guidelines, and ensure my implementation followed best practices.

---

## ♿ Accessibility Improvements

This project includes several accessibility enhancements:

- `role="banner"`, `role="navigation"`, `role="contentinfo"`, `role="form"`
- `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-required`
- `aria-live="polite"` for dynamic slideshow content
- Proper heading hierarchy (`h1 → h2 → h3 → h4`)
- Keyboard‑visible focus outlines
- Correctly associated labels for all form inputs
- Meaningful alt text for all images

---

# ❓ Required Reflection Questions

## ✔ What accessibility challenges did you face, and how did you address them?

I faced several accessibility challenges while recreating the template:

- **Label associations in the form**: Some inputs initially lacked `id` and `name` attributes, making them inaccessible to screen readers. I fixed this by adding proper `for`, `id`, and `name` attributes.
- **Slideshow accessibility**: The slideshow changes images dynamically, so I added `aria-live="polite"` and descriptive `aria-label` attributes to the navigation buttons.
- **Footer accessibility**: The footer needed a clear accessible title, so I added a `<h2>` and connected it with `aria-labelledby`.
- **Icon accessibility**: Social media icons required descriptive ARIA labels to be meaningful for assistive technologies.

These improvements ensure the site is usable for people relying on assistive tools.

---

## ✔ How did you ensure that your design was responsive and accessible to all users?

I ensured responsiveness and accessibility through:

- **CSS Grid** for multi‑column layouts that collapse into a single column on smaller screens
- **Flexbox** for flexible alignment in the navbar, About Us, and Contact sections
- **Media queries** to adjust spacing, layout, and image sizes for mobile devices
- **Fluid images** using `max-width: 100%`
- **Accessible ARIA roles and attributes** across all interactive elements
- **Keyboard‑friendly focus states** for links, buttons, inputs, and textareas
- **Semantic HTML** to provide meaningful structure for screen readers

The result is a webpage that works well on desktops, tablets, and mobile devices, and remains accessible to users with visual, motor, or cognitive impairments.

---

## ✔ What tools or resources did you find most helpful during this project?

The most helpful tools and resources were:

- **MDN Web Docs** — for HTML semantics, ARIA attributes, and CSS reference
- **WebAIM Contrast Checker** — to verify color contrast accessibility
- **W3C ARIA Authoring Practices** — for correct usage of ARIA roles and attributes
- **Bootstrap Icons** — for accessible iconography
- **Chrome DevTools** — for testing responsiveness and debugging layout issues
- **Lighthouse** — for accessibility and performance audits
- **The Supreme Car Wash template** — as visual inspiration and for assets
- **Microsoft Copilot** — for guidance, debugging, accessibility explanations, and code refinement

---

---

## 📜 License

This project is for educational purposes.

---

## 🙌 Author

**Christian — Supreme Car Wax Project**
