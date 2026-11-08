// ========== DỮ LIỆU TIN TỨC ==========
const newsData = [
  {
    id: 1,
    title: "Học sinh phổ thông vẫn chịu áp lực học tập cao",
    category: "pressure",
    date: "31/12/2023",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&h=600&fit=crop&q=80",
    summary: "Khảo sát 421 học sinh THPT tại TP Thủ Đức cho thấy tỷ lệ chịu áp lực học tập mức nặng lên tới 33,5%.",
    content: "Theo khảo sát thực hiện từ tháng 4 đến tháng 5/2023 trên 421 học sinh THPT tại TP Thủ Đức (TPHCM), tỷ lệ chịu áp lực học tập theo 3 mức độ nhẹ, vừa, nặng lần lượt là 35,9%, 30,6% và 33,5%. Tỷ lệ lo âu đạt 35,6%.\n\nGần 90% học sinh được khảo sát có học thêm ngoài giờ và chịu áp lực cao hơn so với những em không học thêm."
  },
  {
    id: 2,
    title: "Cha mẹ ép con học tập quá sức sẽ bị phạt đến 10 triệu đồng",
    category: "pressure",
    date: "05/11/2025",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&h=600&fit=crop&q=80",
    summary: "Nghị định 282/2025 quy định phạt 5-10 triệu đồng đối với hành vi cưỡng ép thành viên gia đình học tập quá sức.",
    content: "Theo Nghị định 282 của Chính phủ, hành vi cưỡng ép thành viên gia đình học tập quá sức sẽ bị phạt tiền từ 5 đến 10 triệu đồng. Đây là lần đầu tiên pháp luật Việt Nam chính thức coi việc ép con học quá sức là hành vi bạo lực gia đình."
  },
  {
    id: 3,
    title: "Khi học sinh trường chuyên đóng cửa, nhốt mình vì áp lực thi trượt",
    category: "pressure",
    date: "06/11/2025",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&h=600&fit=crop&q=80",
    summary: "Không ít học sinh phải nhập viện điều trị trầm cảm vì áp lực học tập và kỳ vọng gia đình.",
    content: "ThS Nguyễn Đình Sơn, chuyên gia tâm lý, cho biết không ít học sinh đang chịu áp lực học tập, thi cử đến mức phải nhập viện điều trị bệnh trầm cảm.\n\nMột học sinh trường chuyên nổi tiếng chỉ vì kết quả cuộc thi học sinh giỏi không như kỳ vọng đã đóng cửa, nhốt mình nhiều ngày."
  },
  {
    id: 4,
    title: "Thứ trưởng Bộ GD&ĐT: Tuyệt đối không che giấu vụ việc bạo lực học đường",
    category: "violence",
    date: "04/11/2026",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&h=600&fit=crop&q=80",
    summary: "Thứ trưởng Đoàn Trung Kiên khẳng định vụ việc có dấu hiệu tội phạm phải chuyển cơ quan có thẩm quyền.",
    content: "Tại Họp báo Chính phủ thường kỳ sáng 4/11/2026, Thứ trưởng Bộ GD&ĐT Đoàn Trung Kiên khẳng định: Đối với vụ việc bạo lực học đường có dấu hiệu tội phạm phải chuyển cơ quan có thẩm quyền giải quyết, tuyệt đối không bao che."
  },
  {
    id: 5,
    title: "Gần 20% học sinh Việt bị bắt nạt 'vài lần mỗi tháng'",
    category: "violence",
    date: "10/09/2026",
    img: "https://images.unsplash.com/photo-1427504494785-c1777b5046d2?w=900&h=600&fit=crop&q=80",
    summary: "Theo PISA 2025, 19,9% học sinh cấp 2 Việt Nam bị bắt nạt vài lần mỗi tháng.",
    content: "Kết quả PISA 2025 do OECD công bố cho thấy 19,9% học sinh cấp 2 Việt Nam bị bắt nạt 'vài lần một tháng'. Hình thức phổ biến nhất là bị trêu chọc (15,8%), tiếp theo là bị lan truyền tin đồn ác ý (8,7%)."
  },
  {
    id: 6,
    title: "Gần 700 vụ bạo lực học đường, hơn 850 học sinh tham gia là nữ",
    category: "violence",
    date: "07/11/2023",
    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=900&h=600&fit=crop&q=80",
    summary: "Bộ trưởng Nguyễn Kim Sơn cho biết cập nhật đến 5/11/2023, cả nước có 699 vụ bạo lực học đường.",
    content: "Trả lời chất vấn tại Quốc hội, Bộ trưởng Bộ GD&ĐT Nguyễn Kim Sơn thông tin: Cập nhật đến ngày 5/11/2023, cả nước có 699 vụ bạo lực học đường, liên quan tới 2.016 học sinh, trong đó 854 học sinh là nữ."
  },
  {
    id: 7,
    title: "Học sinh bị bắt nạt trực tuyến: Một kiểu bạo lực học đường mới",
    category: "violence",
    date: "16/01/2024",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&h=600&fit=crop&q=80",
    summary: "Nghiên cứu trên 1.302 học sinh cho thấy 60,8% từng có hành vi bắt nạt trực tuyến.",
    content: "Theo nghiên cứu trên 1.302 học sinh từ 12–18 tuổi, 60,8% từng có hành vi bắt nạt trực tuyến; 51,7% từng bị bắt nạt trực tuyến. Nền tảng phổ biến nhất: Facebook/Messenger, TikTok và Zalo."
  },
  {
    id: 8,
    title: "Kỹ năng sống giúp học sinh giảm xung đột",
    category: "solution",
    date: "19/03/2024",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&h=600&fit=crop&q=80",
    summary: "Giáo dục kỹ năng sống được xem là giải pháp căn cơ để giảm bạo lực học đường.",
    content: "Khi học sinh được trang bị kỹ năng giao tiếp, kiểm soát cảm xúc và giải quyết vấn đề, khả năng xảy ra xung đột sẽ giảm đáng kể."
  },
  {
    id: 9,
    title: "Mô hình tư vấn tâm lý học đường cần được nhân rộng",
    category: "solution",
    date: "07/05/2025",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&h=600&fit=crop&q=80",
    summary: "Nhiều trường vẫn chưa có chuyên viên tâm lý hoặc hoạt động chưa hiệu quả.",
    content: "Việc bố trí nhân sự chuyên trách và tạo môi trường an toàn để học sinh chia sẻ là yếu tố then chốt trong phòng ngừa khủng hoảng tâm lý."
  },
  {
    id: 10,
    title: "Phụ huynh cần thay đổi cách đồng hành cùng con",
    category: "solution",
    date: "22/09/2024",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=900&h=600&fit=crop&q=80",
    summary: "Lắng nghe, thấu hiểu thay vì áp đặt là chìa khóa giảm áp lực cho con.",
    content: "Chuyên gia khuyên phụ huynh nên dành thời gian trò chuyện với con mỗi ngày, quan tâm đến cảm xúc thay vì chỉ hỏi về điểm số."
  },
  {
    id: 11,
    title: "Áp lực học tập từ những kỳ vọng của cha mẹ",
    category: "pressure",
    date: "30/05/2026",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&h=600&fit=crop&q=80",
    summary: "Kỳ vọng quá lớn từ gia đình khiến nhiều trẻ học vì điểm số thay vì yêu thích kiến thức.",
    content: "Kỳ vọng quá lớn từ gia đình đang vô tình khiến những đứa trẻ đặt mục tiêu 'học để thi, học vì điểm số' thay vì yêu thích và tìm hiểu kiến thức."
  },
  {
    id: 12,
    title: "Bạo lực học đường: Điều gì khiến trẻ dễ dàng ra tay tàn nhẫn?",
    category: "violence",
    date: "07/11/2025",
    img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?w=900&h=600&fit=crop&q=80",
    summary: "Liên tiếp nhiều vụ học sinh đánh nhau, thậm chí tước đoạt mạng sống bạn học khiến dư luận bàng hoàng.",
    content: "Chiều 5/11 tại Lào Cai, hai nam sinh lớp 8 xảy ra mâu thuẫn. Một em đã hất bạn xuống hồ nước sau khi đâm nhiều nhát. Cùng thời điểm, tại Thanh Hóa, một học sinh lớp 10 tử vong sau 5 ngày bị nhóm bạn đánh hội đồng."
  }
];

