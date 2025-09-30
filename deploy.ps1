Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   XCheck Landing Page Deployment" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Initializing Git repository..." -ForegroundColor Yellow
git init

Write-Host ""
Write-Host "Adding all files..." -ForegroundColor Yellow
git add .

Write-Host ""
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "Deploy XCheck landing page with modern design"

Write-Host ""
Write-Host "Connecting to GitHub repository..." -ForegroundColor Yellow
git remote add origin https://github.com/alexmilad1/XCheck-landing-page.git

Write-Host ""
Write-Host "Setting main branch..." -ForegroundColor Yellow
git branch -M main

Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "   Deployment Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Go to: https://github.com/alexmilad1/XCheck-landing-page" -ForegroundColor White
Write-Host "2. Click Settings tab" -ForegroundColor White
Write-Host "3. Scroll to Pages section" -ForegroundColor White
Write-Host "4. Select 'Deploy from a branch'" -ForegroundColor White
Write-Host "5. Choose 'main' branch and '/ (root)' folder" -ForegroundColor White
Write-Host "6. Click Save" -ForegroundColor White
Write-Host ""
Write-Host "Your site will be live at:" -ForegroundColor Green
Write-Host "https://alexmilad1.github.io/XCheck-landing-page/" -ForegroundColor Green
Write-Host ""
Read-Host "Press Enter to continue"



