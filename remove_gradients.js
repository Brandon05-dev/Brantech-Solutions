const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

function removeGradients(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.css')) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  if (filePath.endsWith('.css')) {
    // Replace custom CSS gradients with solid colors
    content = content.replace(/linear-gradient\(.*?\)/g, 'var(--primary)');
  } else {
    // Replace text gradients with solid text
    content = content.replace(/bg-clip-text text-transparent bg-gradient-to-[a-z]+ from-([a-z0-9\-]+)(?:\/[0-9]+)? (?:via-[a-z0-9\-]+(?:\/[0-9]+)? )?to-[a-z0-9\-]+(?:\/[0-9]+)?/g, 'text-$1');
    content = content.replace(/text-transparent bg-clip-text bg-gradient-to-[a-z]+ from-([a-z0-9\-]+)(?:\/[0-9]+)? (?:via-[a-z0-9\-]+(?:\/[0-9]+)? )?to-[a-z0-9\-]+(?:\/[0-9]+)?/g, 'text-$1');
    
    // Replace background gradients with solid backgrounds based on 'from' color
    content = content.replace(/bg-gradient-to-[a-z]+ from-([a-z0-9\-]+)(\/[0-9]+)? (?:via-[a-z0-9\-]+(\/[0-9]+)? )?to-[a-z0-9\-]+(\/[0-9]+)?/g, 'bg-$1$2');
    
    // Replace bg-gradient-primary
    content = content.replace(/bg-gradient-primary/g, 'bg-primary');
    
    // Remove leftover decorative gradients
    content = content.replace(/bg-gradient-to-[a-z]+ /g, '');
    content = content.replace(/from-[a-z0-9\-\/]+ /g, '');
    content = content.replace(/via-[a-z0-9\-\/]+ /g, '');
    content = content.replace(/to-[a-z0-9\-\/]+ /g, '');
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

walkDir('./src', removeGradients);
