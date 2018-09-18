<template>
    <div class="title-box">
        <h3 class="title">
            {{title}}
        </h3>
        <!-- <select>
            <option value ="volvo">过去 7 天</option>
            <option value ="saab">过去 30 天</option>
            <option value ="volvo">至今</option>
        </select> -->
        <a class="select" @click="showSelect">{{action}}<i></i>
            <ul class="select-items" v-if="selectShow">
                <li><a>过去 7 天</a></li>
                <li><a>过去 30 天</a></li>
                <li><a>至今</a></li>
            </ul>
        </a>

    </div>
</template>

<script>
export default {
    name: 'Title',
    props: {
        title: '',
        options: []
    },
    data() {
        return {
            selectShow: false,
            action: '过去 7 天'
        };
    },
    methods: {
        showSelect(e) {
            this.selectShow = !this.selectShow;
            if (e.target.className === 'select') {
            } else {
                console.log(e);
                this.action = e.target.innerHTML;
            }
        }
    }
};
</script>

<style lang="less">
.title-box {
    display: flex;
    align-items: center;
    padding: 0 30px;
    box-shadow: 0px 2px 3px rgba(191, 200, 214, 0.132133),
        0px 1px 3px rgba(191, 200, 214, 0.215438);
    height: 3em;
    .title {
        margin: 0;
        font-size: 1rem;
        color: #6d77e4;
        padding-right: 16px;
        border-right: 1px solid rgba(145, 149, 156, 0.4);
        margin-right: 16px;
        line-height: 18px;
    }
    .select {
        position: relative;
        cursor: pointer;
        color: #81868D;
        font-size: 16px;
        line-height: 20px;
        i {
            display: inline-block;
            margin-left: 8px;
            height: 6px;
            width: 10px;
            background-image: url('../assets/polygon.svg');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 80% 80%;
        }
    }
    .select-items {
        // display: none;
        border-radius: 4px;
        background-color: #fff;
        width: 100px;
        list-style: none;
        position: absolute;
        top: -9px;
        left: -9px;
        border: 1px solid rgba(191, 200, 214, 0.14);
        box-shadow: 0px 2px 3px rgba(191, 200, 214, 0.132133),
            0px 1px 3px rgba(191, 200, 214, 0.215438);
        z-index: 999;
        li {
            display: block;
            a {
                display: block;
                cursor: pointer;
                padding: 8px;
                list-style: none;
                transition: all 0.3s;
                &:hover {
                    background-color: #f2f5f9;
                }
            }
        }
    }
}
</style>

