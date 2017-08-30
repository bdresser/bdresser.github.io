# Converts images in icon-retina to half size and puts them in icon-normal
mkdir icon-normal
cd icon-retina

# Add a 2px border to prevent clipping
for i in $( ls *.png); do convert -matte -bordercolor none -border 2x2 $i $i; done

# Scale down the retina images
for i in $( ls *.png); do convert -resize 50% $i ../icon-normal/$i; done
