<template>
  <header>
    <ul>
      <li>
        <router-link to="/">Posts</router-link>
      </li>
      <li>
        <router-link to="/newpost">New Post</router-link>
      </li>
      <li>
        <router-link to="/users">Users</router-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
header {
  margin-bottom: 30px;
}
ul {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}
ul > li {
  list-style: none;
  background-color: darkcyan;
  border-radius: 5px;
  margin-left: 15px;
}
ul > li > a {
  display: inline-block;
  text-decoration: none;
  color: white;
  padding: 10px 20px;
}
.router-link-exact-active {
  background-color: brown;
  border-radius: 5px;
}
</style>