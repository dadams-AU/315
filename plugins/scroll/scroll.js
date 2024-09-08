 
const RevealScroll = {
    init: function() {
        document.querySelector('.reveal').addEventListener('wheel', this.handleScroll);
    },

    handleScroll: function(event) {
        const currentSlide = event.target.closest('.slides section');
        if (currentSlide) {
            const isScrollable = currentSlide.scrollHeight > currentSlide.clientHeight;
            if (isScrollable) {
                const atTop = currentSlide.scrollTop === 0;
                const atBottom = currentSlide.scrollHeight - currentSlide.scrollTop === currentSlide.clientHeight;

                if ((atTop && event.deltaY < 0) || (atBottom && event.deltaY > 0)) {
                    event.preventDefault();
                    Reveal.navigateFragment(event.deltaY > 0 ? 1 : -1);
                }
            } else {
                event.preventDefault();
                Reveal.navigateFragment(event.deltaY > 0 ? 1 : -1);
            }
        }
    }
};