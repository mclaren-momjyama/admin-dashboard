# 🛠️ Admin Dashboard (MUI + React)

This is a modern, responsive Admin Dashboard built with **React**, **Material UI (MUI)**, and **MUI X DataGrid**. It supports row selection, expansion with activity logs, dark/light theming, pagination, and interactive charts.

---

## 📁 Project Structure & Component Flow

## 🔄 Component Flow

### 1️⃣ **AdminTable.js**

- **Main component** that renders the user table using `MUI DataGrid`.
- Manages all **core state**: selected rows, pagination, row expansion.
- Handles logic for:
  - Expanding rows with smooth scroll into view.
  - Selecting/deselecting rows via checkbox.
  - Deleting selected rows.
  - Passing theme toggle to the toolbar.

#### ➕ Also renders:

- `<AdminTableToolbar />`: Top bar with theme toggle and delete button.
- `<ActivityCollapse />`: Expandable rows showing activity logs + chart.

---

### 2️⃣ **AdminTableColumns.js**

- Exports a function `getAdminTableColumns(...)` that returns the column configuration for the `DataGrid`.
- Columns include:
  - Checkbox selector
  - Row expand/collapse icon
  - Profile image
  - ID, Name, Email, Role
  - Signup date, Last login, Status

💡 **Note:** It takes in `isRowSelected`, `handleSelectRow`, `toggleRow`, and `openRows` as props from the parent for dynamic behavior.

---

### 3️⃣ **AdminTableToolbar.js**

- Displays a top toolbar with:
  - Selected row count
  - Delete button (calls `onDelete`)
  - Dark/light mode toggle button

---

### 4️⃣ **ActivityCollapse.js**

- Renders expandable activity section for each user.
- Displays:
  - Activity logs (timestamp, action, device)
  - A **LineChart** (via `@mui/x-charts`) showing activity by time/date.
- Uses `forwardRef` to allow smooth `scrollIntoView()` when expanded.

---

### 5️⃣ **data.js**

- Mock dataset of users.
- Each user object contains:
  - id, name, email, role, signup date, last login
  - Profile image URL
  - `activityLogs`: timestamped activity objects with device/IP.

---

## 🎨 Theme Support

The app uses a custom `theme.js` with Material UI’s theming system to support:

- Light and dark modes
- Consistent color palette across components

Toggled from `AdminTableToolbar.js` and passed down via props.

---


