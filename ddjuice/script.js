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
let motionReady = false;
let titleSplits = [];
let copyTweens = [];

function detectLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
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

function revertTitles() {
  for (const split of titleSplits) {
    split.revert();
  }
  titleSplits = [];
}

function clearCopy() {
  for (const tween of copyTweens) {
    tween.revert();
  }
  copyTweens = [];
}

function applyLang(lang) {
  const dict = copy[lang];
  revertTitles();
  clearCopy();
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

  localStorage.setItem(STORAGE_KEY, lang);

  if (motionReady) {
    splitTitles();
    revealCopy();
    if (window.ScrollTrigger) {
      ScrollTrigger.refresh();
    }
  }
  layoutBand(false);
  syncNav();
}

function fitBlock(box, heading) {
  if (!box || !heading) {
    return;
  }

  const lines = heading.querySelectorAll(".line");
  const pad = 8;
  heading.style.fontSize = "";

  let size = parseFloat(getComputedStyle(heading).fontSize);
  const max = box.clientWidth - pad * 2;
  let guard = 0;

  const overflows = () => {
    for (const line of lines) {
      if (line.scrollWidth > max + 1) {
        return true;
      }
    }
    return false;
  };

  while (overflows() && size > 18 && guard < 120) {
    size -= 1;
    heading.style.fontSize = size + "px";
    guard += 1;
  }
}

function fitSlogan() {
  fitBlock(document.querySelector(".gate"), document.querySelector(".gate-slogan"));
}

function canAnimate() {
  return Boolean(window.gsap && window.ScrollTrigger && window.SplitText && window.CustomEase && !reducedMotion);
}

