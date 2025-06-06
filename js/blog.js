// Blog Data Structure
const blogs = [
  {
    id: 1,
    title: "Understanding Recursion in JavaScript",
    shortDescription: "A deep dive into how recursion works...",
    thumbnail: "assets/images/elemind.png",
    headerImage: "assets/images/elemind.png",
    fullContent: `
          <h2>What is Recursion?</h2>
          <p>Recursion is a programming technique where a function calls itself to solve a problem by breaking it down into smaller, more manageable subproblems.</p>
          
          <h3>Simple Recursion Example</h3>
          <pre><code>
function factorial(n) {
  // Base case
  if (n <= 1) return 1;
  
  // Recursive case
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Outputs: 120
          </code></pre>
          
          <h3>Key Concepts</h3>
          <ul>
              <li>Base Case: Condition to stop recursion</li>
              <li>Recursive Case: Function calling itself with a modified input</li>
              <li>Helps solve complex problems with simpler logic</li>
          </ul>
      `,
    category: "JavaScript",
    date: "May 1, 2025",
    author: "Your Name",
    readTime: "5 min read",
  },
];

// Function to display blogs on the homepage
function displayHomepageBlogs() {
  const blogContainer = document.querySelector(".blogs-grid");
  if (!blogContainer) return;

  // Clear existing content
  blogContainer.innerHTML = "";

  // Display only first 2-3 blogs
  const displayBlogs = blogs.slice(0, 3);

  displayBlogs.forEach((blog) => {
    const blogCard = document.createElement("div");
    blogCard.className = "blog-card";

    blogCard.innerHTML = `
    <div class="blog-image" style="background-image: url('${blog.thumbnail}')"></div>
    <div class="blog-content">
        <span class="blog-date">${blog.date}</span>
        <h3>${blog.title}</h3>
        <p>${blog.shortDescription}</p>
        <div class="blog-actions">
            <a href="#" class="read-more" data-blog-id="${blog.id}">
                Read More <i class="fas fa-long-arrow-alt-right"></i>
            </a>
            <button class="share-btn" data-blog-id="${blog.id}">
                <i class="fas fa-share-alt"></i>
            </button>
        </div>
    </div>
`;

    blogContainer.appendChild(blogCard);
  });

  // Add event listeners to read more buttons
  blogContainer.querySelectorAll(".read-more").forEach((btn) => {
    btn.addEventListener("click", openBlogModal);
  });

  // Add event listeners to share buttons
  blogContainer.querySelectorAll(".share-btn").forEach((btn) => {
    btn.addEventListener("click", handleShareButtonClick);
  });
}

// Function to handle share button click
function handleShareButtonClick(event) {
  const blogId = event.currentTarget.getAttribute("data-blog-id");
  shareBlog(blogId);
}

// Function to open blog modal
function openBlogModal(event) {
  event.preventDefault();
  const blogId = event.currentTarget.getAttribute("data-blog-id");
  const blog = blogs.find((b) => b.id === parseInt(blogId));

  if (!blog) return;

  // Create modal
  const modal = document.createElement("div");
  modal.className = "blog-modal";
  modal.innerHTML = `
        <div class="blog-modal-content">
            <span class="close-modal">&times;</span>
            <div class="blog-header-image" style="background-image: url('${blog.headerImage}')"></div>
            <h2>${blog.title}</h2>
            <div class="blog-meta">
                <span class="blog-date">${blog.date}</span>
                <span class="blog-author">${blog.author}</span>
                <span class="blog-read-time">${blog.readTime}</span>
            </div>
            <div class="blog-share-section">
                <button class="modal-share-btn" data-blog-id="${blog.id}">
                    <i class="fas fa-share-alt"></i> Share this article
                </button>
            </div>
            <div class="blog-full-content">
                ${blog.fullContent}
            </div>
        </div>
    `;

  // Add to body
  document.body.appendChild(modal);

  // Close modal functionality
  const closeBtn = modal.querySelector(".close-modal");
  closeBtn.addEventListener("click", () => {
    document.body.removeChild(modal);
  });

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });

  // Add share button event listener
  const modalShareBtn = modal.querySelector(".modal-share-btn");
  if (modalShareBtn) {
    modalShareBtn.addEventListener("click", handleShareButtonClick);
  }
}

