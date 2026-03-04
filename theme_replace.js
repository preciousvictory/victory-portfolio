const fs = require('fs');
const path = require('path');

function processDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let orig = content;
            
            // Backgrounds
            content = content.replace(/(?<!(?:dark:|to-))bg-neutral-950(?!:)/g, 'bg-white dark:bg-neutral-950');
            content = content.replace(/(?<!(?:dark:|to-))bg-neutral-900(?!:)/g, 'bg-neutral-50 dark:bg-neutral-900');
            content = content.replace(/(?<!(?:dark:|to-))bg-neutral-800(?!:)/g, 'bg-neutral-100 dark:bg-neutral-800');
            
            // Borders
            content = content.replace(/(?<!dark:)border-neutral-800(?!:)/g, 'border-neutral-200 dark:border-neutral-800');
            content = content.replace(/(?<!dark:)border-neutral-700(?!:)/g, 'border-neutral-300 dark:border-neutral-700');
            
            // Texts
            content = content.replace(/(?<!dark:)text-neutral-100(?!:)/g, 'text-neutral-900 dark:text-neutral-100');
            content = content.replace(/(?<!dark:)text-neutral-200(?!:)/g, 'text-neutral-800 dark:text-neutral-200');
            content = content.replace(/(?<!dark:)text-neutral-300(?!:)/g, 'text-neutral-700 dark:text-neutral-300');
            content = content.replace(/(?<!dark:)text-neutral-400(?!:)/g, 'text-neutral-600 dark:text-neutral-400');
            
            // Exceptions cleanup (if script ran multiple times accidentally or over matches)
            content = content.replace(/bg-neutral-50 dark:bg-white dark:bg-neutral-950/g, 'bg-white dark:bg-neutral-950');
            content = content.replace(/bg-white dark:bg-white dark:bg-neutral-950/g, 'bg-white dark:bg-neutral-950');

            if (content !== orig) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated', fullPath);
            }
        }
    });
}
processDir('./src/components/');
processDir('./src/app/');
