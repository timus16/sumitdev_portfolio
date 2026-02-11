#!/bin/bash

# SumitDev Portfolio - Quick Deploy Script
# This script helps you deploy your portfolio to different platforms

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   SumitDev Portfolio - Deploy Script   ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
echo ""

# Check if build exists
if [ ! -d "dist" ]; then
    echo -e "${YELLOW}📦 Building project...${NC}"
    npm run build
fi

echo ""
echo -e "${BLUE}Choose deployment platform:${NC}"
echo "1) Vercel"
echo "2) Netlify"
echo "3) GitHub Pages"
echo "4) Manual Upload (open dist folder)"
echo "5) Exit"
echo ""
read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        echo -e "${YELLOW}🚀 Deploying to Vercel...${NC}"
        if ! command -v vercel &> /dev/null; then
            echo -e "${YELLOW}Installing Vercel CLI...${NC}"
            npm install -g vercel
        fi
        vercel
        echo -e "${GREEN}✅ Deployment to Vercel complete!${NC}"
        ;;
    2)
        echo -e "${YELLOW}🚀 Deploying to Netlify...${NC}"
        if ! command -v netlify &> /dev/null; then
            echo -e "${YELLOW}Installing Netlify CLI...${NC}"
            npm install -g netlify-cli
        fi
        netlify deploy --prod --dir=dist
        echo -e "${GREEN}✅ Deployment to Netlify complete!${NC}"
        ;;
    3)
        echo -e "${YELLOW}🚀 Deploying to GitHub Pages...${NC}"
        npm install --save-dev gh-pages
        npm run deploy
        echo -e "${GREEN}✅ Deployment to GitHub Pages complete!${NC}"
        ;;
    4)
        echo -e "${YELLOW}📂 Opening dist folder...${NC}"
        if [[ "$OSTYPE" == "linux-gnu"* ]]; then
            nautilus dist
        elif [[ "$OSTYPE" == "darwin"* ]]; then
            open dist
        else
            explorer dist
        fi
        echo -e "${GREEN}✅ Upload the contents of the 'dist' folder to your hosting provider${NC}"
        ;;
    5)
        echo "Exiting..."
        exit 0
        ;;
    *)
        echo "Invalid choice"
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}✨ Done!${NC}"
