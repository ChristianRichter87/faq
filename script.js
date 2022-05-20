const list_btns = document.querySelectorAll(".btn");
const p_list = document.querySelectorAll(".faq-answer");
const hr_list = document.querySelectorAll(".line");

list_btns.forEach(btn => {
    btn.addEventListener('click', openFAQ)
});

function openFAQ(e) {
    const divEl = e.target.parentNode.parentNode.parentNode;
    const hrCurEl = divEl.querySelector(".line");
    const pCurEl = divEl.querySelector(".faq-answer");
    const btnCurEl = divEl.querySelector(".btn")
    p_list.forEach(pEl => {
        if (!pEl.classList.contains("hidden") && pEl != pCurEl) {
            pEl.classList.add("hidden");
            }
    });
    hr_list.forEach(hrEl => {
        if (!hrEl.classList.contains("hidden") && hrEl != hrCurEl) {
            hrEl.classList.add("hidden");
        }
    })
    list_btns.forEach(btnEl => {
        if (btnCurEl != btnEl) {
            btnEl.innerHTML = `<span class="material-icons">
            add_box
            </span>`
        }
        else {
            btnEl.innerHTML = `<span class="material-icons">
            remove
            </span>`
        }
    })
    
    hrCurEl.classList.toggle("hidden");
    pCurEl.classList.toggle("hidden");

    if (hrCurEl.classList.contains("hidden")) {
        btnCurEl.innerHTML = `<span class="material-icons">
            add_box
            </span>`;
    }
};