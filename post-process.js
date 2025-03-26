#!/bin/bash
# post-process.sh

# Add required Shadcn components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add navigation-menu

# Format code
npx prettier --write .

# Optimize images
npx @next/codemod next-image-to-legacy-image ./app