// ========== RENDER TIN ==========
function getCategoryName(cat) {
  if (cat === 'pressure') return 'Áp lực gia đình';
  if (cat === 'violence') return 'Bạo lực học đường';
  return 'Giải pháp & Hỗ trợ';
}

function getCategoryClass(cat) {
  if (cat === 'pressure') return 'cat-pressure';
  if (cat === 'violence') return 'cat-violence';
  return 'cat-solution';
}

function renderNews(list, elementId = 'newsGrid') {
  const grid = document.getElementById(elementId);
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = `<p style="color:var(--muted);text-align:center;grid-column:1/-1;padding:40px 0">Không tìm thấy tin phù hợp</p>`;
    return;
  }

  grid.innerHTML = list.map(n => `
    <article class="news-card" onclick="goToDetail(${n.id})">
      <img src="${n.img}" alt="${n.title}" loading="lazy">
      <div class="body">
        <span class="cat ${getCategoryClass(n.category)}">${getCategoryName(n.category)}</span>
        <h3>${n.title}</h3>
        <p class="summary">${n.summary}</p>
        <div class="meta">${n.date}</div>
      </div>
    </article>
  `).join('');
}

function goToDetail(id) {
  localStorage.setItem('hd24h_currentNewsId', id);
  window.location.href = 'detail.html';
}

