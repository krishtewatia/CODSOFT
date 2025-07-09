// Hamburger Menu Toggle
 const hamburger = document.getElementById('hamburger');
 const navLinks = document.getElementById('navLinks');

 hamburger.addEventListener('click', () => {
     navLinks.classList.toggle('active');
 });

 // Close menu when clicking a link
 const navItems = document.querySelectorAll('.nav-links a');
 navItems.forEach(item => {
     item.addEventListener('click', () => {
         navLinks.classList.remove('active');
     });
 });

 // Dark Mode Toggle
 const themeToggle = document.getElementById('themeToggle');
 const themeIcon = themeToggle.querySelector('i');
 
 // Check for saved theme preference or default to user-agent preference
 const savedTheme = localStorage.getItem('theme');
 if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
     document.body.classList.add('dark-mode');
     themeIcon.classList.replace('fa-moon', 'fa-sun');
 }

 themeToggle.addEventListener('click', () => {
     document.body.classList.toggle('dark-mode');
     
     if (document.body.classList.contains('dark-mode')) {
         themeIcon.classList.replace('fa-moon', 'fa-sun');
         localStorage.setItem('theme', 'dark');
     } else {
         themeIcon.classList.replace('fa-sun', 'fa-moon');
         localStorage.setItem('theme', 'light');
     }
 });

 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });

 // Add scroll reveal
 const observerOptions = {
     threshold: 0.25
 };

 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('visible');
         }
     });
 }, observerOptions);

 // Observe sections
 document.querySelectorAll('.about, .skills, .social-links').forEach(section => {
     observer.observe(section);
 });