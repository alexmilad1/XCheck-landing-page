@echo off
echo ========================================
echo    XCheck Landing Page Deployment
echo ========================================
echo.

echo Initializing Git repository...
git init

echo.
echo Adding all files...
git add .

echo.
echo Committing changes...
git commit -m "Deploy XCheck landing page with modern design"

echo.
echo Connecting to GitHub repository...
git remote add origin https://github.com/alexmilad1/XCheck-landing-page.git

echo.
echo Setting main branch...
git branch -M main

echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo ========================================
echo    Deployment Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Go to: https://github.com/alexmilad1/XCheck-landing-page
echo 2. Click Settings tab
echo 3. Scroll to Pages section
echo 4. Select "Deploy from a branch"
echo 5. Choose "main" branch and "/ (root)" folder
echo 6. Click Save
echo.
echo Your site will be live at:
echo https://alexmilad1.github.io/XCheck-landing-page/
echo.
pause
