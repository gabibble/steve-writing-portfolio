import * as prismic from "@prismicio/client";

export const repositoryName = "steve-writing-portfolio";

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken: process.env.REACT_APP_PRISMIC_KEY,
  // accessToken:
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6InN0ZXZlLXdyaXRpbmctcG9ydGZvbGlvLTE2OWE5NjNmLTFhN2QtNGY4Yi05ODAzLTg2ZTk1NWNkNTA0Nl80IiwiZGF0ZSI6MTcwNDMyODY4NCwiZG9tYWluIjoic3RldmUtd3JpdGluZy1wb3J0Zm9saW8iLCJhcHBOYW1lIjoic3RldmUtcG9ydGZvbGlvIiwiaWF0IjoxNzA0MzI4Njg0fQ.F78cFFCKLgDbDMpYHRPX-ruMw7zTCw_LdJTeJtlLgWI",
});
