# Lotfullah Muslimwal - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Interactive Components**: 
  - Animated skill tree visualization
  - 3D Globe with Three.js
  - Clickable phase cards on mobile
  - GitHub activity integration
- **Sections**:
  - Hero with dynamic animations
  - About Me
  - Projects showcase (11+ projects)
  - Skills (organized by categories)
  - Education & Certifications
  - Open Source Contributions
  - GitHub Activity
  - Work Experience
  - Development Approach

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Icons**: React Icons, Tabler Icons
- **Deployment**: Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/lotfullahmsl/Updated-Portfolio.git

# Navigate to project directory
cd Updated-Portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🚀 Deployment

### Automatic Deployment (CI/CD)

This project is configured for automatic deployment with Vercel:

1. **Push to GitHub**: Any push to the `main` branch automatically triggers a deployment
2. **Vercel Integration**: Connected via GitHub integration
3. **Build Process**: Vercel automatically runs `npm run build` and deploys

### Manual Deployment

```bash
# Deploy to production
npm run deploy

# Or using Vercel CLI
vercel --prod
```

## 📝 Configuration

### Environment Variables

No environment variables required for basic deployment.

### Custom Domain

To add a custom domain:
1. Go to Vercel Dashboard
2. Select your project
3. Navigate to Settings → Domains
4. Add your custom domain

## 🎨 Customization

### Update Personal Information

Edit `data/index.ts` to update:
- Projects
- Skills
- Education
- Certifications
- Work Experience
- Social Media Links

### Update About Section

Edit `components/About.tsx` to customize your bio.

### Change Theme Colors

Modify `tailwind.config.ts` to change the color scheme.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Build Configuration

- **TypeScript**: Errors ignored during build for faster deployment
- **ESLint**: Warnings ignored during build
- **Images**: Unoptimized for faster builds
- **Output**: Standalone mode for Vercel

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Lotfullah Muslimwal**
- GitHub: [@lotfullahmsl](https://github.com/lotfullahmsl)
- LinkedIn: [lotfullahmsl](https://www.linkedin.com/in/lotfullahmsl/)
- Email: lotfullahmsl@gmail.com
- Upwork: [Profile](https://www.upwork.com/freelancers/~0120fff74b984a684a)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and CI/CD
- Aceternity UI for component inspiration