// Function to get random color for blog image
function getRandomColor() {
  const colors = ["#FFCC70", "#74EBD5", "#9B8FFF", "#FF6B6B", "#4ECDC4"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Function to display all blogs
function displayAllBlogs() {
  const allBlogContainer = document.getElementById("all-blogs-container");
  if (!allBlogContainer) return;

  // Clear existing content
  allBlogContainer.innerHTML = "";

  blogs.forEach((blog) => {
    const blogCard = document.createElement("div");
    blogCard.className = "blog-card";

    blogCard.innerHTML = `
    <div class="blog-image" style="background-image: url('${blog.thumbnail}')"></div>
    <div class="blog-content">
        <span class="blog-date">${blog.date}</span>
        <h3>${blog.title}</h3>
        <p>${blog.shortDescription}</p>
        <div class="blog-actions">
            <a href="#" class="read-more" data-blog-id="${blog.id}">
                Read More <i class="fas fa-long-arrow-alt-right"></i>
            </a>
            <button class="share-btn" data-blog-id="${blog.id}">
                <i class="fas fa-share-alt"></i>
            </button>
        </div>
    </div>
`;

    allBlogContainer.appendChild(blogCard);

    // Add event listeners
    blogCard
      .querySelector(".read-more")
      .addEventListener("click", openBlogModal);
    blogCard
      .querySelector(".share-btn")
      .addEventListener("click", handleShareButtonClick);
  });
}

// Function to generate the absolute URL for an image
function getAbsoluteImageUrl(relativeUrl) {
  // If image URL is already absolute, return it as is
  if (relativeUrl.startsWith("http://") || relativeUrl.startsWith("https://")) {
    return relativeUrl;
  }

  // Remove any leading slash if present
  const cleanRelativePath = relativeUrl.startsWith("/")
    ? relativeUrl.substring(1)
    : relativeUrl;

  // Handle GitHub Pages repository paths
  let basePath = window.location.origin;

  // If we're on GitHub Pages, we need to include the repository name in the path
  if (window.location.hostname.includes("github.io")) {
    const pathParts = window.location.pathname.split("/");
    if (pathParts.length > 1 && pathParts[1]) {
      // Add the repository name to the base path
      basePath += "/" + pathParts[1];
    }
  }

  // Combine with origin to get absolute URL
  return `${basePath}/${cleanRelativePath}`;
}

// Function to create a SEO and social media friendly share URL
function createShareableUrl(blogId) {
  // Get the base URL without any parameters or hash
  let baseUrl = window.location.pathname;

  // Handle GitHub Pages project sites that might have a base path
  // Extract up to the root HTML file (index.html, portfolio.html, etc.)
  const htmlFileMatch = baseUrl.match(/^(.*?\/[^\/]+\.html|.*?\/)(?:\?.*)?$/);
  if (htmlFileMatch && htmlFileMatch[1]) {
    baseUrl = htmlFileMatch[1];
  }

  // Add the site origin
  baseUrl = window.location.origin + baseUrl;

  // Create a clean URL with the blog parameter
  return `${baseUrl}?blog=${blogId}#blogs`;
}

// Function to share blog
function shareBlog(blogId) {
  const blog = blogs.find((b) => b.id === parseInt(blogId));
  if (!blog) return;

  // Create the shareable URL
  const shareUrl = createShareableUrl(blogId);

  // Generate absolute URLs for images (ensure they work on GitHub Pages)
  const absoluteImageUrl = getAbsoluteImageUrl(blog.thumbnail);

  // Get the repository name if we're on GitHub Pages
  let repoContext = "";
  if (window.location.hostname.includes("github.io")) {
    // Extract repo name from the pathname for GitHub Pages
    const pathParts = window.location.pathname.split("/");
    if (pathParts.length > 1 && pathParts[1]) {
      repoContext = "/" + pathParts[1];
    }
  }

  // Get the blog details for sharing
  const shareTitle = blog.title;
  const shareText = blog.shortDescription;

  // Update meta tags for rich link previews
  updateMetaTags(shareTitle, shareText, absoluteImageUrl, shareUrl);

  // Use Web Share API if available
  if (navigator.share) {
    navigator
      .share({
        title: shareTitle,
        text: shareText,
        url: shareUrl,
      })
      .then(() => showToast("Blog shared successfully!"))
      .catch((err) => {
        console.log("Error sharing:", err);
        // Fallback to copying URL on error
        copyToClipboard(shareUrl);
        showToast("Blog link copied to clipboard!");
      });
  } else {
    // Fallback to copying URL for browsers without Web Share API
    copyToClipboard(shareUrl);
    showShareDialog(blog, shareUrl);
  }
}

// Function to update meta tags for rich previews
function updateMetaTags(title, description, imageUrl, url) {
  // Helper function to update or create meta tag
  function updateMetaTag(property, content) {
    let meta = document.querySelector(`meta[property="${property}"]`);
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("property", property);
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  }

  // Update Open Graph meta tags
  updateMetaTag("og:title", title);
  updateMetaTag("og:description", description);
  updateMetaTag("og:image", imageUrl);
  updateMetaTag("og:url", url);
  updateMetaTag("og:type", "article");

  // Update Twitter Card meta tags
  updateMetaTag("twitter:card", "summary_large_image");
  updateMetaTag("twitter:title", title);
  updateMetaTag("twitter:description", description);
  updateMetaTag("twitter:image", imageUrl);
}

// Create a custom share dialog for browsers without Web Share API
function showShareDialog(blog, shareUrl) {
  // Check if dialog already exists and remove it
  const existingDialog = document.querySelector(".share-dialog");
  if (existingDialog) {
    document.body.removeChild(existingDialog);
  }

  // Create the dialog
  const dialog = document.createElement("div");
  dialog.className = "share-dialog";

  dialog.innerHTML = `
        <div class="share-dialog-content">
            <span class="close-dialog">&times;</span>
            <h3>Share this blog</h3>
            <div class="share-preview">
                <div class="preview-image" style="background-image: url('${
                  blog.thumbnail
                }')"></div>
                <div class="preview-text">
                    <h4>${blog.title}</h4>
                    <p>${blog.shortDescription}</p>
                </div>
            </div>
            <div class="share-url-container">
                <input type="text" class="share-url-input" value="${shareUrl}" readonly>
                <button class="copy-url-btn">Copy</button>
            </div>
            <div class="social-share-buttons">
                <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  shareUrl
                )}" target="_blank" class="social-btn facebook-btn">
                    <i class="fab fa-facebook-f"></i> Facebook
                </a>
                <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  shareUrl
                )}&text=${encodeURIComponent(
    blog.title
  )}" target="_blank" class="social-btn twitter-btn">
                    <i class="fab fa-twitter"></i> Twitter
                </a>
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  shareUrl
                )}&title=${encodeURIComponent(
    blog.title
  )}" target="_blank" class="social-btn linkedin-btn">
                    <i class="fab fa-linkedin-in"></i> LinkedIn
                </a>
                <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(
                  blog.title + " " + shareUrl
                )}" target="_blank" class="social-btn whatsapp-btn">
                    <i class="fab fa-whatsapp"></i> WhatsApp
                </a>
            </div>
        </div>
    `;

  // Add to body
  document.body.appendChild(dialog);

  // Close dialog functionality
  const closeBtn = dialog.querySelector(".close-dialog");
  closeBtn.addEventListener("click", () => {
    document.body.removeChild(dialog);
  });

  // Close dialog when clicking outside
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      document.body.removeChild(dialog);
    }
  });

  // Copy URL functionality
  const copyBtn = dialog.querySelector(".copy-url-btn");
  const urlInput = dialog.querySelector(".share-url-input");

  copyBtn.addEventListener("click", () => {
    urlInput.select();
    copyToClipboard(shareUrl);
    copyBtn.textContent = "Copied!";
    setTimeout(() => {
      copyBtn.textContent = "Copy";
    }, 2000);
  });
}

