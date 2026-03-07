// ? Skills section (skill cards)

customElements.define(
  "skill-card",
  class SkillCard extends HTMLElement {
    connectedCallback() {
      const name = this.getAttribute("name") || "";
      const tagsAttr = this.getAttribute("tags") || "";
      const tags = tagsAttr
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
      const icon = this.querySelector('[slot="icon"]')?.outerHTML || "";

      this.classList.add("skill-card", "reveal");
      this.setAttribute("role", "listitem");

      this.innerHTML = `
      <div class="skill-card__icon" aria-hidden="true">${icon}</div>
      <h3 class="skill-card__name">${name}</h3>
      <ul class="skill-card__tags" aria-label="${name} skills">
        ${tags.map((tag) => `<li class="skill-card__tag">${tag}</li>`).join("")}
      </ul>
    `;
    }
  },
);
