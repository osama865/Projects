const projetcs = [
    {
        name: "Life-Advise",
        description: "offline first , full featured quotes generator web app to get some wonderful advice about life, success, money ...etc",
        image: "../images/life.png",
        liveLink: "https://life-advice-beta.meteorapp.com/",
        SourceLink: "https://github.com/osama865/life-advice-client",
    },
    {
        name: "netflix clone",
        description: "Complete Netflix clone based on react and firebase",
        image: "../images/netflix.png",
        liveLink: "https://os-netflix.netlify.app/",
        SourceLink: "https://github.com/osama865/Netflix",
    },
    {
        name: "Basic Amazon Clone",
        description: "not Complete amazon clone based on react and firebase and many other",
        image: "../images/amazon.png",
        liveLink: "https://os-amazon.netlify.app/",
        SourceLink: "https://github.com/osama865/Amazon",
    },
    {
        name: "rental hotel rooms",
        description: "featured hotel rooms web app to look for a rooms to rent for your holiday",
        image: "../images/hotel.png",
        liveLink: "https://o-hotel.netlify.app/",
        SourceLink: "https://github.com/osama865/Hotel",
    },
    {
        name: "Galarey",
        description: "simple Galarey app to store your images there and share them",
        image: "../images/firegram.png",
        liveLink: "https://0firegram.netlify.app/",
        SourceLink: "https://github.com/osama865/Galarey",
    },
    {
        name: "Chat web app",
        description: "Funny chat app to chat with your friends and create rooms and joins others rooms based on react and node js and socket.io",
        image: "../images/Chat2.png",
        liveLink: "https://o-chatting.netlify.app/",
        SourceLink: "https://github.com/osama865/Chat-Room-client",
    },
    {
        name: "Basic weather app",
        description: "Basic weather app to get the weather status about specific country or city",
        image: "../images/weather.png",
        liveLink: "https://o-weather.netlify.app/",
        SourceLink: "https://github.com/osama865/PWA_Weather",
    },
    {
        name: "GYM landing page",
        description: "nice landing page for your GYM",
        image: "../images/gym.png",
        liveLink: "https://max-gym.netlify.app/",
        SourceLink: "https://github.com/osama865/GYM",
    },
]

let wrapper = document.getElementById("projects")
const showProjects = () => {
    projetcs.map(({ name, SourceLink, description, image, liveLink }) => {
        let html = `<div>
        <div class="post">
            <img src="${image}" alt="" class="thumbnail" />
            <div class="post-preview">
                <h6 class="post-title">${name}</h6>
                <p class="post-intro">
                    ${description}
                </p>
                <div class="links">
                      <a href="${liveLink}" target="_blank"
                        >Visit</a
                      >
                      <a
                        href="${SourceLink}"
                        target="_blank"
                        >Source Code</a
                      >
                    </div>
            </div>
        </div>
    </div>`

        wrapper.innerHTML += html
    })
}

showProjects()
console.log(wrapper);
