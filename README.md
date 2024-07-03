## Fixing Routing on Vercel Deployment with Vite and React Router

Here I've described how to address a common routing issue encountered when deploying a Vite + React application with React Router to Vercel.

### The Problem

Single Page Applications (SPAs) handle routing on the client-side. When a user refreshes a specific route within the SPA, the server might not recognize that route and return a 404 error because there's no corresponding static file.

### The Solution

Vercel is configured to handle SPAs by default. However, you can add a configuration file (`vercel.json`) to ensure proper routing behavior:

1. **Create `vercel.json`:** In the project's root directory, create a file named `vercel.json`.

2. **Add Rewrite Rule:** Paste the following code snippet into the `vercel.json` file:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This configuration tells Vercel to rewrite any incoming request path (`/.*`) to serve the `index.html` file. This React app will handle the routing based on the URL within the `index.html`.

### Benefits

- Prevents 404 errors on route refresh.
- Improves user experience by ensuring secure navigation within our SPA.

### Additional Notes

- While Vercel handles routing by default, this configuration explicitly defines the behavior, making our deployment more robust.
- Remember to commit the `vercel.json` file to our version control system for future deployments.

### Resources

- Vercel Documentation on Rewrites: [https://vercel.com/docs/edge-network/rewrites](https://vercel.com/docs/edge-network/rewrites)
- React Router Documentation: [https://reacttraining.com/react-router](https://reacttraining.com/react-router)
