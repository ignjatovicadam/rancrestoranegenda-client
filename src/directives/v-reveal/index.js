export const reveal = {
    mounted(el, binding) {
        const delay = binding.value ?? 0;

        el.classList.add('reveal')
        el.style.transitionDelay = `${delay}ms`

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('is-visible')
                    observer.disconnect();
                }
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -80px 0px',
            }
        )

        observer.observe(el)
    },
};