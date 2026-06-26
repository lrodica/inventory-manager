# Product Requirements Document (PRD)

## 1. Product Overview

Personal Inventory Manager is a web application designed to help users track household items such as food, medications, and other consumables.

The goal is to provide a simple overview of items, their status, and expiration dates.

---

## 2. Problem Statement

Users often lose track of items they own, leading to waste (expired products) or unnecessary duplicate purchases.

This app solves that by centralizing inventory tracking in one place.

---

## 3. Target Users

- Families
- Individuals managing household inventory
- Users who want to track expiration dates and stock levels

---

## 4. Core Features (MVP)

### 4.1 Authentication

- User authentication (login/logout)
- Future: OAuth / social login

### 4.2 Inventory Management

- View all items
- Add new item
- Edit an existing item
- Delete item
- Search items

### 4.3 Item Properties

Each item contains:

- Name
- Category (food, medicine, etc.)
- Expiration date
- Quantity
- Status (active / expired / expiring soon)

---

## 5. UI Behavior

- Dashboard shows all items in a table/list
- Expired items highlighted in red
- Soon-to-expire items highlighted in orange
- Normal items shown in default style

---

## 6. Future Enhancements

- Shopping list feature
- Notifications for expiring items
- Barcode scanning for items
- Multi-user household accounts
- Mobile version

---

## 7. Out of Scope (MVP)

- Payment systems
- External integrations (e.g. supermarkets)
- Advanced analytics

---

## 8. Success Criteria

The MVP is considered successful if:

- Users can manage items (CRUD)
- Expiring items are visually highlighted
- Application is usable for daily household tracking
