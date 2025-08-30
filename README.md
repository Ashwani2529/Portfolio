# 🌟 Modern Portfolio Website

A stunning, interactive portfolio website with a dark theme, smooth animations, and professional email integration using Mailjet.

## ✨ Features

- **Modern Dark Theme** with gradient accents and glass morphism effects
- **Responsive Design** optimized for all devices (desktop, tablet, mobile)
- **Smooth Scroll Animations** with intersection observers
- **Interactive Contact Form** with Mailjet API integration
- **Particle Animation System** for dynamic background effects
- **Professional Email Templates** with HTML formatting
- **Accessibility Features** including screen reader support
- **Performance Optimized** with lazy loading and efficient animations

## 🚀 Live Demo

Visit the live portfolio: [Your Portfolio URL]

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Mailjet account (free tier available)

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Mailjet Configuration

1. **Create a Mailjet Account**
   - Visit [Mailjet.com](https://www.mailjet.com)
   - Sign up for a free account
   - Verify your email address

2. **Get API Credentials**
   - Go to [Mailjet Account Settings](https://app.mailjet.com/account/apikeys)
   - Copy your `API Key` and `Secret Key`

3. **Set Up Environment Variables**
   - Create a `.env` file in the root directory:
   
   ```bash
   # Mailjet API Configuration
   MAILJET_API_KEY=your_mailjet_api_key_here
   MAILJET_SECRET_KEY=your_mailjet_secret_key_here
   
   # Email Configuration
   SENDER_EMAIL=noreply@yourportfolio.com
   RECEIVER_EMAIL=your.email@gmail.com
   
   # Server Configuration
   PORT=3000
   ```

4. **Domain Authentication (Recommended)**
   - For production, add your domain to Mailjet
   - Verify domain ownership for better deliverability

### 4. Customize Content

1. **Update Personal Information** in `index.html`:
   - Replace name, bio, and contact details
   - Update social media links
   - Modify project descriptions and links

2. **Replace Images**:
   - Add your photos to the `images/` folder
   - Update image references in HTML
   - Optimize images for web (WebP format recommended)

3. **Update Projects**:
   - Edit project descriptions and technologies used
   - Update project links and repositories
   - Add new project cards as needed

### 5. Start the Application

For development:
```bash
npm run dev
```

For production:
```bash
npm start
```

Visit `http://localhost:3000` to view your portfolio.

## 📱 Mobile Optimizations

The portfolio includes extensive mobile optimizations:

- **Enhanced Text Sizing** for better readability on small screens
- **Optimized Touch Targets** (minimum 44px for all interactive elements)
- **Improved Card Heights** to eliminate empty space on mobile
- **Progressive Text Display** with appropriate line clamping
- **Touch-Friendly Navigation** with smooth animations

## 📧 Email Integration Features

### Contact Form with Mailjet
- **Professional Email Templates** with portfolio branding
- **Automatic Fallback** to mailto if API is unavailable
- **Real-time Validation** with visual feedback
- **Loading States** and success/error notifications
- **Spam Protection** with rate limiting
- **Mobile-Optimized** form experience

### Email Template Features
- **Responsive HTML Design** that works across all email clients
- **Professional Branding** with gradient headers
- **Contact Information Display** in structured format
- **Reply-To Configuration** for easy responses
- **Plain Text Fallback** for accessibility

## 🎨 Customization Guide

### Color Scheme
Update CSS variables in `css/style.css`:
```css
:root {
  --accent-primary: #6366f1;    /* Primary accent color */
  --accent-secondary: #8b5cf6;  /* Secondary accent color */
  --accent-tertiary: #06b6d4;   /* Tertiary accent color */
}
```

### Typography
The portfolio uses Inter font family. To change:
```css
@import url("https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700;800;900&display=swap");

body {
  font-family: "YourFont", sans-serif;
}
```

### Animations
Customize animation timing in CSS variables:
```css
:root {
  --ease-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

## 🚀 Deployment

### Netlify (Recommended for Static Hosting + Serverless Functions)

1. **Build the project**: `npm run build`
2. **Deploy to Netlify**:
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `.`
   - Add environment variables in Netlify dashboard

### Vercel (Full-Stack Deployment)

1. **Install Vercel CLI**: `npm i -g vercel`
2. **Deploy**: `vercel`
3. **Configure Environment Variables** in Vercel dashboard

### Heroku (Traditional Server Deployment)

1. **Create Heroku app**: `heroku create your-portfolio`
2. **Set environment variables**: `heroku config:set MAILJET_API_KEY=your_key`
3. **Deploy**: `git push heroku main`

### Environment Variables for Deployment

Ensure these are set in your deployment platform:
- `MAILJET_API_KEY`
- `MAILJET_SECRET_KEY`
- `SENDER_EMAIL`
- `RECEIVER_EMAIL`

## 🔧 Technical Details

### Frontend Technologies
- **HTML5** with semantic elements and accessibility features
- **CSS3** with custom properties, grid, flexbox, and animations
- **Vanilla JavaScript** with modern ES6+ features
- **Intersection Observer API** for scroll animations
- **CSS Grid & Flexbox** for responsive layouts

### Backend Technologies
- **Node.js** with Express.js framework
- **Mailjet SDK** for email sending
- **CORS** for cross-origin requests
- **Body Parser** for form data handling
- **Environment Variables** for secure configuration

### Performance Features
- **Lazy Loading** for images and animations
- **Debounced Scroll Events** for smooth performance
- **Optimized Animation** with GPU acceleration
- **Efficient DOM Queries** with caching
- **Compression Ready** for production deployment

## 📊 Analytics & Monitoring

Add analytics tracking:
1. **Google Analytics** - Add GA4 tracking code
2. **Performance Monitoring** - Add Web Vitals tracking
3. **Error Tracking** - Consider Sentry for error monitoring

## 🔒 Security Considerations

- **Environment Variables** for sensitive data
- **Input Validation** on both client and server
- **Rate Limiting** for contact form submissions
- **CORS Configuration** for API security
- **Content Security Policy** headers recommended

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📞 Support

For support and questions:
- **Email**: ashwani.singh2@s.amity.edu
- **LinkedIn**: [Ashwani Kumar Singh](https://www.linkedin.com/in/ashwani-singh-5a7072223)
- **GitHub**: [Ashwani2529](https://github.com/Ashwani2529)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Mailjet** for reliable email delivery service
- **Boxicons** for beautiful icon library
- **Inter Font** for clean typography
- **Modern CSS** techniques and animations

---

**Built with ❤️ by Ashwani Kumar Singh**
