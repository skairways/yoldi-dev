# Tech Stack

- Next
- Typescript
- SWR
- Axios
- Scss
- Formik
- Yup

**Linting**

- Next ESLint & Prettier

Run "yarn check-all" command before commiting, this ensures your code is suitable for this project requirements

# Code/Folder Structure

[Future Sliced Design](https://feature-sliced.design/)

# Data Fetching

Axios is used as a default fetcher. 
Impelement data-fetching with [SWR](https://swr.vercel.app/) until SEO is not required. Otherwise use Next js built-in API.
JWT is stored inside cookies, use AxiosApi class to fetch protected data as it automatically places token on each request.
