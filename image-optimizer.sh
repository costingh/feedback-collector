now
npx sharp-cli -i "images/*.png" -o images/webp-optimized/ -f webp -q 90 resize 800 --withMetadata
npx sharp-cli -i "images/demo-image-1.png" -o images/webp-optimized/ -f webp -q 100 resize 1920 --withMetadata 

smaller
npx sharp-cli -i "images/*.png" -o output/ -f webp -q 40 resize 800

blur
npx sharp-cli -i "images/*.png" -o images/webp-blured/ -f webp -q 20 resize 20 -- blur 10
