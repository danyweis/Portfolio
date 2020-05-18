var projectInfo = {
    firstDiv:
        '<div class="card col-12 col-sm-6 col-md-4 bg-dark text-white" ></div>',
    imgTag: '<img class="card-img-top">',
    cardBodyTag: '<div class="card-body text-center"></div>',
    cardTitle: '<h5 class="card-title"></h5>',
    cardDescription: '<p class="card-text"></p>',
    cardLink: '<a class="card-btn btn btn-primary">Project</a>',
    cardLinkCode: '<a class="card-btn-code btn btn-primary">Code</a>',
    screenShotLink: {
        0: "SSLtest1",
        1: "SSLtest2",
        2: "SSLtest3",
        3: "SSLtest4",
        4: "SSLtest5",
        5: "SSLtest6",
    },
    projectName: {
        0: "PNtest1",
        1: "PNtest2",
        2: "PNtest3",
        3: "PNtest4",
        4: "PNtest5",
        5: "PNtest6",
    },
    projectDescription: {
        0: "Dtest1",
        1: "Dtest2",
        2: "Dtest3",
        3: "Dtest4",
        4: "Dtest5",
        5: "Dtest6",
    },
    projectLink: {
        0: "PLtest1",
        1: "PLtest2",
        2: "PLtest3",
        3: "PLtest4",
        4: "PLtest5",
        5: "PLtest6",
    },
    projectCodeLink: {
        0: "PCodeLtest1",
        1: "PCodeLtest2",
        2: "PCodeLtest3",
        3: "PCodeLtest4",
        4: "PCodeLtest5",
        5: "PCodeLtest6",
    },
};

let createPage = function (obj) {
    let row = document.querySelector(".row"),
        titleTag = obj.cardTitle,
        descriptionTag = obj.cardDescription,
        linkTag = obj.cardLink,
        codeLinkTag = obj.cardLinkCode,
        firstDiv = obj.firstDiv,
        imgTag = obj.imgTag,
        cardBodyTag = obj.cardBodyTag,
        screenShotLink = obj.screenShotLink,
        projectName = obj.projectName,
        projectLink = obj.projectLink,
        projectCodeLink = obj.projectCodeLink,
        projectDescription = obj.projectDescription,
        count = 1;

    for (let i = 0; i < Object.keys(projectName).length; i++) {
        row.insertAdjacentHTML("afterbegin", firstDiv);

        // take the .card from the previos created firstDiv and insert imgTag
        let card = document.querySelector(".card");

        // Creation of the imgTag
        card.insertAdjacentHTML("afterbegin", imgTag);
        let cardImg = document.querySelector(".card-img-top");
        cardImg.src = screenShotLink[i];
        cardImg.alt = projectName[i];

        // Creation of the .cardBody
        cardImg.insertAdjacentHTML("afterend", cardBodyTag);
        let cardBody = document.querySelector(".card-body");

        // Creating the h5
        cardBody.insertAdjacentHTML("afterbegin", titleTag);
        let cardTitle = document.querySelector(".card-title");
        cardTitle.insertAdjacentHTML(
            "afterbegin",
            `#${count}: ${projectName[i]}`
        );

        // Creating the description part
        cardTitle.insertAdjacentHTML("afterend", descriptionTag);
        let cardDescription = document.querySelector(".card-text");
        cardDescription.insertAdjacentHTML("afterbegin", projectDescription[i]);

        // Creating the link part
        cardDescription.insertAdjacentHTML("afterend", linkTag);
        let cardBtn = document.querySelector(".card-btn");
        cardBtn.href = projectLink[i];
        cardBtn.target = "_blank";
        cardBtn.style = "margin: 5px";

        cardBtn.insertAdjacentHTML("afterend", codeLinkTag);
        let cardBtnCode = document.querySelector(".card-btn-code");
        cardBtnCode.href = projectCodeLink[i];
        cardBtnCode.target = "_blank";
        cardBtnCode.style = "margin: 5px";

        // console.log(titleTag);

        count++;
    }
};

createPage(projectInfo);
