import {} from 'hono'

// Extra head props passed to `c.render(<Page />, { ... })`
declare module 'hono' {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      props: {
        title: string
        description: string
        canonical: string
        jsonLd?: unknown
      }
    ): Response
  }
}
