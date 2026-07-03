// ===== DATA =====

const upcomingEvents = [
    { date: "6 June 2026",     city: "Downpatrick",   venue: "Splinters Bash" },
    { date: "27 June 2026",    city: "Ahoghill",      venue: "Diamond Rock Club" },
    { date: "11 July 2026",    city: "Downpatrick",   venue: "Denvir's" },
    { date: "1 August 2026",   city: "Darragh Cross", venue: "Cornerstone Festival" },
    { date: "2 August 2026",   city: "Darragh Cross", venue: "Cornerstone Festival" },
    { date: "22 August 2026",  city: "Darragh Cross", venue: "The Oaks" },
    { date: "12 September 2026", city: "Whitehead",     venue: "Marine Bar" }
];

const galleryData = {
    "Diamond": [
        "04654c2c-1fb9-476d-bf6d-369f4cb41761.JPG",
        "069f0234-1e30-418a-9678-39ce1c0b5567 2.JPG",
        "069f0234-1e30-418a-9678-39ce1c0b5567.JPG",
        "12b8ac51-85c4-4d4f-acd9-2e871106b881.JPG",
        "2a9a83fd-086d-4274-a8c1-1071ae203240.JPG",
        "508076b8-17f7-487f-97c7-86ef2929baf5 2.JPG",
        "508076b8-17f7-487f-97c7-86ef2929baf5.JPG",
        "60a987e2-b62e-4ab0-bb36-a96cfd70a1c6.JPG",
        "72d31ac2-6ef9-402f-8e93-4b30448fab95.JPG",
        "79b204a0-3a21-4d59-a49a-21b20544182a.JPG",
        "7c1675af-2584-4bb8-afb2-83095a8ebf88.JPG",
        "7e39940a-ce5a-4bb7-951c-31cf1ff83721.JPG",
        "a1106921-75ba-420c-a0e9-765df4608d5d.JPG",
        "a3821d9f-928b-4468-a566-f176ac0a3023 2.JPG",
        "a3821d9f-928b-4468-a566-f176ac0a3023.JPG",
        "a6efce36-d71f-4723-929d-5fb7af1656f8.JPG",
        "aebe375c-4952-40f4-b4e6-4e96a1e2ecfc.JPG",
        "faca6f36-346c-4cae-832d-8fdc87f30e61.JPG"
    ],
    "Belfast Empire 24-01-25": [
        "IMG_3859 Edited.jpg", "IMG_3861 Edited.jpg", "IMG_3867 Edited.jpg",
        "IMG_3871 Edited.jpg", "IMG_3873 Edited.jpg", "IMG_3876 Edited.jpg",
        "IMG_3881 Edited.jpg", "IMG_3891 Edited.jpg", "IMG_3896 Edited.jpg",
        "IMG_3899 Edited.jpg", "IMG_3905 Edited.jpg", "IMG_3909 Edited.jpg",
        "IMG_3911 Edited.jpg", "IMG_3914 Edited.jpg", "IMG_3918 Edited.jpg",
        "IMG_3923 Edited.jpg"
    ],
    "Cornerstone festival 10-08-24": [
        "03c24d27-860c-4de8-88cd-17c458bb28f7.JPG", "08a74fd3-4c32-4378-984d-ac7079368ef0.JPG",
        "0eaa16e5-e7b0-4194-8d49-cbe20783ec8f.JPG", "0ec14a58-d387-42ae-88cb-eb55980e6287.JPG",
        "0fac0a43-3008-4d85-8f83-69c126a274b1.JPG", "10d0cfef-8a6f-44f1-b806-e1c9cc83174c.JPG",
        "142a4e96-6c15-4b84-ae74-a64c1afe68e8.JPG", "160a47a4-1372-45ee-9cc6-ac94ee5f6e1e.JPG",
        "17270855-157b-45b3-998d-a16e0c519b83.JPG", "2ffba213-b44c-4f1a-a2ec-c15aaf45e1cd.JPG",
        "3055518f-41a8-46ed-a49b-1c78a9a9f441.JPG", "32c77414-c8ff-4c81-b5a8-1e67a9a10963.JPG",
        "493d1762-9de1-41ac-bc85-b2ea3ced1172.JPG", "4d3b81c2-1c88-4761-b059-4bce74e6c3d2.JPG",
        "4fd1dd6b-9207-4b3e-a239-b6c1ab12b959.JPG", "6585c784-31fc-4db4-b2b6-a10d561060b5.JPG",
        "6ae2dfea-e77f-4deb-ac03-00d52a50b7b1.JPG", "8a6885e8-da7e-49a0-b117-c9b5b7a58bf0.JPG",
        "9d84381a-a944-40be-9e8f-9ec585ec8ec0.JPG", "9dc6df1b-63e9-4c22-82eb-2310b9a7ee37.JPG",
        "a4fc1559-b1be-437b-adab-cf820d74614b.JPG", "b043eb63-d7ca-4157-905e-101f5710fb27.JPG",
        "b145c0c1-9b7d-4ab0-9a72-53fc9cae6958.JPG", "b9bd86cf-9a51-42fb-be71-384ffc80256d.JPG",
        "c2369dd3-0aea-4e15-a072-df31afdf40a6.JPG", "c442e8ad-8aff-4093-9d6b-c070eb7372c0.JPG",
        "cb5435a5-f042-4457-b0d0-e5b709f6dd34.JPG", "d41f304b-1f14-47f7-9a9c-d9dc2c42d3ba.JPG",
        "d6f94dab-a914-42ab-9173-2e299e3fcaa2.JPG", "df794ca2-080e-4f54-987a-6ec9556d1519.JPG",
        "e7958394-7357-49c3-8e54-a203f0124308.JPG", "e87cc62b-f8d9-43ca-b278-832542248e76.JPG",
        "f663a2da-6cb6-4eb7-9cbc-fcb78d8682c2.JPG", "fb2912de-de88-474c-be46-9f3214dd1cf5.JPG"
    ],
    "Hilden Brewery 23-08-24": [
        "11c84b2b-3854-497e-9a4a-db56a4f8bcd9.JPG", "3bd0fb59-4055-4734-b98f-0409f65f02ab.JPG",
        "54b4641b-9fdc-4102-b491-c514c57e7a91.JPG", "6009b52e-673a-4324-8754-7b298cfd61f9.JPG",
        "64ff62f9-7b5c-4d08-951e-e1b99a5ed199.JPG", "68de9379-a619-4a30-825d-a92758c4e528.JPG",
        "7734bcf4-cba0-44cd-974c-97075a6bda0a.JPG", "7d9a4d11-8610-4724-ba4e-ad53612e42bb.JPG",
        "7eddb285-7681-4df3-bf79-c9e41badaa59.JPG", "848c69cf-6a8e-425c-9d47-3dd15122c2fa.JPG",
        "86e679c6-711a-4074-a0c8-deed3d85efd0.JPG", "8af5ff37-ce1b-4104-9985-077fae12b9f1.JPG",
        "936026af-ee34-4259-a063-38969a00e589.JPG", "9b31ef8c-c3da-471a-9513-f2e7b9849a0b.JPG",
        "b303982b-eabb-44f6-a447-ea7d146b6d25.JPG", "b5e1d187-a6e3-4918-95eb-e4befb519062.JPG",
        "c0d85b8f-878a-40f7-be1b-62979efc85ac.JPG", "c14cb6b5-bbde-4ec7-b218-f57ad204e9e3.JPG",
        "d8d0d002-5877-4422-9a7d-39a0f3ade9bd.JPG", "da1ba72d-9e22-417d-8c22-159a2a5d898c.JPG",
        "ec514fda-8888-42b9-80d5-5a531bd92240.JPG", "eff0b885-5e36-4685-920f-571f45cb33e9.JPG",
        "f362f593-35b3-4fd5-b59d-974a07bc429d.JPG", "f513433c-e019-4542-ac3e-27b39d0b2eef.JPG",
        "fa498c48-5e73-4c18-a976-dcf11998b0fc.JPG"
    ],
    "Pavillion Belfast 19-07-24": [
        "0923952b-dc7e-4e4c-a128-c7e721884249.JPG", "105b0a56-b7cc-4957-a1da-2ce7bb0fcb47.JPG",
        "1cc97643-9627-40fd-97d4-d110267ffa1d.JPG", "2204450a-0b14-4d59-ab65-d8a97c91964d.JPG",
        "2ca74833-65cc-47b2-a3ec-c4f14ea517f8.JPG", "3968fea4-437f-421c-97e3-d788dbb790da.JPG",
        "3b6ef59c-4dfb-451b-8f61-e26cd6fd6448.JPG", "40e1de7e-3522-4312-9b11-67224a8211d9.JPG",
        "4d24e494-760f-43f6-afca-1aabc07ac1a1.JPG", "584feb19-6c2f-453e-80c6-73171f1a21c8.JPG",
        "65b792df-0544-438a-af20-5ebe3f11249d.JPG", "7161c4b1-8da1-49d4-a1d1-5819db8712e3.JPG",
        "73887984-b235-4c93-974e-af9b3390042c.JPG", "8cbcd1e8-187c-4e16-b890-73c9aad20672.JPG",
        "9df1734a-b839-4472-866c-97fd2e583113.JPG", "bdbbadce-8046-406f-a189-f637c7e9d3a1.JPG",
        "ddddfc66-f120-456f-b3b3-c5cfeec53ca1.JPG", "e19d8fd3-ed22-4b95-965c-389e3482b373.JPG"
    ]
};

