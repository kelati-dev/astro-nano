---
title: "Stripe Subscriptions & BOPIS Integration in BigCommerce"
description: "BigCommerce x Stripe Hackathon submission (BigDesign Award winner)"
date: "April 5 2023"
demoURL: "https://overdose-america-sandbox-for-kelati-andemichael.mybigcommerce.com/"
repoURL: "https://github.com/truecounterfeit/majjk"
---

## Submission Overview  

Our submission focuses on a use case for one of our clients who offers monthly chocolate subscriptions. The current implementation relies on a third-party subscription app, which redirects customers to an external checkout if subscription products are in their cart.  

Our solution eliminates the need for this app by using **Stripe** as the subscription mechanism. Additionally, it enables customers to **pick up their subscription in-store** using the new **BOPIS** (Buy Online, Pick Up In-Store) feature in **BigCommerce**.  

---

## Architecture  

- **Stencil** – Used for local development.  
- **Customized Cornerstone theme** (customer-facing frontend) – [Preview Site](https://overdose-america-sandbox-for-kelati-andemichael.mybigcommerce.com/) (Code: `prq6h0b7wm`).  
  - Customization to **product detail template/JS** to pull in locations via GraphQL.  
  - Customization to **checkout.html** template to create consignments for each order line item.  
- **Netlify Serverless Functions** (middleware connector between **BigCommerce** and **Stripe**) – [GitHub Repo](https://github.com/JacksonBey/majjk-netlify).  
  - Receives **webhook requests** from BigCommerce on the **order creation event**.  
  - Fetches full order details from the **BigCommerce API**.  
  - Uses order details, including consignment data, to **create a Stripe subscription**.  

---

## Notes & Future Improvements  

The following areas could be automated in future iterations:  

- Convert this into a **BigCommerce app**.  
- Automate product and customer data creation in **Stripe** (currently done manually).  
- Implement a **Stripe webhook** to add subscription data back to the BigCommerce order as a **metafield** or **note**.  
