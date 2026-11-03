const STORAGE_KEY = "ddjuice-lang";
const LANGS = ["zh-CN", "zh-TW", "en", "ja"];
const JA_NAME = "<ruby>豆<rt>まめ</rt>小豆<rt>あずき</rt></ruby>";

const copy = {
  "zh-CN": {
    title: "DDjuice · 朱睿哲",
    langGroup: "选择语言",
    navCamps: "两端",
    navFront: "前端",
    navBack: "后端",
    navBoth: "本人",
    navContact: "联系",
    navWork: "作品",
    heroName: "朱睿哲",
    heroLead: "我是朱睿哲，也叫 DDjuice。现居中国大陆。一个两边都做的个人开发者，前端和后端都做。2023–2027，在山东师范大学读计算机科学与技术。",
    workKicker: "作品",
    projectsTitle: "项目",
    courseTitle: "课题",
    slotEmpty: "待填充",
    campsKicker: "两端",
    campsTitle: "前端与后端，<br>是技术上的<span class=\"keep\">两个阵营</span>。",
    campsBody:
      "<p>从事技术的人，通常归入前端或后端。</p><p>多数人选定其中一边，并以这一边作为专长。</p>",
    choiceKicker: "选择",
    choiceTitle: "前端还是后端？",
    choiceBody: "<p>多数人会选择一侧专精。</p>",
    frontFigure: "画画的人",
    backFigure: "垒方块的人",
    frontCopy: "画笔轻落纸上，\n颜色与形状，是眼睛最先遇见的世界",
    backCopy: "积木一块块相叠，\n看不见的骨架撑起整座城堡",
    frontKicker: "前端",
    frontTitle: "前端是先被看见的这一面。",
    frontList: "这一页的前端",
    frontBody:
      "<p>别人打开这一页，先碰到前端。</p><p>结构是 HTML。样子是 CSS，黑灰的色块一块一块落在这里。</p><p>GSAP 让这一页动起来。ScrollTrigger 跟着滚动，把下一屏接上来。SplitText 把标题拆开，再让字归位。</p>",
    backKicker: "后端",
    backTitle: "后端是后面那一套。",
    backList: "后端",
    backBody:
      "<p>看见的后面，留着另一套。</p><p>Java、Python、C++、SQL 和 Web。</p><p>它们不先站到字面上。后端就是这些。</p>",
    bothKicker: "本人",
    bothTitle: "朱睿哲两边都做。",
    bothBody:
      "<p>我是朱睿哲，也叫 DDjuice。现居中国大陆。一个两边都做的个人开发者，前端和后端都做。</p><p>课业和自己想做的东西，都在同一台笔记本上。喜欢用 Cursor 把它们做出来。</p><p>九点睡觉，冷水浴，读书。2023–2027，在山东师范大学读计算机科学与技术。</p><p>偶像是 Elon Musk。梦想是去火星。毕业后计划去日本读修士，目前正在准备。</p>",
    contactKicker: "联系",
    contactTitle: "想一起做事，或只是打个招呼，都可以写信给我。",
    footer: "DDjuice · 朱睿哲 · 本地个人页",
  },
  "zh-TW": {
    title: "DDjuice · 朱睿哲",
    langGroup: "選擇語言",
    navCamps: "兩端",
    navFront: "前端",
    navBack: "後端",
    navBoth: "本人",
    navContact: "聯絡",
    navWork: "作品",
    heroName: "朱睿哲",
    heroLead: "我是朱睿哲，也叫 DDjuice。現居中國大陸。一個兩邊都做的個人開發者，前端和後端都做。2023–2027，在山東師範大學讀電腦科學與技術。",
    workKicker: "作品",
    projectsTitle: "項目",
    courseTitle: "課題",
    slotEmpty: "待填充",
    campsKicker: "兩端",
    campsTitle: "前端與後端，<br>是技術上的<span class=\"keep\">兩個陣營</span>。",
    campsBody:
      "<p>從事技術的人，通常歸入前端或後端。</p><p>多數人選定其中一邊，並以這一邊作為專長。</p>",
    choiceKicker: "選擇",
    choiceTitle: "前端還是後端？",
    choiceBody: "<p>多數人會選擇一側專精。</p>",
    frontFigure: "畫畫的人",
    backFigure: "壘方塊的人",
    frontCopy: "畫筆輕落紙上，\n顏色與形狀，是眼睛最先遇見的世界",
    backCopy: "積木一塊塊相疊，\n看不見的骨架撐起整座城堡",
    frontKicker: "前端",
    frontTitle: "前端是先被看見的這一面。",
    frontList: "這一頁的前端",
    frontBody:
      "<p>別人打開這一頁，先碰到前端。</p><p>結構是 HTML。樣子是 CSS，黑灰的色塊一塊一塊落在這裡。</p><p>GSAP 讓這一頁動起來。ScrollTrigger 跟著滾動，把下一屏接上來。SplitText 把標題拆開，再讓字歸位。</p>",
    backKicker: "後端",
    backTitle: "後端是後面那一套。",
    backList: "後端",
    backBody:
      "<p>看見的後面，留著另一套。</p><p>Java、Python、C++、SQL 和 Web。</p><p>它們不先站到字面上。後端就是這些。</p>",
    bothKicker: "本人",
    bothTitle: "朱睿哲兩邊都做。",
    bothBody:
      "<p>我是朱睿哲，也叫 DDjuice。現居中國大陸。一個兩邊都做的個人開發者，前端和後端都做。</p><p>課業和自己想做的東西，都在同一台筆記本上。喜歡用 Cursor 把它們做出來。</p><p>九點睡覺，冷水浴，讀書。2023–2027，在山東師範大學讀電腦科學與技術。</p><p>偶像是 Elon Musk。夢想是去火星。畢業後計劃去日本讀修士，目前正在準備。</p>",
    contactKicker: "聯絡",
    contactTitle: "想一起做事，或只是打個招呼，都可以寫信給我。",
    footer: "DDjuice · 朱睿哲 · 本機個人頁",
  },
  en: {
    title: "DDjuice · Dexter",
    langGroup: "Language",
    navCamps: "Camps",
    navFront: "Front",
    navBack: "Back",
    navBoth: "Both",
    navContact: "Contact",
    navWork: "Work",
    heroName: "Dexter",
    heroLead: "I’m Dexter — DDjuice. I live in mainland China. I’m a personal developer, and I do the front end and the back end. From 2023 to 2027 I study Computer Science and Technology at Shandong Normal University.",
    workKicker: "Work",
    projectsTitle: "Projects",
    courseTitle: "Coursework",
    slotEmpty: "To be added",
    campsKicker: "Camps",
    campsTitle: "Front end and back end are the two camps.",
    campsBody:
      "<p>People in technical work usually belong to one or the other.</p><p>Most choose one side and specialize in it.</p>",
    choiceKicker: "Choice",
    choiceTitle: "Front end or back end?",
    choiceBody: "<p>Most people choose one side and specialize.</p>",
    frontFigure: "A person drawing",
    backFigure: "A person stacking blocks",
    frontCopy: "A brush meets the page.\nColor and shape, first to the eye.",
    backCopy: "Blocks stack.\nAn unseen frame holds the castle.",
    frontKicker: "Front",
    frontTitle: "The front end is the side people see.",
    frontList: "Front of this page",
    frontBody:
      "<p>Open this page and the front end is what arrives first.</p><p>HTML is the structure. CSS is the look, the black and gray blocks set down one after another.</p><p>GSAP moves the page. ScrollTrigger follows the scroll and brings the next screen up. SplitText takes the headlines apart, then sets the letters back.</p>",
    backKicker: "Back",
    backTitle: "The back end is the other set.",
    backList: "Back end",
    backBody:
      "<p>Behind what you see, another set stays.</p><p>Java, Python, C++, SQL, and Web.</p><p>They do not stand on the words first. The back end is these.</p>",
    bothKicker: "Both",
    bothTitle: "Dexter works on both.",
    bothBody:
      "<p>I’m Dexter — DDjuice. I live in mainland China. I’m a personal developer, and I do the front end and the back end.</p><p>Coursework and the things I want to build share one laptop. I like building them with Cursor.</p><p>I sleep at nine, take cold showers, and read. From 2023 to 2027 I study Computer Science and Technology at Shandong Normal University.</p><p>My idol is Elon Musk. I want to go to Mars. After graduation I plan a master’s in Japan. I’m preparing now.</p>",
    contactKicker: "Contact",
    contactTitle: "Want to work together, or just say hi? Email me.",
    footer: "DDjuice · Dexter · local personal page",
  },
  ja: {
    title: "DDjuice · 豆小豆",
    langGroup: "言語を選択",
    navCamps: "両陣",
    navFront: "フロント",
    navBack: "バック",
    navBoth: "両面",
    navContact: "連絡先",
    navWork: "作品",
    heroName: JA_NAME,
    heroLead: `${JA_NAME}、DDjuice です。中国大陸に住んでいます。両面をやる個人開発者で、フロントもバックもやります。2023–2027、山東師範大学でコンピュータ科学と技術を学んでいます。`,
    workKicker: "作品",
    projectsTitle: "プロジェクト",
    courseTitle: "課題",
    slotEmpty: "未記入",
    campsKicker: "両陣",
    campsTitle: "フロントとバックは、<br>技術者の<span class=\"keep\">二つの陣営</span>です。",
    campsBody:
      "<p>技術に携わる人は、通常どちらかに属します。</p><p>多くの人は一方を選び、その分野を専門とします。</p>",
    choiceKicker: "選択",
    choiceTitle: "フロントか、バックか。",
    choiceBody: "<p>多くの人は、一方を選んで専門にします。</p>",
    frontFigure: "絵を描く人",
    backFigure: "ブロックを積む人",
    frontCopy: "絵筆が紙に触れる。\n色と形、目が最初に出会う世界",
    backCopy: "積み木が重なり、\n見えない骨格が城を支える",
    frontKicker: "フロント",
    frontTitle: "フロントは、先に見える一面です。",
    frontList: "このページのフロント",
    frontBody:
      "<p>このページを開くと、先にフロントが来ます。</p><p>構造は HTML。見た目は CSS で、黒と灰の面が並びます。</p><p>動きは GSAP。スクロールは ScrollTrigger が次の画面へつなぎ、見出しは SplitText がほどいて、また戻します。</p>",
    backKicker: "バック",
    backTitle: "バックは、後ろの一式です。",
    backList: "バックエンド",
    backBody:
      "<p>見えているものの後ろに、もう一式があります。</p><p>Java、Python、C++、SQL、Web。</p><p>先に字面へは出ません。バックは、これらです。</p>",
    bothKicker: "両面",
    bothTitle: "豆小豆は、両面をやる。",
    bothBody:
      `<p>${JA_NAME}、DDjuice です。中国大陸に住んでいます。両面をやる個人開発者で、フロントもバックもやります。</p><p>授業も、自分で作りたいものも、一台のノートPCの上です。Cursor で作るのが好きです。</p><p>九時に寝て、冷水浴をして、本を読みます。2023–2027、山東師範大学でコンピュータ科学と技術を学んでいます。</p><p>憧れはイーロン・マスク。夢は火星へ行くことです。卒業後は日本で修士課程に進む予定で、いま準備しています。</p>`,
    contactKicker: "連絡先",
    contactTitle: "一緒に何かしたいとき、または挨拶だけでも。メールをください。",
    footer: `DDjuice · ${JA_NAME} · ローカルの個人ページ`,
  },
};

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function readSavedLang() {
  try {
    return localStorage.getItem(STORAGE_KEY) || "";
  } catch (error) {
    return "";
  }
}

