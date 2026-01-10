const openBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");

openBtn.onclick = () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // stop bg scroll
};

closeBtn.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
};

// CLOSE WHEN CLICK BACKGROUND
modal.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};



const btn = document.querySelector(".magnetic");

btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
});

btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
});


const card = document.querySelector(".tilt-card");

card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -20;
    const rotateY = (x / rect.width - 0.5) * 20;

    card.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
});















const openNoteBtn = document.getElementById("openNoteModal");
const noteModal = document.getElementById("noteModalMini");
const closeNoteBtn = document.getElementById("closeNoteModal");
const copyBtn = document.getElementById("noteCopyBtn");
const textToCopy = document.getElementById("noteCopyText");
const copiedMsg = document.getElementById("noteCopiedMsg");

openNoteBtn.onclick = () => {
    noteModal.style.display = "flex";
};

closeNoteBtn.onclick = () => {
    noteModal.style.display = "none";
    copiedMsg.style.display = "none";
};

noteModal.onclick = (e) => {
    if (e.target === noteModal) {
        noteModal.style.display = "none";
        copiedMsg.style.display = "none";
    }
};

/* REAL COPY (WITH FALLBACK) */
copyBtn.onclick = () => {
    const text = textToCopy.innerText;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            copiedMsg.style.display = "block";
        });
    } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        copiedMsg.style.display = "block";
    }
};


/* SECOND NOTE MODAL CODE */
const openNoteBtn2 = document.getElementById("glass-btn");
const noteModal2 = document.getElementById("noteModalMini2");
const closeNoteBtn2 = document.getElementById("closeNoteModal2");
const copyBtn2 = document.getElementById("noteCopyBtn2");
const textToCopy2 = document.getElementById("noteCopyText2");
const copiedMsg2 = document.getElementById("noteCopiedMsg2");

openNoteBtn2.onclick = () => {
    noteModal2.style.display = "flex";
};

closeNoteBtn2.onclick = () => {
    noteModal2.style.display = "none";
    copiedMsg2.style.display = "none";
};

noteModal2.onclick = (e) => {
    if (e.target === noteModal2) {
        noteModal2.style.display = "none";
        copiedMsg2.style.display = "none";
    }
};

/* REAL COPY (WITH FALLBACK) */
copyBtn2.onclick = () => {
    const text = textToCopy2.textContent;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            copiedMsg2.style.display = "block";
        });
    } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        copiedMsg2.style.display = "block";
    }
};




