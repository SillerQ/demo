<template>
    <div id="app">
        <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        </div> -->
        <router-view/>
    </div>
</template>

<style lang="less">
* {
    margin: 0;
    padding: 0;
}
#app {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'PingFang HK',
        'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
        'Microsoft YaHei', '微软雅黑', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 10px;
    min-height: 100vh;
    // background-color: black;
}
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
.card {
    // background: #ffffff;
    border: 1px solid rgba(191, 200, 214, 0.14);
    box-shadow: 0px 2px 3px rgba(191, 200, 214, 0.132133),
        0px 1px 3px rgba(191, 200, 214, 0.215438);
    border-radius: 4px;
    font-size: 1rem;
    overflow: hidden;
    min-height: 300px;
    position: relative;
}

</style>
