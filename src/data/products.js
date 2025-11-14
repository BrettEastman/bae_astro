// Auto-selects products based on environment (test vs production)
// Uses test products if STRIPE_SECRET_KEY starts with sk_test_
// Uses production products if STRIPE_SECRET_KEY starts with sk_live_

import { products as testProducts } from "./products.test.js";
import { products as prodProducts } from "./products.production.js";

const isProduction = import.meta.env.STRIPE_SECRET_KEY?.startsWith("sk_live_");

export const products = isProduction ? prodProducts : testProducts;
