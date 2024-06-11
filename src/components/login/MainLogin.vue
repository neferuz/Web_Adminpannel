<template>
    <div>
        <div class="container">
            <div class="content">
                <div class="img_content">
                    <img src="./Pattern 2.svg" alt="">
                </div>
                <div class="text_content">
                    <img src="./logo-new2.svg" alt="">
                    <h1>Вход в админ панель</h1>
                    <div>
                        <p>Номер телефона</p>
                        <input placeholder="Введите номер телефона" type="text" name="" id="">
                    </div>
                    <div>
                        <p>Пароль</p>
                        <input placeholder="Введите пароль" type="text" name="" id="">
                    </div>
                    <button>Войти</button>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import './MainLogin.css';

export default {
  name: 'MainLogin' // Обновленное имя компонента
}
</script>
