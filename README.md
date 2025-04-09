# WEB-SLIDER
# **Image Slider with JavaScript**  

📷 **A sleek, responsive, and interactive image slider built with vanilla JavaScript, HTML, and CSS.**  

## **✨ Features**  

✅ **Smooth Transitions** – Animated sliding effects for seamless image changes.  
✅ **Auto-Sliding** – Automatically cycles through images with adjustable timing.  
✅ **Keyboard & Touch Support** – Navigate with arrow keys or swipe on mobile.  
✅ **Infinite Loop** – Seamlessly loops from first to last image and vice versa.  
✅ **Pause on Hover** – Auto-slider pauses when the user interacts.  
✅ **Responsive Design** – Works on all screen sizes (desktop, tablet, mobile).  
✅ **Preloading Images** – Ensures smooth transitions without loading delays.  
✅ **Clean & Modern UI** – Stylish buttons with hover effects and subtle animations.  

## **🚀 Demo**  

🔗 **[Live Demo](#)** *(Replace with your GitHub Pages or Netlify link)*  

![Slider Preview](https://via.placeholder.com/800x400?text=JavaScript+Slider+Demo)  

## **🛠️ Installation**  

1. **Clone the repository:**  
   ```sh
   git clone https://github.com/your-username/js-image-slider.git
   ```
2. **Open `index.html` in your browser:**  
   ```sh
   cd js-image-slider && open index.html
   ```
   *(or use a local server like Live Server in VSCode)*  

## **📂 Project Structure**  

```
js-image-slider/
├── index.html        # Main HTML file
├── style.css         # Styling for the slider
├── script.js         # JavaScript functionality
└── README.md         # Project documentation
```

## **🎨 Customization**  

### **Change Images**  
Edit the `images` array in `script.js`:  
```js
const images = [
  "path/to/image1.jpg",
  "path/to/image2.jpg",
  // Add more images
];
```

### **Adjust Auto-Slide Timing**  
Modify the interval in `script.js` (default: 3000ms = 3s):  
```js
setInterval(showNextSlide, 3000); // Change to desired milliseconds
```

### **Modify Transition Effects**  
Edit the CSS in `style.css`:  
```css
#img {
  transition: transform 0.8s ease-in-out, opacity 0.8s ease;
}
```

## **📜 License**  
This project is open-source under the **[MIT License](LICENSE)**.  

## **💡 Contributing**  
Feel free to submit issues or pull requests!  

🔗 **GitHub Repository:** [https://github.com/your-username/js-image-slider](https://github.com/your-username/js-image-slider)  

---

🌟 **Enjoy the slider!** If you like this project, give it a ⭐ on GitHub! 🚀
