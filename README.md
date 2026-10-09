# AbdePerfumes

AbdePerfumes is a premium perfume storefront for the Moroccan market, designed in French by default and supporting Arabic RTL. It is built with React, Vite, TypeScript, and Tailwind CSS.

## Features
- Premium luxury homepage and brand storytelling
- Product catalog with search, filters, sorting, and size selection
- Product details, shopping cart, and checkout flow
- LocalStorage cart persistence
- WhatsApp order generation using a configurable store number
- French-first UI with Arabic RTL support
- Mobile-first responsive design

## Stack
- React
- Vite
- TypeScript
- Tailwind CSS
- Lucide React
- React Router

## Getting started

1. Install dependencies:
   npm install

2. Start the development server:
   npm run dev

3. Build the app:
   npm run build

## Configure store details
Update the WhatsApp number in:
- src/config/store.ts

Example:
```ts
export const WHATSAPP_NUMBER = '2126XXXXXXXX';
```

The app will open WhatsApp using this number when the customer confirms an order. Do not use a real number unless the owner has confirmed it.

## Product editing
Main product catalog:
- src/data/products.ts

Each product can be customized by changing:
- name
- sizes
- prices
- images
- availability
- description
- notes

## Deployment
The project is ready to deploy to Vercel, Netlify, or any static host that supports Vite.

## Notes
- This frontend does not connect to a database or secure admin backend.
- Orders are generated as WhatsApp messages only.
- LocalStorage is used for cart persistence and is not a secure database.
- Real backend and admin authentication would be required for production inventory/security workflows.
