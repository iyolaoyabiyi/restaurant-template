# Naija Restaurant Website Template

This repository contains the Naija Restaurant website template, designed to create a modern, responsive, and interactive restaurant website. The template features sections for showcasing menu items, services, reservations, and much more. Below is a detailed guide to help you understand, use, and customize the template.

---

## Features

### 1. **Responsive Design**

- Built with Bootstrap for compatibility across various screen sizes.

### 2. **Interactive Components**

- Carousel for hero sections.
- Accordion for FAQs.
- Modals for reservations and ordering.

### 3. **Dynamic Content Loading**

- Content such as menu items and FAQs are dynamically fetched and rendered.

### 4. **Customizable Navigation**

- Smooth scrolling and active state management for navigation links.

### 5. **Booking and Order Forms**

- Forms for booking reservations and placing orders.
- Input validation and limits for date and time.

---

## Directory Structure

```plaintext
project-folder/
|
|-- assets/
|   |-- css/                # CSS files for styling
|   |-- img/                # Images for the website
|   |-- js/                 # JavaScript files
|   |-- libs/content.json   # JSON file for menu and FAQ content
|
|-- index.html              # Main HTML file
|-- README.md               # Documentation
```

---

## Getting Started

### 1. **Setup**

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project folder:

```bash
cd project-folder
```

### 2. **Dependencies**

This template uses Bootstrap and Bootstrap Icons hosted via CDNs. Ensure you have an active internet connection or download the libraries locally for offline use.

---

## Usage

### 1. **Customizing Content**

- **Logo and Images:** Replace images in the `assets/img` folder.
- **Menu and FAQs:** Update `assets/libs/content.json` with your data.

### 2. **Menu and FAQ Content Format**

```json
{
  "menu": [
    {
      "name": "Jollof Rice",
      "description": "Delicious West African dish made with rice and tomato sauce.",
      "price": 1500,
      "category": "Continental"
    }
  ],
  "faqs": [
    {
      "question": "What are your opening hours?",
      "answer": "We are open from 9 AM to 10 PM daily."
    }
  ]
}
```

### 3. **Dynamic Features**

- The menu and FAQ sections dynamically render content from the `content.json` file.

### 4. **Modals**

- **Order Modal:** Triggered by the "Place Order" button.
- **Booking Modal:** Triggered by the "Book Reservation" button.

---

## JavaScript Overview

### 1. **Dynamic Content Handling**

- `fetchContent`: Fetches menu and FAQ data from `content.json`.
- `htmlMenuCard`: Generates HTML for menu items.
- `faqHtml`: Generates HTML for FAQ items.

### 2. **Utility Functions**

- `setDateLimit`: Sets min and max dates for booking.
- `setTimeLimit`: Sets min and max times for booking.
- `addScrollSpy`: Manages active state of navigation links.

---

## Customization

### 1. **Styling**

- Modify `assets/css/style.css` to apply custom styles.
- Update Bootstrap overrides if needed.

### 2. **JavaScript**

- Extend functionality by modifying `assets/js/script.js`.

---

## Deployment

### 1. **Local Deployment**

1. Open `index.html` in your browser.

### 2. **Web Hosting**

1. Host the project on platforms like Netlify, Vercel, or GitHub Pages.
2. Ensure all paths in `content.json` and other files are correct for the hosting environment.

---

## Acknowledgments

- Bootstrap: https://getbootstrap.com/
- Bootstrap Icons: https://icons.getbootstrap.com/

---

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per your needs.
