export default (...decorators) => Component => decorators.reduce(
  (comp, decorator) => decorator(comp),
  Component
)
