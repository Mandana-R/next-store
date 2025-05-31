# Next.js E-Commerce Store

A small e-commerce store built with **Next.js**, **TypeScript**, **React Context API**, and **Tailwind CSS** to demonstrate my skills in creating modern, type-safe, and responsive web applications. 

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features
- Browse a list of products fetched from a local TypeScript file (`app/data/data.ts`).
- View product details in a modal (`productItemModal.jsx`) with a clean UI.
- Add and remove items from a shopping cart, managed by React Context API.
- Display the cart in a modal (`basketCart.jsx`) for a seamless experience.
- Type-safe codebase with TypeScript for robust development.
- Responsive design for mobile and desktop, styled with Tailwind CSS.
- Theme toggle (light/dark) for enhanced user experience.
- Uses Next.js App Router for modern routing and layout management.

## Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **State Management**: React Context API, React Hooks (`useState`, `useEffect`, `useContext`)
- **Styling**: Tailwind CSS
- **Data**: Local TypeScript file (`app/data/data.ts`) with JSON data
- **Deployment**: Vercel

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Note on Data
This project uses a local TypeScript file (`app/data/data.ts`) to simulate product data with a JSON structure. No external API or environment variables are required to run the app.

## Usage
- Browse products on the homepage (`app/page.tsx`).
- Add products to the cart and view the cart in a modal (`basketCart.jsx`).
- Enjoy a responsive design on any device, styled with Tailwind CSS.

## Demo
Live demo: [https://next-store.vercel.app](https://next-store.vercel.app) (Update with your Vercel link after deployment)

## Screenshots
![Homepage](screenshots/homepage.png)  
![Product Modal](screenshots/product-modal.png)  
![Cart Modal](screenshots/cart-modal.png)  
(Add screenshots of your project in a `screenshots/` folder and update the paths)

## Project Structure
```
MY-STORE/
├── app/
│   ├── data/
│   │   ├── data.ts          # Local TypeScript file with JSON product data
│   ├── fonts/               # Custom fonts (if used)
│   ├── layout.tsx           # Main layout for App Router
│   ├── page.tsx             # Homepage with product list
│   ├── globals.css          # Global styles with Tailwind CSS
├── components/
│   ├── modals/
│   │   ├── productItemModal.jsx  # Modal for shopping cart
│   ├── navbar.jsx           # Navigation bar component
│   ├── productItem.jsx      # Single product component
│   ├── productList.jsx      # Product list component
├── context/
│   ├── CartContext.tsx      # Context for cart management
├── public/
│   ├── images/              # Product images (if any)
├── tailwind.config.ts       # Tailwind CSS configuration
```

## Why This Project?
I built this e-commerce store to practice modern frontend development with Next.js, TypeScript, and Tailwind CSS, focusing on type safety, responsive design, and user experience. Using the Next.js App Router, TypeScript, and Context API ensures a scalable and maintainable codebase, and Tailwind CSS enables a fast, responsive UI.

## Challenges & Learnings
- **Next.js App Router**: Learned how to structure pages and layouts with the new App Router for better performance.
- **Context API**: Efficiently managed cart state across components using React Context.
- **Tailwind CSS**: Styled a responsive UI quickly with utility-first CSS, improving development speed.
- **TypeScript**: Ensured type safety for product data and cart state, reducing runtime errors.

## Learn More
To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact
- GitHub: [Mandana-R](https://github.com/Mandana-R)
- Email: [mandana.rezazadeh.sh@gmail.com]

## License
MIT License