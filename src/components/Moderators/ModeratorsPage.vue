<template>
  <div class="container">

    <div class="contacts">
      <h1>Модераторы</h1>
      <div class="date-bottom">June 5, 2024</div>
    </div>
    <div class="contact-list">
      <div class="contact contact1">
        <img src="https://splendorous-granita-f826c7.netlify.app/photo1.svg" alt="Annette B." />
        <div class="contact-name">Ibrohim B.</div>
      </div>
      <div class="contact contact2">
        <img src="https://splendorous-granita-f826c7.netlify.app/photo2.svg" alt="Cody F." />
        <div class="contact-name">Abdumalik F.</div>
      </div>
      <div class="contact contact3">
        <img src="https://splendorous-granita-f826c7.netlify.app/photo3.svg" alt="Guy H." />
        <div class="contact-name">Fozil K.</div>
      </div>
      <div class="contact contact4" style="border: 2px solid #ff6f61">
        <img src="https://splendorous-granita-f826c7.netlify.app/photo4.svg" alt="Jerome B." />
        <div class="contact-name" style="color: #ff6f61">Feruz X.</div>
      </div>
      <div class="contact contact5">
        <img src="https://splendorous-granita-f826c7.netlify.app/photo5.svg" alt="Kathryn M." />
        <div class="contact-name">Sarvar F.</div>
      </div>
      <div class="contact contact6">
        <img src="https://splendorous-granita-f826c7.netlify.app/photo6.svg" alt="Darrell S." />
        <div class="contact-name">Darrell S.</div>
      </div>
      <div class="contact contact7">
        <img src="https://splendorous-granita-f826c7.netlify.app/photo7.svg" alt="Albert F." />
        <div class="contact-name">Albert F.</div>
      </div>
    </div>
    <div class="header">Today, Day</div>
    <div class="calendar">
      <div class="day">
        <div class="date">03</div>
        <div class="weekday">Mon</div>
      </div>
      <div class="day">
        <div class="date">04</div>
        <div class="weekday">Tue</div>
      </div>
      <div class="day active">
        <div class="date">05</div>
        <div class="weekday">Wed</div>
      </div>
      <div class="day">
        <div class="date">06</div>
        <div class="weekday">Thu</div>
      </div>
      <div class="day">
        <div class="date">07</div>
        <div class="weekday">Fri</div>
      </div>
    </div>
  </div>

</template>

<script>
import "./ModeratorsPage.css";

export default {
  name: "ModeratorsPage",
  methods: {
    openAddAdminModal() {
      const modal = document.getElementById("addAdminModal");
      modal.showModal();
    },
    closeAddAdminModal() {
      const modal = document.getElementById("addAdminModal");
      modal.close();
    },
    addAdmin() {
      // Ваша логика для добавления нового админа
      // Например:
      const adminName = document.getElementById("adminName").value;
      console.log("Добавлен новый админ:", adminName);

      // Закрыть модальное окно после добавления админа
      this.closeAddAdminModal();
    },
  },
};
</script>