function detectLang() {
  const saved = readSavedLang();
  if (LANGS.includes(saved)) {
    return saved;
  }

  const tags = navigator.languages?.length ? navigator.languages : [navigator.language];

  for (const tag of tags) {
    const lower = String(tag).toLowerCase();
    if (lower.startsWith("zh-tw") || lower.includes("hant")) {
      return "zh-TW";
    }
    if (lower.startsWith("zh")) {
      return "zh-CN";
    }
    if (lower.startsWith("ja")) {
      return "ja";
    }
    if (lower.startsWith("en")) {
      return "en";
    }
  }

  return "zh-CN";
}

let motionReady = false;
let titleSplits = [];
let copyTweens = [];
let figureTween = null;

function canAnimate() {
  return Boolean(window.gsap && window.ScrollTrigger && window.SplitText && window.CustomEase && !reducedMotion);
}

function belowFold(node) {
  return node.getBoundingClientRect().top > window.innerHeight * 0.88;
}

function prepareMotion() {
  if (!canAnimate() || prepareMotion.ready) {
    return;
  }
  prepareMotion.ready = true;
  gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);
  CustomEase.create("hood", "0.22, 1, 0.36, 1");
  CustomEase.create("wipe", "0.77, 0, 0.18, 1");
}

function clearTextMotion() {
  for (const split of titleSplits) {
    if (split && split.revert) {
      split.revert();
    }
  }
  titleSplits = [];
  for (const tween of copyTweens) {
    if (tween.scrollTrigger) {
      tween.scrollTrigger.kill();
    }
    tween.kill();
  }
  copyTweens = [];
  if (window.gsap) {
    gsap.set(".band .cn-title, .note-title, .band .kicker, .band .prose p, .band .stack li, .band .links a, .desk", {
      clearProps: "opacity,transform,filter,visibility"
    });
  }
}

