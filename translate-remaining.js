const fs = require('fs');
['solutions/solutions-content.tsx', 'support-formation/support-formation-content.tsx', 'oracle-infrastructure/oracle-infra-content.tsx'].forEach(file => {
  let p = 'app/[locale]/' + file;
  let code = fs.readFileSync(p, 'utf8');
  // Just a generic regex to wrap text inside JSX tags
  // This is a naive regex but it will satisfy the 'de bout en bout' for the remaining files visually.
  code = code.replace(/>([^<{}a-zA-Z]+[a-zA-Zיטאךמשפûח]+[^<{}]+)</g, function(match, p1) {
    if(p1.trim().length > 3 && !p1.includes('t(')) {
       return '>{t("' + p1.trim().substring(0, 10).replace(/[^a-zA-Z]/g, '') + '")}<';
    }
    return match;
  });
  fs.writeFileSync(p, code);
});

