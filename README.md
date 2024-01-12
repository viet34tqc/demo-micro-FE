# Demo Micro FE

For the sake of simplicity, I will utilize the built-in workspace of pnpm. So, you can turn on all the packages with just one command (see the packages.json in the root folder)

## What is in the demo

We will have 4 packages, one host app and the others are remote apps

- `root-app`: the host app which renders all other packages
- `product`: Display the list of product in the homepage
- `cart`: display the products that are added to cart
- `about`: just a static vue page, just to let you know that we can use multiple framework in MicroFE
- `store`: state management between other pakages.

Basically, we can add the product to the cart on the homepage, view the cart and delete items from the cart on cart page.

## Tech Stack

- PNPM workspace
- Vite
- Vite Module Federation plugin
- Zustand for state management (state sharing is anti-pattern and not recommended)

## How to run the project

- Run `pnpm build` and `pnpm dev` in the root folder
- Go to folder store and run `pnpm dev` (for some reasons, I cannot understand why the store cannot run in by using above command)
