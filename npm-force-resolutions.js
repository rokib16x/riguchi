const fs = require('fs');

// Read package.json
const packageJson = JSON.parse(fs.readFileSync('./package.json'));

// Ensure package-lock.json exists
if (!fs.existsSync('./package-lock.json')) {
  console.log('package-lock.json does not exist. Creating an empty one.');
  fs.writeFileSync('./package-lock.json', '{}');
}

// Read package-lock.json
const packageLockJson = JSON.parse(fs.readFileSync('./package-lock.json'));

// Apply resolutions to dependencies
if (packageJson.resolutions) {
  const resolutions = packageJson.resolutions;
  
  // Ensure packages property exists
  if (!packageLockJson.packages) {
    packageLockJson.packages = {};
  }
  
  // Apply each resolution
  Object.keys(resolutions).forEach(packageName => {
    const version = resolutions[packageName].replace('^', '').replace('~', '');
    
    // Find all instances of the package in the lock file
    Object.keys(packageLockJson.packages).forEach(pkg => {
      if (pkg.includes(`/node_modules/${packageName}`) || pkg === `node_modules/${packageName}`) {
        console.log(`Forcing ${packageName} to version ${version}`);
        packageLockJson.packages[pkg].version = version;
      }
    });
  });
  
  // Write updated package-lock.json
  fs.writeFileSync('./package-lock.json', JSON.stringify(packageLockJson, null, 2));
  console.log('package-lock.json has been updated with forced resolutions.');
}
