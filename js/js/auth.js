// ========== AUTH ==========
const USERS_KEY = 'hd24h_users';
const CURRENT_USER_KEY = 'hd24h_currentUser';

// Lấy danh sách user
function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

// Lưu danh sách user
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Lấy user đang đăng nhập
function getCurrentUser() {
  return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
}

// Lưu user đang đăng nhập
function setCurrentUser(user) {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

// Đăng xuất
function logout() {
  localStorage.removeItem(CURRENT_USER_KEY);
  window.location.href = 'login.html';
}

// Kiểm tra đã đăng nhập chưa
function checkLogin() {
  const user = getCurrentUser();
  if (!user) {
    window.location.href = 'login.html';
  }
  return user;
}

// Hiển thị thông báo
function showAlert(id, message, type = 'error') {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerText = message;
  el.className = `alert alert-${type}`;
  el.style.display = 'block';
}

// Ẩn thông báo
function hideAlert(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'none';
}

// ========== ĐĂNG KÝ ==========
function handleRegister(e) {
  e.preventDefault();
  hideAlert('alert');

  const fullname = document.getElementById('fullname').value.trim();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirm = document.getElementById('confirm').value.trim();

  // Kiểm tra rỗng
  if (!fullname || !username || !password || !confirm) {
    showAlert('alert', 'Vui lòng điền đầy đủ tất cả các trường!');
    return;
  }

  if (username.length < 4) {
    showAlert('alert', 'Tên đăng nhập phải có ít nhất 4 ký tự!');
    return;
  }

  if (password.length < 6) {
    showAlert('alert', 'Mật khẩu phải có ít nhất 6 ký tự!');
    return;
  }

  if (password !== confirm) {
    showAlert('alert', 'Mật khẩu xác nhận không khớp!');
    return;
  }

  const users = getUsers();
  const existed = users.find(u => u.username === username);
  if (existed) {
    showAlert('alert', 'Tên đăng nhập đã tồn tại!');
    return;
  }

  // Lưu user mới (chỉ dùng cho mục đích học tập)
  users.push({
    fullname,
    username,
    password, // Lưu ý: chỉ dùng trong bài tập, không dùng thật
    createdAt: new Date().toLocaleString('vi-VN')
  });
  saveUsers(users);

  showAlert('alert', 'Đăng ký thành công! Đang chuyển đến trang đăng nhập...', 'success');
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 1500);
}

// ========== ĐĂNG NHẬP ==========
function handleLogin(e) {
  e.preventDefault();
  hideAlert('alert');

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    showAlert('alert', 'Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!');
    return;
  }

  const users = getUsers();
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    showAlert('alert', 'Tên đăng nhập hoặc mật khẩu không đúng!');
    return;
  }

  // Lưu trạng thái đăng nhập
  setCurrentUser({
    fullname: user.fullname,
    username: user.username
  });

  showAlert('alert', 'Đăng nhập thành công! Đang chuyển trang...', 'success');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1200);
}

// Cập nhật navbar theo trạng thái đăng nhập
function updateNavbar() {
  const user = getCurrentUser();
  const authArea = document.getElementById('authArea');
  if (!authArea) return;

  if (user) {
    authArea.innerHTML = `
      <a href="profile.html" class="btn btn-outline">${user.fullname}</a>
      <button onclick="logout()" class="btn btn-danger">Đăng xuất</button>
    `;
  } else {
    authArea.innerHTML = `
      <a href="login.html" class="btn btn-outline">Đăng nhập</a>
      <a href="register.html" class="btn btn-primary">Đăng ký</a>
    `;
  }
}

// Chạy khi load trang
document.addEventListener('DOMContentLoaded', updateNavbar);