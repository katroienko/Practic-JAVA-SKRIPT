const eventsStore = [
    {
        title: "IT career HUB Front-end 69: Project presentation and feedback",
        description: "281024-wdm & Students Community",
        date: new Date(2025, 2, 14, 10),
        image: "img/events/itcareerHub.jpg",
        type: "online",
        attendees: 26,
        category: "Web Development",
        distance: 600,
    },
    {
        title: "INFJ Personality Type - Coffee Shop Meet & Greet",
        description: "Being an INFJ",
        date: new Date(2025, 2, 23, 15),
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        attendees: 99,
        category: "Hobbies and Passions",
        distance: 50,
    },
    {
        title: "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
        description: "New York AI Users",
        date: new Date(2025, 2, 23, 11, 30),
        image: "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        attendees: 43,
        category: "Technology",
        distance: 25,
    },
    {
        title: "Book 40+ Appointments Per Month Using AI and Automation",
        description: "New Jersey Business Network",
        date: new Date(2025, 2, 16, 14),
        image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        category: "Technology",
        distance: 10,
    },
    {
        title: "Dump writing group weekly meetup",
        description: "Dump writing group",
        date: new Date(2025, 2, 13, 11),
        image: "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        attendees: 77,
        category: "Business",
        distance: 100,
    },
    {
        title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
        description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
        date: new Date(2025, 2, 14, 11),
        image: "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        attendees: 140,
        category: "Social Activities",
        distance: 75,
    },
    {
        title: "All Nations - Manhattan Missions Church Bible Study",
        description: "Manhattan Bible Study Meetup Group",
        date: new Date(2025, 2, 14, 11),
        image: "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        category: "Health and Wellbeing",
        distance: 15,
    }
    
];

// Функция для заполнения фильтров на основе данных из eventsStore
function populateFilters() {
    const types = [...new Set(eventsStore.map(event => event.type))];
    const distances = [...new Set(eventsStore.map(event => event.distance))].sort((a, b) => a - b);
    const categories = [...new Set(eventsStore.map(event => event.category))];

    const typeFilter = document.getElementById("typeFilter");
    const distanceFilter = document.getElementById("distanceFilter");
    const categoryFilter = document.getElementById("categoryFilter");

    types.forEach(type => {
        let option = new Option(type, type);
        typeFilter.add(option);
    });

    distances.forEach(distance => {
        let option = new Option(distance + " km", distance);
        distanceFilter.add(option);
    });

    categories.forEach(category => {
        let option = new Option(category, category);
        categoryFilter.appendChild(option);
    });
}

// Функция для фильтрации событий по заданным параметрам
function filterEvents() {
    const dateFrom = new Date(document.getElementById("dateFrom").value);
    const dateTo = new Date(document.getElementById("dateTo").value);
    const type = document.getElementById("typeFilter").value;
    const distance = document.getElementById("distanceFilter").value;
    const category = document.getElementById("categoryFilter").value;

    let filteredEvents = eventsStore.filter(event => {
        let match = true;
        
        // Проверяем, что дата события не раньше заданной даты "от"
        if (dateFrom != "Invalid Date" && event.date < dateFrom) match = false;
    
        // Проверяем, что дата события не позже заданной даты "до"
        if (dateTo != "Invalid Date" && event.date > dateTo) match = false;
    
        // Проверяем, что тип события совпадает с выбранным типом
        if (type && event.type !== type) match = false;
    
        // Проверяем, что дистанция события совпадает с выбранной дистанцией
        if (distance && event.distance != distance) match = false;
    
        // Проверяем, что категория события совпадает с выбранной категорией
        if (category && event.category !== category) match = false;
    
        return match; // Возвращаем true, если все фильтры прошли, и событие должно быть включено в результат
    });

    // let filteredEvents = eventsStore.filter(event => {
    //     let match = true;

    //     if (dateFrom != "Invalid Date" && event.date < dateFrom) match = false;
    //     if (dateTo != "Invalid Date" && event.date > dateTo) match = false;
    //     if (type && event.type !== type) match = false;
    //     if (distance && event.distance != distance) match = false;
    //     if (category && event.category !== category) match = false;

    //     return match;
    // });

    displayEvents(filteredEvents);
}

// Функция для отображения списка событий на странице
function displayEvents(events) {
    const container = document.getElementById("eventsContainer");
    container.innerHTML = "";

    if (events.length === 0) {
        container.innerHTML = "<p>No events found</p>";
        return;
    }

    events.forEach(event => {
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("event");
        eventDiv.innerHTML = `
            <div class="article">
              <div class="article__img"><img src="${event.image}" alt="${event.title}"></div>
              <div class="article__content">
                <div class="article__date">${event.date.toLocaleDateString()} ${event.date.toLocaleTimeString()}</div>
                <div class="article__title">${event.title}</div>
                <div class="article__details">${event.category}</div>
                <div class="article__details">${event.type}</div>
              </div>
            </div>
        `;
        container.appendChild(eventDiv);
    });
}

//////////////////////////Обработчики событий для фильтров
document.getElementById("typeFilter").addEventListener("change", filterEvents);
document.getElementById("distanceFilter").addEventListener("change", filterEvents);
document.getElementById("categoryFilter").addEventListener("change", filterEvents);
document.getElementById("dateFrom").addEventListener("change", filterEvents);
document.getElementById("dateTo").addEventListener("change", filterEvents);

// Инициализация фильтров и отображение всех событий при загрузке страницы
populateFilters();
displayEvents(eventsStore);
