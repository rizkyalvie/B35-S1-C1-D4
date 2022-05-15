let blogs = []



let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
]

function addBlog(event) {
    event.preventDefault()

    let inputName = document.getElementById("inputProjectName").value
    let inputContent = document.getElementById("inputDescription").value
    let inputImage = document.getElementById("inputImage").files[0]

    const projectDate = {

        startDate: document.getElementById("inputStartDate").value,
        endDate: document.getElementById("inputEndDate").value
    }

    inputImage = URL.createObjectURL(inputImage)

    let cardIcons = {
        html: document.querySelector('input[name="checkHtml"]').checked,
        css: document.querySelector('input[name="checkCss"]').checked,
        nodeJs: document.querySelector('input[name="checkNode"]').checked,
        reactJs: document.querySelector('input[name="checkReact"]').checked
    }

    let blog = {
        title: inputName,
        date: projectDate,
        content: inputContent,
        icons: cardIcons,
        image: inputImage
    }

    blogs.push(blog)

    console.table(blogs)

    renderCard()
}

function renderCard() {

    let containerBlog = document.getElementById("contents")
    containerBlog.innerHTML = '';

    const objectBlogString = JSON.stringify(blogs);

    for (let i = 0; i < blogs.length; i++) {

        localStorage.setItem(`${blogs[i].title}`, objectBlogString);

        containerBlog.innerHTML += `
        <div id="contents" class="mp-card">
            <!--MPC = My Project Card-->
            <div class="mpc-img">
                <img src="${blogs[i].image}" alt="">
            </div>
            <div class="mpc-title">
            <a href="#" onclick="renderBlog(event)" id='${blogs[i].title}'>
                <p>${blogs[i].title}</p>
            </a>
            </div>
            <div class="mpc-duration">
                <small>Durasi: 1 Bulan</small>
            </div>
            <div class="mpc-content">
                ${blogs[i].content}
            </div>
            <div class="mpc-icons">
                ${(blogs[i].icons.html === true) ? '<i class="fa-brands fa-html5"></i>' : ''}
                ${(blogs[i].icons.css === true) ? '<i class="fa-brands fa-css3-alt"></i>' : ''}
                ${(blogs[i].icons.nodeJs === true) ? '<i class="fa-brands fa-node-js"></i>' : ''}
                ${(blogs[i].icons.reactJs === true) ? '<i class="fa-brands fa-react"></i>' : ''}  
            </div>
            <div class="mpc-mod">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
        `
    }
}

function renderBlog(event) {

    let keyName;

    if (event) {

        keyName = event.path[1].id;

        const myProjectBody = document.getElementById('myProjectBody');

        const data = JSON.parse(localStorage.getItem(keyName))

        myProjectBody.innerHTML = '';

        for (let i = 0; i < data.length; i++) {


            myProjectBody.innerHTML += `
            <div id="blog-detail">
        <!--BD = Blog Detail-->
        <div class="bd-title">
            <p>${data[i].title}</p>
        </div>
        <!--IDC = Image, Duration, Categories-->
        <div class="bd-idc">
            <div class="idc-left">
                <img src="${data[i].image}" alt="Blog Image">
            </div>
            <div class="idc-right">
                <p>Duration</p>
                <div class="bd-duration">
                    <div style="padding-left: 2px;">
                        <i class="fa-solid fa-calendar-days"></i>
                        <p>1 Jan 2022 - 1 Aug 2022</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-clock"></i>
                        <p>8 Month</p>
                    </div>
                </div>
                <div class="bd-tech">
                    <p>Technologies</p>
                    <div class="i-tech">
                        <!--TI = Tech Icon-->
                        <div class="ti-left">
                            <div>
                                <i class="fa-brands fa-html5"></i>
                                <p>HTML</p>
                            </div>
                            <div>
                                <i class="fa-brands fa-node-js"></i>
                                <p>nodeJs </p>
                            </div>
                        </div>
                        <div class="ti-right">
                            <div>
                                <i class="fa-brands fa-css3-alt"></i>
                                <p>CSS</p>
                            </div>
                            <div>
                                <i class="fa-brands fa-react"></i>
                                <p>ReactJs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bd-content">
            <p>
                ${data[i].content}
            </p>
        </div>
    </div>
            `
        }
    }
}