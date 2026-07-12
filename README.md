🤖 AI Code Reviewer AI Code Reviewer is an interactive web platform designed for
automated code auditing, analysis, and review using Artificial Intelligence. The
system analyzes uploaded files, identifies bugs across varying severity levels,
calculates an overall quality Score, and generates optimized code suggestions. A
distinct feature is the gamification of the process: reviews are conducted by
various "AI Personas" (e.g., Nitpicker Senior), each possessing a unique tone,
communication style, and level of strictness.

🚀 Key Features Comprehensive AI Audit: Automated code quality assessment
(Scoring), generation of a concise summary verdict, and detailed bug breakdowns.

Smart Contextual Binding (Issues Tracking): Display of identified issues grouped
by severity (Critical, Warning, Suggestion), with precise source code line
numbers and actionable fix recommendations.

Interactive Code Diff Viewer: A custom split-screen interface for comparing
"Before" and "After" code versions. The UI architecture allows one panel to
occupy 95% of the screen width while the other remains at 5% as a collapsed tab,
allowing for instant, smooth swapping between versions on click.

Atomic Copying: An integrated system to copy source or fixed code in a single
click, featuring instant visual feedback and DOM event isolation
(stopPropagation).

Data Resilience: Robust parsing and validation of incoming metadata (including
handling corrupted JSON strings within the DB) with automatic fallback states
for the UI.

Review History: A dynamic feed of recent reviews utilizing precise data fetching
based on relational database connections.

🛠 Tech Stack Frontend: Next.js (App Router), React, TypeScript, Tailwind CSS,
Lucide React.

Backend & DB: Node.js, Drizzle ORM, SQLite.
