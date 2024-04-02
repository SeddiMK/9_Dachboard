(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const sideMenu = document.querySelector("aside");
    const menuBtn = document.querySelector("#menu-btn");
    const closeBtn = document.querySelector("#close-btn");
    const themeToggler = document.querySelector(".top__theme-toggler");
    menuBtn.addEventListener("click", (() => {
        sideMenu.style.display = "block";
    }));
    closeBtn.addEventListener("click", (() => {
        sideMenu.style.display = "none";
    }));
    themeToggler.addEventListener("click", (() => {
        document.body.classList.toggle("dark-theme-variables");
        themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
        themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
    }));
    const script_Orders = [ {
        productName: "Foldable Mini Drone",
        productNumber: "83829",
        productStatus: "Due",
        shipping: "Pending"
    }, {
        productName: "Laravender KF102 Drone",
        productNumber: "32990",
        productStatus: "Refunded",
        shipping: "Declined"
    }, {
        productName: "Ruko F11 Pro Drone",
        productNumber: "45621",
        productStatus: "Due",
        shipping: "Pending"
    }, {
        productName: "Drone with Camera Drone",
        productNumber: "76882",
        productStatus: "Paid",
        shipping: "Delivered"
    }, {
        productName: "GPS 4k Drone",
        productNumber: "93679",
        productStatus: "Paid",
        shipping: "Delivered"
    }, {
        productName: "DGi Air 2S",
        productNumber: "2987999",
        productStatus: "Due",
        shipping: "Pending"
    }, {
        productName: "Lozende Drone",
        productNumber: "23211",
        productStatus: "Paid",
        shipping: "Delivered"
    } ];
    script_Orders.forEach((order => {
        const tr = document.createElement("tr");
        const trContent = `\n\t\t\t\t\t\t\t\t\t\t\t<td class="tbody__td">${order.productName}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class="tbody__td">${order.productNumber}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class="tbody__td">${order.productStatus}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class="${"Declined" === order.shipping ? "color--danger" : "Pending" === order.shipping ? "color--warning" : "color--primary"}">${order.shipping}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class= "tbody__td color--primary">Details</td>\n\t\t\t\t\t\t\t\t\t\t\t`;
        tr.innerHTML = trContent;
        document.querySelector("table tbody").appendChild(tr);
    }));
    window["FLS"] = true;
    isWebp();
})();