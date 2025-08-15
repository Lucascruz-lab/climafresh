const faqItems = document.querySelectorAll('.faq_item');

faqItems.forEach(item => {
    item.querySelector('.faq_question').addEventListener('click', () => {
        item.classList.toggle('active');
    })
})