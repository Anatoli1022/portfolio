export function useScrollReveal() {
  const observer = ref<IntersectionObserver | null>(null)

  function observe(elements: HTMLElement | HTMLElement[] | NodeListOf<HTMLElement>) {
    const targets = elements instanceof HTMLElement ? [elements] : Array.from(elements)

    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.value?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    targets.forEach((el) => observer.value?.observe(el))
  }

  onUnmounted(() => {
    observer.value?.disconnect()
  })

  return { observe }
}
