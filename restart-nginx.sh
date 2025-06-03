#!/bin/bash

# Script to restart nginx with the new configuration
# This applies the port 80 -> port 9222 proxy setup

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_colored() {
    local color=$1
    local message=$2
    echo -e "${color}${message}${NC}"
}

print_header() {
    echo ""
    print_colored $BLUE "=========================================="
    print_colored $BLUE "$1"
    print_colored $BLUE "=========================================="
}

print_header "Updating Nginx Configuration"

print_colored $YELLOW "Step 1: Testing nginx configuration..."
# Test the nginx configuration before applying
docker-compose exec ragflow nginx -t 2>/dev/null || {
    print_colored $RED "❌ Nginx configuration test failed!"
    echo "Please check the configuration file for syntax errors."
    exit 1
}

print_colored $GREEN "✅ Nginx configuration is valid!"

print_colored $YELLOW "Step 2: Reloading nginx configuration..."
# Reload nginx to apply new configuration
docker-compose exec ragflow nginx -s reload

print_colored $GREEN "✅ Nginx configuration reloaded successfully!"

print_header "Updated Port Configuration"
echo ""
print_colored $BLUE "🌐 Port 80:"
echo "   → Proxies to your UmiJS app on localhost:9222"
echo "   → Domain: yourdomain.com"
echo ""
print_colored $BLUE "🌐 Port 8080:"
echo "   → RAGFlow web interface (moved from port 80)"
echo ""
print_colored $BLUE "🌐 Port 9380:"
echo "   → RAGFlow API (unchanged)"
echo ""

print_header "Next Steps"
echo ""
print_colored $YELLOW "1. Make sure your UmiJS app is running on port 9222:"
echo "   cd web && PORT=9222 npm run dev"
echo ""
print_colored $YELLOW "2. Update your domain DNS to point to this server"
echo ""
print_colored $YELLOW "3. Access your application:"
echo "   • UmiJS Frontend: http://yourdomain.com (port 80)"
echo "   • RAGFlow Interface: http://yourdomain.com:8080"
echo "   • RAGFlow API: http://yourdomain.com:9380"
echo ""

print_colored $GREEN "🎉 Nginx configuration updated successfully!" 