// ===== ROUTING =====

function getPage() {
    const hash = window.location.hash.replace('#', '') || 'home';
    return hash;
}

const validPages = ['home', 'about', 'music', 'gallery', 'contact'];

function showPage(pageId) {
    if (!validPages.includes(pageId)) pageId = 'home';
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');

    // Update active nav link
    document.querySelectorAll('.navbar-links a').forEach(a => {
        a.classList.remove('active');
        const href = a.getAttribute('href');
        if (href === '#' + pageId) a.classList.add('active');
    });

    // Close mobile menu
    document.getElementById('navLinks').classList.remove('open');

    window.scrollTo(0, 0);
}

window.addEventListener('hashchange', () => showPage(getPage()));
window.addEventListener('DOMContentLoaded', () => {
    buildEvents();
    buildGallery();
    showPage(getPage());
});

// ===== NAVBAR TOGGLE =====

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('navToggle').addEventListener('click', () => {
        document.getElementById('navLinks').classList.toggle('open');
    });
});

// ===== BUILD EVENTS =====

function buildEvents() {
    const upcomingEl = document.getElementById('upcomingEvents');
    upcomingEvents.forEach(event => {
        const row = document.createElement('div');
        row.className = 'show-row';
        row.innerHTML = `
            <span class="show-date">${escHtml(event.date)}</span>
            <div class="show-venue-info">
                <div class="show-venue">${escHtml(event.venue)}</div>
                <div class="show-city">${escHtml(event.city)}</div>
            </div>
            <span class="show-ticket">Live</span>`;
        upcomingEl.appendChild(row);
    });
}

// ===== BUILD GALLERY =====

function buildGallery() {
    const container = document.getElementById('galleryContent');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');

    Object.entries(galleryData).forEach(([gigName, files]) => {
        const section = document.createElement('div');
        section.className = 'gig-section';

        const heading = document.createElement('h2');
        heading.textContent = gigName;
        section.appendChild(heading);

        const grid = document.createElement('div');
        grid.className = 'image-grid';

        files.forEach(filename => {
            const src = `assets/photos/${gigName}/${filename}`;
            const img = document.createElement('img');
            img.className = 'grid-image';
            img.src = src;
            img.alt = `${gigName} — ${filename}`;
            img.loading = 'lazy';
            img.addEventListener('click', () => {
                modalImg.src = src;
                modalImg.alt = img.alt;
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
            grid.appendChild(img);
        });

        section.appendChild(grid);
        container.appendChild(section);
    });

    // Close modal
    document.getElementById('modalClose').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// ===== HELPERS =====

function escHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
