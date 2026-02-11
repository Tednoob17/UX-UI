# 🎨 UX-UI

![01 Edu System](https://github.com/01-edu/public/assets/14015057/35560fed-34e6-42c8-a71b-71b0534b7ad7)

This repository contains all the necessary files for the `UX-UI` subject of the [01 Edu System](https://github.com/01-edu) curriculum.

## Run the intranet locally

The progress tracker lives in `intranet/`.

1. From the repo root, start a static server:
	- `python -m http.server 8000`
2. Open `http://localhost:8000/intranet/index.html` in your browser.

Default login is stored in `intranet/users.json`.
Progress is saved in your browser via localStorage.

## Deploy the intranet (Vercel option)

You can deploy the `intranet/` folder as a static site on Vercel.

1. Go to https://vercel.com/ and import this repository.
2. Framework preset: "Other".
3. Build command: leave empty.
4. Output directory: `intranet`.

After deploy, open the Vercel URL and log in with the default user.
