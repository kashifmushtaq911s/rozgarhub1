const https = require('https');
const fs = require('fs');

async function fetchPage(offset) {
  return new Promise((resolve, reject) => {
    https.get(`https://jobs.punjab.gov.pk/departmental/ajaxDepPagination/${offset}`, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => resolve(data));
    }).on('error', err => reject(err));
  });
}

async function scrapeAll() {
  const departments = new Set();
  
  for (let offset = 0; offset <= 261; offset += 9) {
    console.log(`Fetching offset ${offset}...`);
    const html = await fetchPage(offset);
    
    // Extract using a simple regex mapping
    // The HTML has structure like: <h3>Department Name</h3>
    const matches = html.match(/<h3>([^<]+)<\/h3>/g);
    if (matches) {
      matches.forEach(m => {
        const name = m.replace(/<\/?h3>/g, '').trim();
        departments.add(name);
      });
    }
  }

  const sorted = Array.from(departments).sort();
  fs.writeFileSync('H:\\Rozgarhub\\departments.json', JSON.stringify(sorted, null, 2));
  console.log(`Saved ${sorted.length} departments.`);
}

scrapeAll().catch(console.error);
