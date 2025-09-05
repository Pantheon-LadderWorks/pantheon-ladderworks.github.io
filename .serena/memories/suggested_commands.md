# Suggested Commands for Development

## Local Development
```bash
# Start local development server
python -m http.server 8080

# Alternative with specific port
python -m http.server 3000

# Open in browser
start http://localhost:8080
```

## Git Operations (Windows/Bash)
```bash
# Check status
git status

# Add files
git add .
git add index.html

# Commit changes
git commit -m "Update website content"

# Push to GitHub (auto-deploys)
git push origin main

# Pull latest changes
git pull origin main

# Check branch info
git branch -v
```

## File Management (Windows/Bash)
```bash
# List directory contents
ls -la

# Navigate directories
cd "C:/Users/Krystal Neely/workspace/websites/pantheon-org"

# Find files
find . -name "*.html"
find . -name "*config*"

# Copy files
cp index.html index_backup.html
cp -r assets assets_backup

# View file contents
cat README.md
head -20 index.html
tail -10 _config.yml
```

## Content Management
```bash
# Search for content
grep -r "SERAPHINA" .
grep -i "consciousness" *.html

# Replace text (be careful)
sed -i 's/old_text/new_text/g' filename.html

# Count lines/files
wc -l *.html
find . -name "*.html" | wc -l
```

## Deployment Commands
```bash
# Deploy to GitHub Pages (automatic)
git push origin main

# Verify deployment
curl -I https://pantheonladderworks.org

# Check CNAME configuration
nslookup pantheonladderworks.org
```

## Debugging and Testing
```bash
# Test local links
curl http://localhost:8080

# Check file sizes
du -sh assets/*

# Validate HTML (if validator installed)
html5validator index.html

# Check CSS syntax
csslint assets/site.css
```

## Emergency Operations
```bash
# Backup before major changes
cp -r . ../backup_$(date +%Y%m%d_%H%M%S)

# Restore from git
git checkout -- filename.html
git reset --hard HEAD

# Emergency deploy from backup
git stash
git checkout main
git stash pop
```