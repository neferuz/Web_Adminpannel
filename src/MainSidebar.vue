<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <div class="user-block">
        <div class="user-avatar">
          <img
            src="https://randomuser.me/api/portraits/women/50.jpg"
            alt="User Avatar"
          />
          <div class="avatar-border"></div>
        </div>
        <div class="user-info">
          <div class="user-name">Admin</div>
        </div>
      </div>
    </div>
    <ul class="menu">
      <li
        v-for="item in menuItems"
        :key="item.name"
        :class="{ active: isActive(item.name) }"
        @click="navigateTo(item)"
      >
        <div class="menu-item">
          <img
            :src="isActive(item.name) ? item.activeIconUrl : item.iconUrl"
            alt="Icon"
            class="menu-icon"
          />
          <span class="menu-label">{{ item.label }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          name: "Home",
          label: "Главная панель",
          iconUrl: "https://splendorous-granita-f826c7.netlify.app/home.svg",
          activeIconUrl:
            "https://splendorous-granita-f826c7.netlify.app/home-a.svg",
        },
        {
          name: "Drivers",
          label: "Водители",
          iconUrl: "https://splendorous-granita-f826c7.netlify.app/drivers.svg",
          activeIconUrl:
            "https://splendorous-granita-f826c7.netlify.app/edit.svg",
        },
        {
          name: "Users",
          label: "Пользователи",
          iconUrl: "https://splendorous-granita-f826c7.netlify.app/chart.svg",
          activeIconUrl:
            "https://splendorous-granita-f826c7.netlify.app/chart-a.svg",
        },
        {
          name: "Billing",
          label: "Билинг",
          iconUrl: "https://splendorous-granita-f826c7.netlify.app/tatif.svg",
          activeIconUrl:
            "https://splendorous-granita-f826c7.netlify.app/check.svg",
        },
        {
          name: "clients",
          label: "Поездки",
          iconUrl:
            "https://splendorous-granita-f826c7.netlify.app/notification-status.svg",
          activeIconUrl:
            "https://splendorous-granita-f826c7.netlify.app/sit-a.svg",
        },
        {
          name: "live-map",
          label: "Live Map",
          iconUrl: "https://splendorous-granita-f826c7.netlify.app/wallet-20.svg",
          activeIconUrl:
            "https://splendorous-granita-f826c7.netlify.app/wallet-2.svg",
        },
        {
          name: "ModeratorsPage",
          label: "Модераторы",
          iconUrl: "https://splendorous-granita-f826c7.netlify.app/drivers.svg",
          activeIconUrl:
            "https://splendorous-granita-f826c7.netlify.app/edit.svg",
        },
        {
          name: "Payments",
          label: "Авто парк",
          iconUrl:
            "https://splendorous-granita-f826c7.netlify.app/autopark.svg",
          activeIconUrl:
            "https://splendorous-granita-f826c7.netlify.app/user-square.svg",
        },
        {
          name: "GlobalManager",
          label: "Жалобы",
          iconUrl: "https://splendorous-granita-f826c7.netlify.app/drivers.svg",
          activeIconUrl:
            "https://splendorous-granita-f826c7.netlify.app/edit.svg",
        },
        {
          name: "Settings",
          label: "Настройки",
          iconUrl:
            "https://splendorous-granita-f826c7.netlify.app/notification-status.svg",
          activeIconUrl:
            "https://splendorous-granita-f826c7.netlify.app/sit-a.svg",
        },
      ],
    };
  },
  methods: {
    isActive(section) {
      return this.$route.name === section;
    },
    navigateTo(item) {
      // Update active state
      this.$router.push({ name: item.name });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.sidebar {
  width: 100%;
  max-width: 250px;
  height: 100vh;
  color: #ecf0f1;

  overflow-y: auto;
}

.sidebar-header {
  padding: 20px;
  text-align: center;
}

.menu {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.menu li {
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
  margin-top: 10px;
  font-weight: 500;
}

.menu-item {
  display: flex;
  align-items: center;
}

.menu-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.menu-label {
  font-size: 16px;
}

.menu li.active .menu-label {
  color: #5459ea;
}

.menu li:not(.active) .menu-label {
  color: #ecf0f1;
}

.active {
  background-color: #f5f6fa;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  font-weight: 600;
}

.logo {
  width: 100px;
  height: auto;
  display: block;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    max-width: 100%;
    display: none;
  }
}

.user-block {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  padding: 10px;
}

.user-avatar {
  position: relative;
}

.user-avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #ecf0f1;
}

.avatar-border {
  position: absolute;
  top: -3px;
  left: -3px;
  width: 56px;
  height: 56px;
  border: 2px solid #dfe0eb;
  border-radius: 50%;
}

.user-info {
  text-align: center;
  margin-top: 10px;
}

.user-name {
  font-weight: 500;
  font-size: 18px;
}
</style>