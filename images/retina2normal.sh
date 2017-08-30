# Converts images in icon-retina to half size and puts them in icon-normal
mkdir icon-normal
cd icon-retina

# Convert retina images to 8-bit png
#for i in $( ls *.png); do convert -matte $i $i; done

# Scale down the retina images
for i in $( ls *.png); do convert -resize 50% $i ../icon-normal/$i; done
