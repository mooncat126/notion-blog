/*!
 * Live2D Widget
 */
!(function () {
  "use strict";
  function e(e) {
    return Array.isArray(e) ? e[Math.floor(Math.random() * e.length)] : e;
  }
  let t = 0;
  function o(o, s, n) {
    if (
      !o ||
      (sessionStorage.getItem("waifu-text") &&
        sessionStorage.getItem("waifu-text") > n)
    )
      return;
    t && (clearTimeout(t), (t = null)),
      (o = e(o)),
      sessionStorage.setItem("waifu-text", n);
    const i = document.getElementById("waifu-tips");
    (i.innerHTML = o),
      i.classList.add("waifu-tips-active"),
      (t = setTimeout(() => {
        sessionStorage.removeItem("waifu-text"),
          i.classList.remove("waifu-tips-active");
      }, s));
  }
  class s {
    constructor(e) {
      let { apiPath: t, cdnPath: o } = e,
        s = !1;
      if ("string" == typeof o) (s = !0), o.endsWith("/") || (o += "/");
      else {
        if ("string" != typeof t) throw "Invalid initWidget argument!";
        t.endsWith("/") || (t += "/");
      }
      (this.useCDN = s), (this.apiPath = t), (this.cdnPath = o);
    }
    async loadModelList() {
      const e = await fetch(`${this.cdnPath}model_list.json`);
      this.modelList = await e.json();
    }
    async loadModel(t, s, n) {
      if (
        (localStorage.setItem("modelId", t),
        localStorage.setItem("modelTexturesId", s),
        o(n, 4e3, 10),
        this.useCDN)
      ) {
        this.modelList || (await this.loadModelList());
        const o = e(this.modelList.models[t]);
        loadlive2d("live2d", `${this.cdnPath}model/${o}/index.json`);
      } else loadlive2d("live2d", `${this.apiPath}get/?id=${t}-${s}`);
    }
  }
  const n = {
    hitokoto: {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>',
      callback: function () {
        // 创建一个消息列表
        const messages = [
          "Hello, world.",
          "简单就是最好。",
          "Done is better than perfect。",
          "知识就是力量。",
          "Think big, code small。",
          "代码永不撒谎, 注释有时会。",
          "调试就像是在犯罪电影中的侦探。",
          "代码即诗。",
          "Talk is cheap, Show me the code。",
          "生命短暂, 我用JS。",
        ];

        // 随机选择一条消息
        const randomIndex = Math.floor(Math.random() * messages.length);
        const randomMessage = messages[randomIndex];

        // 使用选择的消息
        o(randomMessage, 6e3, 9);
      },
    },
    JP: {
      icon: '<svg viewBox="0 0 25 25"><text x="0" y="15" font-weight="bold">JP</text></svg>',
      callback: () => {
        document.getElementById("waifu").remove();
        document.getElementById("waifu-toggle").remove();
        window.initWidget({
          waifuPath: "./waifu-tips-jp.json",
          cdnPath: "https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/",
        });
      },
    },
    EN: {
      icon: '<svg viewBox="0 0 25 25"><text x="0" y="15" font-weight="bold">EN</text></svg>',
      callback: () => {
        document.getElementById("waifu").remove();
        document.getElementById("waifu-toggle").remove();
        window.initWidget({
          waifuPath: "./waifu-tips-en.json",
          cdnPath: "https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/",
        });
      },
    },
    ZH: {
      icon: '<svg viewBox="0 0 25 25"><text x="0" y="15" font-weight="bold">ZH</text></svg>',
      callback: () => {
        document.getElementById("waifu").remove();
        document.getElementById("waifu-toggle").remove();
        window.initWidget({
          waifuPath: "./waifu-tips-zh.json",
          cdnPath: "https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/",
        });
      },
    },
    quit: {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\x3c!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>',
      callback: () => {
        localStorage.setItem("waifu-display", Date.now()),
          o("Bye〜。", 2e3, 11),
          (document.getElementById("waifu").style.bottom = "-500px"),
          setTimeout(() => {
            (document.getElementById("waifu").style.display = "none"),
              document
                .getElementById("waifu-toggle")
                .classList.add("waifu-toggle-active");
          }, 3e3);
      },
    },
  };
  function i(t) {
    const i = new s(t);
    function c(t) {
      let s,
        n = !1,
        i = t.message.default;
      window.addEventListener("mousemove", () => (n = !0)),
        window.addEventListener("keydown", () => (n = !0)),
        setInterval(() => {
          n
            ? ((n = !1), clearInterval(s), (s = null))
            : s ||
              (s = setInterval(() => {
                o(i, 6e3, 9);
              }, 2e4));
        }, 1e3),
        o(
          (function (e) {
            if ("/" === location.pathname)
              for (let { hour: t, text: o } of e) {
                const e = new Date(),
                  s = t.split("-")[0],
                  n = t.split("-")[1] || s;
                if (s <= e.getHours() && e.getHours() <= n) return o;
              }
            const t = `欢迎光临〜<br/>恭喜你发现了一个小孤岛！`;
            let o;
            if ("" !== document.referrer) {
              const e = new URL(document.referrer),
                s = e.hostname.split(".")[1],
                n = { baidu: "百度", so: "360搜索", google: "谷歌搜索" };
              return location.hostname === e.hostname
                ? t
                : ((o = s in n ? n[s] : e.hostname),
                  `Hello！来自 <span>${o}</span> 的朋友<br>${t}`);
            }
            return t;
          })(t.time),
          7e3,
          11
        ),
        window.addEventListener("mouseover", (s) => {
          for (let { selector: n, text: i } of t.mouseover)
            if (s.target.matches(n))
              return (
                (i = e(i)),
                (i = i.replace("{text}", s.target.innerText)),
                void o(i, 4e3, 8)
              );
        }),
        window.addEventListener("click", (s) => {
          for (let { selector: n, text: i } of t.click)
            if (s.target.matches(n))
              return (
                (i = e(i)),
                (i = i.replace("{text}", s.target.innerText)),
                void o(i, 4e3, 8)
              );
        }),
        t.seasons.forEach(({ date: t, text: o }) => {
          const s = new Date(),
            n = t.split("-")[0],
            c = t.split("-")[1] || n;
          n.split("/")[0] <= s.getMonth() + 1 &&
            s.getMonth() + 1 <= c.split("/")[0] &&
            n.split("/")[1] <= s.getDate() &&
            s.getDate() <= c.split("/")[1] &&
            ((o = (o = e(o)).replace("{year}", s.getFullYear())), i.push(o));
        });
      const c = () => {};
      (c.toString = () => {
        o(t.message.console, 6e3, 9);
      }),
        window.addEventListener("copy", () => {
          o(t.message.copy, 6e3, 9);
        }),
        window.addEventListener("visibilitychange", () => {
          document.hidden || o(t.message.visibilitychange, 6e3, 9);
        });
    }
    localStorage.removeItem("waifu-display"),
      sessionStorage.removeItem("waifu-text"),
      document.body.insertAdjacentHTML(
        "beforeend",
        '<div id="waifu">\n            <div id="waifu-tips"></div>\n            <canvas id="live2d" width="800" height="800"></canvas>\n            <div id="waifu-tool"></div>\n        </div>'
      ),
      setTimeout(() => {
        document.getElementById("waifu").style.bottom = 0;
      }, 0),
      (function () {
        Array.isArray(t.tools) || (t.tools = Object.keys(n));
        for (let e of t.tools)
          if (n[e]) {
            const { icon: t, callback: o } = n[e];
            document
              .getElementById("waifu-tool")
              .insertAdjacentHTML(
                "beforeend",
                `<span id="waifu-tool-${e}">${t}</span>`
              ),
              document
                .getElementById(`waifu-tool-${e}`)
                .addEventListener("click", o);
          }
      })(),
      (function () {
        let e = localStorage.getItem("modelId"),
          o = localStorage.getItem("modelTexturesId");
        null === e && ((e = 0), (o = 53)),
          i.loadModel(e, o),
          fetch(t.waifuPath)
            .then((e) => e.json())
            .then(c);
      })();
  }
  window.initWidget = function (e, t) {
    "string" == typeof e && (e = { waifuPath: e, apiPath: t }), console.log(e);
    document.body.insertAdjacentHTML(
      "beforeend",
      '<div id="waifu-toggle">\n            <span>看板娘</span>\n        </div>'
    );
    const o = document.getElementById("waifu-toggle");
    o.addEventListener("click", () => {
      o.classList.remove("waifu-toggle-active"),
        o.getAttribute("first-time")
          ? (i(e), o.removeAttribute("first-time"))
          : (localStorage.removeItem("waifu-display"),
            (document.getElementById("waifu").style.display = ""),
            setTimeout(() => {
              document.getElementById("waifu").style.bottom = 0;
            }, 0));
    }),
      localStorage.getItem("waifu-display") &&
      Date.now() - localStorage.getItem("waifu-display") <= 864e5
        ? (o.setAttribute("first-time", !0),
          setTimeout(() => {
            o.classList.add("waifu-toggle-active");
          }, 0))
        : i(e);
  };
})();
