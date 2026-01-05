# $DOGEGOV - Department of Government Efficiency

A professional, satirical landing page for the $DOGEGOV meme cryptocurrency project, featuring a bureaucratic government aesthetic with radical efficiency ideology.

## 🎯 Project Overview

$DOGEGOV is not a traditional cryptocurrency. It is a satirical representation of radical government efficiency inspired by DOGE culture. The core philosophy: **"If something is truly efficient, it eventually deletes itself."**

The website captures this through:
- **Official Government Aesthetic**: Navy blue, white, gold, and warning red color palette
- **Serif Typography**: Playfair Display (headers) and Lora (body) for authentic bureaucratic feel
- **Satirical Design**: Shiba Inu in business suit cutting paperwork with red scissors
- **Countdown Narrative**: Timeline emphasizing self-deletion as the ultimate success

## 📁 Project Structure

```
dogegov-website/
├── client/                          # Frontend React application
│   ├── public/
│   │   └── images/
│   │       └── dogegov-seal.png    # Official DOGEGOV seal logo
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx            # Main landing page with all sections
│   │   │   └── NotFound.tsx        # 404 page
│   │   ├── components/
│   │   │   └── ui/                 # shadcn/ui components
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx    # Theme management
│   │   ├── hooks/                  # Custom React hooks
│   │   ├── lib/                    # Utility functions
│   │   ├── App.tsx                 # Main app component
│   │   ├── main.tsx                # React entry point
│   │   └── index.css               # Global styles with animations
│   └── index.html                  # HTML template
├── server/                          # Express server (static deployment)
├── package.json                     # Dependencies
├── vite.config.ts                   # Vite configuration
├── tsconfig.json                    # TypeScript configuration
└── ideas.md                         # Design philosophy documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)

### Installation

```bash
# Extract the ZIP file
unzip dogegov-website-source.zip
cd dogegov-website

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The dev server will start at `http://localhost:3000`

## 🎨 Design System

### Color Palette
- **Deep Navy Blue**: `#002868` - Authority, government legitimacy
- **White**: `#FFFFFF` - Cleanliness, efficiency, bureaucratic paper
- **Gold**: `#D4AF37` - Prestige, official seals
- **Warning Red**: `#FF0000` - Urgency, deletion, cutting

### Typography
- **Headers**: Playfair Display (serif, bold) - Official government documents
- **Body**: Lora (serif, regular) - Readable, bureaucratic aesthetic
- **Code**: IBM Plex Mono (monospace) - Technical elements

### Animations
- **Seal Pulse**: Gold glow effect on the DOGEGOV seal
- **Scissors Cut**: Animated scissors rotation and movement
- **Red Pulse**: Warning elements pulsing for emphasis
- **Smooth Scrolling**: Navigation with smooth scroll behavior

## 📄 Website Sections

1. **Hero Section**: Main title, subtitle, animated seal, and CTAs
2. **Official Mandates**: Two verification cards (DOGE Origin + Final Step Directive)
3. **What Is $DOGEGOV**: Explanation of the project philosophy
4. **Budget Allocation**: Tokenomics pie chart (90% Liquidity, 10% Operations)
5. **Execution Timeline**: Four-phase countdown to self-deletion
6. **Philosophy**: Why deletion is the final step of efficiency
7. **The Symbol**: Explanation of logo components
8. **Official Notice**: Red-bordered termination notice
9. **Community**: Join links for Telegram and X (Twitter)
10. **Footer**: Minimalist government document footer

## 🛠️ Development

### Key Files to Modify

**`client/src/pages/Home.tsx`**
- Main landing page component
- All sections and content
- Navigation and scroll behavior

**`client/src/index.css`**
- Global styles and animations
- Color variables
- Typography rules
- Custom component classes

**`client/index.html`**
- HTML template
- Meta tags
- Font imports

### Adding Features

To add new sections or components:

1. Create new component in `client/src/components/`
2. Import and use in `Home.tsx`
3. Add styling to `index.css`
4. Update navigation links

### Customization

**Change Colors**: Edit CSS variables in `client/src/index.css` (`:root` section)

**Update Content**: Edit text in `client/src/pages/Home.tsx`

**Modify Logo**: Replace `client/public/images/dogegov-seal.png`

**Adjust Animations**: Modify keyframes in `client/src/index.css`

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: 320px - 640px
- Tablet: 640px - 1024px
- Desktop: 1024px+

All components adapt gracefully to different screen sizes.

## 🔗 External Links

- **Final Step Directive**: https://x.com/elonmusk/status/1863666221301764462
- **Community**: Telegram and X links in footer

## ⚠️ Important Notices

- **No Price Predictions**: The website contains no price predictions or investment guarantees
- **No Financial Advice**: This is purely educational and satirical content
- **Meme Project**: $DOGEGOV is a satirical meme project, not a financial instrument
- **Ideology-Driven**: The project is driven by efficiency ideology, not profit motives

## 📦 Production Deployment

### Build for Production

```bash
pnpm build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Manus

The website is ready for deployment on Manus with custom domain support:

1. Click the "Publish" button in the Manus Management UI
2. Configure custom domain if desired
3. Website goes live immediately

### Deploy to Other Platforms

The built files in `dist/` can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply upload the contents of the `dist/` directory.

## 🧪 Testing

The website includes:
- Smooth scrolling navigation
- Responsive layout testing
- Animation performance optimization
- Cross-browser compatibility

Test by:
1. Scrolling through all sections
2. Clicking navigation links
3. Testing on mobile devices
4. Verifying external links work

## 📝 License

This project is provided as-is for the $DOGEGOV community.

## 🤝 Support

For issues or questions about the website:
1. Check the `ideas.md` file for design philosophy
2. Review the component structure in `client/src/`
3. Verify all dependencies are installed with `pnpm install`

---

**Department of Government Efficiency**
*Established to be removed.*
*All rights reserved until deletion.*