function splitTitles() {
  if (!canAnimate()) {
    return;
  }

  for (const title of document.querySelectorAll(".band .cn-title, .note-title")) {
    if (!belowFold(title)) {
      continue;
    }
    const section = title.closest("section") || title;
    try {
      titleSplits.push(SplitText.create(title, {
        type: "lines,words,chars",
        tag: "span",
        linesClass: "title-line",
        wordsClass: "title-word",
        charsClass: "title-char",
        aria: "auto",
        onSplit(self) {
          for (const line of self.lines) {
            line.style.whiteSpace = "normal";
            line.style.overflow = "visible";
            line.style.width = "100%";
          }
          return gsap.from(self.chars, {
            yPercent: 110,
            opacity: 0,
            stagger: 0.035,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "top 62%",
              scrub: true
            }
          });
        }
      }));
    } catch (error) {
      /* leave the heading as written */
    }
  }
}

function revealCopy() {
  if (!canAnimate()) {
    return;
  }

  for (const section of document.querySelectorAll(".band")) {
    const bits = [...section.querySelectorAll(".kicker, .desk, .prose p, .stack li, .links a")].filter(belowFold);
    if (!bits.length) {
      continue;
    }
    copyTweens.push(gsap.fromTo(bits, {
      y: 36,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.04,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "top 58%",
        scrub: true
      }
    }));
  }
}