function splitTitles() {
  if (!canAnimate()) {
    return;
  }

  revertTitles();

  for (const title of document.querySelectorAll(".chapter-title")) {
    const section = title.closest(".chapter");
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
        for (const word of self.words) {
          if (/[A-Za-z]/.test(word.textContent)) {
            word.classList.add("is-latin");
          }
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
  }
}

function revealCopy() {
  if (!canAnimate()) {
    return;
  }

  clearCopy();

  for (const section of document.querySelectorAll(".chapter")) {
    const bits = section.querySelectorAll(".kicker, .stack li, .chapter-copy p, .links a");
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

function wrapFrames() {
  for (const section of document.querySelectorAll(".chapter")) {
    if (section.querySelector(".chapter-frame")) {
      continue;
    }

    const frame = document.createElement("div");
    frame.className = "chapter-frame";
    const footer = section.querySelector(":scope > footer");
    const figures = section.querySelector(":scope > .figures");
    for (const node of [...section.childNodes]) {
      if (node !== footer && node !== figures) {
        frame.append(node);
      }
    }
    section.insertBefore(frame, footer || figures || null);
  }
}

const SPLIT_SPAN = 0.3384;

let splitTurn = 0;
let openingTrigger = null;

function turnFromProgress(progress) {
  if (progress <= 0.18) {
    return 0;
  }
  if (progress >= 0.54) {
    return 1;
  }
  return (progress - 0.18) / 0.36;
}

function bandGeometry(width, height, turn) {
  const rest = Math.atan2(height, SPLIT_SPAN * width);
  const angle = rest + (Math.PI / 2 - rest) * (turn || 0);
  const cos = Math.cos(angle);
  const sin = Math.sin(angle) || 1;
  const cx = width / 2;
  const cy = height / 2;
  const stroke = 0.5;
  const px = cx + stroke * sin;
  const py = cy - stroke * cos;
  const xAt = (y) => px + ((y - py) / sin) * cos;

  return {
    x1: xAt(0),
    x2: xAt(height),
    length: height / Math.abs(sin),
    angle: angle * 180 / Math.PI,
    sin,
    cos,
    cx,
    cy
  };
}

function applyTurn(turn) {
  const figures = document.querySelector(".figures");
  if (!figures) {
    return;
  }

  const width = figures.clientWidth;
  const height = figures.clientHeight;
  if (!width || !height) {
    return;
  }

  splitTurn = turn;
  const geo = bandGeometry(width, height, turn);
  const overlap = 2;
  figures.style.setProperty("--split-top", (geo.x1 + overlap) + "px");
  figures.style.setProperty("--split-bottom", (geo.x2 + overlap) + "px");
  figures.style.setProperty("--split-top-right", geo.x1 + "px");
  figures.style.setProperty("--split-bottom-right", geo.x2 + "px");
  figures.style.setProperty("--band-length", (geo.length + 8) + "px");
  figures.style.setProperty("--band-angle", geo.angle + "deg");
}

function buildBand() {
  const track = document.querySelector(".split-band-track");
  if (!track || track.childElementCount) {
    return;
  }

  const phrase = "DRAWING AND DESIGNING";
  for (let group = 0; group < 2; group += 1) {
    const wrap = document.createElement("div");
    wrap.className = "split-band-group";
    for (let i = 0; i < 12; i += 1) {
      const span = document.createElement("span");
      span.textContent = phrase;
      wrap.append(span);
    }
    track.append(wrap);
  }
}

let labelGeometry = null;

function labelViewportKey() {
  return window.innerWidth + "x" + window.innerHeight;
}

function rememberLabels(front, back, choice) {
  const snap = (node) => ({
    fontSize: node.style.fontSize,
    left: node.style.left,
    right: node.style.right,
    top: node.style.top,
    translate: node.style.translate,
    transform: node.style.transform
  });
  labelGeometry = {
    key: labelViewportKey(),
    front: snap(front),
    back: snap(back),
    choice: snap(choice)
  };
}

function restoreLabels(front, back, choice) {
  const apply = (node, saved, lockTranslate) => {
    node.style.fontSize = saved.fontSize;
    node.style.left = saved.left;
    node.style.right = saved.right;
    node.style.top = saved.top;
    if (lockTranslate) {
      // Keep GSAP's scroll transform. Only the centering translate is re-locked.
      node.style.translate = node.style.transform ? "none" : saved.translate;
      return;
    }
    node.style.translate = saved.translate;
    node.style.transform = saved.transform;
  };
  apply(front, labelGeometry.front, true);
  apply(back, labelGeometry.back, true);
  apply(choice, labelGeometry.choice, false);
}

function layoutBand(measureLabels) {
  const figures = document.querySelector(".figures");
  if (!figures) {
    return;
  }

  const width = figures.clientWidth;
  const height = figures.clientHeight;
  if (!width || !height) {
    return;
  }

  applyTurn(turnFromProgress(openingTrigger ? openingTrigger.progress : splitTurn));
  const front = figures.querySelector(".or-front");
  const back = figures.querySelector(".or-back");
  const choice = figures.querySelector(".or-choice");
  const frozen = measureLabels === false
    && labelGeometry
    && labelGeometry.key === labelViewportKey()
    && front
    && back
    && choice;
  if (frozen) {
    restoreLabels(front, back, choice);
  } else {
    placeLabels();
  }
  placeCopy();
}

function placeLabels() {
  const figures = document.querySelector(".figures");
  const front = figures && figures.querySelector(".or-front");
  const back = figures && figures.querySelector(".or-back");
  const choice = figures && figures.querySelector(".or-choice");
  const band = figures && figures.querySelector(".split-band");
  if (!figures || !front || !back || !choice || !band) {
    return;
  }

  const width = figures.clientWidth;
  const cx = width / 2;
  if (!width || !cx) {
    return;
  }

  const narrow = width < 700;
  const header = document.querySelector(".top");
  const headerH = header ? header.offsetHeight : 64;
  if (narrow) {
    const height = figures.clientHeight || window.innerHeight;
    const geo = bandGeometry(width, height, 0);
    const lineAt = (y) => geo.cx + ((y - geo.cy) / geo.sin) * geo.cos;
    const bandH = band.offsetHeight || 24;
    const top = headerH + 6;
    const room = Math.max(72, lineAt(top + 18) - bandH - 18);
    let size = 16;
    for (let px = 16; px <= 40; px += 1) {
      front.style.fontSize = px + "px";
      back.style.fontSize = px + "px";
      choice.style.fontSize = Math.round(Math.max(18, px * 0.62)) + "px";
      if (Math.max(front.offsetWidth, back.offsetWidth) > room) {
        break;
      }
      size = px;
    }
    front.style.fontSize = size + "px";
    back.style.fontSize = size + "px";
    choice.style.fontSize = Math.round(Math.max(18, size * 0.62)) + "px";
    const line = lineAt(top + front.offsetHeight / 2);
    const frontRight = line - bandH - 6;
    front.style.left = "auto";
    front.style.right = (width - frontRight) + "px";
    back.style.right = "auto";
    back.style.left = (line + 8) + "px";
    front.style.top = top + "px";
    back.style.top = top + "px";
    front.style.translate = "0 0";
    back.style.translate = "0 0";
    const ow = choice.offsetWidth;
    const oh = choice.offsetHeight;
    const shift = 14 + (ow / 2) * geo.sin + (oh / 2) * geo.cos;
    const orLeft = Math.max(8, Math.min(width - ow - 8, geo.cx + shift * geo.sin - ow / 2));
    const orTop = Math.max(headerH + 8, Math.min(height - oh - 8, geo.cy - shift * geo.cos - oh / 2));
    choice.style.left = orLeft + "px";
    choice.style.top = orTop + "px";
    choice.style.transform = "none";
    rememberLabels(front, back, choice);
    return;
  }

  let size = 48;
  const bandClear = (band.offsetHeight || 46) + 16;
  for (let px = 48; px <= 240; px += 2) {
    front.style.fontSize = px + "px";
    back.style.fontSize = px + "px";
    choice.style.fontSize = Math.round(Math.max(52, px * 0.4)) + "px";
    const edge = Math.max(bandClear, choice.offsetWidth / 2 + 36);
    const maxW = cx - edge - 12;
    if (Math.max(front.offsetWidth, back.offsetWidth) > maxW) {
      break;
    }
    size = px;
  }

  front.style.fontSize = size + "px";
  back.style.fontSize = size + "px";
  choice.style.fontSize = Math.round(Math.max(52, size * 0.4)) + "px";
  const edge = Math.max(bandClear, choice.offsetWidth / 2 + 36);
  front.style.left = "auto";
  front.style.right = (cx + edge) + "px";
  back.style.right = "auto";
  back.style.left = (cx + edge) + "px";
  front.style.top = "";
  back.style.top = "";
  // GSAP already centers these with translate3d(0, -50%, 0). Clearing the
  // inline translate lets the stylesheet's translate stack on top of that.
  front.style.translate = front.style.transform ? "none" : "";
  back.style.translate = back.style.transform ? "none" : "";
  choice.style.left = "";
  choice.style.top = "";
  choice.style.transform = "";
  rememberLabels(front, back, choice);
}

function useChineseCopy(front, back) {
  const lang = document.body.dataset.lang;
  if (!lang || lang === "zh-CN" || !copy["zh-CN"]) {
    return () => {};
  }

  const saved = [front.textContent, back.textContent];
  front.textContent = copy["zh-CN"].frontCopy;
  back.textContent = copy["zh-CN"].backCopy;
  return () => {
    const slots = [front, back].map((node) => {
      const left = parseFloat(node.style.left);
      const top = parseFloat(node.style.top);
      return {
        maxWidth: node.style.maxWidth,
        width: node.style.width,
        cx: left + node.offsetWidth / 2,
        cy: top + node.offsetHeight / 2,
        placed: node.style.left !== "" && node.style.top !== "" && !Number.isNaN(left) && !Number.isNaN(top)
      };
    });
    front.textContent = saved[0];
    back.textContent = saved[1];
    [front, back].forEach((node, index) => {
      const slot = slots[index];
      if (!slot.placed) {
        return;
      }
      node.style.maxWidth = slot.maxWidth;
      node.style.width = slot.width;
      node.style.left = (slot.cx - node.offsetWidth / 2) + "px";
      node.style.top = (slot.cy - node.offsetHeight / 2) + "px";
    });
  };
}

function placeCopy() {
  const figures = document.querySelector(".figures");
  const front = figures && figures.querySelector(".split-front");
  const back = figures && figures.querySelector(".split-back");
  const leftImg = figures && figures.querySelector(".camp-figure-left");
  const rightImg = figures && figures.querySelector(".camp-figure-right");
  const band = figures && figures.querySelector(".split-band");
  if (!figures || !front || !back || !leftImg || !rightImg || !band) {
    return;
  }

  const width = figures.clientWidth;
  const height = figures.clientHeight;
  const scale = leftImg.offsetWidth / 1024;
  if (!width || !height || !scale) {
    return;
  }

  const restoreCopy = useChineseCopy(front, back);
  try {
    if (width < 700) {
      const header = document.querySelector(".top");
      const headerH = header ? header.offsetHeight : 96;
      const bandHeight = band.offsetHeight || 28;
      const geo = bandGeometry(width, height, 0);
      const lineAt = (y) => geo.cx + ((y - geo.cy) / geo.sin) * geo.cos;
      const hostTop = figures.getBoundingClientRect().top;
      const wordBottom = Math.max(
        figures.querySelector(".or-front").getBoundingClientRect().bottom - hostTop,
        figures.querySelector(".or-back").getBoundingClientRect().bottom - hostTop,
        headerH + 36
      );
      const blocksInk = {
        l: leftImg.offsetLeft + 443 * scale,
        r: leftImg.offsetLeft + 962 * scale,
        t: leftImg.offsetTop + 145 * scale,
        b: leftImg.offsetTop + 897 * scale
      };
      const doodleInk = {
        l: rightImg.offsetLeft + 100 * scale,
        r: rightImg.offsetLeft + 603 * scale,
        t: rightImg.offsetTop + 176 * scale,
        b: rightImg.offsetTop + 845 * scale
      };
      const overlaps = (left, top, boxW, boxH, ink) => {
        const right = left + boxW;
        const bottom = top + boxH;
        return right > ink.l - 8 && left < ink.r + 8 && bottom > ink.t - 8 && top < ink.b + 8;
      };
      let placed = null;
      for (let maxW = Math.floor(width * 0.48); maxW >= 92; maxW -= 6) {
        for (const node of [front, back]) {
          node.style.maxWidth = maxW + "px";
          node.style.width = "auto";
        }
        const fw = front.offsetWidth;
        const fh = front.offsetHeight;
        const bw = back.offsetWidth;
        const bh = back.offsetHeight;
        let frontSpot = null;
        for (let top = wordBottom + 10; top < height - fh - 8; top += 6) {
          const left = lineAt(top + fh / 2) + 10;
          if (left < 8 || left + fw > width - 8) {
            continue;
          }
          if (overlaps(left, top, fw, fh, doodleInk)) {
            continue;
          }
          frontSpot = { left, top };
          break;
        }
        let backSpot = null;
        for (let top = height - bh - 10; top > wordBottom; top -= 6) {
          const right = lineAt(top + bh / 2) - bandHeight - 16;
          const left = right - bw;
          if (left < 8) {
            continue;
          }
          if (overlaps(left, top, bw, bh, blocksInk)) {
            continue;
          }
          backSpot = { left, top };
          break;
        }
        if (frontSpot && backSpot) {
          placed = { frontSpot, backSpot };
          break;
        }
      }
      if (placed) {
        front.style.left = placed.frontSpot.left + "px";
        front.style.top = placed.frontSpot.top + "px";
        back.style.left = placed.backSpot.left + "px";
        back.style.top = placed.backSpot.top + "px";
      }
      return;
    }

    const bandHeight = band.offsetHeight || 46;
    const geo = bandGeometry(width, height);
    const { sin, cos, cx, cy } = geo;
    const gap = 22;
    const header = document.querySelector(".top");
    const marginY = Math.max((header ? header.offsetHeight : 64) + 14, 40);
    const marginX = 28;
    const blocks = {
      l: leftImg.offsetLeft + 443 * scale,
      r: leftImg.offsetLeft + 962 * scale,
      t: leftImg.offsetTop + 145 * scale,
      b: leftImg.offsetTop + 897 * scale
    };
    const doodle = {
      l: rightImg.offsetLeft + 100 * scale,
      r: rightImg.offsetLeft + 603 * scale,
      t: rightImg.offsetTop + 176 * scale,
      b: rightImg.offsetTop + 845 * scale
    };
    const host = figures.getBoundingClientRect();
    const labels = [".or-front", ".or-back", ".or-choice"].map((selector) => {
      const node = figures.querySelector(selector);
      if (!node) {
        return null;
      }
      const bounds = node.getBoundingClientRect();
      return {
        l: bounds.left - host.left,
        r: bounds.right - host.left,
        t: bounds.top - host.top,
        b: bounds.bottom - host.top
      };
    }).filter(Boolean);
    const signed = (x, y) => (x - cx) * sin - (y - cy) * cos;
    const corners = (c, boxW, boxH) => [
      [c.x - boxW / 2, c.y - boxH / 2],
      [c.x + boxW / 2, c.y - boxH / 2],
      [c.x - boxW / 2, c.y + boxH / 2],
      [c.x + boxW / 2, c.y + boxH / 2]
    ];
    const clearOfBand = (c, boxW, boxH, side) => {
      const need = (side > 0 ? gap : bandHeight + gap) - 0.5;
      return corners(c, boxW, boxH).every(([x, y]) => side * signed(x, y) >= need);
    };
    const inside = (c, boxW, boxH) => {
      const left = c.x - boxW / 2;
      const right = c.x + boxW / 2;
      const top = c.y - boxH / 2;
      const bottom = c.y + boxH / 2;
      return left >= marginX && right <= width - marginX && top >= marginY && bottom <= height - marginY;
    };
    const hits = (c, boxW, boxH, ink) => {
      const pad = 16;
      const left = c.x - boxW / 2;
      const right = c.x + boxW / 2;
      const top = c.y - boxH / 2;
      const bottom = c.y + boxH / 2;
      return right > ink.l - pad && left < ink.r + pad && bottom > ink.t - pad && top < ink.b + pad;
    };
    const yOverlap = (c, boxH, ink) => {
      const top = c.y - boxH / 2;
      const bottom = c.y + boxH / 2;
      return Math.max(0, Math.min(bottom, ink.b) - Math.max(top, ink.t));
    };
    const findSpot = (fw, fh, bw, bh) => {
      const support = (boxW, boxH) => (boxW / 2) * sin + (boxH / 2) * cos;
      const minU = bandHeight + gap + Math.max(support(fw, fh), support(bw, bh));
      let best = null;
      for (let u = minU; u <= minU + 340; u += 4) {
        for (let v = -560; v <= 240; v += 4) {
          const fc = { x: cx + u * sin + v * cos, y: cy - u * cos + v * sin };
          const bc = { x: width - fc.x, y: height - fc.y };
          if (fc.y >= cy - 28 || bc.y <= cy + 28) {
            continue;
          }
          if (!inside(fc, fw, fh) || !inside(bc, bw, bh)) {
            continue;
          }
          if (!clearOfBand(fc, fw, fh, 1) || !clearOfBand(bc, bw, bh, -1)) {
            continue;
          }
          const axis = bandHeight + 12;
          if (fc.x - fw / 2 < cx + axis || bc.x + bw / 2 > cx - axis) {
            continue;
          }
          if (hits(fc, fw, fh, doodle) || hits(bc, bw, bh, blocks)) {
            continue;
          }
          if (labels.some((label) => hits(fc, fw, fh, label) || hits(bc, bw, bh, label))) {
            continue;
          }
          const score = (u - minU) * 4 + Math.abs(v) + (yOverlap(fc, fh, doodle) + yOverlap(bc, bh, blocks)) * 3;
          if (!best || score < best.score) {
            best = { fc, fw, fh, bw, bh, score };
          }
        }
      }
      return best;
    };
    const measureAt = (maxWidth) => {
      for (const node of [front, back]) {
        node.style.maxWidth = maxWidth + "px";
        node.style.width = "max-content";
      }
      return [front.offsetWidth, front.offsetHeight, back.offsetWidth, back.offsetHeight];
    };

    const loose = measureAt(4000);
    let placed = null;
    const widest = Math.ceil(Math.max(loose[0], loose[2], 220)) + 8;
    for (let maxWidth = widest; maxWidth >= 200; maxWidth -= 12) {
      const size = measureAt(maxWidth);
      if (size.some((value) => !value)) {
        continue;
      }
      placed = findSpot(...size);
      if (placed) {
        break;
      }
    }

    const fw = placed ? placed.fw : loose[0];
    const fh = placed ? placed.fh : loose[1];
    const bw = placed ? placed.bw : loose[2];
    const bh = placed ? placed.bh : loose[3];
    const fallbackU = bandHeight + gap + Math.max(fw, bw) / 2 * sin + Math.max(fh, bh) / 2 * cos;
    const fc = placed ? placed.fc : { x: cx + fallbackU * sin, y: cy - fallbackU * cos };
    const bc = { x: width - fc.x, y: height - fc.y };
    front.style.left = (fc.x - fw / 2) + "px";
    front.style.top = (fc.y - fh / 2) + "px";
    back.style.left = (bc.x - bw / 2) + "px";
    back.style.top = (bc.y - bh / 2) + "px";
  } finally {
    restoreCopy();
  }
}

function openFigures() {
  const camps = document.querySelector("#camps");
  const figures = camps && camps.querySelector(".figures");
  const left = figures && figures.querySelector(".split-left");
  const right = figures && figures.querySelector(".split-right");
  const next = document.querySelector("#choice");
  if (!camps || !figures || !left || !right || !next) {
    return;
  }

  buildBand();
  document.body.classList.add("has-figures", "is-splitting");
  layoutBand();

  const choice = figures.querySelector(".or-choice");
  const labels = figures.querySelectorAll(".or-label");
  const distance = () => Math.ceil(Math.max(window.innerWidth, window.innerHeight));
  const lift = () => -Math.round(window.innerHeight * 0.34);

  const timeline = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger: camps,
      start: "top top",
      endTrigger: next,
      end: "top top",
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate(self) {
        applyTurn(turnFromProgress(self.progress));
        const done = self.progress > 0.995;
        figures.classList.toggle("is-open", done);
        document.body.classList.toggle("is-splitting", !done);
      }
    }
  })
    .to(choice, { opacity: 0, duration: 0.18, immediateRender: false }, 0)
    .fromTo(labels, {
      y: 0,
      filter: "blur(0px)",
      opacity: 1
    }, {
      y: lift,
      filter: "blur(22px)",
      opacity: 0,
      duration: 0.36,
      immediateRender: false
    }, 0.18)
    .fromTo(left, { x: 0 }, { x: () => -distance(), duration: 0.46 }, 0.54)
    .fromTo(right, { x: 0 }, { x: () => distance(), duration: 0.46 }, 0.54);
  openingTrigger = timeline.scrollTrigger;
}

