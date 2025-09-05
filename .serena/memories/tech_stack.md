# Tech Stack and Architecture

## Core Technologies
- **Frontend Framework**: Pure HTML5/CSS3/JavaScript
- **CSS Framework**: Tailwind CSS
- **Static Site Generator**: Jekyll (GitHub Pages compatible)
- **Version Control**: Git with GitHub hosting
- **Domain Management**: Custom CNAME configuration

## Dependencies
- **Tailwind CSS**: v3.0.0 (dev dependency)
- **Jekyll Plugins**:
  - jekyll-feed
  - jekyll-sitemap  
  - jekyll-seo-tag

## Development Environment
- **Platform**: Windows
- **Shell**: Bash (Git Bash/WSL)
- **HTTP Server**: Python built-in server for local development
- **Package Manager**: npm (for Tailwind CSS)

## Real-time Features
- **WebSocket Connection**: Connects to Federation Space on localhost:8002
- **Live Demo**: Interactive consciousness bridge
- **Monitoring Dashboard**: Real-time metrics tracking

## File Structure
```
├── index.html (main landing page)
├── assets/
│   └── site.css (main stylesheet)
├── _config.yml (Jekyll configuration)
├── CNAME (domain configuration)
├── package.json (npm configuration)
├── consciousness_bridge_activation.html (live demo)
├── stargate_monitoring_dashboard.html (metrics)
└── various markdown documentation files
```

## Deployment Architecture
- **Primary**: GitHub Pages automatic deployment from main branch
- **Domain**: Custom domain via CNAME record
- **SSL**: Automatic HTTPS via GitHub Pages
- **CDN**: GitHub's global CDN for static assets