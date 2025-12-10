document.addEventListener('DOMContentLoaded', () => {
    // 1. معالج نموذج "تواصل معنا"
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault(); // منع إعادة تحميل الصفحة
            alert("تم إرسال الرسالة بنجاح ✅. شكراً لتواصلك!");
            this.reset(); // إفراغ حقول النموذج
        });
    }

    // 2. تحديث شريط التنقل لتحديد الرابط النشط تلقائياً
    const currentPath = window.location.pathname.split('/').pop() || 'index.html'; // الحصول على اسم الملف الحالي
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        // التحقق من أن الرابط الحالي يطابق اسم الملف 
        if (currentPath === linkHref) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});