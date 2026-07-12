Review the existing OruHQ Figma file and improve the current designs rather than creating new screens from scratch.

The goal is to fix broken workflows, complete missing screens, improve dashboard usability, improve mobile responsiveness, and strengthen the core product concept that Projects, Tasks, Invoices, and Payments are interconnected objects rather than isolated modules.

---

## OVERALL PRODUCT PHILOSOPHY

OruHQ is a freelancer operating system.

Users should be able to start from any entry point:

* Create Project
* Create Invoice
* Record Payment

The system should guide users toward connecting related records later.

The UI should constantly communicate relationships between:

Projects ↔ Tasks

Projects ↔ Invoices

Projects ↔ Payments

Invoices ↔ Payments

Invoices → Create Project

Payments → Create Project

Payments → Create Invoice

Projects → Create Invoice

Projects → Record Payment

The product should never feel like four separate modules living in a sidebar.

---

## 1. FIX BROKEN CREATION FLOWS

The existing:

* Create Project
* Create Invoice
* Record Payment

buttons are currently non-functional or incomplete.

Build all missing screens required to complete these workflows from start to finish.

Every button should lead to a complete experience with proper forms, empty states, success states, detail views, and relationship management.

### FLOW A

Create Project

↓

Project Details

* Project Name
* Client Name (optional)
* Budget
* Deadline

↓

Add Tasks

(Simple checklist system)

↓

Billing Section

Choose:

* Attach Existing Invoice
  OR
* Create New Invoice

↓

Payments Section

Choose:

* Attach Existing Payment
  OR
* Record New Payment

↓

Project Workspace

---

### FLOW B

Create Invoice

↓

Invoice Details

↓

Project Connection

Choose:

* Attach Existing Project
  OR
* Create New Project

↓

Tasks

Add tasks related to the work

↓

Payments

Record Payment
OR
Attach Existing Payment

↓

Invoice Detail View

---

### FLOW C

Record Payment

↓

Payment Details

↓

Invoice Connection

Choose:

* Attach Existing Invoice
  OR
* Create New Invoice

↓

Project Connection

Choose:

* Attach Existing Project
  OR
* Create New Project

↓

Tasks

Add Tasks

↓

Payment Detail View

---

Every flow should feel natural and connected.

Use smart empty states and contextual actions.

Examples:

"No Invoice Linked Yet"

"Create Invoice"

"Attach Existing Invoice"

"No Payment Recorded"

"Record Payment"

"Attach Existing Payment"

Include success states after creation so users understand what was created and what can be linked next.

---

## 2. FIX THE INITIAL EMPTY STATE EXPERIENCE

The initial onboarding-to-dashboard experience is currently broken.

After onboarding, users should first land on a meaningful empty-state dashboard before any projects, invoices, or payments exist.

Design a complete first-time user experience.

The dashboard should acknowledge onboarding data and personalize the experience.

Examples:

"Welcome, John"

"Let's set up your first project"

"You're ready to start managing work and payments"

Use the actual onboarding data entered by the user instead of generic placeholder copy.

The greeting, dashboard copy, and empty-state messaging should dynamically reflect onboarding inputs.

The empty-state dashboard should clearly present the three primary actions:

* Create Project
* Create Invoice
* Record Payment

and explain how they connect together.

---

## 3. DASHBOARD REDESIGN

Keep the current dashboard structure but improve hierarchy and layout.

### TOP NAVIGATION

Replace the current dashboard header structure with a modern top navigation inspired by:

https://dribbble.com/shots/25265827-Vulpo-Top-Header-bar

Characteristics:

* Clean horizontal top bar
* Logo on left
* Search in center
* User profile on right
* Quick actions accessible from header
* Spacious layout
* Minimal visual noise

---

### GREETING + PRIMARY ACTIONS

The current action buttons located beneath the summary card should be repositioned.

Move:

* Create Project
* Create Invoice
* Record Payment

