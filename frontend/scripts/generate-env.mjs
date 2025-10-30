import { writeFileSync, mkdirSync } from 'fs';
mkdirSync('src/environments', { recursive: true });
const env = `
export const environment = {
  production: false,
  auth0: {
    domain: '${process.env.NG_APP_AUTH0_DOMAIN ?? 'dev-pjwg2kitzxdg0b5x.us.auth0.com'}',
    clientId: '${process.env.NG_APP_AUTH0_CLIENT_ID ?? 'duB9aUkW5br3T3bqWKe1cCteJTk6aEdc'}',
    audience: '${process.env.NG_APP_AUTH0_AUDIENCE ?? 'https://dev-pjwg2kitzxdg0b5x.us.auth0.com/api/v2/'}'
  },
  apiBase: '' // lokal via Proxy '/api'
};
`;
writeFileSync('src/environments/environment.auto.ts', env);
console.log('Generated src/environments/environment.auto.ts');