// ========== TÌM KIẾM + LỌC ==========
let currentCategory = 'all';

function filterNews(cat) {
  currentCategory = cat;
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');
  applyFilter();
}

function searchNews() {
  applyFilter();
}

function applyFilter() {
  const keyword = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
  let result = newsData;

  if (currentCategory !== 'all') {
    result = result.filter(n => n.category === currentCategory);
  }

  if (keyword) {
    result = result.filter(n =>
      n.title.toLowerCase().includes(keyword) ||
      n.summary.toLowerCase().includes(keyword) ||
      n.content.toLowerCase().includes(keyword)
    );
  }

  renderNews(result);
}

// ========== CHI TIẾT TIN ==========
function renderDetail() {
  const id = Number(localStorage.getItem('hd24h_currentNewsId'));
  const news = newsData.find(n => n.id === id);

  if (!news) {
    document.getElementById('detailContent').innerHTML = '<p>Không tìm thấy bài viết.</p>';
    return;
  }

  document.getElementById('detailContent').innerHTML = `
    <span class="cat ${getCategoryClass(news.category)}">${getCategoryName(news.category)}</span>
    <h1 style="font-size:1.8rem;margin:16px 0 10px;line-height:1.35">${news.title}</h1>
    <div style="color:var(--muted);font-size:0.9rem;margin-bottom:24px">${news.date}</div>
    <img src="${news.img}" alt="${news.title}" style="width:100%;border-radius:12px;margin-bottom:24px;max-height:400px;object-fit:cover">
    <div style="color:#cbd5e1;line-height:1.85;white-space:pre-line;font-size:1.05rem">${news.content}</div>
  `;
}

// ========== TIN NỔI BẬT (Trang chủ) ==========
function renderFeatured() {
  const featured = newsData.slice(0, 6);
  renderNews(featured, 'featuredGrid');
}