to the top-right area of the dashboard.

Requirements:

* Place them on the same horizontal row as the greeting.
* Example layout:

Left:
"Good morning, John"

Right:
Create Project | Create Invoice | Record Payment

* Buttons should not stretch across the viewport.
* Maximum button width should be approximately 200px.
* Use compact action sizing appropriate for desktop dashboards.
* Maintain proper spacing and hierarchy.

For mobile layouts, use your best judgment as a senior product designer.

If full-width buttons improve usability on smaller screens, they may remain stacked or expanded.

---

### VISUAL STYLE UPDATE

Replace heavy card-based layouts.

Use:

* Outline borders
* Soft dividers
* Subtle section containers

instead of large floating cards.

Background:

#FCFCFC

Maintain:

* Archivo typography
* #8D0000 primary color
* #F6F2EC brand background usage where appropriate
* #DAE8CC
* #CCE8E8
* #DACCE8

Design should feel closer to Notion and Linear.

Less dashboard widgets.

More structured workspace.

---

## 4. MOVE AT-RISK PROJECTS

Move At-Risk Projects to the top-right area of the dashboard.

Position:

Top row

Left:
Active Projects

Right:
At-Risk Projects

This should help users immediately understand:

* What is active
* What needs attention

without scrolling.

At-Risk Projects should remain a simple list.

Not alert cards.

Not warning banners.

---

## 5. LOGOUT FLOW

Replace:

"Back to Landing"

with

"Logout"

When clicked:

* End current session state
* Return user to landing page

Place logout inside:

* User menu
  OR
* Top navigation profile dropdown

Do not treat landing page as an internal destination.

---

## 6. LANDING PAGE UPDATE

I will provide updated hero section designs.

Review the attached hero designs and update the landing page accordingly.

Maintain:

* Existing branding
* Existing color palette
* Existing typography

Ensure the updated hero reflects the core product message:

Work and money connected.

Users can start from Projects, Invoices, or Payments.

Everything stays linked together.

Update copy and visual hierarchy if needed.

---

## 7. MOBILE DASHBOARD REDESIGN

Current mobile dashboard feels like a scaled-down desktop.

Redesign mobile layouts to feel mobile-native.

Use this reference style:

https://dribbble.com/shots/8000387-Jobbyen-Home-Search

Characteristics:

* Better spacing
* Larger tap targets
* Cleaner information hierarchy
* Card stacking where appropriate
* Mobile-first navigation
* Easier scanning

Mobile users should immediately see:

1. Active Projects
2. At-Risk Projects
3. Tasks
4. Revenue Snapshot

without excessive scrolling.

For mobile action buttons:

* Prioritize usability over desktop consistency.
* Stack actions if necessary.
* Use larger touch targets.
* Ensure Create Project, Create Invoice, and Record Payment remain highly discoverable.

---

## 8. PROJECT WORKSPACE IMPROVEMENTS

The Project Detail screen should become the main operational workspace.

Include:

### Project Information

* Name
* Client
* Budget
* Deadline

### Tasks

Simple checklist

### Linked Invoices

* Create Invoice
* Attach Existing Invoice

### Linked Payments

* Record Payment
* Attach Existing Payment

Make relationships visually obvious.

Users should understand:

"This project has 2 invoices and 1 payment"

without opening multiple screens.

Provide clear relationship summaries and quick actions directly within the workspace.

---

## FINAL GOAL

Refine the existing OruHQ designs into a connected freelancer operating system.

Prioritize:

* Workflow completion
* Missing screen creation
* Functional Create Project flow
* Functional Create Invoice flow
* Functional Record Payment flow
* Proper empty-state onboarding experience
* Personalized dashboard copy using onboarding data
* Relationship visibility
* Cleaner dashboard hierarchy
* Better mobile responsiveness
* Simpler visual design
* Connected work + money experience

Do not redesign for the sake of redesigning.

Improve the existing work while preserving the OruHQ identity and design language.
