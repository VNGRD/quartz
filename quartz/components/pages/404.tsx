import { QuartzComponentConstructor } from "../types"

function NotFound() {
  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>oops :( there's nothing to see here, sorry!</p>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
