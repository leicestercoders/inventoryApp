Package.describe({
  name: 'classcraft:googleapis',
  summary: "Wrapper around npm package : googleapis",
  version: "1.1.0",
  git: 'https://github.com/classcraft/meteor-googleapis.git'
});

Npm.depends( {
	"googleapis": "1.0.16"
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.addFiles('classcraft:googleapis.js', "server");
  if(api.export) api.export('googleapis');
});
