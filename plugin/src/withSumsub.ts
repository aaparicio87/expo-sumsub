import { ConfigPlugin, withDangerousMod } from '@expo/config-plugins';
import * as fs from 'fs';
import * as path from 'path';

const withSumsub: ConfigPlugin = (config) => {
  return withDangerousMod(config, [
    'ios',
    async (config) => {
      const podfilePath = path.join(
        config.modRequest.platformProjectRoot,
        'Podfile'
      );

      if (!fs.existsSync(podfilePath)) {
        console.warn('⚠️  Podfile not found at:', podfilePath);
        return config;
      }

      let contents = fs.readFileSync(podfilePath, 'utf-8');

      const sumsubSource = "source 'https://github.com/SumSubstance/Specs.git'";
      const cocoaPodsSource = "source 'https://cdn.cocoapods.org/'";

      if (contents.includes(sumsubSource)) {
        console.log('✅ Sumsub CocoaPods source already exists in Podfile');
        return config;
      }

      const lines = contents.split('\n');
      let insertIndex = -1;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith("source 'https://cdn.cocoapods.org'") || 
            line.startsWith('source "https://cdn.cocoapods.org"')) {
          insertIndex = i + 1;
          break;
        }
      }

      if (insertIndex === -1) {
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();
          if (line && !line.startsWith('#')) {
            insertIndex = i;
            break;
          }
        }
      }

      if (insertIndex === -1) {
        insertIndex = 0;
      }

      const sourcesToInsert = [];
      
      if (!contents.includes(cocoaPodsSource)) {
        sourcesToInsert.push(cocoaPodsSource);
      }
      
      sourcesToInsert.push(sumsubSource);
      sourcesToInsert.push('');

      lines.splice(insertIndex, 0, ...sourcesToInsert);
      
      const newContents = lines.join('\n');
      fs.writeFileSync(podfilePath, newContents, 'utf-8');

      console.log('✅ Sumsub CocoaPods source added to Podfile');
      
      return config;
    },
  ]);
};

export default withSumsub;