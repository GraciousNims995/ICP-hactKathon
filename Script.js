<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SMARTEDU School Management System</title>
  <link rel="stylesheet" href="style.css">
  <script src="text.js" defer></script>
</head>
<body>
  <div class="app">
    <!-- Sidebar -->
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <h2 class="logo">SMARTEDU</h2>
        <button class="close-sidebar" id="closeSidebar">
          <i data-lucide="x"></i>
        </button>
      </div>
      <nav class="sidebar-nav">
        <a href="#" class="nav-item active">
          <i data-lucide="bar-chart"></i>
          <span>Dashboard</span>
        </a>
        <a href="" class="nav-item">
          <i data-lucide="users"></i>
          <span>Students</span>
        </a>
        <a href="#" class="nav-item">
          <i data-lucide="calendar"></i>
          <span>Attendance</span>
        </a>
        <a href="#" class="nav-item">
          <i data-lucide="graduation-cap"></i>
          <span>Grades</span>
        </a>
        <a href="#" class="nav-item">
          <i data-lucide="credit-card"></i>
          <span>Fees</span>
        </a>
        <a href="#" class="nav-item">
          <i data-lucide="clock"></i>
          <span>Timetable</span>
        </a>
        <a href="#" class="nav-item">
          <i data-lucide="message-square"></i>
          <span>Messages</span>
        </a>
        <a href="#" class="nav-item">
          <i data-lucide="settings"></i>
          <span>Settings</span>
        </a>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="main">
      <!-- Header -->
      <header class="header">
        <div class="header-left">
          <button class="menu-button" id="menuButton">
            <i data-lucide="menu"></i>
          </button>
          <h1 class="header-title">SMARTEDU</h1>
        </div>
        <div class="header-right">
          <button class="notification-button">
            <i data-lucide="bell"></i>
            <span class="notification-dot"></span>
          </button>
          <div class="user-info">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" class="user-avatar">
            <span class="user-name">John Doe</span>
          </div>
          <button class="logout-button">
            <i data-lucide="log-out"></i>
          </button>
        </div>
      </header>

      <!-- Dashboard Content -->
      <div class="content">
        <div class="welcome-section">
          <h1>Dashboard</h1>
          <p>Welcome back, DANIEL</p>
        </div>

        <div class="dashboard-cards">
          <div class="card">
            <div class="card-content">
              <div class="card-info">
                <p class="card-title">Total Students</p>
                <h3 class="card-value">2,345</h3>
                <p class="card-trend positive">↑ 12%</p>
              </div>
              <div class="card-icon">
                <i data-lucide="users"></i>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-content">
              <div class="card-info">
                <p class="card-title">Average Grade</p>
                <h3 class="card-value">B+</h3>
                <p class="card-trend positive">↑ 5%</p>
              </div>
              <div class="card-icon">
                <i data-lucide="graduation-cap"></i>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-content">
              <div class="card-info">
                <p class="card-title">Classes Today</p>
                <h3 class="card-value">8</h3>
              </div>
              <div class="card-icon">
                <i data-lucide="clock"></i>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-content">
              <div class="card-info">
                <p class="card-title">New Messages</p>
                <h3 class="card-value">14</h3>
              </div>
              <div class="card-icon">
                <i data-lucide="message-square"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="dashboard-grid">
          <!-- Recent Activity -->
          <div class="dashboard-panel">
            <h2>Recent Activity</h2>
            <div class="activity-list">
              <div class="activity-item">
                <div class="activity-icon">
                  <i data-lucide="users"></i>
                </div>
                <div class="activity-details">
                  <p>New student registered</p>
                  <span>2 hours ago</span>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon">
                  <i data-lucide="users"></i>
                </div>
                <div class="activity-details">
                  <p>New student registered</p>
                  <span>3 hours ago</span>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon">
                  <i data-lucide="users"></i>
                </div>
                <div class="activity-details">
                  <p>New student registered</p>
                  <span>4 hours ago</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Upcoming Events -->
          <div class="dashboard-panel">
            <h2>Upcoming Events</h2>
            <div class="events-list">
              <div class="event-item">
                <div class="event-date">
                  <span class="month">MAR</span>
                  <span class="day">15</span>
                </div>
                <div class="event-details">
                  <p>Parent-Teacher Meeting</p>
                  <span>09:00 AM - 11:00 AM</span>
                </div>
              </div>
              <div class="event-item">
                <div class="event-date">
                  <span class="month">MAR</span>
                  <span class="day">16</span>
                </div>
                <div class="event-details">
                  <p>Parent-Teacher Meeting</p>
                  <span>09:00 AM - 11:00 AM</span>
                </div>
              </div>
              <div class="event-item">
                <div class="event-date">
                  <span class="month">MAR</span>
                  <span class="day">17</span>
                </div>
                <div class="event-details">
                  <p>Parent-Teacher Meeting</p>
                  <span>09:00 AM - 11:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>


  
  <script src="script.js"></script>
</body>
</html>
