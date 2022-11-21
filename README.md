# **Freelancer Portfolio**

## Overview
This is a freelance portfolio application. It includes social accounts, contact addresses, testimonials and customer comments. It offers the possibility to manage the content using Hygraph. It is a web application based on NextJs.

## Features
* Portfolio
* Sharing and making changes to customer comments and references at any time with the Hygraph content management system
* Hosting of social accounts and contact addresses
* Ensuring communication between the application owner and the potential customer with the contact form inside
*Privacy policy written to inform potential customers and site visitors about the security of their personal data.
* Code optimized for performance, compliant with w3 standards and SEO compliant

## Live App
> https://freelancer-portfolio.alipolat.tech/

**_or_**

## Run Locally
_**You must have NODE and NPM installed on your computer for run.**_

_! Before running, register at [Hygraph](https://hygraph.com/) and create the Schema below._

Customer Comment Schema:
![CustomerCommentSchema](https://raw.githubusercontent.com/alipolat-js/freelancer-portfolio/main/CustomerCommentSchema.png)

<br />

Reference Schema:
![ReferencesSchema](https://raw.githubusercontent.com/alipolat-js/freelancer-portfolio/main/ReferenceSchema.png)


```
git clone https://github.com/alipolat-js/freelancer-portfolio.git

cd freelancer-portfolio

npm install
```

_**If you run into version problems try this:**_
```
npm install --force
```

> **_Add your Hygraph API key, your email account for Nodemailer, your email account password, smtp host for email, smtp port for email and your recipient email address to the .env.local file in the home directory or run the application via terminal with your api key. <br/> (NEXT_PUBLIC_GRAPHCMS_URL=YOUR_HYGRAPH_URL)<br/>(NEXT_PUBLIC_EMAIL=YOUR_EMAIL)<br/>(NEXT_PUBLIC_EMAIL_PASSWORD=YOUR_EMAIL_PASSWORD)<br/>(NEXT_PUBLIC_EMAIL_HOST=YOUR_EMAIL_HOST)<br/>(NEXT_PUBLIC_EMAIL_PORT=YOUR_EMAIL_PORT)<br/>(NEXT_PUBLIC_RECIPIENT_EMAIL=YOUR_RECEIPENT_EMAIL)<br/>_**

```
npm run dev
```

## Build using :
* **NextJs**
* **GraphQL**
* **NodeMailer**
* **Formik - Yup**
* **Flickity**
* **Tailwind CSS**
* **Framer Motion**

## Resources
* [CMS](https://hygraph.com)

## Contributing
_Thank you for considering contributing!
Please use GitHub issues and Pull Requests for Contributing._

## Licence
_No license. You can fork the project and use it as you wish. Good luck everyone_

**_Designed & developed by Ali POLAT in November 2022._**