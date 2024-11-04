let favoriteColors = [];
for (let i = 0; i < 3; i++) {
  let color = prompt(Enter a color you like (${i + 1}/3):);
  
  favoriteColors.push(color);

  console.log("Updated color list:", favoriteColors);
}
