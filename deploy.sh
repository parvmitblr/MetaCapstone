#!/bin/bash
# Build and deployment script for Little Lemon Restaurant

echo "🚀 Starting Build and Deployment Process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run tests
echo "🧪 Running tests..."
npm test -- --run

# Build the project
echo "🏗️ Building project..."
npm run build

# Check build status
if [ -d "dist" ]; then
    echo "✅ Build successful!"
    echo "📁 Build output location: ./dist"
else
    echo "❌ Build failed!"
    exit 1
fi

echo "✨ All steps completed successfully!"
