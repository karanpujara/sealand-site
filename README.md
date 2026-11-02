# Sealand Shipping – static site

Plain HTML/CSS/JS, no build step. Five pages:
`/` (Home), `/about-us/`, `/services/`, `/resources/`, `/contact-us/`.

Preview locally: `python3 -m http.server` then open http://localhost:8000

- Page text is in each folder's `index.html`.
- Shared look is in `style.css`; the mobile menu is `script.js`.
- Images are in `assets/img/`; downloadable forms are in `assets/docs/`.
- The header and footer are repeated in each page, so change them in all five.

## Deploy on GitHub Pages
1. Push to a GitHub repo (public for free Pages).
2. Settings → Pages → Deploy from branch `main` / root.
3. Add a `CNAME` file containing `sealandshipping.in` and set the custom domain in Pages, then enforce HTTPS.
