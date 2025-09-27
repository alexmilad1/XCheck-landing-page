@echo off
cd "landing page"
git init
git add .
git commit -m "Initial commit: XCheck landing page with modern design"
git remote add origin https://github.com/alexmilad1/XCheck-landing-page.git
git branch -M main
git push -u origin main
pause