// Helper function to copy to clipboard
function copyToClipboard(text) {
  // Use modern clipboard API if available
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text);
  } else {
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    // Make the textarea out of viewport
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
    document.body.removeChild(textArea);
  }
}

// Add toast notification
function showToast(message) {
  // Check if toast container exists, if not create it
  let toastContainer = document.querySelector(".toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toastContainer.appendChild(toast);

  // Add show class after a small delay to trigger animation
  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  // Remove toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("fade-out");
    setTimeout(() => {
      if (toastContainer.contains(toast)) {
        toastContainer.removeChild(toast);
      }
      // Remove container if empty
      if (toastContainer.children.length === 0) {
        document.body.removeChild(toastContainer);
      }
    }, 300);
  }, 3000);
}

// Function to handle direct blog URLs and shared links
function handleSharedBlogLinks() {
  // Check if URL has blog parameter
  const urlParams = new URLSearchParams(window.location.search);
  const sharedBlogId = urlParams.get("blog");

  if (sharedBlogId) {
    const blog = blogs.find((b) => b.id === parseInt(sharedBlogId));
    if (blog) {
      // Ensure we're on the main page first
      if (window.location.hash !== "#blogs") {
        // If not already at blogs section, navigate there
        window.location.hash = "blogs";
      }

      // Handle site navigation
      const blogsSection = document.querySelector("#blogs");
      if (blogsSection) {
        // Smooth scroll to blogs section
        blogsSection.scrollIntoView({ behavior: "smooth" });

        // Wait for scroll to complete before opening modal
        setTimeout(() => {
          // Open the modal with the shared blog
          openBlogModal({
            preventDefault: () => {},
            currentTarget: { getAttribute: () => sharedBlogId },
          });
        }, 500);
      }
    }
  }
}