function handoffSections() {
  const sections = [...document.querySelectorAll(".chapter")];

  sections.forEach((section, index) => {
    const next = sections[index + 1];
    const frame = section.querySelector(".chapter-frame");
    if (!next || !frame) {
      return;
    }

    gsap.to(frame, {
      y: -36,
      opacity: 0.42,
      ease: "none",
      scrollTrigger: {
        trigger: next,
        start: "top bottom",
        end: "top top",
        scrub: true
      }
    });
  });
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

function initMotion() {
  if (!canAnimate()) {
    return;
  }

  prepareMotion();

  for (const line of document.querySelectorAll(".gate-slogan .line")) {
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
  }

  window.setTimeout(() => {
    wrapFrames();
    openFigures();
    handoffSections();
    splitTitles();
    revealCopy();
  }, 0);
}

function begin() {
  fitSlogan();
  motionReady = true;
  initMotion();
  cachedTops = null;
  if (location.hash && document.querySelector(location.hash)) {
    goToSection(location.hash);
  } else {
    syncNav();
  }
}

const navLinks = document.querySelectorAll("nav a");
let cachedTops = null;

function measureTops() {
  const sections = [...document.querySelectorAll(".chapter")];
  const saved = sections.map((section) => section.style.position);
  for (const section of sections) {
    section.style.position = "relative";
  }
  const map = new Map();
  for (const section of sections) {
    let y = 0;
    let node = section;
    while (node) {
      y += node.offsetTop;
      node = node.offsetParent;
    }
    map.set(section, y);
  }
  sections.forEach((section, index) => {
    section.style.position = saved[index];
  });
  return map;
}

function sectionTop(section) {
  if (!cachedTops || !cachedTops.has(section)) {
    cachedTops = measureTops();
  }
  return cachedTops.get(section);
}

function setCurrentLink(link) {
  for (const other of navLinks) {
    if (other === link) {
      other.setAttribute("aria-current", "true");
    } else {
      other.removeAttribute("aria-current");
    }
  }
}

function syncNav() {
  const y = window.scrollY + 1;
  let current = navLinks[0];
  for (const link of navLinks) {
    const section = document.querySelector(link.getAttribute("href"));
    if (section && sectionTop(section) <= y) {
      current = link;
    }
  }
  if (current) {
    setCurrentLink(current);
  }
}

function goToSection(id) {
  const section = document.querySelector(id);
  if (!section) {
    return;
  }
  window.scrollTo(0, sectionTop(section));
  if (window.ScrollTrigger) {
    ScrollTrigger.update();
  }
  syncNav();
}

for (const link of navLinks) {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    if (!id || !document.querySelector(id)) {
      return;
    }
    event.preventDefault();
    history.pushState(null, "", id);
    goToSection(id);
  });
}

