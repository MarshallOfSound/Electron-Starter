const packageJSON = require('./package.json');

module.exports = (grunt) => {
  grunt.initConfig({
    'create-windows-installer': {
      // Currently only an ia32 (x86) build is offered.
      // This is what Github does with atom so it kinda makes sense :)
      ia32: {
        appDirectory: `dist/${packageJSON.productName}-win32-ia32`,
        outputDirectory: 'dist/installers/win32',
        authors: packageJSON.author.name,
        exe: `${packageJSON.productName}.exe`,
        description: packageJSON.productName,
        title: packageJSON.productName,
        owners: packageJSON.author.name,
        name: packageJSON.name,
        noMsi: true,
        // DEV: Set up these vars for codesigning
        // certificateFile: '.cert.pfx',
        // certificatePassword: process.env.SIGN_CERT_PASS,

        // DEV: When in master we should change this to point to github raw url
        // iconUrl: 'URL_TO_A .ico FILE',
        // setupIcon: 'path/to/a/setup.ico',
        // loadingGif: 'path/to/a/loading.gif',

        // DEV: After initial release this should be uncommented
        // remoteReleases: 'https://github.com/YOUR_GITHUB_USER/YOUR_GITHUB_REPO',
      },
    },
  });

  grunt.loadNpmTasks('grunt-electron-installer');

  grunt.registerTask('build:win32', ['create-windows-installer:ia32']);
  grunt.registerTask('build:win', ['build:win32'/* , 'build:win64' */]);
};
