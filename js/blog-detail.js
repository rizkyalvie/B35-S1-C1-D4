document.getElementById("blog-detail").innerHTML = `
    <div class="bd-title">
        <p>${blogs[i].title}</p>
    </div>
    <div class="bd-idc">
    <div class="idc-left">
        <img src="${blogs[i].image}" alt="Blog Image">
    </div>
    <div class="idc-right">
        <p>Duration</p>
        <div class="bd-duration">
            <div style="padding-left: 2px;">
                <i class="fa-solid fa-calendar-days"></i>
                <p>1 Jan 2021 - 1 Feb 2021</p>
            </div>
            <div>
                <i class="fa-solid fa-clock"></i>
                <p>1 Month</p>
            </div>
        </div>
        <div class="bd-tech">
            <p>Technologies</p>
            <div class="i-tech">
                <!--TI = Tech Icon-->
                <div class="ti-left">
                    <div>
                    ${(blogs[i].icons.html === true) ? '<i class="fa-brands fa-html5"></i>' : ''}
                        <p>HTML</p>
                    </div>
                    <div>
                    ${(blogs[i].icons.nodeJs === true) ? '<i class="fa-brands fa-node-js"></i>' : ''}
                        <p>nodeJs </p>
                    </div>
                </div>
                <div class="ti-right">
                    <div>
                    ${(blogs[i].icons.css === true) ? '<i class="fa-brands fa-css3-alt"></i>' : ''}
                        <p>CSS</p>
                    </div>
                    <div>
                    ${(blogs[i].icons.reactJs === true) ? '<i class="fa-brands fa-react"></i>' : ''}
                        <p>ReactJs</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="bd-content">
    <p>
        ${blogs[i].content}
    </p>
</div>
    `;