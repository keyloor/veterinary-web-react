# 🐾 Veterinary Web React Application

<div align="center">
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img alt="Cypress" src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white" />
</div>

<br />

## 📖 Description

This project is a modern, responsive web application developed in **React (with TypeScript and Vite)** that allows veterinary clients to conveniently view and manage basic information about their pets. The application focuses exclusively on the **client role**, delivering a streamlined, intuitive, and accessible user experience across all devices.

> **Academic Context:** This project was developed as part of the course **IF0004 – Desarrollo de Software II**.

---

## 🎯 Objective

Develop a React-based web application that enables clients to visualize and manage pet-related information through a minimal set of essential screens. The project emphasizes clean code, modern frontend architecture, version control best practices, and rigorous end-to-end (E2E) testing.

---

## ✨ Features

- **Pet Management:** View lists of pets and their detailed profiles.
- **Client Dashboard:** Clean overview of client information and active pets.
- **Responsive Navigation:** Accessible routing and layouts (Header, Footer, and side menus) built with React Router.
- **Modern UI/UX:** Styled with **Tailwind CSS** and enriched with **Framer Motion** animations and **Lucide React** icons.
- **Quality Assurance:** Comprehensive user flows tested via E2E testing.

---

## 🛠️ Tech Stack & Architecture

- **Core:** React 19, TypeScript, Vite
- **Routing:** React Router DOM v7
- **Styling & UI:** Tailwind CSS v4, Framer Motion, Lucide React
- **Testing:** Cypress (E2E)
- **Project Structure:**
  - All data is currently mocked/simulated (no backend integration yet).

---

## 🚀 Getting Started

To run the project locally, follow these steps:

### Prerequisites

Ensure you have **Node.js** (v18+ recommended) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/keyloor/veterinary-web-react.git
   ```

2. **Navigate to the application directory:**
   ```bash
   cd veterinary-web-react
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   *The app will be available at [http://localhost:5173](http://localhost:5173)*

---

## 🧪 E2E Testing

End-to-end testing ensures the application's critical paths function as expected from a user's perspective. 

We use **Cypress** to test the entire application flow:
* **6 Dedicated E2E tests** covering full user journeys.
* Validates all required screens (Dashboard, Profiles, Header/Footer navigation).
* QA evidence is documented within Jira stories.

**To run the tests:**
Ensure you are in the project root directory and run:
```bash
# This will start the server and open the Cypress test runner concurrently
npm run cypress
```

---

## 📋 Project Management (Jira) & Version Control

- **Agile Development:** Managed via **Jira Software** using a Kanban-style workflow (`To Do → In Progress → QA → Done`).
- **User Stories:** The backlog consists of 8 precisely defined user stories with acceptance criteria and Story Points.
- **Git Flow:** Active use of feature branches and Pull Requests for code reviews. Commits reflect iterative, real-world development progress.

---

## 👥 Team Members

- **Keylor Barrantes Gómez**
- **Juan Pablo Jiménez Vargas**
- **Sebastian Marín Fernandez**
- **Diego Arce Muñoz**
- **Andrea González Rodríguez**

---

## 📌 Notes

- This project is purely a **frontend application**; there is no attached database or backend server.
- The application code, variables, and comments are written entirely in **English**, maintaining international development standards.
