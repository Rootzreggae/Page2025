// Image Enhancement Utilities for MDX Content

/**
 * This script provides utilities for enhancing image quality in MDX content.
 * It can be included in MDX files to apply special effects to images.
 */
document.addEventListener('astro:page-load', () => {
  // Wait for all images to load
  const projectImages = document.querySelectorAll('.prose img:not(.fullwidth)');
  
  // Add loading="lazy" to all content images for better performance
  projectImages.forEach(img => {
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    
    // Add decoding="async" for better performance
    if (!img.hasAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }
    
    // Create a parent figure element if not already in one
    if (img.parentElement.tagName !== 'FIGURE') {
      const figure = document.createElement('figure');
      figure.className = 'enhanced-image-container';
      img.parentNode.insertBefore(figure, img);
      figure.appendChild(img);
    }
  });
  
  // Apply fullwidth treatment to images with specific class
  const fullwidthImages = document.querySelectorAll('.prose img.fullwidth');
  fullwidthImages.forEach(img => {
    img.setAttribute('loading', 'eager'); // Load fullwidth images immediately
    
    // Add special effects for fullwidth images
    img.style.filter = 'contrast(1.08) saturate(1.08)';
    
    // Create a wrapper for parallax effect if needed
    if (img.classList.contains('parallax')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'parallax-wrapper';
      img.parentNode.insertBefore(wrapper, img);
      wrapper.appendChild(img);
      
      // Simple parallax effect on scroll
      const handleScroll = () => {
        const scrolled = window.scrollY;
        const yPos = -(scrolled * 0.15);
        img.style.transform = `translateY(${yPos}px)`;
      };
      
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
  });
});