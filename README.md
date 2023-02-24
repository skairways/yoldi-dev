# Deployement
 - staging: http://staging.bictory.art/
 - production: https://bictory.art/

# Tech Stack

 - Next
 - SWR
 - Axios
 - Emotion
 - Formik, Yup
 - Typescript
 

**Linting**

 - ESLintPrettierStylelint

## **Code/Folder Structure**

    /src

all codes will be in `/src` folder
this is where the core of our application will live and grow

 1. pages
 containing all the global pages required in Next
 
 2. containers
 containing major parts, mainly pages, each page of app will be isolated in a container

 3. components
 containing all the global components (they will be in root of `/src/components` ) and common components shared with some containers

# Media queries

    import { media } from 'styles/media';
    
     const SomeDiv = styled.div`
      display: flex; .... ${media.medium` display: block `}; 
    `;