window.addEventListener("scroll", syncNav, { passive: true });
window.addEventListener("popstate", () => {
  if (location.hash && document.querySelector(location.hash)) {
    goToSection(location.hash);
  } else {
    window.scrollTo(0, 0);
    syncNav();
  }
});

for (const button of document.querySelectorAll(".langs button")) {
  button.addEventListener("click", () => {
    applyLang(button.dataset.lang);
  });
}

const gate = document.querySelector(".gate");
const gateEnter = document.querySelector(".gate-enter");
const gateFill = document.querySelector(".gate-progress-fill");

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
}

function enableEnter() {
  if (!gateEnter || gateEnter.classList.contains("is-ready")) {
    return;
  }
  gateEnter.classList.add("is-ready");
  gateEnter.style.pointerEvents = "auto";
}

if (gate && gateEnter) {
  gateEnter.addEventListener("click", revealSite);
  if (reducedMotion) {
    enableEnter();
    gateEnter.focus();
  } else {
    window.setTimeout(enableEnter, 3600);
    if (gateFill) {
      gateFill.addEventListener("animationend", () => {
        enableEnter();
        gateEnter.focus();
      });
    }
  }
}

applyLang(detectLang());

function startEntrance() {
  if (startEntrance.done) {
    return;
  }
  startEntrance.done = true;
  begin();
}

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(startEntrance);
  window.setTimeout(startEntrance, 900);
} else {
  startEntrance();
}

window.addEventListener("resize", () => {
  cachedTops = null;
  layoutBand();
  fitSlogan();
});