// Add CSS for share dialog and toast
function addShareStyles() {
  const styleEl = document.createElement("style");
  styleEl.textContent = `
        /* Toast notification styles */
        .toast-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
        }
        
        .toast {
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 12px 20px;
            border-radius: 4px;
            margin-top: 10px;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.3s, transform 0.3s;
            max-width: 300px;
        }
        
        .toast.show {
            opacity: 1;
            transform: translateY(0);
        }
        
        .toast.fade-out {
            opacity: 0;
            transform: translateY(-20px);
        }
        
        /* Share dialog styles */
        .share-dialog {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        
        .share-dialog-content {
            background-color: white;
            width: 90%;
            max-width: 500px;
            border-radius: 8px;
            padding: 24px;
            position: relative;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        
        .close-dialog {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 24px;
            cursor: pointer;
            line-height: 1;
        }
        
        .share-preview {
            display: flex;
            margin: 20px 0;
            border: 1px solid #eee;
            border-radius: 4px;
            overflow: hidden;
        }
        
        .preview-image {
            width: 120px;
            background-size: cover;
            background-position: center;
        }
        
        .preview-text {
            padding: 10px;
            flex: 1;
        }
        
        .preview-text h4 {
            margin: 0 0 8px;
            font-size: 16px;
        }
        
        .preview-text p {
            margin: 0;
            font-size: 14px;
            color: #666;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        
        .share-url-container {
            display: flex;
            margin-bottom: 20px;
        }
        
        .share-url-input {
            flex: 1;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px 0 0 4px;
            font-size: 14px;
        }
        
        .copy-url-btn {
            background-color: #4285f4;
            color: white;
            border: none;
            padding: 0 15px;
            border-radius: 0 4px 4px 0;
            cursor: pointer;
            font-weight: bold;
        }
        
        .social-share-buttons {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }
        
        .social-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            border-radius: 4px;
            color: white;
            text-decoration: none;
            font-weight: bold;
        }
        
        .social-btn i {
            margin-right: 8px;
        }
        
        .facebook-btn { background-color: #3b5998; }
        .twitter-btn { background-color: #1da1f2; }
        .linkedin-btn { background-color: #0077b5; }
        .whatsapp-btn { background-color: #25d366; }
        
        /* Modal share button */
        .blog-share-section {
            margin: 15px 0;
        }
        
        .modal-share-btn {
            display: inline-flex;
            align-items: center;
            background-color: #f8f8f8;
            border: 1px solid #ddd;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
        }
        
        .modal-share-btn i {
            margin-right: 8px;
        }
        
        .modal-share-btn:hover {
            background-color: #f0f0f0;
        }
    `;

  document.head.appendChild(styleEl);
}

// Initialize blogs when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Add share styles
  addShareStyles();

  // Display homepage blogs
  displayHomepageBlogs();

  // Check if all blogs page exists
  const viewAllBtn = document.querySelector(".view-all-blogs-btn");
  if (viewAllBtn) {
    viewAllBtn.addEventListener("click", () => {
      // Hide homepage content
      document.querySelector(".latest-blogs").style.display = "none";

      // Show all blogs container
      const allBlogsSection = document.getElementById("all-blogs-section");
      if (allBlogsSection) {
        allBlogsSection.style.display = "block";
        displayAllBlogs();
      }
    });
  }

  // Handle any shared blog links in URL
  handleSharedBlogLinks();
});
