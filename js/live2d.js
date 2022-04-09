const Live = document.createElement('script');
Live.src = "https://eqcn.ajz.miesnfu.com/wp-content/plugins/wp-3d-pony/live2dw/lib/L2Dwidget.min.js";
Live.onload = function () {
    L2Dwidget.init({
        "model": {
            jsonPath: "https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json",
            "scale": 1
        },
        "display": {
            "position": "right",
            "width": document.body.clientWidth * 0.07,
            "height": document.body.clientWidth * 0.14,
            "hOffset": 0,
            "vOffset": -30
        },
        "mobile": {
            "show": false,
            "scale": 0.5
        },
        "react": {
            "opacityDefault": 0.7,
            "opacityOnHover": 0.2
        }
    });
};

document.body.appendChild(Live);


