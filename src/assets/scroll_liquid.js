! function() {
    "use strict";
    var t = document.querySelector("#webgl"),
        e = 0,
        o = createREGL({
            canvas: t,
            onDone: function(t, e) {
                t && alert(t)
            }
        }),
        i = new Image;
    i.src = "./assets/webgl3.png", i.onload = function() {
        setTimeout(function() {
            document.body.classList.remove("loading")
        }, 1e3);
        var r = o({
            frag: document.querySelector("#fragmentShader").textContent,
            vert: "attribute vec2 position; void main() { gl_Position = vec4(3.0 * position, 0.0, 1.0); }",
            attributes: {
                position: [-1, 0, 0, -1, 1, 1]
            },
            count: 3,
            uniforms: {
                globaltime: o.prop("globaltime"),
                resolution: o.prop("resolution"),
                aspect: o.prop("aspect"),
                scroll: o.prop("scroll"),
                velocity: o.prop("velocity"),
                texture: o.texture(i)
            }
        });
        o.frame(function(i) {
            var n = t.scrollWidth / t.scrollHeight;
            t.width = 1024 * n, t.height = 1024, e = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight), o.clear({
                color: [0, 0, 0, 0]
            }), r({
                globaltime: i.time,
                resolution: [i.viewportWidth, i.viewportHeight],
                aspect: n,
                scroll: e,
                velocity: 0
            })
        })
    }
}();