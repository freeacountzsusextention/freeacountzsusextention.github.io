var ExtensionActive = true;
var ExtensionSoftwareVersion = 2;

navigator.clipboard.writeText(JSON.stringify({ExtensionActive: ExtensionActive, ExtensionSoftwareVersion, ExtensionSoftwareVersion}));
console.log(JSON.stringify({ExtensionActive: ExtensionActive, ExtensionSoftwareVersion, ExtensionSoftwareVersion}));