<template>
  <div>
    <div class="container">
      <div class="user-content">
        <div class="analizing">
          <h1>Все поездки</h1>
          <div class="poisk-con">
            <input v-model="searchQuery" placeholder="Поиск" type="text">
            <img src="@/assets/notifications_none.svg" alt="">
            <img src="@/assets/moon-solid 1.svg" alt="">
            <img src="@/assets/info_outline.svg" alt="">
            <img class="admin-logo" src="https://splendorous-granita-f826c7.netlify.app/fozil.svg" alt="">
          </div>
        </div>
        <table class="user-table" v-if="paginatedUsers.length">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Все поездки</th>
              <th>Последняя поездка начало</th>
              <th>Последняя поездка конец</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in paginatedUsers" :key="user.id">
              <td>{{ user.name }}</td>
              <td>
                <ul>
                  <li v-for="trip in user.trips" :key="trip.id">
                    {{ trip.startLocation }} ({{ trip.startTime }}) - {{ trip.endLocation }} ({{ trip.endTime }})
                  </li>
                </ul>
              </td>
              <td>{{ getLastTripStartTime(user) }}</td>
              <td>{{ getLastTripEndTime(user) }}</td>
            </tr>
          </tbody>
        </table>
        <p v-else>Загрузка данных...</p>
      </div>
      <div class="pagination">
        <button @click="currentPage--" :disabled="currentPage === 1">&lt;</button>
        <button v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }" @click="currentPage = page">
          {{ page }}
        </button>
        <button @click="currentPage++" :disabled="currentPage === totalPages">&gt;</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import './ClientsPage.css';

export default {
  name: 'ClientsPage',
  data() {
    return {
      users: [],
      searchQuery: "", // Добавленное свойство для хранения запроса поиска
      currentPage: 1, // Текущая страница
      usersPerPage: 10 // Пользователей на странице
    };
  },
  computed: {
    filteredUsers() {
      // Приводим поисковой запрос к нижнему регистру для нечувствительного к регистру сравнения
      const query = this.searchQuery.toLowerCase();
      // Фильтруем пользователей по имени, если оно содержит поисковой запрос
      return this.users.filter(user => user.name.toLowerCase().includes(query));
    },
    // Вычисляемое свойство, чтобы вычислить индекс первого пользователя на текущей странице
    startIndex() {
      return (this.currentPage - 1) * this.usersPerPage;
    },
    // Вычисляемое свойство, чтобы получить пользователей для текущей страницы
    paginatedUsers() {
      return this.filteredUsers.slice(this.startIndex, this.startIndex + this.usersPerPage);
    },
    // Вычисляемое свойство, чтобы определить общее количество страниц
    totalPages() {
      return Math.ceil(this.filteredUsers.length / this.usersPerPage);
    }
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.users = response.data;
      } catch (error) {
        console.error('Ошибка при получении данных пользователей:', error);
      }
    },
    getLastTripStartTime(user) {
      if (user.trips && user.trips.length > 0) {
        return user.trips[user.trips.length - 1].startTime;
      }
      return 'Нет информации';
    },
    getLastTripEndTime(user) {
      if (user.trips && user.trips.length > 0) {
        return user.trips[user.trips.length - 1].endTime;
      }
      return 'Нет информации';
    }
  },
};
</script>