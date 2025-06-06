// localStorage.clear()
const employees = [
  {
    id: 1,
    firstName: "John",
    email: "employee1@example.com",
    password: "123",
    taskCount: 4,
    activeTasks: 1,
    newTasks: 1,
    completedTasks: 1,
    failedTasks: 1,
    tasks: [
      {
        title: "Prepare Report",
        description: "Complete the monthly sales report",
        date: "2025-02-10",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Team Meeting",
        description: "Weekly sync with the sales team",
        date: "2025-02-11",
        category: "Meetings",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Client Feedback",
        description: "Review client feedback and notes",
        date: "2025-02-08",
        category: "Feedback",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Email Follow-up",
        description: "Send follow-up emails to leads",
        date: "2025-02-09",
        category: "Communication",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    firstName: "Sarah",
    email: "employee2@example.com",
    password: "123",
    taskCount: 2,
    activeTasks: 0,
    newTasks: 1,
    completedTasks: 0,
    failedTasks: 1,
    tasks: [
      {
        title: "Fix Website Bug",
        description: "Resolve login issue",
        date: "2025-02-09",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Database Error",
        description: "Investigate and resolve DB issue",
        date: "2025-02-07",
        category: "IT",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    firstName: "Michael",
    email: "employee3@example.com",
    password: "123",
    taskCount: 5,
    activeTasks: 2,
    newTasks: 1,
    completedTasks: 1,
    failedTasks: 1,
    tasks: [
      {
        title: "Design New Logo",
        description: "Rebranding project",
        date: "2025-02-14",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Update UI",
        description: "Dashboard UI improvements",
        date: "2025-02-15",
        category: "UI/UX",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Mockup Review",
        description: "Review wireframe mockups",
        date: "2025-02-10",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Brand Guide",
        description: "Create brand style guide",
        date: "2025-02-13",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Old Asset Cleanup",
        description: "Remove outdated design assets",
        date: "2025-02-12",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    firstName: "Emily",
    email: "employee4@example.com",
    password: "123",
    taskCount: 3,
    activeTasks: 1,
    newTasks: 0,
    completedTasks: 2,
    failedTasks: 0,
    tasks: [
      {
        title: "Marketing Plan",
        description: "Create Q2 marketing strategy",
        date: "2025-02-13",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Ad Campaign",
        description: "Launch Google Ads campaign",
        date: "2025-02-14",
        category: "Advertising",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Blog Article",
        description: "Write blog about trends",
        date: "2025-02-10",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    firstName: "David",
    email: "employee5@example.com",
    password: "123",
    taskCount: 1,
    activeTasks: 0,
    newTasks: 0,
    completedTasks: 0,
    failedTasks: 1,
    tasks: [
      {
        title: "Customer Escalation",
        description: "Handle angry customer call",
        date: "2025-02-11",
        category: "Support",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];  
    export const setLocalStorage=()=>{
        localStorage.setItem("employees",JSON.stringify(employees));
        localStorage.setItem("admin",JSON.stringify(admin));
    }
    export const getLocalStorage=()=>{
        const employees=JSON.parse(localStorage.getItem("employees"));
        const admin=JSON.parse(localStorage.getItem("admin"));
        return{employees,admin};
    }
  