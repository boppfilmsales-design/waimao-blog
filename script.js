const posts = [
    {
        title: "2026年出口退税新政解读",
        category: "资讯",
        date: "2026-06-10",
        excerpt: "最新出口退税率调整及申报流程注意事项...",
        image: "https://picsum.photos/id/1015/600/400",
        url: "post1.html"
    },
    {
        title: "外贸出口全流程详解（从询盘到收汇）",
        category: "流程",
        date: "2026-06-05",
        excerpt: "一文搞懂外贸出口的完整操作流程与关键单证...",
        image: "https://picsum.photos/id/201/600/400",
        url: "post2.html"
    },
    {
        title: "东南亚市场开发失败案例分析",
        category: "案例",
        date: "2026-06-01",
        excerpt: "一个服装出口企业在越南市场的惨痛教训与启示...",
        image: "https://picsum.photos/id/237/600/400",
        url: "post3.html"
    }
];

function renderPosts(filteredPosts) {
    const container = document.getElementById('posts-container');
    container.innerHTML = '';
    filteredPosts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'post-card';
        card.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <div class="content">
                <span style="color:#007bff; font-size:0.9rem;">${post.category}</span>
                <h3><a href="${post.url}">${post.title}</a></h3>
                <p>${post.excerpt}</p>
                <div class="meta">${post.date}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

document.getElementById('search').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = posts.filter(p => 
        p.title.toLowerCase().includes(term) || 
        p.excerpt.toLowerCase().includes(term)
    );
    renderPosts(filtered);
});

// 初始渲染
renderPosts(posts);

// 暗黑模式切换
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});