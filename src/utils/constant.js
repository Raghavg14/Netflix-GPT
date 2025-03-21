export const Netflix_Logo =
  "data:image/svg+xml;charset=utf-8;base64,PHN2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzI3JyB2aWV3Qm94PScwIDAgMTAwIDI3JyB3aWR0aD0nMTAwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGQ9J203Ny4yMjUxIDI0LjE0MDRjMS40MDYyLjEwODMgMi44MDcyLjIyMTggNC4yMTM0LjM0NTV2LTI0LjQ4NTloLTQuMjEzNHptLTY3Ljc0MTIyLTkuMDg2OC01LjQ4NDA5LTE1LjA1MzZoLTMuOTk5Nzl2MjYuNjAwM2MxLjQwMDk3LS4xOTU5IDIuODAxOTQtLjM4NjcgNC4yMTMzMi0uNTY3MnYtMTQuNDY1N2w0Ljg3NDc1IDEzLjg3MjZjMS41MzExMy0uMTc1MyAzLjA3MjczLS4zNDU1IDQuNjA5MTMtLjUwMDJ2LTI0LjkzOThoLTQuMjEzMzJ6bTguMjYwMDIgOS40OTk0YzMuODgtLjM1MDcgNy43ODA4LS42Mzk1IDExLjY5NzMtLjg2MTN2LTQuMTEwMmMtMi40OTk5LjE0NDQtNC45OTk4LjMxNDYtNy40ODQuNTA1NHYtNi4yMTQzYzEuNjMwMS0uMDE1NSAzLjc4MS0uMDY3IDUuNjg3Mi0uMDQxMnYtNC4xMTAyNmMtMS41MjA4LS4wMDUxNS0zLjk2ODYuMDIwNjMtNS42ODcyLjA0MTI2di01LjYxNjA5aDcuNDg0di00LjE0NjMxaC0xMS42OTczem0xNC40MDAzLTIwLjQwNjY5aDQuNDA2djE5LjIxNTM5YzEuNDAwOS0uMDUxNiAyLjgwNzEtLjA5OCA0LjIxMzMtLjEzNDF2LTE5LjA4MTI5aDQuNDA2di00LjE0NjMxaC0xMy4wMjUzem0xNS43MjMxIDE4Ljk2Nzc5aDQuMjEzM3YtOS40ODM5aDUuNzA4MXYtNC4xMTAxOGgtNS43MTMzdi01LjM3MzcxaDcuNTQ2NXYtNC4xNDYzMWgtMTEuNzU0NnptNTIuMTI3NS0yMy4xMTQxaC00LjYyNDhsLTMuMDQ2NyA2Ljk5ODE5LTIuNzQ0Ni02Ljk5ODE5aC00LjU1NzFsNC44OTU2IDEyLjUwNi01LjMzODMgMTIuMjY4N2MxLjQ3OTEuMTQ0NCAyLjk1My4yOTQgNC40MjY5LjQ1MzlsMy4xMDkyLTcuMTMyMyAzLjA3OCA3Ljg2NDZjMS42MDQuMjA2MyAzLjIwMjkuNDE3NyA0LjgwMTguNjQ0NmwuMDA1Mi0uMDA1Mi01LjQ4NDEtMTQuMDA2N3ptLTMzLjQ2MTggMGgtNC4yMDgxdjIzLjMyMDRjMy44Mjc5LjEyOSA3LjY0MDIuMzE5OCAxMS40MzE3LjU3MjV2LTQuMTEwMmMtMi40MDA5LS4xNTk5LTQuODA3MS0uMjk0LTcuMjIzNi0uNDAyM3onIGZpbGw9JyNlNTA5MTQnLz48L3N2Zz4=";

export const Netflix_Background_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg";

export const API_options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const GEMINIAI_KEY = process.env.REACT_APP_GEMINI_AI_API_KEY;
