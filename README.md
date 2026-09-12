# 🚀 Dev Stack Builder

An interactive web application designed for developers to build, manage, and customize their personalized software development stack.

---

## 🛠️ Technologies Used

- **Frontend Library:** React.js (with Vite)
- **Language:** TypeScript / JavaScript (ES6+)
- **Styling:** Tailwind CSS & DaisyUI
- **Notifications:** React-Toastify
- **Data Source:** JSON (Technology Data)

---

## ✨ Key Features

- **Dynamic Stack Management:** Add or remove technologies from your custom stack in real-time with automatic state sync.
- **Interactive UI & Feedback:** Instant toast notifications when adding/removing items, featuring empty-state dynamic UI rendering.
- **Responsive & Modern Design:** Styled with Tailwind CSS for a seamless layout across mobile, tablet, and desktop viewports.

---

## 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript. It makes writing React components simpler and more readable by combining UI structure with logic in one place.

### 2. What is the difference between props and state?
**Answer:** 
- **Props** are read-only data passed from a parent component to a child component.
- **State** is internal data managed within a component that can change over time and triggers a re-render when updated.

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:** `useState` allows React functional components to hold and update local state. In this project, it was used in the parent component to manage the `selectedTechnologies` array for adding and removing items.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** `useEffect` handles side effects in React, such as fetching data or updating the DOM. It was used to fetch the technology items from a local JSON file or asynchronous promise when the component mounts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** React uses the unique `key` prop to identify which items have changed, been added, or removed. This helps React optimize performance by only re-rendering the specific list items that changed.

### 6. What is conditional rendering? Show one place you used it.
**Answer:** Conditional rendering means displaying UI elements based on specific conditions. In this project, it was used to render the empty state box (`Your stack is empty.`) when `selectedTechnologies.length === 0`.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**
- **Parent to Child:** Data is passed down via `props`.
- **Child to Parent:** The parent passes a function via `props`, and the child invokes that function with data as arguments.

---

## 📤 Submission Links

- **GitHub Repository Link:** `https://github.com/asad4405/dev-stack`
- **Live Site Link:** `https://dev-stack-react-app.netlify.app/`