function handoffSections() {
  const bands = [...document.querySelectorAll(".band")];
  bands.forEach((band, index) => {
    const next = bands[index + 1];
    if (!next) {
      return;
    }
    gsap.to(band, {
      y: -32,
      opacity: 0.62,
      ease: "none",
      scrollTrigger: {
        trigger: next,
        start: "top 65%",
        end: "top 20%",
        scrub: true
      }
    });
  });
}

function openFigures() {
  const spread = document.querySelector(".spread");
  const back = spread && spread.querySelector(".pane-back");
  const front = spread && spread.querySelector(".pane-front");
  const lockup = spread && spread.querySelector(".lockup");
  const seam = spread && spread.querySelector(".seam");
  if (!spread || !back || !front || !lockup || figureTween) {
    return;
  }

  // The old page flew the halves off a full-screen stage. This spread is a
  // frame, so the same split stops while both figures are still in it.
  const distance = () => Math.round(spread.clientWidth * 0.18);
  const lift = () => -Math.round(spread.clientHeight * 0.28);

  figureTween = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger: spread,
      start: "top 18%",
      end: "bottom 18%",
      scrub: 0.45,
      invalidateOnRefresh: true
    }
  })
    .fromTo(lockup, {
      y: 0,
      filter: "blur(0px)",
      opacity: 1
    }, {
      y: lift,
      filter: "blur(22px)",
      opacity: 0,
      duration: 0.32,
      immediateRender: false
    }, 0.12)
    .fromTo(seam, { opacity: 1 }, {
      opacity: 0,
      duration: 0.24,
      immediateRender: false
    }, 0.2)
    .fromTo(back, { x: 0 }, {
      x: () => -distance(),
      duration: 0.55,
      immediateRender: false
    }, 0.12)
    .fromTo(front, { x: 0 }, {
      x: () => distance(),
      duration: 0.55,
      immediateRender: false
    }, 0.12);
}

function splitGate() {
  for (const line of document.querySelectorAll(".gate-slogan .line")) {
    try {
    SplitText.create(line, {
      type: "words,chars",
      tag: "span",
      wordsClass: "word",
      charsClass: "char",
      aria: "auto",
      onSplit(self) {
        return gsap.from(self.chars, {
          yPercent: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.018,
          ease: "hood"
        });
      }
    });
    } catch (error) {
      /* the slogan still reads as written */
    }
  }
}

function initMotion() {
  if (!canAnimate() || initMotion.ready) {
    return;
  }
  initMotion.ready = true;
  prepareMotion();
  splitGate();
  openFigures();
  handoffSections();
  splitTitles();
  revealCopy();
  motionReady = true;
}

