#!/bin/bash

# Script to start RAGFlow frontend on port 80
# This script sets the required environment variables and starts the UmiJS dev server

set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_colored() {
    local color=$1
    local message=$2
    echo -e "${color}${message}${NC}"
}

print_colored $BLUE "🚀 Starting RAGFlow Frontend on Port 80"
echo ""

# Check if running on macOS/Linux and if port 80 requires sudo
if [[ "$OSTYPE" == "linux-gnu"* ]] || [[ "$OSTYPE" == "darwin"* ]]; then
    if [ "$EUID" -ne 0 ] && [ "$(id -u)" -ne 0 ]; then
        print_colored $YELLOW "⚠️  Port 80 requires sudo privileges on Unix systems"
        print_colored $YELLOW "   You may be prompted for your password"
        echo ""
    fi
fi

# Navigate to web directory
cd web

print_colored $BLUE "📂 Current directory: $(pwd)"
print_colored $BLUE "🔧 Setting up environment..."

# Export environment variables for UmiJS
export PORT=80
export HOST=0.0.0.0
export UMI_DEV_SERVER_COMPRESS=none

print_colored $GREEN "✅ Environment variables set:"
echo "   PORT=$PORT"
echo "   HOST=$HOST"
echo ""

print_colored $BLUE "🎯 Starting UmiJS development server..."
echo ""

# Run with sudo if needed for port 80
if [ "$EUID" -ne 0 ] && [ "$(id -u)" -ne 0 ] && [[ "$OSTYPE" == "linux-gnu"* || "$OSTYPE" == "darwin"* ]]; then
    print_colored $YELLOW "🔐 Starting with sudo for port 80..."
    sudo -E npm run dev
else
    npm run dev
fi 