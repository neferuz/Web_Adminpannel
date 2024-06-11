<template>
  <div class="container">
    <div class="analizing">
      <h1>Все пользователи</h1>
      <div class="poisk-con">
        <input v-model="searchQuery" placeholder="Поиск" type="text">
        <img src="@/assets/notifications_none.svg" alt="">
        <img src="@/assets/moon-solid 1.svg" alt="">
        <img src="@/assets/info_outline.svg" alt="">
        <img class="admin-logo" src="https://splendorous-granita-f826c7.netlify.app/fozil.svg" alt="">
      </div>
    </div>
    <div class="user-content">
      <table class="user-table" v-if="filteredUsers.length">
        <thead>
          <tr>
            <th>ID</th>
            <th>Юзер</th>
            <th>Имя</th>
            <th>Номер телефона</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in paginatedUsers" :key="user.id" @click="openUserDetailsPage(user.id)">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phoneNumber }}</td>
            <td>{{ user.status }}</td>
          </tr>
        </tbody>
      </table>
      <p v-else>Загрузка данных...</p>
    </div>
    <div class="pagination">
      <button @click="previousPage">&lt;</button>
      <button v-for="pageNumber in totalPages" :key="pageNumber" :class="{ active: currentPage === pageNumber }" @click="changePage(pageNumber)">
        {{ pageNumber }}
      </button>
      <button @click="nextPage">&gt;</button>
    </div>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Информация о пользователе</h2>
        <p><strong>ID:</strong> {{ selectedUser.id }}</p>
        <p><strong>Юзер:</strong> {{ selectedUser.name }}</p>
        <p><strong>Имя:</strong> {{ selectedUser.email }}</p>
        <p><strong>Номер телефона:</strong> {{ selectedUser.phoneNumber }}</p>
        <p><strong>Статус:</strong> {{ selectedUser.status }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';
import './userscomponent.css';

export default {
  name: 'UsersComponent',
  data() {
    return {
      users: [],
      searchQuery: "",
      currentPage: 1,
      pageSize: 10, // Количество пользователей на странице
      showModal: false,
      selectedUser: null
    };
  },
  computed: {
    filteredUsers() {
      const query = this.searchQuery.toLowerCase();
      return this.users.filter(user => user.name.toLowerCase().includes(query)); // Используйте fio вместо name
    },
    totalPages() {
      return Math.ceil(this.filteredUsers.length / this.pageSize);
    },
    paginatedUsers() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.filteredUsers.slice(startIndex, endIndex);
    }
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('http://imells.uz:8000/users/api/get_all_users');
        const usersData = response.data.users; // Обратите внимание на users здесь

        this.users = usersData.map(user => ({
          id: user.id,
          name: user.fio, // Используйте fio вместо name
          email: user.username, // Используйте username вместо email
          phoneNumber: user.phone_number, // Используйте phone_number вместо phoneNumber
          status: user.status // Убедитесь, что у вас есть статус пользователя
        }));
      } catch (error) {
        console.error('Ошибка при получении данных пользователей:', error);
      }
    },
    openUserDetailsPage(userId) {
      router.push({ name: 'user-details', params: { id: userId } });
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    changePage(pageNumber) {
      this.currentPage = pageNumber;
    },
    openModal(userId) {
      this.selectedUser = this.users.find(user => user.id === userId);
      this.showModal = true;
    },
    closeModal() {
      this.selectedUser = null;
      this.showModal = false;
    }
  }
};
</script>