function rebuildTextMotion() {
  if (!canAnimate()) {
    return;
  }
  prepareMotion();
  splitTitles();
  revealCopy();
  if (window.ScrollTrigger) {
    ScrollTrigger.refresh();
  }
}

function applyLang(lang) {
  const dict = copy[lang];
  if (!dict) {
    return;
  }

  if (motionReady) {
    clearTextMotion();
  }

  document.documentElement.lang = lang;
  document.body.dataset.lang = lang;
  document.title = dict.title;

  for (const node of document.querySelectorAll("[data-i18n]")) {
    const key = node.dataset.i18n;
    if (key in dict) {
      node.textContent = dict[key];
    }
  }

  for (const node of document.querySelectorAll("[data-i18n-html]")) {
    const key = node.dataset.i18nHtml;
    if (key in dict) {
      node.innerHTML = dict[key];
    }
  }

  for (const node of document.querySelectorAll("[data-i18n-aria]")) {
    const key = node.dataset.i18nAria;
    if (key in dict) {
      node.setAttribute("aria-label", dict[key]);
    }
  }

  for (const node of document.querySelectorAll("[data-i18n-alt]")) {
    const key = node.dataset.i18nAlt;
    if (key in dict) {
      node.setAttribute("alt", dict[key]);
    }
  }

  for (const button of document.querySelectorAll(".langs button")) {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  }

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (error) {
    /* keep the choice for this view */
  }

  if (motionReady) {
    rebuildTextMotion();
  }

  syncNav();
}

const navLinks = document.querySelectorAll("nav a");

function setCurrentLink(link) {
  for (const other of navLinks) {
    if (link && other === link) {
      other.setAttribute("aria-current", "true");
    } else {
      other.removeAttribute("aria-current");
    }
  }
}

function syncNav() {
  const line = window.scrollY + 80;
  let current = null;
  for (const link of navLinks) {
    const id = link.getAttribute("href");
    const section = id && document.querySelector(id);
    if (!section) {
      continue;
    }
    const top = section.getBoundingClientRect().top + window.scrollY;
    if (top <= line) {
      current = link;
    }
  }
  setCurrentLink(current);
}

for (const link of navLinks) {
  link.addEventListener("click", () => {
    setCurrentLink(link);
  });
}

window.addEventListener("scroll", syncNav, { passive: true });

for (const button of document.querySelectorAll(".langs button")) {
  button.addEventListener("click", () => {
    applyLang(button.dataset.lang);
  });
}

const gate = document.querySelector(".gate");
const gateEnter = document.querySelector(".gate-enter");

function revealSite() {
  if (!gate || gate.classList.contains("is-leaving")) {
    return;
  }

  gate.classList.add("is-leaving");
  document.body.classList.remove("gate-open");

  for (const node of document.querySelectorAll("[data-gate-inert]")) {
    node.removeAttribute("inert");
  }

  const removeGate = () => {
    if (gate.isConnected) {
      gate.remove();
    }
    if (window.ScrollTrigger) {
      ScrollTrigger.refresh();
    }
  };

  if (canAnimate()) {
    prepareMotion();
    gsap.to(gate, {
      clipPath: "inset(0% 0% 0% 100%)",
      duration: 0.72,
      ease: "wipe",
      onComplete: removeGate
    });
    window.setTimeout(removeGate, 1000);
  } else {
    removeGate();
  }

  if (location.hash && document.querySelector(location.hash)) {
    document.querySelector(location.hash).scrollIntoView();
  }
}

function startEntrance() {
  if (startEntrance.done) {
    return;
  }
  if (!startEntrance.force && document.fonts && document.fonts.status !== "loaded") {
    return;
  }
  startEntrance.done = true;
  initMotion();
}

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => {
    startEntrance.force = true;
    startEntrance();
  });
  window.setTimeout(() => {
    startEntrance.force = true;
    startEntrance();
  }, 1600);
} else {
  startEntrance.force = true;
  startEntrance();
}

window.addEventListener("resize", () => {
  if (window.ScrollTrigger) {
    ScrollTrigger.refresh();
  }
});

for (const node of document.querySelectorAll("[data-gate-inert]")) {
  node.setAttribute("inert", "");
}

if (gateEnter) {
  gateEnter.addEventListener("click", revealSite);
}

applyLang(detectLang());
