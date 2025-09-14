# Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, featuring smooth animations, interactive components, and a chatbot widget.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations using Framer Motion
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: Hover effects, animated cards, and smooth transitions
- **Contact Form**: Functional contact form with validation
- **Chatbot Widget**: Interactive chatbot assistant for user engagement
- **Dark Mode Support**: Built-in dark/light theme support
- **Performance Optimized**: Fast loading times and smooth user experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **TypeScript**: Full type safety
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Navigation.tsx       # Navigation bar with mobile menu
│   ├── HeroSection.tsx      # Hero section with animations
│   ├── AboutSection.tsx     # About me section with skills
│   ├── ProjectsSection.tsx  # Projects showcase with cards
│   ├── ContactSection.tsx   # Contact form and social links
│   └── ChatbotWidget.tsx    # Interactive chatbot widget
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`components/HeroSection.tsx`):
   - Replace "Your Name" with your actual name
   - Update the tagline and description

2. **About Section** (`components/AboutSection.tsx`):
   - Modify the description text
   - Update skills and their proficiency levels
   - Customize interests and their descriptions

3. **Projects Section** (`components/ProjectsSection.tsx`):
   - Replace sample projects with your actual projects
   - Update project descriptions, technologies, and links
   - Add or remove projects as needed

4. **Contact Section** (`components/ContactSection.tsx`):
   - Update email, phone, and location information
   - Replace social media links with your profiles
   - Customize the contact form if needed

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `app/layout.tsx`
- **Animations**: Adjust animation timings in component files

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

The project includes a `vercel.json` configuration file for optimal deployment.

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

Your Name - [@yourusername](https://twitter.com/yourusername) - your.email@uowmail.edu.au

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

⭐ Don't forget to give this project a star if you found it helpful!
