---
outline: deep
---

# Introduction

Nuxt is an open-source, full-stack framework for building high-performance, production-ready web applications and websites using Vue.js. It leverages Nitro to provide robust APIs and server-side rendering capabilities.

Coolify is a comprehensive, cloud and self-hostable Platform as a Service (PaaS) solution. It allows you to deploy and manage your own applications (including those built with Vite, Vue, Nuxt, React, Next.js, and many others), databases, and services (such as WordPress, Plausible Analytics, and Ghost) without the complexity of server management. Coolify positions itself as an open-source, self-hostable alternative to platforms like Heroku, Netlify, and Vercel.

The Nuxt Coolify module represents a natural progression in web development tooling. It provides seamless integration between Nuxt applications and Coolify's infrastructure, allowing developers to interact directly with their deployments and create new projects, servers, or applications. This interaction is facilitated through Nuxt and Nitro lifecycles, as well as API calls to Coolify's interface. The module enhances the capabilities of both existing and future Nuxt applications by bridging the gap between development and deployment environments.

# Core Features

Bridging Web DevOps with AppDev and making it fun while at it!

- Nuxt UI Templating: Rapidly create full stack web-based applications that can communicate or manage your Coolify, Hetzner, Vultr instances/ applications over API.
- Nitro Networking: Benefit from Nuxt's versatile backend API that actually does most of the magic.
- Seamless Deployments: Easy setup for various deployment scenarios.
- Bring your own CSS: The module offers the functionality so you can create the dashboard of your dreams using Vue.
- Bring your own Auth: The module offers the functionality so you can use your own authentication method.

# Roadmap

The majority of the module exists of Nitro event handlers/ API endpoints.
Writing these API endpoints is quite the hassle, personally I enjoy writing controllers, handlers and API endpoints in general. But too future proof and minimize servicing these endpoints, at some point I will make the jump to autoimport the API's using OpenAPI altogether in Nitro, so more time can be spent on enrichting the core module feature set versus managing tech debt.

OpenAPI integration is definitly on the list.