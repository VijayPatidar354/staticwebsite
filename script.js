const activities = [
    {
        topic: "Global Object",
        section: "Methods",
        act: "Get values of X and Y",
        code: `let x = prompt("Enter X:");\nlet y = prompt("Enter Y:");\nalert("isNaN(X): " + isNaN(x));\nalert("Parsed Y: " + parseInt(y));`,
        run: () => {
            let x = prompt("Enter value for X:");
            let y = prompt("Enter value for Y:");
            return `X: ${x} | Y: ${y}<br>isNaN(X): ${isNaN(x)}<br>Sum: ${Number(x) + Number(y)}`;
        }
    },
    {
        topic: "Array Object",
        section: "Objects Available",
        act: "Dynamic Array Population",
        code: `let str = prompt("Enter items separated by comma:");\nlet myArr = str.split(",");\nmyArr.sort();`,
        run: () => {
            let str = prompt("Enter 3 items (e.g. Apple, Orange, Pear):");
            let myArr = str.split(",");
            return `Array created: [${myArr.join(" - ")}]<br>Reversed: [${myArr.reverse().join(" - ")}]`;
        }
    },
    {
        topic: "Date Object",
        section: "Calculations",
        act: "Days Between & Experience",
        code: `let d1 = new Date(prompt("Date 1"));\nlet d2 = new Date();\nlet diff = Math.abs(d2 - d1);\nlet days = Math.ceil(diff / (1000*60*60*24));`,
        run: () => {
            let doj = new Date(prompt("Enter Joining Date (YYYY-MM-DD):"));
            let today = new Date();
            let yrs = ((today - doj) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(2);
            return `Calculated Experience: <b>${yrs} Years</b>`;
        }
    },
    {
        topic: "Navigator Object",
        section: "Detection",
        act: "Browser Hollow Circles",
        code: `if(navigator.userAgent.indexOf("Chrome") != -1) {\n  document.getElementById("chrome-circ").classList.add("filled");\n}`,
        run: () => {
            let ua = navigator.userAgent;
            let ui = `<div class="circle-box">
                <div id="c-chrome" class="hollow-circle">Chrome</div>
                <div id="c-firefox" class="hollow-circle">Firefox</div>
                <div id="c-safari" class="hollow-circle">Safari</div>
            </div>`;
            setTimeout(() => {
                if(ua.includes("Chrome")) document.getElementById('c-chrome').classList.add('filled');
                else if(ua.includes("Firefox")) document.getElementById('c-firefox').classList.add('filled');
                else document.getElementById('c-safari').classList.add('filled');
            }, 200);
            return "Detecting Browser...<br>" + ui;
        }
    },
    {
        topic: "Window Object",
        section: "setTimeout",
        act: "Countdown & Bar",
        code: `let t = 10;\nsetInterval(() => {\n  t--;\n  bar.style.width = (t*10) + "%";\n}, 1000);`,
        run: () => {
            let time = 10;
            let ui = `Time Left: <span id="timerText">10</span>s <div class="bar-outer"><div id="timerBar"></div></div>`;
            let clock = setInterval(() => {
                time--;
                if(document.getElementById('timerText')) {
                    document.getElementById('timerText').innerText = time;
                    document.getElementById('timerBar').style.width = (time * 10) + "%";
                }
                if(time <= 0) { clearInterval(clock); alert("Time Finished!"); }
            }, 1000);
            return ui;
        }
    }
];
const tableBody = document.getElementById('tableBody');
activities.forEach((item, index) => {
    let row = `<tr>
        <td><a href="#" onclick="display(${index})">${item.topic}</a></td>
        <td><a href="#" onclick="display(${index})">${item.section}</a></td>
        <td><a href="#" onclick="display(${index})">${item.act}</a></td>
    </tr>`;
    tableBody.innerHTML += row;
});
function display(idx) {
    const panel = document.getElementById('displayPanel');
    panel.classList.remove('hidden');
    document.getElementById('sourceCode').innerText = activities[idx].code;
    document.getElementById('liveResult').innerHTML = activities[idx].run();
}