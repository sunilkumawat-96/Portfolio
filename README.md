# Full Stack Developer Portfolio Landing Page

A modern and responsive portfolio landing page built with React, Tailwind CSS, and Framer Motion.

## Tech Stack

- React (functional components + hooks)
- Tailwind CSS
- Framer Motion
- Vite

## Project Structure

```text
portfolio/
	src/
		components/
			AboutSection.jsx
			ContactSection.jsx
			Footer.jsx
			HeroSection.jsx
			Navbar.jsx
			ProjectsSection.jsx
			SectionHeading.jsx
			SkillsSection.jsx
		data/
			portfolioData.js
		hooks/
			useActiveSection.js
		App.jsx
		index.css
		main.jsx
	index.html
	tailwind.config.js
	postcss.config.js
	package.json
```

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Customization Notes

- Replace "Your Name" in `src/components/HeroSection.jsx` and `src/components/Footer.jsx`.
- Update placeholder project/demo links in `src/data/portfolioData.js`.
- Adjust content and styling tokens in `tailwind.config.js` and `src/index.css`.

## EmailJS Contact Form

The contact form in `src/components/ContactSection.jsx` is wired to EmailJS.

1. Copy `.env.example` to `.env.local`.
2. Fill in your EmailJS service ID, template ID, and public key.
3. In your EmailJS template, map the fields `from_name`, `from_email`, `message`, and `to_email`.
4. Set the template recipient to your email address, or use `to_email` in the template so the messages arrive in your inbox.
