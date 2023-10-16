(function() {
    var data = [
        {
            name:"emmet",
            description: "Emmet is the number one code snippet tool",
            author: "emmetio",
            url:"https://github.blog/2022-06-08-sunsetting-atom/",
            downloads: 1662209,
            stars: 2456,
            price: 10.50,
            slector: "p1",
        },
        {
            name:"beautify",
            description: " is the number one code snippet tool",
            author:"HookyQR",
            url:"https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify",
            downloads: 4228040,
            stars: 4541,
            price: 6.75,
            slector: "p2",
        },
        {
            name:"docker",
            description: "Docker makes it easy to create, manage, and debug containerized applications",
            author: "Microsft",
            url:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker",
            downloads: 1662209,
            stars: 2456,
            price: 10.50,
            slector: "p3",
        },
        {
            name:"GitHub Codespaces",
            description: "GitHub Codespaces Your instant dev environment",
            author: "Github",
            url:"https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces",
            downloads: 1662209,
            stars: 2456,
            price: 10.50,
            slector: "p4",
        },
        {
            name:"npm Intellisense",
            description: "Npm IntellisenseVisual Studio Code plugin that autocompletes npm modules in import statements",
            author: "Di",
            url:"https://github.blog/2022-06-08-sunsetting-atom/",
            downloads: 1662209,
            stars: 2456,
            price: 10.50,
            slector: "p5",
        },
        {
            name:"Dev Containers",
            description: " Open any folder or repository inside a Docker container and take advantage of Visual Studio Code's full feature set.",
            author: "Microsoft",
            url:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers",
            downloads: 1662209,
            stars: 2456,
            price: 10.50,
            slector: "p6",
        },
        {
            name:"JavaScript (ES6) code snippets",
            description: "Code snippets for JavaScript in ES6 syntax",
            author: "charalampos karypidis",
            url:"https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets",
            downloads: 1662209,
            stars: 2456,
            price: 10.50,
            slector: "p7",
        }

    ];

    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocalString();
        };

        this.getFormattedStars = function () {
            return this.stars.toLocalString();
        };
    };

    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function (id) {
        return document.getElementById(id);
    };

    var writePackageInfo = function (package) {
        var selector = package.selector;
        var nameEl = getEl( selector + '-name');
        var dascEl = getEl( selector + '-description');
        var authEl = getEl( selector + '-author');
        var downloadEl = getEl( selector + '-downloads');
        var starsEl = getEl( selector + '-stars');

        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
    };

    var dateEl = getEl('data');
    dateEl.textContent = getTodaysDate();

   var emmet = new Package(data[0]);
   writePackageInfo(emmet);

   var beautify = new Package(data[1]);
   writePackageInfo(beautify);

   var docker = new Package(data[2]);
   writePackageInfo(docker);

   var gitHubCodeSpaces = new Package(data[3]);
   writePackageInfo(gitHubCodeSpaces);

   var npmIntellisense = new Package(data[4]);
   writePackageInfo(npmIntellisense);

   var devContainers = new Package(data[5]);
   writePackageInfo(devContainers);

   var javaScriptE6 = new Package(data[6]);
   writePackageInfo(javaScriptE6);
})();